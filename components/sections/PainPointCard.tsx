import type { ReactNode } from 'react';

interface PainPoint {
  icon: ReactNode;
  title: string;
  desc: string;
}

interface Props {
  sectionTitle: string;
  items: PainPoint[];
}

export default function PainPointCards({ sectionTitle, items }: Props) {
  return (
    <section style={{ padding: '7.5rem 4rem' }}>
      <h2 style={{
        fontFamily: "'Noto Serif TC', serif", fontWeight: 400,
        fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
        letterSpacing: '0.08em', textAlign: 'center',
        marginBottom: '4rem',
      }}>{sectionTitle}</h2>
      <div className="pain-grid" style={{
        display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1.5rem', maxWidth: '900px', margin: '0 auto',
      }}>
        {items.map((p, i) => (
          <div key={i} style={{
            padding: '2.5rem 2rem',
            border: '1px solid var(--light-rule)',
            display: 'flex', flexDirection: 'column', gap: '0.75rem',
          }}>
            <div style={{ lineHeight: 0 }}>{p.icon}</div>
            <h3 style={{
              fontFamily: "'Noto Serif TC', serif", fontWeight: 500,
              fontSize: '16px', letterSpacing: '0.06em', lineHeight: 1.6,
            }}>{p.title}</h3>
            <p style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontSize: '16px', lineHeight: 1.85, color: 'var(--warm-mid)',
              letterSpacing: '0.04em',
            }}>{p.desc}</p>
          </div>
        ))}
      </div>
      <style>{`@media(max-width:768px){.pain-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
