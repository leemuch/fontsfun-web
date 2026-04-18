interface Props {
  title: string;
  subtitle: string;
  nodes: string[];
}

export default function ServiceSpectrum({ title, subtitle, nodes }: Props) {
  return (
    <section style={{
      padding: '7.5rem 4rem',
      borderTop: '1px solid var(--light-rule)',
      borderBottom: '1px solid var(--light-rule)',
      textAlign: 'center',
    }}>
      <h2 style={{
        fontFamily: "'Noto Serif TC', serif", fontWeight: 400,
        fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
        letterSpacing: '0.08em', marginBottom: '4rem',
      }}>{title}</h2>

      <div className="spectrum-row" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: 0, maxWidth: '800px', margin: '0 auto',
      }}>
        {nodes.map((n, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem',
              minWidth: '80px',
            }}>
              <div style={{
                width: '48px', height: '48px', borderRadius: '50%',
                border: '2px solid var(--ink)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: "'Noto Sans TC', sans-serif",
                fontSize: '14px', fontWeight: 500, letterSpacing: '0.06em',
              }}>{String(i + 1).padStart(2, '0')}</div>
              <span style={{
                fontFamily: "'Noto Sans TC', sans-serif",
                fontSize: '16px', letterSpacing: '0.1em', fontWeight: 500,
              }}>{n}</span>
            </div>
            {i < nodes.length - 1 && (
              <div style={{
                width: '40px', height: '2px',
                background: 'var(--light-rule)', flexShrink: 0,
              }} />
            )}
          </div>
        ))}
      </div>

      <p style={{
        fontFamily: "'Noto Sans TC', sans-serif",
        fontSize: '16px', color: 'var(--warm-mid)',
        letterSpacing: '0.06em', lineHeight: 1.85,
        marginTop: '3rem',
      }}>{subtitle}</p>

      <style>{`@media(max-width:768px){.spectrum-row{flex-direction:column!important;gap:0.5rem!important}.spectrum-row>div>div:last-child{width:2px!important;height:24px!important}}`}</style>
    </section>
  );
}
