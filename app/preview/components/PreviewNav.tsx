'use client';

import { useState } from 'react';
import Link from 'next/link';

const links = [
  { href: '#works',   en: 'Works',   zh: '作品' },
  { href: '#fonts',   en: 'Fonts',   zh: '字體' },
  { href: '#concept', en: 'About',   zh: '關於' },
  { href: '#contact', en: 'Contact', zh: '合作' },
];

export default function PreviewNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-[60px] lg:h-[72px] bg-white/90 backdrop-blur-md">
        <div className="nav-inner h-full flex items-center justify-between">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-baseline gap-2"
          >
            <span className="font-miantian text-[18px] lg:text-[20px] tracking-wider text-neutral-900">
              盛和
            </span>
            <span className="font-serif-en text-[12px] lg:text-[14px] text-neutral-500">
              Shenghe
            </span>
          </Link>

          {/* Desktop / tablet links */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="font-sans-en text-[14px] tracking-wide text-neutral-800 hover:text-black transition-colors"
              >
                {l.en}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen(v => !v)}
            className="md:hidden relative z-[60] w-10 h-10 flex flex-col items-center justify-center gap-[6px]"
            aria-label={open ? '關閉選單' : '開啟選單'}
            aria-expanded={open}
          >
            <span
              className={`block h-px w-6 bg-neutral-900 origin-center transition-transform duration-300 ${open ? 'translate-y-[7px] rotate-45' : ''}`}
            />
            <span
              className={`block h-px w-6 bg-neutral-900 transition-opacity duration-300 ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-px w-6 bg-neutral-900 origin-center transition-transform duration-300 ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile fullscreen overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-10 transition-opacity duration-300 md:hidden ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!open}
      >
        {links.map(l => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="font-miantian text-[28px] tracking-wider text-neutral-900"
          >
            {l.zh}
          </Link>
        ))}
      </div>
    </>
  );
}
