import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '../../components/ScrollReveal';
import PageHero from '../../components/PageHero';

export const metadata: Metadata = {
  title: '購買授權 — 字趣 fontsfun',
  description: '彈性字體授權方案，個人、工作室、企業皆有對應方案，買斷制永久使用。',
};

const plans = [
  {
    type: 'Personal', name: '個人授權', price: 'NT$990',
    priceNote: '單一字重 · 買斷制', featured: false,
    features: [
      { label: '個人創作與商業使用', included: true },
      { label: '印刷品設計', included: true },
      { label: '社群媒體', included: true },
      { label: '嵌入網頁字體', included: false },
      { label: 'APP 嵌入使用', included: false },
      { label: '轉授權他人', included: false },
    ],
    btnLabel: '選擇方案', btnHref: '#', btnPrimary: false,
  },
  {
    type: 'Studio', name: '工作室授權', price: 'NT$3,500',
    priceNote: '全字重 · 5 人以下團隊', featured: true,
    features: [
      { label: '商業設計全場景使用', included: true },
      { label: '印刷品・數位・廣告', included: true },
      { label: '客戶提案與交付', included: true },
      { label: '嵌入網頁字體', included: true },
      { label: 'APP 嵌入使用', included: false },
      { label: '轉授權他人', included: false },
    ],
    btnLabel: '選擇方案', btnHref: '#', btnPrimary: true,
  },
  {
    type: 'Enterprise', name: '企業授權', price: '洽詢',
    priceNote: '大型企業 · 客製方案', featured: false,
    features: [
      { label: '全字重無限用途', included: true },
      { label: '全平台全場景', included: true },
      { label: 'APP 嵌入授權', included: true },
      { label: '網頁字體 CDN', included: true },
      { label: '客製字形調整', included: true },
      { label: '品牌專屬字體', included: true },
    ],
    btnLabel: '聯絡洽詢', btnHref: '/#contact', btnPrimary: false,
  },
];

const compareRows = [
  { label: '印刷品設計',        personal: true,  studio: true,  enterprise: true  },
  { label: '商業廣告',          personal: true,  studio: true,  enterprise: true  },
  { label: '客戶交付設計稿',    personal: false, studio: true,  enterprise: true  },
  { label: '嵌入網頁 (webfont)',personal: false, studio: false, enterprise: true  },
  { label: 'APP 內嵌使用',      personal: false, studio: false, enterprise: true  },
  { label: '影視字幕',          personal: true,  studio: true,  enterprise: true  },
];

