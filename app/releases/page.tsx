import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '新品發佈 — 字趣 fontsfun',
  description: '字趣最新字體發布資訊、更新日誌與發展時間軸。',
};

const timelineItems = [
  {
    date: '2025 · March', name: '綿甜體 2.0',
    desc: '字元擴充至 13,500+，新增替換字形，全面優化標點比例與視覺重心。既有授權用戶免費升級。',
    status: '已上市', statusStyle: { background: '#1a3a1a', color: '#7ac47a' },
    dotStyle: { background: 'var(--accent)', borderColor: 'var(--accent)' },
  },
  {
    date: '2024 · September', name: '綿甜體 1.5 · 字重擴充版',
    desc: '新增 Light 與 Bold 兩個字重，滿足不同排版場景的粗細需求。',
    status: '已上市', statusStyle: { background: '#1a3a1a', color: '#7ac47a' },
    dotStyle: { background: 'var(--paper)', borderColor: 'var(--warm-mid)' },
  },
  {
    date: '2024 · January', name: '綿甜體 1.0 · 正式版',
    desc: '首次公開發行，收錄 11,000 常用字，Regular 單一字重。',
    status: '已上市', statusStyle: { background: '#1a3a1a', color: '#7ac47a' },
    dotStyle: { background: 'var(--paper)', borderColor: 'var(--warm-mid)' },
  },
  {
    date: '2025 · Q4（預計）', name: '全新字型 · 長文閱讀系列',
    desc: '第二款原創繁體中文字型，專為書籍內文與長篇閱讀場景設計，詳情稍後公布。',
    status: '開發中', statusStyle: { background: '#2a2a3a', color: '#8090c4' },
    dotStyle: { background: 'var(--paper)', borderColor: 'var(--light-rule)' },
  },
];

const metaItems = [
  { label: 'Release Date', value: '2025 年 3 月 1 日' },
  { label: 'Glyph Count', value: '13,500+ 字元' },
  { label: 'Updates', value: '2,000+ 新增字' },
  { label: '既有授權', value: '免費升級' },
];

