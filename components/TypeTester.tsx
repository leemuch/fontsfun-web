'use client';

import { useState } from 'react';

export default function TypeTester() {
  const [text, setText] = useState('');
  const [size, setSize] = useState(48);

  const display = text || '美好生活，從一款好字體開始。';

  return (
    <div className="type-tester" style={{
      background: '#f0ece3', color: '#1a1714',
      padding: '3rem 4rem', marginBottom: '4rem',
      border: '1px solid var(--light-rule)',
    }}>
      <p style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontStyle: 'italic', fontSize: '0.8rem',
        color: 'var(--warm-mid)', letterSpacing: '0.15em', marginBottom: '1.5rem',
      }}>
        Interactive Type Tester · 互動試打
      </p>

      <div style={{
        display: 'flex', gap: '1rem', alignItems: 'center',
        marginBottom: '2rem', flexWrap: 'wrap',
      }}>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="輸入文字即時預覽字體效果…"
          style={{
            flex: 1, minWidth: '200px', padding: '0.7rem 1rem',
            background: '#e8e4db', border: '1px solid var(--light-rule)', color: '#1a1714',
            fontFamily: "'Noto Serif TC', serif", fontSize: '0.85rem',
            letterSpacing: '0.05em', outline: 'none',
          }}
        />
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontSize: '0.65rem', color: '#666', letterSpacing: '0.1em', whiteSpace: 'nowrap',
          }}>SIZE</span>
          <input
            type="range" min={24} max={96} value={size}
            onChange={e => setSize(Number(e.target.value))}
            style={{ width: '120px', height: '1px', accentColor: 'var(--warm-mid)', cursor: 'pointer' }}
          />
          <span style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '0.8rem', color: 'var(--warm-mid)', minWidth: '2.5rem',
          }}>
            {size}px
          </span>
        </div>
      </div>

      <div style={{
        minHeight: '6rem', display: 'flex', alignItems: 'center',
        fontFamily: "'Noto Serif TC', serif",
        fontSize: `${size}px`,
        lineHeight: 1.4, letterSpacing: '0.06em', color: '#1a1714',
        borderTop: '1px solid #2a2a2a', paddingTop: '2rem',
        wordBreak: 'break-all', transition: 'font-size 0.2s',
      }}>
        {display}
      </div>
    </div>
  );
}
