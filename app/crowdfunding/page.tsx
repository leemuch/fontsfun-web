import type { Metadata } from 'next';
import PageHero from '../../components/PageHero';
import { crowdfundingCases } from '../../data/crowdfunding-cases';

export const metadata: Metadata = {
  title: '募資代操 — 盛和設計 × 字趣 fontsfun',
  description: '嘖嘖、貝殼放大專案代操 × 廣告投放 × 視覺設計一條龍。',
};

const services = [
  {
    icon: '📋',
    title: '募資專案企劃與執行',
    desc: '熟悉嘖嘖、貝殼放大等主要募資平台生態，從提案策略、回饋設計、排程規劃到上線後操盤，一路陪跑。',
  },
  {
    icon: '🎨',
    title: '募資頁視覺與設計',
    desc: '從 Banner、產品情境圖、GIF、影片腳本到頁面排版，所有募資頁需要的視覺素材一次做完，風格與品牌完全一致。',
  },
  {
    icon: '📈',
    title: '廣告投放與流量操盤',
    desc: 'Meta（Facebook/Instagram）、Google 廣告規劃與投放，募資前預熱、募資中推進、募資後延伸導流，節奏由數據決定。',
  },
];

const platforms = ['嘖嘖 zeczec', '貝殼放大 Backer-Founder', 'flyingV', 'Kickstarter'];

export default function CrowdfundingPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        title="募資成敗，從設計與行銷開始"
        subtitle="嘖嘖、貝殼放大專案代操 × 廣告投放 × 視覺設計一條龍"
      />

      {/* Services — 3 cards */}
      <section style={{ padding: '6rem 4rem' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem',
        }} className="cf-services-grid">
          {services.map((s) => (
            <div key={s.title} className="stagger-item hover-lift" style={{
              padding: '2.5rem 2rem',
              border: '1px solid var(--light-rule)',
              display: 'flex', flexDirection: 'column', gap: '1rem',
            }}>
              <span style={{ fontSize: '2rem' }}>{s.icon}</span>
              <h3 style={{
                fontFamily: "'Noto Serif TC', serif", fontWeight: 500,
                fontSize: '1.1rem', letterSpacing: '0.08em',
              }}>{s.title}</h3>
              <p style={{
                fontFamily: "'Noto Sans TC', sans-serif",
                fontSize: '16px', lineHeight: 2,
                letterSpacing: '0.04em', color: 'var(--warm-mid)',
              }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Platforms */}
      <section style={{
        padding: '4rem',
        borderTop: '1px solid var(--light-rule)',
        borderBottom: '1px solid var(--light-rule)',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontFamily: "'Noto Serif TC', serif", fontWeight: 400,
          fontSize: '1.1rem', letterSpacing: '0.15em',
          marginBottom: '2.5rem',
        }}>合作平台</h2>
        <div style={{
          display: 'flex', justifyContent: 'center', gap: '3rem',
          flexWrap: 'wrap', alignItems: 'baseline',
        }}>
          {platforms.map((p) => (
            <span key={p} style={{
              fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
              fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)',
              color: 'var(--warm-mid)', letterSpacing: '0.08em',
            }}>{p}</span>
          ))}
        </div>
      </section>

      {/* Cases */}
      <section style={{ padding: '6rem 4rem' }}>
        <div style={{
          display: 'flex', alignItems: 'baseline', gap: '1.5rem',
          marginBottom: '4rem', paddingBottom: '1rem',
          borderBottom: '1px solid var(--light-rule)',
        }}>
          <span style={{
            fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
            fontSize: '14px', color: 'var(--warm-mid)', letterSpacing: '0.15em',
          }}>Selected Projects</span>
          <h2 style={{
            fontFamily: "'Noto Serif TC', serif", fontWeight: 500,
            fontSize: '1.1rem', letterSpacing: '0.15em',
          }}>精選案例</h2>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem',
        }} className="cf-cases-grid">
          {crowdfundingCases.map((c) => (
            <a
              key={c.id}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-lift"
              style={{
                textDecoration: 'none', color: 'inherit',
                border: '1px solid var(--light-rule)',
                overflow: 'hidden', display: 'flex', flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
            >
              {/* Cover */}
              <div style={{ aspectRatio: '16/9', overflow: 'hidden', background: '#1a1714' }}>
                <img src={c.cover} alt={c.fullTitle} loading="lazy" style={{
                  width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                }} />
              </div>

              {/* Info */}
              <div style={{ padding: '1.75rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {/* Platform tag */}
                <span style={{
                  alignSelf: 'flex-start',
                  fontFamily: "'Noto Sans TC', sans-serif",
                  fontSize: '12px', letterSpacing: '0.1em',
                  color: 'var(--warm-mid)',
                  border: '1px solid var(--light-rule)',
                  padding: '0.15rem 0.5rem',
                }}>{c.platform}</span>

                {/* Title */}
                <h3 style={{
                  fontFamily: "'Noto Serif TC', serif", fontWeight: 500,
                  fontSize: '1.15rem', letterSpacing: '0.06em', lineHeight: 1.5,
                }}>{c.title}</h3>

                {/* Achievement — big number */}
                <span style={{
                  fontFamily: "'Cormorant Garamond', serif", fontWeight: 600,
                  fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                  lineHeight: 1, color: 'var(--accent)',
                  letterSpacing: '0.02em',
                }}>{c.achievement}</span>

                {/* Amount */}
                <span style={{
                  fontFamily: "'Noto Sans TC', sans-serif",
                  fontSize: '16px', color: 'var(--warm-mid)',
                  letterSpacing: '0.06em',
                }}>{c.amount}</span>

                {/* Service tags */}
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '0.25rem' }}>
                  {c.services.map((s) => (
                    <span key={s} style={{
                      fontFamily: "'Noto Sans TC', sans-serif",
                      fontSize: '12px', letterSpacing: '0.08em',
                      color: 'var(--accent)',
                      border: '1px solid var(--accent)',
                      padding: '0.1rem 0.45rem',
                    }}>{s}</span>
                  ))}
                </div>

                {/* Summary */}
                <p style={{
                  fontFamily: "'Noto Sans TC', sans-serif",
                  fontSize: '16px', lineHeight: 1.85, color: 'var(--warm-mid)',
                  letterSpacing: '0.04em',
                  display: '-webkit-box', WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical', overflow: 'hidden',
                  marginTop: 'auto',
                } as React.CSSProperties}>{c.summary}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: '6rem 4rem',
        background: 'var(--ink)', color: 'var(--paper)',
        textAlign: 'center',
        borderTop: '1px solid var(--light-rule)',
      }}>
        <h2 style={{
          fontFamily: "'Noto Serif TC', serif", fontWeight: 300,
          fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
          lineHeight: 1.4, letterSpacing: '0.08em',
          marginBottom: '1.25rem',
        }}>想讓你的募資案被看見？</h2>
        <p style={{
          fontFamily: "'Noto Sans TC', sans-serif",
          fontSize: '16px', color: '#999',
          letterSpacing: '0.06em', lineHeight: 2,
          marginBottom: '2.5rem',
        }}>從提案到投放，讓我們陪你一起跑完全程</p>
        <a
          href="mailto:fontsfun18@gmail.com"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
            padding: '1rem 2.5rem',
            background: 'var(--accent)', color: '#fff',
            fontFamily: "'Noto Sans TC', sans-serif",
            fontSize: '16px', letterSpacing: '0.18em',
            textDecoration: 'none',
            transition: 'opacity 0.2s',
          }}
        >聊聊你的專案 →</a>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .cf-cases-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .cf-services-grid,
          .cf-cases-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
