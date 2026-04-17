'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export interface HeroSlide {
  img: string;
  alt: string;
  eyebrow: string;     // small italic label
  title: string;       // big headline (allows <em> via React elements? we use plain + split)
  titleAccent?: string; // the red accent word inside title
  subtitle: string;    // 1-2 line description
}

interface Props {
  slides: HeroSlide[];
  intervalMs?: number;
}

const DEFAULT_INTERVAL = 6000;

export default function HeroCarousel({ slides, intervalMs = DEFAULT_INTERVAL }: Props) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (paused || slides.length <= 1) return;
    timerRef.current = window.setInterval(() => {
      setIdx((i) => (i + 1) % slides.length);
    }, intervalMs);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [paused, slides.length, intervalMs]);

  const go = (next: number) => {
    setIdx(((next % slides.length) + slides.length) % slides.length);
  };

  return (
    <section
      className="hero-carousel"
      style={{
        position: 'relative',
        height: 'min(88vh, 720px)',
        minHeight: '520px',
        overflow: 'hidden',
        marginTop: 0,
        borderBottom: '1px solid var(--light-rule)',
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          aria-hidden={i !== idx}
          style={{
            position: 'absolute', inset: 0,
            opacity: i === idx ? 1 : 0,
            transition: 'opacity 1.2s ease',
            pointerEvents: i === idx ? 'auto' : 'none',
          }}
        >
          <img
            src={s.img}
            alt={s.alt}
            loading={i === 0 ? 'eager' : 'lazy'}
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', display: 'block',
            }}
          />
          {/* Dark gradient overlay for text legibility */}
          {/* Stronger gradient for text legibility */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, rgba(20,18,16,0.25) 0%, rgba(20,18,16,0.6) 40%, rgba(20,18,16,0.82) 100%)',
          }} />

          {/* Copy */}
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column',
            justifyContent: 'flex-end', alignItems: 'flex-start',
            padding: '4rem 5rem 6rem',
            color: '#f5f2eb',
          }}
          className="hero-copy">
            <p style={{
              fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
              fontSize: '16px', letterSpacing: '0.25em',
              color: '#c9b88a', marginBottom: '1.25rem',
              textShadow: '0 1px 4px rgba(0,0,0,0.4)',
              opacity: i === idx ? 1 : 0,
              transform: i === idx ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 1s ease 0.3s, transform 1s ease 0.3s',
            }}>{s.eyebrow}</p>

            <h1 style={{
              fontFamily: "'Noto Serif TC', serif", fontWeight: 300,
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              lineHeight: 1.2, letterSpacing: '0.05em',
              color: '#f5f2eb', margin: 0, maxWidth: '32ch',
              textShadow: '0 2px 8px rgba(0,0,0,0.35)',
              opacity: i === idx ? 1 : 0,
              transform: i === idx ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 1s ease 0.5s, transform 1s ease 0.5s',
            }}>
              {s.titleAccent ? (
                <>
                  {s.title.split(s.titleAccent)[0]}
                  <em style={{ fontStyle: 'normal', color: '#e05545' }}>{s.titleAccent}</em>
                  {s.title.split(s.titleAccent)[1]}
                </>
              ) : s.title}
            </h1>

            <p style={{
              fontFamily: "'Noto Sans TC', sans-serif", fontWeight: 300,
              fontSize: '18px', color: '#e8e4dc',
              letterSpacing: '0.06em', lineHeight: 2,
              marginTop: '1.75rem', maxWidth: '34rem',
              textShadow: '0 1px 3px rgba(0,0,0,0.3)',
              opacity: i === idx ? 1 : 0,
              transform: i === idx ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 1s ease 0.7s, transform 1s ease 0.7s',
            }}>{s.subtitle}</p>

            <Link href="#works" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
              marginTop: '2.75rem',
              padding: '0.95rem 2.5rem',
              background: 'rgba(245, 242, 235, 0.08)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(245, 242, 235, 0.45)',
              color: '#f5f2eb', textDecoration: 'none',
              fontFamily: "'Noto Sans TC', sans-serif",
              fontSize: '14px', letterSpacing: '0.2em',
              opacity: i === idx ? 1 : 0,
              transform: i === idx ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 1s ease 0.9s, transform 1s ease 0.9s, gap 0.3s, background 0.2s',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.gap = '1.25rem';
              el.style.background = 'rgba(245, 242, 235, 0.18)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.gap = '0.75rem';
              el.style.background = 'rgba(245, 242, 235, 0.08)';
            }}
            >查看作品集 <span aria-hidden>→</span></Link>
          </div>
        </div>
      ))}

      {/* Prev / Next buttons */}
      <button
        type="button"
        aria-label="上一張"
        onClick={() => go(idx - 1)}
        style={{
          position: 'absolute', left: '1.5rem', top: '50%',
          transform: 'translateY(-50%)', zIndex: 10,
          width: '3rem', height: '3rem', borderRadius: '50%',
          background: 'rgba(20, 18, 16, 0.4)',
          border: '1px solid rgba(245, 242, 235, 0.3)',
          color: '#f5f2eb', fontSize: '1.2rem', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backdropFilter: 'blur(4px)',
          transition: 'background 0.2s',
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(20, 18, 16, 0.7)'; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(20, 18, 16, 0.4)'; }}
      >‹</button>
      <button
        type="button"
        aria-label="下一張"
        onClick={() => go(idx + 1)}
        style={{
          position: 'absolute', right: '1.5rem', top: '50%',
          transform: 'translateY(-50%)', zIndex: 10,
          width: '3rem', height: '3rem', borderRadius: '50%',
          background: 'rgba(20, 18, 16, 0.4)',
          border: '1px solid rgba(245, 242, 235, 0.3)',
          color: '#f5f2eb', fontSize: '1.2rem', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backdropFilter: 'blur(4px)',
          transition: 'background 0.2s',
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(20, 18, 16, 0.7)'; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(20, 18, 16, 0.4)'; }}
      >›</button>

      {/* Dots indicator */}
      <div style={{
        position: 'absolute',
        left: 0, right: 0, bottom: '1.75rem',
        display: 'flex', justifyContent: 'center', gap: '0.65rem',
        zIndex: 10,
      }}>
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`切換到第 ${i + 1} 張`}
            onClick={() => go(i)}
            style={{
              width: i === idx ? '2rem' : '0.5rem',
              height: '0.5rem',
              padding: 0, border: 'none', cursor: 'pointer',
              background: i === idx ? '#f5f2eb' : 'rgba(245, 242, 235, 0.4)',
              borderRadius: '999px',
              transition: 'all 0.4s ease',
            }}
          />
        ))}
      </div>

      <style jsx>{`
        /* Force light text on dark photo overlay — override globals theme rules */
        .hero-carousel :global(h1),
        .hero-carousel :global(p),
        .hero-carousel :global(span),
        .hero-carousel :global(em),
        .hero-carousel :global(a) {
          color: inherit !important;
        }
        @media (max-width: 900px) {
          .hero-carousel :global(.hero-copy) {
            padding: 3rem 1.5rem 4rem !important;
          }
        }
      `}</style>
    </section>
  );
}
