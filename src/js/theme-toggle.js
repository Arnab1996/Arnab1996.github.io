/**
 * theme-toggle.js — Dark/light mode with localStorage + system preference
 */

export function initTheme() {
  const stored = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = stored || (systemPrefersDark ? 'dark' : 'light');

  document.documentElement.setAttribute('data-theme', theme);

  // Listen for toggle clicks
  document.addEventListener('click', (e) => {
    const toggle = e.target.closest('.theme-toggle');
    if (!toggle) return;

    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);

    // Dispatch event for other systems to react
    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme: next } }));
  });

  // Listen for system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      const theme = e.matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', theme);
    }
  });
}
