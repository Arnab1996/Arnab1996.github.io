/**
 * string-physics.js — Spring-connected letter physics for hero name
 * Each letter is a particle with position, velocity, mass.
 * Adjacent letters connected by spring constraints (F = -k(x-rest) - b*v).
 * Mouse creates repulsive force field (inverse-square law).
 */

import { animationLoop, observeVisibility } from './animation-loop.js';

export function initStringPhysics(container) {
  const canvas = document.createElement('canvas');
  canvas.className = 'physics-canvas';
  canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;';
  canvas.setAttribute('aria-hidden', 'true');
  container.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  // Configuration
  const CONFIG = {
    text: 'ARNAB SAHA',
    springK: 0.03,
    damping: 0.85,
    repulsionRadius: 150,
    repulsionStrength: 800,
    gravity: 0.15,
    groundFriction: 0.92,
    fontSize: 0, // computed on resize
    fontFamily: "'Space Grotesk Variable', 'Space Grotesk', system-ui, sans-serif",
  };

  let particles = [];
  let width = 0;
  let height = 0;
  let mouseX = -9999;
  let mouseY = -9999;
  let initialized = false;

  // Mouse tracking (forwarded from document since canvas has pointer-events: none)
  document.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = (e.clientX - rect.left) * dpr;
    mouseY = (e.clientY - rect.top) * dpr;
  });

  document.addEventListener('mouseleave', () => {
    mouseX = -9999;
    mouseY = -9999;
  });

  // Touch support (single touch drag)
  container.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    const rect = canvas.getBoundingClientRect();
    mouseX = (touch.clientX - rect.left) * dpr;
    mouseY = (touch.clientY - rect.top) * dpr;
  }, { passive: true });

  container.addEventListener('touchend', () => {
    mouseX = -9999;
    mouseY = -9999;
  });

  function resize() {
    const rect = container.getBoundingClientRect();
    width = rect.width * dpr;
    height = rect.height * dpr;
    canvas.width = width;
    canvas.height = height;

    // Compute font size based on container width — smaller on mobile
    CONFIG.fontSize = Math.min(width * 0.08, 100 * dpr);
    if (width / dpr < 768) {
      CONFIG.fontSize = Math.min(width * 0.12, 60 * dpr);
    }

    initParticles();
  }

  function initParticles() {
    ctx.font = `700 ${CONFIG.fontSize}px ${CONFIG.fontFamily}`;
    const metrics = ctx.measureText(CONFIG.text);
    const textWidth = metrics.width;

    // Align with the .hero-content container on desktop, center on mobile
    const heroContent = document.querySelector('.hero-content');
    const isMobile = (width / dpr) < 768;
    let startX;
    if (isMobile) {
      // Center on mobile
      startX = (width - textWidth) / 2;
    } else if (heroContent) {
      const contentRect = heroContent.getBoundingClientRect();
      const canvasRect = canvas.getBoundingClientRect();
      startX = (contentRect.left - canvasRect.left) * dpr;
    } else {
      startX = (width - textWidth) / 2;
    }

    const baseY = isMobile ? height * 0.30 : height * 0.42;

    particles = [];
    let currentX = startX;

    for (let i = 0; i < CONFIG.text.length; i++) {
      const char = CONFIG.text[i];
      const charWidth = ctx.measureText(char).width;
      const x = currentX + charWidth / 2;

      particles.push({
        char,
        x,
        y: initialized ? baseY : baseY - 200 - Math.random() * 300, // drop from above on first load
        restX: x,
        restY: baseY,
        vx: 0,
        vy: initialized ? 0 : Math.random() * 2,
        mass: 1,
        charWidth,
      });

      currentX += charWidth;
    }

    initialized = true;
  }

  function update() {
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // Spring force to rest position
      const dx = p.restX - p.x;
      const dy = p.restY - p.y;
      const fx = dx * CONFIG.springK;
      const fy = dy * CONFIG.springK + CONFIG.gravity;

      // Mouse repulsion (inverse-square)
      let repX = 0;
      let repY = 0;
      const mdx = p.x - mouseX;
      const mdy = p.y - mouseY;
      const dist = Math.sqrt(mdx * mdx + mdy * mdy);

      if (dist < CONFIG.repulsionRadius * dpr && dist > 1) {
        const force = CONFIG.repulsionStrength / (dist * dist);
        repX = (mdx / dist) * force;
        repY = (mdy / dist) * force;
      }

      // Apply forces
      p.vx += fx + repX;
      p.vy += fy + repY;

      // Damping
      p.vx *= CONFIG.damping;
      p.vy *= CONFIG.damping;

      // Update position
      p.x += p.vx;
      p.y += p.vy;
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // Draw spring connections (subtle lines between letters)
    ctx.strokeStyle = 'rgba(124, 58, 237, 0.08)';
    ctx.lineWidth = 1 * dpr;
    ctx.beginPath();
    for (let i = 0; i < particles.length - 1; i++) {
      const a = particles[i];
      const b = particles[i + 1];
      if (a.char === ' ' || b.char === ' ') continue;
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
    }
    ctx.stroke();

    // Draw letters with gradient
    ctx.font = `700 ${CONFIG.fontSize}px ${CONFIG.fontFamily}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Create gradient
    const gradient = ctx.createLinearGradient(
      particles[0]?.x || 0, 0,
      particles[particles.length - 1]?.x || width, 0
    );
    gradient.addColorStop(0, '#7c3aed');
    gradient.addColorStop(0.5, '#a855f7');
    gradient.addColorStop(1, '#f97316');
    ctx.fillStyle = gradient;

    for (const p of particles) {
      ctx.fillText(p.char, p.x, p.y);
    }
  }

  // Resize handler
  const resizeObserver = new ResizeObserver(() => resize());
  resizeObserver.observe(container);

  // Register with animation loop
  animationLoop.register('stringPhysics', {
    update() {
      update();
      draw();
    },
  });

  // Auto-pause when off-screen
  observeVisibility(container, 'stringPhysics');

  // Fallback: if canvas not supported, show static name
  if (!ctx) {
    const fallback = container.querySelector('.hero-name-static');
    if (fallback) fallback.style.display = 'block';
  }

  return { resize };
}
