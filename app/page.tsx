import TypeTester from '../components/TypeTester';
import Link from 'next/link';

const fonts = [
  {
    status: '現已上市', statusStyle: { background: '#2d4a2d', color: '#7ac47a' },
    specimen: '綿甜體', specimenSub: 'Aa Bb 字趣', specimenColor: 'var(--ink)',
    name: '綿甜體', nameEn: 'Miantian Typeface',
    desc: '溫柔而有個性的繁體中文字型，筆畫帶有手感溫度，適合品牌包裝、書籍封面、文化出版品等需要溫暖質感的場景。收錄常用漢字 13,000+ 字。',
    tags: ['繁體中文', '手感風格', '品牌包裝', '書籍封面'],
  },
  {
    status: '開發中', statusStyle: { background: '#3a3020', color: '#c4a87a' },
    specimen: '明朝體', specimenSub: '敬請期待', specimenColor: '#bbb',
    name: '[ 新字體 · 待發表 ]', nameEn: 'Upcoming Release',
    desc: '第二款原創繁體中文字型，目前仍在開發階段。風格走向偏向文學閱讀場景，適合長文排版與書籍內文使用。預計年底發布。',
    tags: ['繁體中文', '長文閱讀', '書籍內文', '開發中'],
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── IN-PAGE TABS ── */}
      <div style={{
        position: 'sticky', top: '61px', zIndex: 90,
        display: 'flex', background: 'var(--ink)',
        borderBottom: '1px solid #333',
      }}>
        {[
          { label: '字體展示', num: '01', href: '#section-fonts' },
          { label: '購買授權', num: '02', href: '/buy' },
          { label: '新品發佈', num: '03', href: '/releases' },
        ].map((tab, i) => (
          <a key={tab.num} href={tab.href} style={{
            flex: 1, padding: '1.1rem 2rem', textAlign: 'center',
            fontFamily: "'Noto Sans TC', sans-serif",
            fontSize: '0.72rem', letterSpacing: '0.15em',
            color: '#888', background: 'none',
            borderRight: i < 2 ? '1px solid #2a2a2a' : 'none',
            textDecoration: 'none', transition: 'color 0.25s',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.2rem',
          }}>
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic', fontSize: '0.7rem', color: 'var(--warm-mid)', display: 'block',
            }}>{tab.num}</span>
            {tab.label}
          </a>
        ))}
      </div>

      {/* ── SECTION 1: 字體展示 ── */}
      <section id="section-fonts" style={{ padding: '6rem 4rem 5rem' }}>
        {/* Section header */}
        <div style={{
          display: 'flex', alignItems: 'baseline', gap: '1.5rem',
          marginBottom: '4rem', paddingBottom: '1rem',
          borderBottom: '1px solid var(--light-rule)',
        }}>
          <span style={{
            fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
            fontSize: '0.8rem', color: 'var(--warm-mid)', letterSpacing: '0.15em',
          }}>01</span>
          <h2 style={{
            fontFamily: "'Noto Serif TC', serif",
            fontWeight: 500, fontSize: '1.1rem', letterSpacing: '0.15em',
          }}>字體展示</h2>
        </div>

        {/* Type Tester */}
        <TypeTester />

        {/* Font Cards */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
          border: '1px solid var(--light-rule)',
        }}>
          {fonts.map((font, i) => (
            <div key={font.name} className="font-card" style={{
              padding: '3.5rem',
              borderRight: i % 2 === 0 ? '1px solid var(--light-rule)' : 'none',
              position: 'relative', overflow: 'hidden',
            }}>
              {/* Status badge */}
              <span style={{
                position: 'absolute', top: '1.5rem', right: '1.5rem',
                fontFamily: "'Noto Sans TC', sans-serif",
                fontSize: '0.6rem', letterSpacing: '0.15em',
                padding: '0.25rem 0.7rem', ...font.statusStyle,
              }}>{font.status}</span>

              {/* Specimen */}
              <div style={{
                fontFamily: "'Noto Serif TC', serif",
                fontSize: 'clamp(2.5rem, 4vw, 4.5rem)',
                lineHeight: 1.2, letterSpacing: '0.04em',
                color: font.specimenColor, marginBottom: '2rem',
              }}>
                {font.specimen}<br />
                <span style={{ fontSize: '0.5em', color: '#888' }}>{font.specimenSub}</span>
              </div>

              <h3 style={{
                fontFamily: "'Noto Serif TC', serif",
                fontWeight: 500, fontSize: '1rem', letterSpacing: '0.15em', marginBottom: '0.5rem',
              }}>{font.name}</h3>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
                fontSize: '0.85rem', color: 'var(--warm-mid)',
                letterSpacing: '0.1em', marginBottom: '1.25rem',
              }}>{font.nameEn}</p>
              <p style={{
                fontFamily: "'Noto Sans TC', sans-serif",
                fontSize: '0.72rem', color: '#888',
                lineHeight: 2, letterSpacing: '0.05em', marginBottom: '1.5rem',
              }}>{font.desc}</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {font.tags.map(tag => (
                  <span key={tag} style={{
                    fontFamily: "'Noto Sans TC', sans-serif",
                    fontSize: '0.6rem', letterSpacing: '0.12em',
                    color: 'var(--warm-mid)', border: '1px solid var(--light-rule)',
                    padding: '0.2rem 0.6rem',
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Glyphs Strip */}
        <div className="glyphs-strip" style={{
          padding: '3rem 4rem',
          borderTop: '1px solid var(--light-rule)',
          borderBottom: '1px solid var(--light-rule)',
          marginTop: '4rem',
        }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
            fontSize: '0.8rem', color: 'var(--warm-mid)',
            letterSpacing: '0.15em', marginBottom: '1.5rem',
          }}>Glyph Specimen · 字型標本</p>
          <div style={{
            fontFamily: "'Noto Serif TC', serif",
            fontSize: '1.8rem', letterSpacing: '0.25em',
            color: '#c8c0b4', lineHeight: 1.6,
          }}>永 字 八 法 　 一 筆 一 畫 　 皆 有 來 歷</div>
          <div style={{
            fontFamily: "'Noto Serif TC', serif",
            fontSize: '1.2rem', letterSpacing: '0.25em',
            color: '#c8c0b4', lineHeight: 1.6, marginTop: '1rem',
          }}>ABCDEFGHIJKLMNOPQRSTUVWXYZ &amp; 0123456789</div>
        </div>
      </section>
    </>
  );
}
