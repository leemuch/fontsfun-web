'use client';

import { useState, useEffect } from 'react';

export interface Work {
  cat: string;
  workCat: string;
  title: string;
  desc: string;
  result: string;
  img: string;
  alt: string;
  titleEn?: string;
  span?: string; // legacy — ignored
}

interface Props { works: Work[] }

const FILTERS = [
  { key: 'all',       label: '全部' },
  { key: 'brand',     label: '品牌識別' },
  { key: 'type',      label: '字體排版' },
  { key: 'gov',       label: '政府標案' },
  { key: 'editorial', label: '出版設計' },
  { key: 'packaging', label: '包裝設計' },
  { key: 'digital',   label: '數位設計' },
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
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null); };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [lightbox]);

  const filtered = active === 'all' ? works : works.filter(w => w.cat === active);

  return (
    <>
      {/* Filter bar */}
      <div className="works-filter" style={{
        display: 'flex', gap: '0.75rem', marginBottom: '3rem',
        flexWrap: 'wrap', justifyContent: 'center',
      }}>
        {FILTERS.map(f => {
          const on = active === f.key;
          return (
            <button key={f.key} type="button" onClick={() => setActive(f.key)}
              style={{
                fontFamily: "'Noto Sans TC', sans-serif",
                fontSize: '14px', letterSpacing: '0.12em',
                color: on ? 'var(--paper)' : 'var(--warm-mid)',
                background: on ? 'var(--ink)' : 'none',
                border: '1px solid', borderColor: on ? 'var(--ink)' : 'var(--light-rule)',
                padding: '0.55rem 1.5rem', cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >{f.label}</button>
          );
        })}
      </div>

      {/* 1:1 square grid — 3 cols desktop / 2 cols mobile */}
      <div className="works-square-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '4px',
        background: 'var(--light-rule)',
        border: '1px solid var(--light-rule)',
      }}>
        {filtered.map((w, i) => (
          <article
            key={`${w.cat}-${i}`}
            className="work-sq"
            onClick={() => setLightbox(w)}
            style={{
              position: 'relative',
              aspectRatio: '1 / 1',
              overflow: 'hidden',
              cursor: 'pointer',
              background: '#e8e3d8',
            }}
          >
            <img src={w.img} alt={w.alt} loading={i < 6 ? 'eager' : 'lazy'}
              className="work-sq-img"
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'cover', display: 'block',
                transition: 'transform 0.55s ease',
              }}
            />
            {/* Hover overlay */}
            <div className="work-sq-overlay" style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(180deg, transparent 30%, rgba(20,18,16,0.85) 100%)',
              display: 'flex', flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '2rem 1.5rem',
              opacity: 0,
              transition: 'opacity 0.35s ease',
            }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
                fontSize: '14px', color: 'var(--accent)',
                letterSpacing: '0.2em', marginBottom: '0.5rem',
                textTransform: 'uppercase',
              }}>{w.workCat}</p>
              <h3 style={{
                fontFamily: "'Noto Serif TC', serif", fontWeight: 400,
                fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
                color: '#f5f2eb', letterSpacing: '0.08em',
                lineHeight: 1.5,
              }}>{w.title}</h3>
            </div>
          </article>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div role="dialog" aria-modal="true" onClick={() => setLightbox(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'rgba(10, 8, 6, 0.92)',
            backdropFilter: 'blur(4px)',
            padding: '1.5rem',
          }}
        >
          <div onClick={e => e.stopPropagation()} className="lb-stage"
            style={{
              display: 'grid', gridTemplateColumns: '1fr 360px',
              maxWidth: '1200px', width: '100%',
              maxHeight: '88vh', overflow: 'hidden',
              background: 'var(--paper)', position: 'relative',
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
                fontSize: '14px', color: 'var(--warm-mid)', letterSpacing: '0.18em',
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
              }}>{lightbox.desc}</p>
            </div>
            <button type="button" aria-label="關閉" onClick={() => setLightbox(null)}
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
        @media (hover: hover) {
          .work-sq:hover :global(.work-sq-overlay) { opacity: 1 !important; }
          .work-sq:hover :global(.work-sq-img) { transform: scale(1.06); }
        }
        @media (hover: none) and (pointer: coarse) {
          .work-sq :global(.work-sq-overlay) {
            opacity: 1 !important;
            background: linear-gradient(180deg, transparent 40%, rgba(20,18,16,0.75) 100%) !important;
          }
        }
        @media (max-width: 900px) {
          .works-square-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 2px !important; }
          .lb-stage { grid-template-columns: 1fr !important; }
          .lb-content { padding: 1.5rem !important; max-height: 40vh; overflow-y: auto; }
        }
      `}</style>
    </>
  );
}
