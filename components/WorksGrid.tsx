'use client';

import { useState, useEffect, useRef } from 'react';

export interface Work {
  cat: 'brand' | 'editorial' | 'packaging' | 'type';
  workCat: string;
  title: string;
  desc: string;
  result: string;
  img: string;
  alt: string;
  span?: 'wide' | 'tall';
}

interface Props { works: Work[] }

const FILTERS = [
  { key: 'all',       label: '全部' },
  { key: 'brand',     label: '品牌識別' },
  { key: 'editorial', label: '出版設計' },
  { key: 'packaging', label: '包裝設計' },
  { key: 'type',      label: '字體排版' },
];

export default function WorksGrid({ works }: Props) {
  const [active, setActive] = useState<string>('all');
  const [lightbox, setLightbox] = useState<Work | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  // Esc to close lightbox
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox]);

  return (
    <>
      {/* Filter Bar */}
      <div className="works-filter" style={{
        display: 'flex', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap',
      }}>
        {FILTERS.map(f => {
          const isActive = active === f.key;
          return (
            <button
              key={f.key}
              type="button"
              onClick={() => setActive(f.key)}
              className={`filter-btn${isActive ? ' active' : ''}`}
              style={{
                fontFamily: "'Noto Sans TC', sans-serif",
                fontSize: '0.7rem', letterSpacing: '0.12em',
                color: isActive ? 'var(--paper)' : 'var(--warm-mid)',
                background: isActive ? 'var(--ink)' : 'none',
                border: '1px solid',
                borderColor: isActive ? 'var(--ink)' : 'var(--light-rule)',
                padding: '0.4rem 1rem', cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Works Grid */}
      <div ref={gridRef} className="works-grid" style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px',
      }}>
        {works.map((w, i) => {
          const visible = active === 'all' || w.cat === active;
          return (
            <article
              key={i}
              className={`work-card${w.span ? ' ' + w.span : ''}`}
              onClick={() => setLightbox(w)}
              style={{
                position: 'relative',
                aspectRatio: w.span === 'tall' ? '3/4' : '4/3',
                gridColumn: w.span === 'wide' ? 'span 2' : 'span 1',
                gridRow:    w.span === 'tall' ? 'span 2' : 'span 1',
                overflow: 'hidden', cursor: 'pointer',
                background: '#f0ece3',
                opacity: visible ? 1 : 0.15,
                pointerEvents: visible ? 'auto' : 'none',
                transform: visible ? 'scale(1)' : 'scale(0.97)',
                transition: 'opacity 0.4s, transform 0.4s',
              }}
            >
              <img className="work-img" src={w.img} alt={w.alt} loading="lazy" style={{
                width: '100%', height: '100%', objectFit: 'contain',
                display: 'block', transition: 'transform 0.5s ease',
              }} />
              <div className="work-overlay" style={{
                position: 'absolute', inset: 0,
                background: 'rgba(26,23,20,.88)',
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                padding: '2rem', opacity: 0, transition: 'opacity 0.35s ease',
              }}>
                <p className="work-cat" style={{
                  fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
                  fontSize: '0.75rem', color: 'var(--warm-mid)',
                  letterSpacing: '0.15em', marginBottom: '0.5rem',
                }}>{w.workCat}</p>
                <h3 className="work-title" style={{
                  fontFamily: "'Noto Serif TC', serif", fontWeight: 400,
                  fontSize: '1.1rem', color: '#f5f2eb',
                  letterSpacing: '0.1em', marginBottom: '0.5rem',
                }}>{w.title}</h3>
                <p className="work-result" style={{
                  fontFamily: "'Noto Sans TC', sans-serif",
                  fontSize: '0.7rem', color: '#aaa',
                  letterSpacing: '0.08em', lineHeight: 1.7,
                }}>{w.result}</p>
              </div>
            </article>
          );
        })}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          role="dialog" aria-modal="true"
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'rgba(10, 8, 6, 0.92)',
            backdropFilter: 'blur(4px)',
            animation: 'lbFadeIn 0.25s ease',
            padding: '1.5rem',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            className="lb-stage"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 360px',
              gap: 0,
              maxWidth: '1200px', width: '100%',
              maxHeight: '88vh', overflow: 'hidden',
              background: 'var(--paper)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}
          >
            <div style={{
              background: '#0e0c0a', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              minHeight: '40vh', overflow: 'hidden',
            }}>
              <img src={lightbox.img} alt={lightbox.alt} style={{
                maxWidth: '100%', maxHeight: '88vh',
                objectFit: 'contain', display: 'block',
              }} />
            </div>
            <div className="lb-content" style={{
              padding: '3rem 2.5rem', overflow: 'auto',
              display: 'flex', flexDirection: 'column', gap: '1rem',
            }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
                fontSize: '0.8rem', color: 'var(--warm-mid)',
                letterSpacing: '0.18em',
              }}>{lightbox.workCat}</p>
              <h3 style={{
                fontFamily: "'Noto Serif TC', serif", fontWeight: 400,
                fontSize: '1.3rem', lineHeight: 1.5,
                letterSpacing: '0.08em', color: 'var(--ink)',
              }}>{lightbox.title}</h3>
              <p style={{
                fontFamily: "'Noto Sans TC', sans-serif", fontWeight: 300,
                fontSize: '0.78rem', lineHeight: 2,
                letterSpacing: '0.04em', color: 'var(--ink)',
                marginTop: '0.5rem',
              }}>{lightbox.desc}</p>
            </div>
            <button
              type="button" aria-label="關閉"
              onClick={() => setLightbox(null)}
              style={{
                position: 'absolute', top: '1.25rem', right: '1.25rem',
                width: '2.5rem', height: '2.5rem',
                background: 'rgba(255,255,255,0.12)', color: 'var(--paper)',
                border: '1px solid rgba(255,255,255,0.25)',
                fontSize: '1.2rem', cursor: 'pointer', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >×</button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes lbFadeIn { from { opacity: 0 } to { opacity: 1 } }
        @media (hover: hover) {
          .work-card:hover .work-overlay { opacity: 1 !important; }
          .work-card:hover :global(.work-img) { transform: scale(1.05); }
        }
      `}</style>
    </>
  );
}
