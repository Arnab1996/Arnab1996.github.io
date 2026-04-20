/**
 * magnetic.js — Magnetic hover effect for social links and nav items
 * Icons translate toward cursor within 60px, capped at 6px displacement.
 * Instant snap-back on pointer leave.
 */

export function initMagnetic() {
  const elements = document.querySelectorAll('[data-magnetic]');

  elements.forEach((el) => {
    const maxDisplacement = parseInt(el.dataset.magneticMax || '6', 10);
    const radius = parseInt(el.dataset.magneticRadius || '60', 10);

    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      if (distance < radius) {
        const strength = 1 - distance / radius;
        const moveX = Math.min(Math.abs(deltaX * strength), maxDisplacement) * Math.sign(deltaX);
        const moveY = Math.min(Math.abs(deltaY * strength), maxDisplacement) * Math.sign(deltaY);

        el.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate(0, 0)';
      el.style.transition = `transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)`;

      // Remove transition after animation completes
      setTimeout(() => {
        el.style.transition = '';
      }, 300);
    });

    el.addEventListener('mouseenter', () => {
      el.style.transition = '';
    });
  });
}
