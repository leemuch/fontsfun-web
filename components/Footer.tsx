'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  const isPortfolio = pathname === '/' || pathname.startsWith('/portfolio');

  return (
    <footer style={{
      background: 'var(--ink)', color: '#777',
      borderTop: '1px solid #222',
      padding: '2rem 4rem',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      gap: '1rem', flexWrap: 'wrap',
      fontFamily: "'Noto Sans TC', sans-serif",
      fontSize: '0.875rem', letterSpacing: '0.08em',
    }}>
      {isPortfolio ? (
        <>
          <span>© 2025 盛和有限公司 Shenghe Co., Ltd.</span>
          <span>
            字體授權請前往{' '}
            <Link href="/fonts" style={{
              color: 'var(--warm-mid)', textDecoration: 'underline',
              textUnderlineOffset: '0.2em',
            }}>字趣 fontsfun</Link>
          </span>
        </>
      ) : (
        <>
          <span>© 2025 字趣 fontsfun · 盛和有限公司 Shenghe Co., Ltd.</span>
          <span>
            設計接案請前往{' '}
            <Link href="/" style={{
              color: 'var(--warm-mid)', textDecoration: 'underline',
              textUnderlineOffset: '0.2em',
            }}>盛和設計</Link>
          </span>
        </>
      )}
    </footer>
  );
}
