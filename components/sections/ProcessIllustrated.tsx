const steps = [
  {
    num: '01',
    title: '需求溝通',
    desc: '深度了解你的品牌定位、目標受眾、競爭環境與視覺期望，確認合作範疇與時程。',
    color: '#e05545',
    icon: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Large bubble */}
        <rect x="8" y="16" width="40" height="30" rx="15" stroke="#e05545" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <polygon points="22,46 18,56 30,46" fill="none" stroke="#e05545" strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="21" cy="31" r="2.5" fill="#e05545" />
        <circle cx="28" cy="31" r="2.5" fill="#e05545" />
        <circle cx="35" cy="31" r="2.5" fill="#e05545" />
        {/* Small bubble */}
        <rect x="42" y="8" width="28" height="22" rx="11" stroke="#e05545" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <polygon points="56,30 60,38 50,30" fill="none" stroke="#e05545" strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="52" cy="19" r="2" fill="#e05545" />
        <circle cx="60" cy="19" r="2" fill="#e05545" />
      </svg>
    ),
  },
  {
    num: '02',
    title: '概念提案',
    desc: '提出 2–3 個設計方向，以視覺草稿說明設計理念與應用場景，共同確認方向。',
    color: '#e8a838',
    icon: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Paper */}
        <rect x="14" y="12" width="40" height="52" rx="4" stroke="#e8a838" strokeWidth="2.5" strokeLinecap="round" />
        {/* Lines */}
        <line x1="22" y1="28" x2="46" y2="28" stroke="#e8a838" strokeWidth="2" strokeLinecap="round" />
        <line x1="22" y1="36" x2="42" y2="36" stroke="#e8a838" strokeWidth="2" strokeLinecap="round" />
        <line x1="22" y1="44" x2="38" y2="44" stroke="#e8a838" strokeWidth="2" strokeLinecap="round" />
        {/* Lightbulb */}
        <circle cx="60" cy="24" r="12" stroke="#e8a838" strokeWidth="2.5" />
        <path d="M55 36 L57 42 L63 42 L65 36" stroke="#e8a838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="57" y1="45" x2="63" y2="45" stroke="#e8a838" strokeWidth="2" strokeLinecap="round" />
        {/* Filament */}
        <path d="M57 24 Q60 18 63 24" stroke="#e8a838" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    num: '03',
    title: '精稿修訂',
    desc: '根據選定方向深入製作，提供 2 次修改機會，確保每個細節都符合品牌需求。',
    color: '#4a9e6b',
    icon: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Pencil */}
        <line x1="16" y1="60" x2="48" y2="20" stroke="#4a9e6b" strokeWidth="2.5" strokeLinecap="round" />
        <polygon points="48,20 52,16 56,20 52,24" stroke="#4a9e6b" strokeWidth="2" strokeLinejoin="round" fill="none" />
        <line x1="16" y1="60" x2="12" y2="66" stroke="#4a9e6b" strokeWidth="2.5" strokeLinecap="round" />
        {/* Circle being drawn */}
        <circle cx="56" cy="48" r="14" stroke="#4a9e6b" strokeWidth="2.5" strokeDasharray="6 4" />
        {/* Revision arrows */}
        <path d="M62 34 Q72 38 68 48" stroke="#4a9e6b" strokeWidth="2" strokeLinecap="round" fill="none" />
        <polygon points="68,48 72,46 70,51" fill="#4a9e6b" />
        <path d="M50 62 Q40 58 44 48" stroke="#4a9e6b" strokeWidth="2" strokeLinecap="round" fill="none" />
        <polygon points="44,48 40,50 42,45" fill="#4a9e6b" />
      </svg>
    ),
  },
  {
    num: '04',
    title: '交付完稿',
    desc: '提供可印刷與數位版本的完整檔案，附使用規範說明，確保後續應用無障礙。',
    color: '#4a7ab5',
    icon: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Envelope body */}
        <rect x="10" y="24" width="48" height="36" rx="4" stroke="#4a7ab5" strokeWidth="2.5" strokeLinecap="round" />
        {/* Envelope flap open */}
        <path d="M10 28 L34 46 L58 28" stroke="#4a7ab5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M10 24 L34 40 L58 24" stroke="#4a7ab5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* Star flying out */}
        <polygon points="62,12 64,20 72,20 66,25 68,33 62,28 56,33 58,25 52,20 60,20" stroke="#4a7ab5" strokeWidth="2" strokeLinejoin="round" fill="none" />
        {/* Sparkles */}
        <circle cx="72" cy="8" r="1.5" fill="#4a7ab5" />
        <circle cx="50" cy="10" r="1" fill="#4a7ab5" />
        <line x1="74" y1="16" x2="78" y2="14" stroke="#4a7ab5" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function ProcessIllustrated() {
  return (
    <section style={{ padding: '7.5rem 4rem', background: '#f5f2eb' }}>
      <div style={{
        display: 'flex', alignItems: 'baseline', gap: '1.5rem',
        marginBottom: '4rem', paddingBottom: '1rem',
        borderBottom: '1px solid var(--light-rule)',
      }}>
        <span style={{
          fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
          fontSize: '14px', color: 'var(--warm-mid)', letterSpacing: '0.15em',
        }}>03</span>
        <h2 style={{
          fontFamily: "'Noto Serif TC', serif", fontWeight: 500,
          fontSize: '1.1rem', letterSpacing: '0.15em',
        }}>合作流程</h2>
      </div>

      <div className="process-illustrated" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '2rem',
        position: 'relative',
      }}>
        {steps.map((s, i) => (
          <div key={s.num} style={{
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', textAlign: 'center',
            gap: '1rem', position: 'relative',
          }}>
            {/* SVG icon */}
            <div style={{
              width: '80px', height: '80px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {s.icon}
            </div>

            {/* Dashed arrow connector (between steps, not after last) */}
            {i < steps.length - 1 && (
              <div className="process-arrow" style={{
                position: 'absolute',
                top: '40px',
                right: '-1rem',
                width: '2rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="32" height="12" viewBox="0 0 32 12">
                  <line x1="0" y1="6" x2="24" y2="6" stroke="var(--light-rule)" strokeWidth="1.5" strokeDasharray="4 3" />
                  <polygon points="24,2 32,6 24,10" fill="var(--light-rule)" />
                </svg>
              </div>
            )}

            {/* Number */}
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.5rem, 2vw, 2rem)',
              fontWeight: 300, lineHeight: 1,
              color: s.color, opacity: 0.5,
            }}>{s.num}</span>

            {/* Title */}
            <h3 style={{
              fontFamily: "'Noto Serif TC', serif", fontWeight: 500,
              fontSize: '16px', letterSpacing: '0.1em',
            }}>{s.title}</h3>

            {/* Description */}
            <p style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontSize: '14px', lineHeight: 1.85,
              color: '#5a5550', letterSpacing: '0.04em',
              maxWidth: '220px',
            }}>{s.desc}</p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .process-illustrated {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 3rem 1.5rem !important;
          }
          .process-arrow { display: none !important; }
        }
        @media (max-width: 480px) {
          .process-illustrated {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
