'use client';

import { useState } from 'react';

interface FAQ { q: string; a: string }
interface Props { items: FAQ[] }

export default function FAQAccordion({ items }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div style={{ borderTop: '1px solid var(--light-rule)' }}>
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i} style={{ borderBottom: '1px solid var(--light-rule)' }}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              style={{
                width: '100%', textAlign: 'left',
                padding: '1.5rem 0',
                background: 'none', border: 'none', cursor: 'pointer',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                gap: '1.5rem',
                fontFamily: "'Noto Serif TC', serif",
                fontSize: '0.95rem', fontWeight: 400,
                color: 'var(--ink)', letterSpacing: '0.06em',
                transition: 'color 0.2s',
              }}
              aria-expanded={isOpen}
            >
              <span style={{ display: 'flex', gap: '1rem', alignItems: 'baseline', flex: 1 }}>
                <span style={{
                  fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
                  fontSize: '0.75rem', color: 'var(--warm-mid)',
                  letterSpacing: '0.15em', minWidth: '2rem',
                }}>{String(i + 1).padStart(2, '0')}</span>
                <span>{it.q}</span>
              </span>
              <span style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.2rem', color: 'var(--warm-mid)',
                transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                transition: 'transform 0.25s ease',
                lineHeight: 1, flexShrink: 0,
              }}>+</span>
            </button>
            <div style={{
              maxHeight: isOpen ? '32rem' : 0,
              overflow: 'hidden',
              transition: 'max-height 0.35s ease',
            }}>
              <p style={{
                fontFamily: "'Noto Sans TC', sans-serif", fontWeight: 300,
                fontSize: '0.78rem', color: 'var(--warm-mid)',
                lineHeight: 2.2, letterSpacing: '0.04em',
                paddingBottom: '1.5rem', paddingLeft: '3rem',
                paddingRight: '2.5rem',
              }}>{it.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
