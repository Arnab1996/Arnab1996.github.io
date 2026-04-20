/**
 * tilt.js — 3D card tilt effect following cursor position
 * Subtle perspective transform for project cards
 */

export function initTilt() {
  const cards = document.querySelectorAll('[data-tilt]');

  cards.forEach((card) => {
    const maxTilt = parseFloat(card.dataset.tiltMax || '8');
    const perspective = parseInt(card.dataset.tiltPerspective || '800', 10);
    const scale = parseFloat(card.dataset.tiltScale || '1.02');

    card.style.transformStyle = 'preserve-3d';
    card.style.transition = 'transform 0.15s ease-out';

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      const tiltX = (y - 0.5) * maxTilt * -1;
      const tiltY = (x - 0.5) * maxTilt;

      card.style.transform = `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${scale})`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
      card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale(1)';

      setTimeout(() => {
        card.style.transition = 'transform 0.15s ease-out';
      }, 500);
    });
  });
}