export default function BuyPage() {
  return (
    <>
    <PageHero
      title="為品牌而做的字，現在就能用"
      subtitle="商用授權一次購足，支援品牌、包裝、數位全場景"
    />
    <section id="section-buy" style={{
      padding: '6rem 4rem',
      background: '#f0ece3',
      minHeight: '100vh',
    }}>
      {/* Section header */}
      <div style={{
        display: 'flex', alignItems: 'baseline', gap: '1.5rem',
        marginBottom: '4rem', paddingBottom: '1rem',
        borderBottom: '1px solid var(--light-rule)',
      }}>
        <span style={{
          fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
          fontSize: '0.8rem', color: 'var(--warm-mid)', letterSpacing: '0.15em',
        }}>02</span>
        <h1 style={{
          fontFamily: "'Noto Serif TC', serif",
          fontWeight: 500, fontSize: '1.1rem',
          letterSpacing: '0.15em', color: 'var(--paper)',
        }}>購買授權</h1>
      </div>

      <p style={{
        fontFamily: "'Noto Sans TC', sans-serif",
        fontSize: '0.8rem', color: '#888',
        lineHeight: 2.2, letterSpacing: '0.06em',
        maxWidth: '48rem', marginBottom: '4rem',
      }}>
        字趣字型採彈性授權方案，從個人創作者到大型企業皆有對應方案。所有授權均為買斷制，一次購買永久使用，不收年費。企業客製字體方案請另行洽詢。
      </p>

      {/* Plans Grid */}
      <ScrollReveal style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        border: '1px solid var(--light-rule)', marginBottom: '4rem',
      }}>
        {plans.map((plan, i) => (
          <div key={plan.type} className={`plan-card stagger-item hover-lift${plan.featured ? ' plan-featured' : ''}`} style={{
            padding: '3rem 2.5rem',
            borderRight: i < 2 ? '1px solid var(--light-rule)' : 'none',
            position: 'relative',
            background: plan.featured ? '#1a1714' : '#f5f2eb',
            transition: 'background 0.25s',
          }}>
            {plan.featured && (
              <span style={{
                position: 'absolute', top: '-1px', left: '50%',
                transform: 'translateX(-50%)',
                background: 'var(--accent)', color: '#fff',
                fontFamily: "'Noto Sans TC', sans-serif",
                fontSize: '0.6rem', letterSpacing: '0.15em',
                padding: '0.3rem 1rem',
              }}>推薦方案</span>
            )}
            <p style={{
              fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
              fontSize: '0.8rem', color: plan.featured ? '#a09880' : 'var(--warm-mid)',
              letterSpacing: '0.15em', marginBottom: '1rem',
            }}>{plan.type}</p>
            <h2 style={{
              fontFamily: "'Noto Serif TC', serif",
              fontWeight: 500, fontSize: '1.1rem',
              letterSpacing: '0.12em', marginBottom: '1.5rem',
              color: plan.featured ? '#f5f2eb' : '#1a1714',
            }}>{plan.name}</h2>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '3rem', fontWeight: 300, lineHeight: 1, marginBottom: '0.3rem',
              color: plan.featured ? '#f5f2eb' : '#1a1714',
            }}>{plan.price}</div>
            <p style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontSize: '0.65rem', color: plan.featured ? '#999' : '#5a5550',
              letterSpacing: '0.1em', marginBottom: '2rem',
            }}>{plan.priceNote}</p>

            <ul style={{ listStyle: 'none', marginBottom: '2.5rem' }}>
              {plan.features.map(f => (
                <li key={f.label} style={{
                  fontFamily: "'Noto Sans TC', sans-serif",
                  fontSize: '0.72rem',
                  color: plan.featured
                    ? (f.included ? '#e8e4dc' : '#666')
                    : (f.included ? '#1a1714' : '#999'),
                  padding: '0.6rem 0',
                  borderBottom: `1px solid ${plan.featured ? '#2a2620' : 'var(--light-rule)'}`,
                  letterSpacing: '0.06em',
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                }}>
                  <span style={{
                    color: f.included ? '#7ac47a' : (plan.featured ? '#555' : 'var(--warm-mid)'),
                    fontFamily: "'Cormorant Garamond', serif",
                  }}>
                    {f.included ? '✓' : '—'}
                  </span>
                  {f.label}
                </li>
              ))}
            </ul>

            <Link href={plan.btnHref} style={{
              display: 'block', width: '100%', padding: '0.9rem',
              fontFamily: "'Noto Sans TC', sans-serif",
              fontSize: '0.72rem', letterSpacing: '0.15em',
              textAlign: 'center', textDecoration: 'none', cursor: 'pointer',
              transition: 'all 0.25s',
              ...(plan.btnPrimary
                ? { background: 'var(--accent)', border: '1px solid var(--accent)', color: '#fff' }
                : { background: 'none', border: '1px solid var(--light-rule)', color: '#5a5550' }),
            }}>{plan.btnLabel}</Link>
          </div>
        ))}
      </ScrollReveal>

      {/* Comparison Table */}
      <h3 style={{
        fontFamily: "'Noto Serif TC', serif",
        fontWeight: 400, fontSize: '1rem',
        letterSpacing: '0.15em', marginBottom: '2rem', color: '#1a1714',
      }}>授權比較一覽</h3>
      <table className="compare-table" style={{ width: '100%', borderCollapse: 'collapse', background: '#f5f2eb', border: '1px solid #d4cfc7' }}>
        <thead>
          <tr>
            {['使用場景', '個人授權', '工作室授權', '企業授權'].map(h => (
              <th key={h} style={{
                padding: '1rem 1.5rem',
                borderBottom: '2px solid #d4cfc7',
                fontFamily: "'Noto Sans TC', sans-serif",
                fontSize: '16px', color: '#1a1714',
                fontWeight: 600, letterSpacing: '0.1em',
                background: '#ede9e0', textAlign: 'left',
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {compareRows.map((row, ri) => (
            <tr key={row.label} style={{ background: ri % 2 === 0 ? '#f5f2eb' : '#ede9e0' }}>
              <td className="td-label" style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #d4cfc7', fontFamily: "'Noto Sans TC', sans-serif", fontSize: '16px', letterSpacing: '0.06em' }}>{row.label}</td>
              {[row.personal, row.studio, row.enterprise].map((v, i) => (
                <td key={i} className={v ? 'td-check' : 'td-dash'} style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #d4cfc7', fontFamily: "'Noto Sans TC', sans-serif", fontSize: '16px' }}>
                  {v ? '✓' : '—'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
    </>
  );
}
