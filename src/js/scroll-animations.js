/**
 * scroll-animations.js — GSAP ScrollTrigger for section reveals
 * Gracefully degrades: if GSAP not loaded, uses IntersectionObserver fallback
 */

export function initScrollAnimations() {
  // Try GSAP first
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    initGSAPAnimations();
  } else {
    // Dynamic import GSAP
    Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger'),
    ]).then(([gsapModule, stModule]) => {
      const gsap = gsapModule.gsap || gsapModule.default;
      const ScrollTrigger = stModule.ScrollTrigger || stModule.default;
      gsap.registerPlugin(ScrollTrigger);
      window.gsap = gsap;
      window.ScrollTrigger = ScrollTrigger;
      initGSAPAnimations();
    }).catch(() => {
      // Fallback: IntersectionObserver
      initObserverFallback();
    });
  }
}

function initGSAPAnimations() {
  const gsapRef = window.gsap || globalThis.gsap;
  if (!gsapRef) return initObserverFallback();

  // Reveal elements on scroll
  gsapRef.utils.toArray('.reveal').forEach((el) => {
    gsapRef.fromTo(el,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        },
      }
    );
  });

  // Staggered children
  gsapRef.utils.toArray('.reveal-stagger').forEach((container) => {
    const children = container.children;
    gsapRef.fromTo(children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
          once: true,
        },
      }
    );
  });

  // Timeline SVG line draw
  const timelinePath = document.querySelector('.timeline-line path');
  if (timelinePath) {
    const pathLength = timelinePath.getTotalLength();
    gsapRef.set(timelinePath, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    gsapRef.to(timelinePath, {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: '.timeline-container',
        start: 'top 70%',
        end: 'bottom 30%',
        scrub: 1,
      },
    });
  }

  // Timeline cards spring entry
  gsapRef.utils.toArray('.timeline-entry').forEach((entry, i) => {
    const isOdd = i % 2 === 0;
    gsapRef.fromTo(entry.querySelector('.timeline-card'),
      { opacity: 0, x: isOdd ? -40 : 40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: entry,
          start: 'top 80%',
          once: true,
        },
      }
    );
  });

  // Timeline nodes
  gsapRef.utils.toArray('.timeline-node').forEach((node) => {
    gsapRef.fromTo(node,
      { scale: 0 },
      {
        scale: 1,
        duration: 0.4,
        ease: 'back.out(2)',
        scrollTrigger: {
          trigger: node,
          start: 'top 80%',
          once: true,
        },
      }
    );
  });

  // Skill chips stagger
  gsapRef.utils.toArray('.skill-chips').forEach((container) => {
    gsapRef.fromTo(container.children,
      { opacity: 0, scale: 0.8, y: 10 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.04,
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
          once: true,
        },
      }
    );
  });

  // Project cards
  gsapRef.utils.toArray('.project-card').forEach((card, i) => {
    gsapRef.fromTo(card,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: i * 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          once: true,
        },
      }
    );
  });
}

function initObserverFallback() {
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

  document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => {
    observer.observe(el);
  });
}
