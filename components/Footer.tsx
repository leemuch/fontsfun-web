'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  const isPortfolio = pathname === '/' || pathname.startsWith('/portfolio');

  return (
    <footer style={{
      background: 'var(--ink)', color: '#999',
      borderTop: '1px solid #222',
      padding: '3rem 4rem 2.5rem',
      fontFamily: "'Noto Sans TC', sans-serif",
      fontSize: '14px', letterSpacing: '0.08em',
      lineHeight: 2,
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
        gap: '2rem', flexWrap: 'wrap', marginBottom: '1.5rem',
        paddingBottom: '1.5rem', borderBottom: '1px solid #2a2620',
      }}>
        {/* Brand */}
        <div>
          <span style={{
            fontFamily: "'Noto Serif TC', serif", fontWeight: 500,
            fontSize: '16px', color: '#d4d0c8', letterSpacing: '0.12em',
          }}>{isPortfolio ? '盛和設計' : '字趣 fontsfun'}</span>
        </div>
        {/* Contact */}
        <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
          <div>
            <span style={{ color: '#666' }}>Email</span><br />
            <a href={isPortfolio ? 'mailto:muchbin@gmail.com' : 'mailto:fontsfun18@gmail.com'}
              style={{ color: '#bbb', textDecoration: 'none' }}>
              {isPortfolio ? 'muchbin@gmail.com' : 'fontsfun18@gmail.com'}
            </a>
          </div>
          <div>
            <span style={{ color: '#666' }}>Phone / LINE</span><br />
            <span style={{ color: '#bbb' }}>0938-938-862</span>
          </div>
        </div>
      </div>
      {/* Bottom row */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        gap: '1rem', flexWrap: 'wrap',
      }}>
        <span style={{ color: '#666' }}>
          © 2025 {isPortfolio ? '盛和有限公司 Shenghe Co., Ltd.' : '字趣 fontsfun · 盛和有限公司'}
        </span>
        <span>
          {isPortfolio ? (
            <>字體授權請前往{' '}
              <Link href="/fonts" style={{ color: '#bbb', textDecoration: 'underline', textUnderlineOffset: '0.2em' }}>字趣 fontsfun</Link>
            </>
          ) : (
            <>設計接案請前往{' '}
              <Link href="/" style={{ color: '#bbb', textDecoration: 'underline', textUnderlineOffset: '0.2em' }}>盛和設計</Link>
            </>
          )}
        </span>
      </div>
    </footer>
  );
}
