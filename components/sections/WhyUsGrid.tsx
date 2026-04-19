import type { ReactNode } from 'react';

interface WhyUsItem {
  title: string;
  desc: string;
  icon?: ReactNode;
}

interface Props {
  sectionTitle: string;
  items: WhyUsItem[];
}

export default function WhyUsGrid({ sectionTitle, items }: Props) {
  return (
    <section style={{
      padding: '7.5rem 4rem',
      background: '#e8e4db',
    }}>
      <h2 style={{
        fontFamily: "'Noto Serif TC', serif", fontWeight: 400,
        fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
        letterSpacing: '0.08em', textAlign: 'center',
        marginBottom: '4rem', color: '#1a1714',
      }}>{sectionTitle}</h2>
      <div className="whyus-grid" style={{
        display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1px', background: 'var(--light-rule)',
        maxWidth: '900px', margin: '0 auto',
        border: '1px solid var(--light-rule)',
      }}>
        {items.map((it, i) => (
          <div key={i} style={{
            padding: '2.5rem 2rem',
            background: '#e8e4db',
          }}>
            {it.icon && <div style={{ marginBottom: '0.75rem', lineHeight: 0 }}>{it.icon}</div>}
            <h3 style={{
              fontFamily: "'Noto Serif TC', serif", fontWeight: 500,
              fontSize: '16px', letterSpacing: '0.06em', lineHeight: 1.6,
              color: '#1a1714', marginBottom: '0.75rem',
            }}>{it.title}</h3>
            <p style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontSize: '16px', lineHeight: 1.85,
              color: '#5a5550', letterSpacing: '0.04em',
            }}>{it.desc}</p>
          </div>
        ))}
      </div>
      <style>{`@media(max-width:768px){.whyus-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
