import type { ReactNode } from 'react';

interface Step {
  num: string;
  name: string;
  duration: string;
  desc: string;
  icon?: ReactNode;
}

interface Props {
  title: string;
  steps: Step[];
}

export default function ProcessTimeline({ title, steps }: Props) {
  return (
    <section style={{
      padding: '7.5rem 4rem',
      borderTop: '1px solid var(--light-rule)',
    }}>
      <h2 style={{
        fontFamily: "'Noto Serif TC', serif", fontWeight: 400,
        fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
        letterSpacing: '0.08em', textAlign: 'center',
        marginBottom: '4rem',
      }}>{title}</h2>

      <div className="timeline-row" style={{
        display: 'flex', justifyContent: 'center',
        gap: '1rem', maxWidth: '1000px', margin: '0 auto',
      }}>
        {steps.map((s, i) => (
          <div key={i} style={{
            flex: 1, display: 'flex', flexDirection: 'column',
            alignItems: 'center', textAlign: 'center', gap: '0.75rem',
            position: 'relative',
          }}>
            {s.icon && <div style={{ marginBottom: '0.5rem', lineHeight: 0 }}>{s.icon}</div>}
            <span style={{
              fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
              fontSize: 'clamp(2rem, 3vw, 3rem)',
              color: 'var(--light-rule)', lineHeight: 1,
            }}>{s.num}</span>
            <span style={{
              fontFamily: "'Noto Serif TC', serif", fontWeight: 500,
              fontSize: '16px', letterSpacing: '0.08em',
            }}>{s.name}</span>
            <span style={{
              fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
              fontSize: '14px', color: 'var(--warm-mid)',
              letterSpacing: '0.1em',
            }}>{s.duration}</span>
            <p style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontSize: '14px', color: 'var(--warm-mid)',
              lineHeight: 1.7, letterSpacing: '0.04em',
            }}>{s.desc}</p>
          </div>
        ))}
      </div>
      <style>{`@media(max-width:768px){.timeline-row{flex-direction:column!important;gap:2rem!important;align-items:stretch!important}.timeline-row>div{align-items:flex-start!important;text-align:left!important;padding-left:3rem;border-left:2px solid var(--light-rule)}}`}</style>
    </section>
  );
}
