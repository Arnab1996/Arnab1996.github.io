/**
 * animation-loop.js — Unified requestAnimationFrame loop
 * All physics and animation systems register here. ONE rAF callback per frame.
 * Off-screen systems paused via IntersectionObserver.
 */

class AnimationLoop {
  constructor() {
    this.systems = new Map();
    this.running = false;
    this.lastTime = 0;
    this.tick = this.tick.bind(this);
  }

  /**
   * Register an animation system
   * @param {string} name - Unique name
   * @param {object} system - Must have update(dt) method, optional pause()/resume()
   */
  register(name, system) {
    this.systems.set(name, {
      system,
      active: true,
    });

    if (!this.running) this.start();
  }

  unregister(name) {
    this.systems.delete(name);
    if (this.systems.size === 0) this.stop();
  }

  pause(name) {
    const entry = this.systems.get(name);
    if (entry) {
      entry.active = false;
      entry.system.pause?.();
    }
  }

  resume(name) {
    const entry = this.systems.get(name);
    if (entry) {
      entry.active = true;
      entry.system.resume?.();
    }
  }

  start() {
    this.running = true;
    this.lastTime = performance.now();
    requestAnimationFrame(this.tick);
  }

  stop() {
    this.running = false;
  }

  tick(timestamp) {
    if (!this.running) return;

    // Fixed timestep: cap dt to prevent spiral of death
    const dt = Math.min(timestamp - this.lastTime, 33.33); // max ~30fps step
    this.lastTime = timestamp;

    for (const [, entry] of this.systems) {
      if (entry.active) {
        entry.system.update(dt);
      }
    }

    requestAnimationFrame(this.tick);
  }
}

// Singleton
export const animationLoop = new AnimationLoop();

/**
 * Helper: create IntersectionObserver to auto-pause/resume a system
 * when its associated DOM element leaves/enters viewport
 */
export function observeVisibility(element, systemName) {
  if (!element) return;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          animationLoop.resume(systemName);
        } else {
          animationLoop.pause(systemName);
        }
      }
    },
    { threshold: 0.05 }
  );

  observer.observe(element);
  return observer;
}
