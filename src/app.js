/**
 * app.js — Main entry point and orchestrator
 * Imports all systems, initializes them, manages lifecycle
 */

// Fonts
import '@fontsource-variable/space-grotesk';
import '@fontsource-variable/outfit';
import '@fontsource/jetbrains-mono/400.css';

// CSS
import './css/core.css';
import './css/themes.css';
import './css/glass.css';
import './css/layout.css';
import './css/cursor.css';
import './css/animations.css';
import './css/components.css';
import './css/sections.css';

// JS Systems
import { initCursor } from './js/cursor.js';
import { initTheme } from './js/theme-toggle.js';
import { initNavbar } from './js/navbar.js';
import { initMagnetic } from './js/magnetic.js';
import { initTilt } from './js/tilt.js';
import { initStringPhysics } from './js/string-physics.js';
import { initGradientShader } from './js/gradient-shader.js';
import { initScrollAnimations } from './js/scroll-animations.js';
import { initCounter } from './js/counter.js';
import { initTextScramble } from './js/text-scramble.js';

// Check reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.addEventListener('DOMContentLoaded', () => {
  // Phase 1: Theme (must be first to prevent flash)
  initTheme();

  // Phase 2: Navbar
  initNavbar();

  // Phase 3: Cursor (desktop only)
  if (window.matchMedia('(hover: hover)').matches && !prefersReducedMotion) {
    initCursor();
  }

  // Phase 4: Physics (skip if reduced motion)
  if (!prefersReducedMotion) {
    const heroCanvas = document.getElementById('hero-canvas');
    if (heroCanvas) {
      initStringPhysics(heroCanvas);
      initGradientShader(heroCanvas);
      // Hide static name, show canvas physics
      const heroName = document.querySelector('.hero-name');
      if (heroName) heroName.classList.add('physics-active');
    }
  }

  // Phase 5: Scroll animations
  if (!prefersReducedMotion) {
    initScrollAnimations();
  } else {
    // Make all reveal elements visible immediately
    document.querySelectorAll('.reveal').forEach(el => {
      el.classList.add('revealed');
    });
    document.querySelectorAll('.reveal-stagger').forEach(el => {
      el.classList.add('revealed');
    });
  }

  // Phase 6: Interactive elements
  initMagnetic();
  initTilt();
  initCounter();

  // Phase 6b: Text scramble effect
  if (!prefersReducedMotion) {
    initTextScramble();
  }

  // Phase 7: Remove page loader + sparkle entrance
  const loader = document.querySelector('.page-loader');
  if (loader) {
    loader.classList.add('loaded');
    loader.addEventListener('animationend', () => {
      loader.remove();
      // Sparkle burst from center
      if (!prefersReducedMotion) {
        createEntranceSparkles();
      }
    });
  }
});

// Entrance sparkle burst
function createEntranceSparkles() {
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;
  const colors = ['#7c3aed', '#a855f7', '#f97316', '#fb923c', '#06b6d4', '#22c55e'];

  for (let i = 0; i < 24; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'entrance-sparkle';
    const size = Math.random() * 8 + 4;
    const angle = (i / 24) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
    const distance = Math.random() * 200 + 100;
    const color = colors[Math.floor(Math.random() * colors.length)];

    sparkle.style.cssText = `
      left: ${cx}px; top: ${cy}px;
      width: ${size}px; height: ${size}px;
      background: ${color};
      box-shadow: 0 0 ${size * 3}px ${color};
      animation-delay: ${Math.random() * 0.3}s;
    `;

    document.body.appendChild(sparkle);

    // Animate outward
    sparkle.animate([
      { transform: 'translate(-50%,-50%) scale(0)', opacity: 0 },
      { transform: `translate(calc(-50% + ${Math.cos(angle) * distance * 0.5}px), calc(-50% + ${Math.sin(angle) * distance * 0.5}px)) scale(1.5)`, opacity: 1, offset: 0.3 },
      { transform: `translate(calc(-50% + ${Math.cos(angle) * distance}px), calc(-50% + ${Math.sin(angle) * distance}px)) scale(0)`, opacity: 0 }
    ], {
      duration: 1200 + Math.random() * 400,
      easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
      fill: 'forwards',
    }).onfinish = () => sparkle.remove();
  }
}
