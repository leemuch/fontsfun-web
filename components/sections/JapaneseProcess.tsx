interface Step {
  num: string;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
}

interface Props {
  steps: Step[];
}

export default function JapaneseProcess({ steps }: Props) {
  return (
    <section style={{ background: '#f5f2eb' }}>
      {steps.map((s, i) => {
        const reverse = i % 2 === 1;
        return (
          <div key={s.num}>
            {/* Step row */}
            <div className="jp-step-row" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              minHeight: '520px',
              direction: reverse ? 'rtl' : 'ltr',
            }}>
              {/* Image side */}
              <div style={{
                direction: 'ltr',
                overflow: 'hidden',
                background: '#e8e4db',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <img src={s.image} alt={s.title} loading="lazy" style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', display: 'block',
                }} />
              </div>

              {/* Text side */}
              <div style={{
                direction: 'ltr',
                padding: '5rem 4.5rem',
                display: 'flex', flexDirection: 'column',
                justifyContent: 'center',
                position: 'relative',
              }}>
                {/* Decorative large number */}
                <span style={{
                  position: 'absolute',
                  top: '2.5rem', right: reverse ? 'auto' : '3rem',
                  left: reverse ? '3rem' : 'auto',
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(5rem, 8vw, 8rem)',
                  fontWeight: 300, lineHeight: 1,
                  color: '#ddd8cd',
                  pointerEvents: 'none',
                  userSelect: 'none',
                }}>{s.num}</span>

                {/* Subtitle (English) */}
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
                  fontSize: '14px', color: 'var(--warm-mid)',
                  letterSpacing: '0.25em', marginBottom: '0.75rem',
                  textTransform: 'uppercase',
                }}>{s.subtitle}</p>

                {/* Title */}
                <h3 style={{
                  fontFamily: "'Noto Serif TC', serif", fontWeight: 400,
                  fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                  letterSpacing: '0.1em', lineHeight: 1.4,
                  marginBottom: '1.5rem',
                }}>{s.title}</h3>

                {/* Description */}
                <p style={{
                  fontFamily: "'Noto Sans TC', sans-serif", fontWeight: 300,
                  fontSize: '18px', lineHeight: 2.2,
                  letterSpacing: '0.06em', color: '#5a5550',
                  maxWidth: '28rem',
                }}>{s.desc}</p>
              </div>
            </div>

            {/* Connector line between steps */}
            {i < steps.length - 1 && (
              <div style={{
                display: 'flex', justifyContent: 'center',
                padding: '2rem 0',
              }}>
                <div style={{
                  width: '1px', height: '48px',
                  background: 'var(--light-rule)',
                  position: 'relative',
                }}>
                  {/* Arrow tip */}
                  <div style={{
                    position: 'absolute', bottom: '-6px', left: '-4px',
                    width: 0, height: 0,
                    borderLeft: '5px solid transparent',
                    borderRight: '5px solid transparent',
                    borderTop: '8px solid var(--light-rule)',
                  }} />
                </div>
              </div>
            )}
          </div>
        );
      })}

      <style>{`
        @media (max-width: 900px) {
          .jp-step-row {
            grid-template-columns: 1fr !important;
            direction: ltr !important;
            min-height: auto !important;
          }
          .jp-step-row > div:last-child {
            padding: 3rem 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
