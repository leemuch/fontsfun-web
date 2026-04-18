interface WhyUsItem {
  title: string;
  desc: string;
}

interface Props {
  sectionTitle: string;
  items: WhyUsItem[];
}

export default function WhyUsGrid({ sectionTitle, items }: Props) {
  return (
    <section style={{
      padding: '7.5rem 4rem',
      background: 'var(--ink)', color: 'var(--paper)',
    }}>
      <h2 style={{
        fontFamily: "'Noto Serif TC', serif", fontWeight: 400,
        fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
        letterSpacing: '0.08em', textAlign: 'center',
        marginBottom: '4rem', color: 'var(--paper)',
      }}>{sectionTitle}</h2>
      <div className="whyus-grid" style={{
        display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1px', background: '#2a2620',
        maxWidth: '900px', margin: '0 auto',
        border: '1px solid #2a2620',
      }}>
        {items.map((it, i) => (
          <div key={i} style={{
            padding: '2.5rem 2rem',
            background: 'var(--ink)',
          }}>
            <h3 style={{
              fontFamily: "'Noto Serif TC', serif", fontWeight: 500,
              fontSize: '16px', letterSpacing: '0.06em', lineHeight: 1.6,
              color: '#f5f2eb', marginBottom: '0.75rem',
            }}>{it.title}</h3>
            <p style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontSize: '16px', lineHeight: 1.85,
              color: '#999', letterSpacing: '0.04em',
            }}>{it.desc}</p>
          </div>
        ))}
      </div>
      <style>{`@media(max-width:768px){.whyus-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