export default function ReleasesPage() {
  return (
    <section id="section-new" style={{ padding: '6rem 4rem' }}>

      {/* Section header */}
      <div style={{
        display: 'flex', alignItems: 'baseline', gap: '1.5rem',
        marginBottom: '4rem', paddingBottom: '1rem',
        borderBottom: '1px solid var(--light-rule)',
      }}>
        <span style={{
          fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
          fontSize: '0.8rem', color: 'var(--warm-mid)', letterSpacing: '0.15em',
        }}>03</span>
        <h1 style={{
          fontFamily: "'Noto Serif TC', serif",
          fontWeight: 500, fontSize: '1.1rem', letterSpacing: '0.15em',
        }}>新品發佈</h1>
      </div>

      {/* Latest Release Hero */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        border: '1px solid var(--light-rule)', marginBottom: '5rem',
      }}>
        {/* Visual */}
        <div style={{
          background: '#f0ece3', minHeight: '28rem',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexDirection: 'column', gap: '1rem', padding: '4rem',
          position: 'relative', overflow: 'hidden',
        }}>
          <span style={{
            position: 'absolute', top: '2rem', left: '2rem',
            fontFamily: "'Noto Sans TC', sans-serif",
            fontSize: '0.6rem', letterSpacing: '0.2em',
            background: 'var(--accent)', color: '#262626',
            padding: '0.3rem 0.8rem',
          }}>最新發布</span>
          <div style={{
            fontFamily: "'Noto Serif TC', serif",
            fontSize: '5rem', fontWeight: 300,
            color: '#262626', letterSpacing: '0.1em',
            lineHeight: 1.2, textAlign: 'center',
          }}>綿甜體<br />2.0</div>
          <div style={{
            fontFamily: "'Noto Serif TC', serif",
            fontSize: '1rem', color: '#444', letterSpacing: '0.3em',
          }}>新增 · 優化 · 擴充</div>
        </div>

        {/* Body */}
        <div style={{
          padding: '4rem',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          borderLeft: '1px solid var(--light-rule)',
        }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
            fontSize: '0.8rem', color: 'var(--accent)',
            letterSpacing: '0.2em', marginBottom: '1rem',
          }}>New Release · 2025.03</p>
          <h2 style={{
            fontFamily: "'Noto Serif TC', serif",
            fontWeight: 400, fontSize: '1.8rem',
            lineHeight: 1.4, letterSpacing: '0.08em', marginBottom: '1.5rem',
          }}>綿甜體 2.0 重磅更新</h2>
          <p style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontSize: '0.78rem', color: '#888',
            lineHeight: 2.1, letterSpacing: '0.05em', marginBottom: '2rem',
          }}>
            本次更新新增 2,000 餘字，涵蓋台灣常用人名、地名用字，並全面優化標點符號的視覺比例。同時加入多個替換字形 (OpenType alternates)，讓設計師有更靈活的排版選擇空間。
          </p>

          {/* Meta Grid */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: '1.5rem', marginBottom: '2.5rem',
          }}>
            {metaItems.map(m => (
              <div key={m.label} style={{
                padding: '1rem', border: '1px solid var(--light-rule)',
              }}>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
                  fontSize: '0.7rem', color: 'var(--warm-mid)',
                  letterSpacing: '0.15em', marginBottom: '0.3rem',
                }}>{m.label}</p>
                <p style={{
                  fontFamily: "'Noto Serif TC', serif",
                  fontSize: '0.85rem', letterSpacing: '0.08em',
                }}>{m.value}</p>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/buy" style={{
              padding: '0.8rem 2rem',
              fontFamily: "'Noto Sans TC', sans-serif",
              fontSize: '0.72rem', letterSpacing: '0.15em',
              textDecoration: 'none', display: 'inline-block',
              background: '#f0ece3', color: '#262626',
              border: '1px solid var(--ink)', transition: 'all 0.25s',
            }}>立即購買</Link>
            <Link href="#timeline" style={{
              padding: '0.8rem 2rem',
              fontFamily: "'Noto Sans TC', sans-serif",
              fontSize: '0.72rem', letterSpacing: '0.15em',
              textDecoration: 'none', display: 'inline-block',
              background: 'none', color: 'var(--ink)',
              border: '1px solid var(--light-rule)', transition: 'all 0.25s',
            }}>查看更新日誌</Link>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <h3 id="timeline" style={{
        fontFamily: "'Noto Serif TC', serif",
        fontWeight: 400, fontSize: '1rem', letterSpacing: '0.15em',
        marginBottom: '3rem', paddingBottom: '1rem',
        borderBottom: '1px solid var(--light-rule)',
      }}>發布時間軸</h3>

      <div style={{ position: 'relative', paddingLeft: '3rem' }}>
        {/* Vertical line */}
        <div style={{
          position: 'absolute', left: '0.7rem', top: 0, bottom: 0,
          width: '1px', background: 'var(--light-rule)',
        }} />

        {timelineItems.map((item, i) => (
          <div key={i} style={{
            position: 'relative',
            paddingBottom: i < timelineItems.length - 1 ? '3rem' : 0,
          }}>
            {/* Dot */}
            <div style={{
              position: 'absolute', left: '-2.3rem', top: '0.3rem',
              width: '10px', height: '10px', borderRadius: '50%',
              border: '1px solid',
              ...item.dotStyle,
            }} />
            <p style={{
              fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
              fontSize: '0.78rem', color: 'var(--warm-mid)',
              letterSpacing: '0.12em', marginBottom: '0.5rem',
            }}>{item.date}</p>
            <h4 style={{
              fontFamily: "'Noto Serif TC', serif",
              fontWeight: 400, fontSize: '1.05rem',
              letterSpacing: '0.1em', marginBottom: '0.5rem',
            }}>{item.name}</h4>
            <p style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontSize: '0.72rem', color: '#888',
              lineHeight: 2, letterSpacing: '0.05em', maxWidth: '36rem',
            }}>{item.desc}</p>
            <span style={{
              display: 'inline-block', marginTop: '0.75rem',
              fontFamily: "'Noto Sans TC', sans-serif",
              fontSize: '0.6rem', letterSpacing: '0.15em',
              padding: '0.2rem 0.7rem', ...item.statusStyle,
            }}>{item.status}</span>
          </div>
        ))}
      </div>

      {/* Notify Strip */}
      <div style={{
        marginTop: '5rem', padding: '3rem 4rem',
        background: '#f0ece3', color: '#262626',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '4rem', alignItems: 'center',
      }}>
        <div>
          <h3 style={{
            fontFamily: "'Noto Serif TC', serif",
            fontWeight: 300, fontSize: '1.4rem',
            letterSpacing: '0.1em', marginBottom: '0.75rem',
          }}>新品上市第一時間通知</h3>
          <p style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontSize: '0.75rem', color: '#666',
            lineHeight: 2, letterSpacing: '0.06em',
          }}>訂閱字趣電子報，新字體發布、早鳥優惠、免費試用都不會錯過。</p>
        </div>
        <form style={{ display: 'flex' }}>
          <input
            type="email" placeholder="your@email.com"
            style={{
              flex: 1, padding: '0.85rem 1rem',
              background: '#222', border: '1px solid #333', borderRight: 'none',
              color: '#262626',
              fontFamily: "'Noto Sans TC', sans-serif", fontSize: '0.75rem', outline: 'none',
            }}
          />
          <button type="submit" style={{
            padding: '0.85rem 1.5rem',
            background: 'var(--accent)', color: '#262626',
            border: '1px solid var(--accent)',
            fontFamily: "'Noto Sans TC', sans-serif",
            fontSize: '0.7rem', letterSpacing: '0.12em',
            cursor: 'pointer', transition: 'background 0.2s', whiteSpace: 'nowrap',
          }}>訂閱通知</button>
        </form>
      </div>
    </section>
  );
}
