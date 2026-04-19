interface Props {
  title: string;
  subtitle: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({
  title, subtitle,
  primaryLabel, primaryHref,
  secondaryLabel, secondaryHref,
}: Props) {
  return (
    <section style={{
      padding: '7.5rem 4rem',
      background: '#e8e4db',
      textAlign: 'center',
    }}>
      <h2 style={{
        fontFamily: "'Noto Serif TC', serif", fontWeight: 300,
        fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
        lineHeight: 1.4, letterSpacing: '0.08em',
        color: '#1a1714', marginBottom: '1.25rem',
      }}>{title}</h2>
      <p style={{
        fontFamily: "'Noto Sans TC', sans-serif",
        fontSize: '16px', color: '#5a5550',
        letterSpacing: '0.06em', lineHeight: 2,
        marginBottom: '2.5rem',
      }}>{subtitle}</p>
      <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href={primaryHref} style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          padding: '1rem 2.5rem',
          background: 'var(--accent)', color: '#fff',
          fontFamily: "'Noto Sans TC', sans-serif",
          fontSize: '16px', letterSpacing: '0.18em',
          textDecoration: 'none', transition: 'opacity 0.2s',
        }}>{primaryLabel}</a>
        {secondaryLabel && secondaryHref && (
          <a href={secondaryHref} style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '1rem 2.5rem',
            background: 'transparent',
            border: '1px solid var(--light-rule)',
            color: '#1a1714',
            fontFamily: "'Noto Sans TC', sans-serif",
            fontSize: '16px', letterSpacing: '0.18em',
            textDecoration: 'none', transition: 'opacity 0.2s',
          }}>{secondaryLabel}</a>
        )}
      </div>
    </section>
  );
}
