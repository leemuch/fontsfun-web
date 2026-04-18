interface ServiceDetail {
  headline: string;
  items: string[];
  differentiator: string;
}

interface Props {
  services: ServiceDetail[];
}

export default function ServiceDetailSection({ services }: Props) {
  return (
    <section style={{ padding: '7.5rem 4rem' }}>
      {services.map((s, i) => {
        const reverse = i % 2 === 1;
        return (
          <div key={i} className="svc-detail-row" style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: '4rem', alignItems: 'center',
            marginBottom: i < services.length - 1 ? '7.5rem' : 0,
            direction: reverse ? 'rtl' : 'ltr',
          }}>
            {/* Text side */}
            <div style={{ direction: 'ltr' }}>
              <span style={{
                fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
                fontSize: '14px', color: 'var(--warm-mid)', letterSpacing: '0.2em',
              }}>Service {String(i + 1).padStart(2, '0')}</span>
              <h3 style={{
                fontFamily: "'Noto Serif TC', serif", fontWeight: 400,
                fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                letterSpacing: '0.06em', lineHeight: 1.5,
                marginTop: '1rem', marginBottom: '2rem',
              }}>{s.headline}</h3>
              <ul style={{
                listStyle: 'none', padding: 0,
                display: 'flex', flexDirection: 'column', gap: '1rem',
              }}>
                {s.items.map((item, j) => (
                  <li key={j} style={{
                    fontFamily: "'Noto Sans TC', sans-serif",
                    fontSize: '16px', lineHeight: 1.85, letterSpacing: '0.04em',
                    paddingLeft: '1.25rem',
                    borderLeft: '2px solid var(--accent)',
                  }}>{item}</li>
                ))}
              </ul>
              <p style={{
                fontFamily: "'Noto Sans TC', sans-serif",
                fontSize: '16px', lineHeight: 1.85,
                color: 'var(--warm-mid)', letterSpacing: '0.04em',
                marginTop: '2rem', fontStyle: 'italic',
              }}>{s.differentiator}</p>
            </div>
            {/* Visual placeholder */}
            <div style={{
              direction: 'ltr',
              aspectRatio: '4/3',
              background: 'var(--bg-alt)',
              border: '1px solid var(--light-rule)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
              fontSize: '3rem', color: 'var(--light-rule)',
            }}>
              {String(i + 1).padStart(2, '0')}
            </div>
          </div>
        );
      })}
      <style>{`@media(max-width:768px){.svc-detail-row{grid-template-columns:1fr!important;direction:ltr!important;gap:2rem!important}}`}</style>
    </section>
  );
}
