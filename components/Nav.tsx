'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/fonts',     label: '字體' },
  { href: '/portfolio', label: '作品' },
  { href: '/buy',       label: '購買' },
  { href: '/releases',  label: '新品' },
  { href: '/blog',      label: '筆記' },
  { href: '/member',    label: '會員' },
];

export default function Nav() {
  const pathname = usePathname();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const isDark = resolvedTheme === 'dark';

  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark');

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div
        className={`nav-overlay${menuOpen ? ' open' : ''}`}
        onClick={closeMenu}
      />
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '1.5rem 4rem',
        background: 'var(--paper)',
        borderBottom: '1px solid var(--light-rule)',
      }}>
        {pathname.startsWith('/portfolio') ? (
          <Link href="/portfolio" style={{
            fontFamily: "'Noto Serif TC', serif",
            fontWeight: 500, fontSize: '1rem',
            letterSpacing: '0.15em', color: 'var(--ink)', textDecoration: 'none',
          }}>
            盛和設計{' '}
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic', fontWeight: 300, fontSize: '0.85rem',
              color: 'var(--warm-mid)', marginLeft: '0.5rem',
            }}>Shenghe Design</span>
          </Link>
        ) : (
          <Link href="/" style={{
            fontFamily: "'Noto Serif TC', serif",
            fontWeight: 500, fontSize: '1rem',
            letterSpacing: '0.15em', color: 'var(--ink)', textDecoration: 'none',
          }}>
            字趣{' '}
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic', fontWeight: 300, fontSize: '0.85rem',
              color: 'var(--warm-mid)', marginLeft: '0.5rem',
            }}>fontsfun</span>
          </Link>
        )}

        <ul className={`nav-menu${menuOpen ? ' open' : ''}`} id="navMenu" style={{
          listStyle: 'none', display: 'flex', gap: '2.5rem',
        }}>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} onClick={closeMenu} style={{
                fontFamily: "'Noto Sans TC', sans-serif",
                fontSize: '0.75rem', letterSpacing: '0.12em',
                color: pathname.startsWith(href) ? 'var(--ink)' : 'var(--warm-mid)',
                textDecoration: 'none', transition: 'color 0.2s',
              }}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {mounted && (
            <button className="dm-toggle" onClick={toggleTheme} aria-label="切換深色模式">
              {isDark ? '☀' : '☾'}
            </button>
          )}
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            aria-label="開啟選單"
            onClick={() => setMenuOpen(v => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>
    </>
  );
}
