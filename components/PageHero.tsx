import Link from 'next/link';

interface CTA {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  ctas?: CTA[];
  minHeight?: string;
  align?: 'left' | 'center';
}

export default function PageHero({
  title,
  subtitle,
  ctas,
  minHeight = '60vh',
  align = 'center',
}: PageHeroProps) {
  const isExternal = (href: string) => href.startsWith('http');

  return (
    <section
      className="page-hero"
      style={{
        minHeight,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: align === 'center' ? 'center' : 'flex-start',
        textAlign: align,
        padding: '7rem 4rem 5rem',
        background: 'var(--paper)',
        borderBottom: '1px solid var(--light-rule)',
        overflow: 'hidden',
      }}
    >
      <h1
        className="page-hero-title"
        style={{
          fontFamily: "'Noto Serif TC', serif",
          fontWeight: 300,
          fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
          lineHeight: 1.25,
          letterSpacing: '0.06em',
          margin: 0,
          opacity: 0,
          transform: 'translateY(20px)',
          animation: 'heroFadeUp 800ms ease-out forwards',
        }}
      >
        {title}
      </h1>

      {subtitle && (
        <p
          className="page-hero-subtitle"
          style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontWeight: 300,
            fontSize: 'clamp(1rem, 1.4vw, 1.35rem)',
            lineHeight: 2,
            letterSpacing: '0.06em',
            color: 'var(--warm-mid)',
            marginTop: '1.75rem',
            maxWidth: '40rem',
            opacity: 0,
            transform: 'translateY(20px)',
            animation: 'heroFadeUp 600ms ease-out 200ms forwards',
          }}
        >
          {subtitle}
        </p>
      )}

      {ctas && ctas.length > 0 && (
        <div
          style={{
            display: 'flex',
            gap: '1.25rem',
            marginTop: '2.5rem',
            flexWrap: 'wrap',
            justifyContent: align === 'center' ? 'center' : 'flex-start',
            opacity: 0,
            transform: 'translateY(20px)',
            animation: 'heroFadeUp 600ms ease-out 400ms forwards',
          }}
        >
          {ctas.map((cta, i) => {
            const isPrimary = cta.variant !== 'secondary';
            const style: React.CSSProperties = {
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.95rem 2.25rem',
              fontFamily: "'Noto Sans TC', sans-serif",
              fontSize: '16px',
              letterSpacing: '0.15em',
              textDecoration: 'none',
              transition: 'opacity 0.2s, transform 0.2s',
              ...(isPrimary
                ? { background: 'var(--ink)', color: 'var(--paper)' }
                : { background: 'var(--accent)', color: '#fff' }),
            };

            if (isExternal(cta.href)) {
              return (
                <a key={i} href={cta.href} target="_blank" rel="noopener noreferrer" style={style}>
                  {cta.label}
                </a>
              );
            }
            return (
              <Link key={i} href={cta.href} style={style}>
                {cta.label}
              </Link>
            );
          })}
        </div>
      )}

      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .page-hero {
            min-height: 40vh !important;
            padding: 5rem 1.5rem 3rem !important;
          }
          .page-hero-title {
            font-size: clamp(2rem, 8vw, 2.75rem) !important;
          }
          .page-hero-subtitle {
            font-size: clamp(0.95rem, 3.5vw, 1.1rem) !important;
          }
        }
      `}</style>
    </section>
  );
}
