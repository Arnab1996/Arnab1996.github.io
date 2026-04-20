/**
 * text-scramble.js — Character scramble/decode effect
 * Makes text appear like it's being decoded from random characters.
 */

export function initTextScramble() {
  const elements = document.querySelectorAll('[data-scramble]');

  elements.forEach((el) => {
    const finalText = el.textContent;
    const delay = parseInt(el.dataset.scrambleDelay || '1000', 10);
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let frame = 0;
    const totalFrames = 30;

    // Start with scrambled text
    el.textContent = finalText.replace(/[^\s]/g, () => chars[Math.floor(Math.random() * chars.length)]);

    setTimeout(() => {
      const interval = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;

        el.textContent = finalText
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' ';
            const charProgress = (i / finalText.length);
            if (progress > charProgress + 0.3) return char;
            if (progress > charProgress) {
              return chars[Math.floor(Math.random() * chars.length)];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('');

        if (frame >= totalFrames) {
          clearInterval(interval);
          el.textContent = finalText;
        }
      }, 70);
    }, delay);
  });
}
