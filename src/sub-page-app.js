/**
 * sub-page-app.js — Entry point for sub-pages
 * Lighter than main app.js — no physics, no canvas
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
import './css/sub-pages.css';

// JS Systems
import { initCursor } from './js/cursor.js';
import { initTheme } from './js/theme-toggle.js';
import { initNavbar } from './js/navbar.js';
import { initMagnetic } from './js/magnetic.js';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavbar();

  if (window.matchMedia('(hover: hover)').matches && !prefersReducedMotion) {
    initCursor();
  }

  initMagnetic();

  // Simple scroll reveal for sub-pages
  if (!prefersReducedMotion) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => observer.observe(el));
  } else {
    document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => el.classList.add('revealed'));
  }

  // Page loader
  const loader = document.querySelector('.page-loader');
  if (loader) {
    loader.classList.add('loaded');
    loader.addEventListener('animationend', () => loader.remove());
  }
});
