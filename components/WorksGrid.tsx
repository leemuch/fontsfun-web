'use client';

import { useState, useEffect } from 'react';

export interface Work {
  cat: 'brand' | 'editorial' | 'packaging' | 'type';
  workCat: string;
  title: string;
  desc: string;
  result: string;
  img: string;
  alt: string;
  /** Legacy layout hint — retained but no longer changes span; content is always full-bleed now */
  span?: 'wide' | 'tall';
  /** Optional English title. Falls back to workCat if absent. */
  titleEn?: string;
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

  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

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
        display: 'flex', gap: '1rem', marginBottom: '0', flexWrap: 'wrap',
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
                fontSize: '14px', letterSpacing: '0.12em',
                color: isActive ? 'var(--paper)' : 'var(--warm-mid)',
                background: isActive ? 'var(--ink)' : 'none',
                border: '1px solid',
                borderColor: isActive ? 'var(--ink)' : 'var(--light-rule)',
                padding: '0.5rem 1.25rem', cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Works — full-bleed alternating layout
          Breaks out of any padded parent via negative margin + 100vw trick */}
      <div className="works-fullbleed" style={{
        marginTop: '4rem',
        marginLeft:  'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
        width: '100vw', maxWidth: '100vw',
      }}>
        {works.map((w, i) => {
          const visible = active === 'all' || w.cat === active;
          if (!visible) return null;
          const reverse = i % 2 === 1; // even-index (0,2,4…) image-left; odd reversed
          return (
            <article
              key={i}
              className={`work-row${reverse ? ' reverse' : ''}`}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                minHeight: '520px',
                background: i % 2 === 0 ? 'var(--paper)' : 'var(--bg-alt)',
                borderTop: i === 0 ? '1px solid var(--light-rule)' : 'none',
                borderBottom: '1px solid var(--light-rule)',
                direction: reverse ? 'rtl' : 'ltr',
              }}
            >
              {/* Image side */}
              <div
                onClick={() => setLightbox(w)}
                className="work-img-wrap"
                style={{
                  direction: 'ltr',
                  position: 'relative',
                  minHeight: '520px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  background: '#f0ece3',
                }}
              >
                <img
                  className="work-img"
                  src={w.img}
                  alt={w.alt}
                  loading={i < 2 ? 'eager' : 'lazy'}
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover', display: 'block',
                    transition: 'transform 0.6s ease',
                    position: 'absolute', inset: 0,
                  }}
                />
              </div>

              {/* Content side */}
              <div
                className="work-copy"
                style={{
                  direction: 'ltr',
                  display: 'flex', flexDirection: 'column', justifyContent: 'center',
                  padding: '4.5rem 4rem',
                  gap: '1.25rem',
                }}
              >
                {/* Index number */}
                <span style={{
                  fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
                  fontSize: '1rem', color: 'var(--warm-mid)',
                  letterSpacing: '0.2em',
                }}>
                  {String(i + 1).padStart(2, '0')} / {String(works.length).padStart(2, '0')}
                </span>

                {/* Service type */}
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
                  fontSize: '14px', color: 'var(--accent)',
                  letterSpacing: '0.25em', textTransform: 'uppercase',
                  margin: 0,
                }}>{w.workCat}</p>

                {/* English title (big) */}
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif", fontWeight: 400,
                  fontSize: 'clamp(2rem, 3.5vw, 3.25rem)',
                  lineHeight: 1.15, letterSpacing: '0.02em',
                  color: 'var(--ink)', margin: 0,
                }}>{w.titleEn || w.workCat}</h3>

                {/* Chinese title */}
                <h4 style={{
                  fontFamily: "'Noto Serif TC', serif", fontWeight: 500,
                  fontSize: 'clamp(1.1rem, 1.5vw, 1.35rem)',
                  lineHeight: 1.5, letterSpacing: '0.08em',
                  color: 'var(--ink)', margin: 0,
                }}>{w.title}</h4>

                {/* Description */}
                <p style={{
                  fontFamily: "'Noto Sans TC', sans-serif", fontWeight: 300,
                  fontSize: '16px', lineHeight: 1.95,
                  letterSpacing: '0.04em', color: '#262626',
                  maxWidth: '32rem', margin: '0.5rem 0 0',
                }}>{w.desc}</p>

                {/* CTA */}
                <button
                  type="button"
                  onClick={() => setLightbox(w)}
                  style={{
                    alignSelf: 'flex-start',
                    marginTop: '1.5rem',
                    padding: '0.75rem 0',
                    background: 'none', border: 'none',
                    borderBottom: '1px solid var(--ink)',
                    fontFamily: "'Noto Sans TC', sans-serif",
                    fontSize: '14px', letterSpacing: '0.2em',
                    color: 'var(--ink)', cursor: 'pointer',
                    display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
                    transition: 'gap 0.3s, color 0.2s',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.gap = '1.25rem'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.gap = '0.75rem'; }}
                >
                  查看詳情 <span aria-hidden>→</span>
                </button>
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
              maxWidth: '1200px', width: '100%',
              maxHeight: '88vh', overflow: 'hidden',
              background: 'var(--paper)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              position: 'relative',
            }}
          >
            <div style={{
              background: '#0e0c0a',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
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
                fontSize: '14px', color: 'var(--warm-mid)',
                letterSpacing: '0.18em',
              }}>{lightbox.workCat}</p>
              <h3 style={{
                fontFamily: "'Noto Serif TC', serif", fontWeight: 400,
                fontSize: '1.3rem', lineHeight: 1.5,
                letterSpacing: '0.08em', color: 'var(--ink)',
              }}>{lightbox.title}</h3>
              <p style={{
                fontFamily: "'Noto Sans TC', sans-serif", fontWeight: 300,
                fontSize: '16px', lineHeight: 2,
                letterSpacing: '0.04em', color: '#262626',
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

        /* Desktop hover */
        @media (hover: hover) {
          .work-row :global(.work-img-wrap):hover :global(.work-img) {
            transform: scale(1.04);
          }
        }

        /* Mobile: image-top / copy-bottom, single column */
        @media (max-width: 900px) {
          .work-row {
            grid-template-columns: 1fr !important;
            min-height: 0 !important;
            direction: ltr !important;
          }
          .work-row.reverse { /* no-op: same stack order on mobile */ }
          .work-row :global(.work-img-wrap) {
            min-height: 320px !important;
            aspect-ratio: 4/3;
          }
          .work-row :global(.work-copy) {
            padding: 2.5rem 1.5rem !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </>
  );
}
