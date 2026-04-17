'use client';

import { useEffect, useRef } from 'react';

/**
 * Applies `.revealed` class when element scrolls into viewport.
 * Pair with CSS `.reveal-*` classes for animation.
 *
 * @param threshold — IntersectionObserver threshold (0-1), default 0.15
 * @param rootMargin — default '0px 0px -40px 0px' (trigger 40px before bottom)
 */
export function useScrollReveal<T extends HTMLElement>(
  threshold = 0.15,
  rootMargin = '0px 0px -40px 0px'
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Find all children with reveal-* classes
    const targets = el.querySelectorAll(
      '.reveal-up, .reveal-left, .reveal-right, .reveal-fade, .reveal-scale, .stagger-item'
    );
    if (targets.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    targets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}

/**
 * Simple counter animation hook.
 * Animates a number from 0 to `end` over `duration` ms when visible.
 */
export function useCountUp(end: number, duration = 2000, suffix = '') {
  const ref = useRef<HTMLSpanElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            el.textContent = Math.round(eased * end) + suffix;
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [end, duration, suffix]);

  return ref;
}
