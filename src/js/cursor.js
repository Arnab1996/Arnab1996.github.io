/**
 * cursor.js — Custom cursor ring overlay with sparkle trail
 * System cursor is NEVER hidden. This is purely decorative.
 * Uses spring interpolation via the unified animation loop.
 */

import { animationLoop } from './animation-loop.js';

export function initCursor() {
  const ring = document.createElement('div');
  ring.className = 'cursor-ring';
  ring.setAttribute('aria-hidden', 'true');
  document.body.appendChild(ring);

  // Sparkle container
  const sparkleContainer = document.createElement('div');
  sparkleContainer.className = 'sparkle-container';
  sparkleContainer.setAttribute('aria-hidden', 'true');
  sparkleContainer.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:299;overflow:hidden;';
  document.body.appendChild(sparkleContainer);

  let mouseX = -100;
  let mouseY = -100;
  let ringX = -100;
  let ringY = -100;
  let prevMouseX = -100;
  let prevMouseY = -100;
  let isHovering = false;
  let isClicking = false;
  let isOnImage = false;
  let isVisible = false;
  let sparkleTimer = 0;
  let mouseSpeed = 0;

  // Track mouse position
  document.addEventListener('mousemove', (e) => {
    prevMouseX = mouseX;
    prevMouseY = mouseY;
    mouseX = e.clientX;
    mouseY = e.clientY;
    mouseSpeed = Math.sqrt((mouseX - prevMouseX) ** 2 + (mouseY - prevMouseY) ** 2);

    if (!isVisible) {
      isVisible = true;
      ring.style.opacity = '1';
    }
  });

  // Track hover state
  document.addEventListener('mouseover', (e) => {
    const target = e.target;
    isOnImage = target.tagName === 'IMG' || target.tagName === 'CANVAS';
    isHovering = target.closest('a, button, [role="button"], .skill-chip, .project-card, .blog-card, input, textarea, select') !== null;

    ring.classList.toggle('hovering', isHovering);
    ring.classList.toggle('on-image', isOnImage && !isHovering);
  });

  // Track click — burst sparkles on click
  document.addEventListener('mousedown', (e) => {
    isClicking = true;
    ring.classList.add('clicking');
    // Sparkle burst on click
    for (let i = 0; i < 8; i++) {
      createSparkle(e.clientX, e.clientY, true);
    }
  });

  document.addEventListener('mouseup', () => {
    isClicking = false;
    ring.classList.remove('clicking');
  });

  // Hide when mouse leaves window
  document.addEventListener('mouseleave', () => {
    isVisible = false;
    ring.style.opacity = '0';
  });

  // Hide if user starts using keyboard
  let usingKeyboard = false;
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      usingKeyboard = true;
      ring.style.opacity = '0';
    }
  });

  document.addEventListener('mousemove', () => {
    if (usingKeyboard) {
      usingKeyboard = false;
      ring.style.opacity = '1';
    }
  });

  // Sparkle creation
  function createSparkle(x, y, isBurst = false) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';

    const size = isBurst ? Math.random() * 6 + 3 : Math.random() * 4 + 2;
    const angle = isBurst ? Math.random() * Math.PI * 2 : 0;
    const distance = isBurst ? Math.random() * 40 + 20 : 0;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;
    const duration = isBurst ? 600 : 800;

    // Alternate between violet and ember colors
    const colors = ['#7c3aed', '#a855f7', '#f97316', '#fb923c', '#06b6d4'];
    const color = colors[Math.floor(Math.random() * colors.length)];

    sparkle.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      border-radius: 50%;
      pointer-events: none;
      z-index: 299;
      box-shadow: 0 0 ${size * 2}px ${color};
      transform: translate(-50%, -50%);
    `;

    sparkleContainer.appendChild(sparkle);

    // Animate
    sparkle.animate([
      { opacity: 1, transform: `translate(-50%, -50%) translate(0, 0) scale(1)` },
      { opacity: 0, transform: `translate(-50%, -50%) translate(${dx}px, ${dy + (isBurst ? 0 : -20)}px) scale(0)` }
    ], {
      duration,
      easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
      fill: 'forwards',
    }).onfinish = () => sparkle.remove();
  }

  // Register with animation loop
  const LERP = 0.15;

  animationLoop.register('cursor', {
    update() {
      // Spring interpolation
      ringX += (mouseX - ringX) * LERP;
      ringY += (mouseY - ringY) * LERP;

      ring.style.transform = `translate3d(${ringX - ring.offsetWidth / 2}px, ${ringY - ring.offsetHeight / 2}px, 0)`;

      // Emit sparkle trail when moving fast
      sparkleTimer++;
      if (mouseSpeed > 8 && sparkleTimer % 3 === 0 && isVisible) {
        createSparkle(
          mouseX + (Math.random() - 0.5) * 10,
          mouseY + (Math.random() - 0.5) * 10
        );
      }
    },
  });
}
