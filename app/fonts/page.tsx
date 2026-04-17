import type { Metadata } from 'next';
import Link from 'next/link';
import FAQAccordion from '../../components/FAQAccordion';
import ScrollReveal from '../../components/ScrollReveal';

export const metadata: Metadata = {
  title: '字趣 fontsfun — 原創繁體中文字型工作室',
  description: '專為繁體中文設計的原創字型工作室。綿甜體六字重、雲書體、娉婷體系列，提供高品質手感字體授權。',
};

const weights = [
  { name: '柔', en: 'Light',     pct: 18,  desc: '輕盈、空氣感，適合大標題與品牌主視覺' },
  { name: '光', en: 'Regular',   pct: 36,  desc: '日常閱讀的標準字重，內文書封皆宜' },
  { name: '霜', en: 'Medium',    pct: 54,  desc: '中等灰度，副標、強調段落的最佳選擇' },
  { name: '潤', en: 'SemiBold',  pct: 72,  desc: '飽滿筆觸，適合介面 CTA 與標籤' },
  { name: '醇', en: 'Bold',      pct: 88,  desc: '濃郁有力，主標題與廣告主視覺' },
  { name: '蜜', en: 'Heavy',     pct: 100, desc: '極粗字重，封面、海報的視覺爆點' },
];

const faqs = [
  { q: '綿甜體授權範圍是什麼？',
    a: '個人授權可用於個人作品、學生專題、非商業創作；商業授權含品牌、印刷、廣告、出版品；企業授權再加官網、App、社群行銷。每種授權都可使用全六字重。' },
  { q: '一次購買可以用幾年？',
    a: '所有授權方案皆為「一次購買、終身使用」，沒有續約費用。後續字體更新（新字符、bug 修正）也免費取得。' },
  { q: '可以嵌入網頁（Web Font）嗎？',
    a: '個人與商業授權僅含桌面字型；網頁字型嵌入請選擇企業授權，或單獨加購 Web Font 模組。' },
  { q: '購買後在哪裡下載字體檔？',
    a: '完成付款後，請至會員專區「我的授權」下載 OTF / TTF 檔案，並可同時下載授權證書 PDF 留存。' },
  { q: '一份授權可以幾台電腦使用？',
    a: '個人授權限 1 人 3 台裝置；商業授權限 1 公司 5 台裝置；企業授權則為 1 公司不限裝置。轉讓需重新申請。' },
  { q: '字符收錄範圍？',
    a: '綿甜體目前收錄 Big5 常用字 5,401 字 + 次常用字 7,652 字（合計 13,053 字），涵蓋 99.5% 日常用字。標點、注音、數字、英文字母完整支援。' },
  { q: '需要客製缺字嗎？',
    a: '若您的專案有罕用字、地名、人名、品牌字需求，可付費委託補字（每字 NT$2,000 起，10 字以上有折扣）。' },
  { q: '可否免費試用？',
    a: '提供「綿甜體 試用版」，限定 500 字、僅 Regular 字重，可用於提案展示與印刷測試，不可用於正式商業發行。註冊會員即可下載。' },
  { q: '購買後可以退費嗎？',
    a: '字體授權屬數位商品，下載後恕不接受退費。建議先試用後再決定是否購買。若有檔案損毀問題請來信聯繫，我們會立即重新提供下載。' },
  { q: '有教育單位優惠嗎？',
    a: '學校、教育機構、非營利組織可享 50% 優惠，請以單位 email 來信申請。學生個人專案則可使用免費試用版。' },
];

const testimonials = [
  { name: '林書豪', role: '獨立出版社主編',
    quote: '綿甜體是我們近五本書的內文首選。字重豐富、灰度均勻，長文閱讀完全不疲勞，書封改用「醇」字重後質感整個拉升。',
    avatar: '林' },
  { name: '陳采蓉', role: '品牌設計師 / 自由接案',
    quote: '幫客戶做品牌時，能在同一套字型內找到從柔到蜜的完整層級非常重要。綿甜體救了我好幾次提案，客戶都說「就是這個感覺」。',
    avatar: '陳' },
  { name: 'Aaron Su', role: 'UI Designer @ Tech Startup',
    quote: 'App 介面從 Light 到 Heavy 的階層全部用綿甜體一套搞定，視覺一致性大幅提升。授權方案也比想像中清楚，採購流程順暢。',
    avatar: 'A' },
];

export default function FontsPage() {
  return (
    <>
      {/* HERO */}
      <section style={{
        minHeight: '78vh',
        padding: '7rem 4rem 5rem',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center',
        textAlign: 'center',
        borderBottom: '1px solid var(--light-rule)',
        position: 'relative', isolation: 'isolate',
        backgroundImage: 'linear-gradient(rgba(245, 242, 235, 0.86), rgba(245, 242, 235, 0.94)), url(/images/hero-fonts.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
          fontSize: '0.9rem', color: 'var(--warm-mid)',
          letterSpacing: '0.25em', marginBottom: '2rem',
        }}>fontsfun · 原創字型工作室</p>
        <h1 style={{
          fontFamily: "'Noto Serif TC', serif", fontWeight: 300,
          fontSize: 'clamp(3rem, 6vw, 6rem)',
          lineHeight: 1.2, letterSpacing: '0.08em',
          marginBottom: '2rem',
        }}>
          每一個字，<br />都<em style={{ fontStyle: 'normal', color: 'var(--accent)' }}>有溫度</em>
        </h1>
        <p style={{
          fontFamily: "'Noto Sans TC', sans-serif", fontWeight: 300,
          fontSize: '0.9rem', color: 'var(--warm-mid)',
          letterSpacing: '0.08em', lineHeight: 2.2,
          maxWidth: '32rem',
        }}>
          專為繁體中文設計的原創字型工作室。<br />
          從一筆一畫的細節，建立屬於華文閱讀的美感。
        </p>
        <div style={{
          marginTop: '3rem', display: 'flex', gap: '1.25rem',
          flexWrap: 'wrap', justifyContent: 'center',
        }}>
          <Link href="/buy" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
            padding: '0.95rem 2.25rem',
            background: 'var(--ink)', color: 'var(--paper)',
            fontFamily: "'Noto Sans TC', sans-serif",
            fontSize: '0.78rem', letterSpacing: '0.18em',
            textDecoration: 'none', transition: 'opacity 0.2s',
          }}>查看授權方案 →</Link>
          <a
            href="https://www.zeczec.com/projects/ten"
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
              padding: '0.95rem 2.25rem',
              background: 'var(--accent)', color: '#fff',
              fontFamily: "'Noto Sans TC', sans-serif",
              fontSize: '0.78rem', letterSpacing: '0.18em',
              textDecoration: 'none', transition: 'opacity 0.2s',
            }}
          >嘖嘖募資中 ↗</a>
        </div>
      </section>

      {/* SPECIMEN BANNER — 綿甜體意象 */}
      <section style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        borderBottom: '1px solid var(--light-rule)',
      }} className="specimen-banner">
        <div style={{
          aspectRatio: '4/3',
          backgroundImage: 'url(/images/specimen-miantian.jpg)',
          backgroundSize: 'cover', backgroundPosition: 'center',
        }} aria-label="綿甜體意象 — 日式甜點粉色奶米色調" />
        <div style={{
          padding: '4rem 3rem',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          background: 'var(--bg-alt)',
        }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
            fontSize: '0.85rem', color: 'var(--warm-mid)',
            letterSpacing: '0.2em', marginBottom: '1.25rem',
          }}>Typeface Inspiration</p>
          <h2 style={{
            fontFamily: "'Noto Serif TC', serif", fontWeight: 300,
            fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
            lineHeight: 1.5, letterSpacing: '0.08em',
            marginBottom: '1.5rem',
          }}>綿甜如糕<br />甘美如蜜</h2>
          <p style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontSize: '0.9rem', color: 'var(--warm-mid)',
            letterSpacing: '0.05em', lineHeight: 2.2,
          }}>綿甜體的六種字重，如同日式和菓子的手工層次——從柔、光、霜、潤、醇、蜜，每一種都是文字與甜點共享的質地。
          </p>
        </div>
      </section>

      {/* SIX WEIGHTS */}
      <section style={{ padding: '6rem 4rem' }}>
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
            fontFamily: "'Noto Serif TC', serif", fontWeight: 500,
            fontSize: '1.1rem', letterSpacing: '0.15em',
          }}>綿甜體 · 六字重系統</h2>
          <span style={{
            marginLeft: 'auto',
            fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
            fontSize: '0.85rem', color: 'var(--warm-mid)',
            letterSpacing: '0.15em',
          }}>柔 · 光 · 霜 · 潤 · 醇 · 蜜</span>
        </div>
        <ScrollReveal className="weights-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px',
          background: 'var(--light-rule)',
          border: '1px solid var(--light-rule)',
        }}>
          {weights.map((w) => (
            <div key={w.name} className="stagger-item" style={{
              background: 'var(--paper)', padding: '3rem 2rem',
              display: 'flex', flexDirection: 'column', gap: '1rem',
            }}>
              <div style={{
                fontFamily: "'Noto Serif TC', serif",
                fontSize: '5rem', lineHeight: 1, color: 'var(--ink)',
                fontWeight: 200 + w.pct * 5,
              }}>{w.name}</div>
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                paddingBottom: '0.6rem',
                borderBottom: '1px solid var(--light-rule)',
              }}>
                <span style={{
                  fontFamily: "'Noto Sans TC', sans-serif",
                  fontSize: '0.7rem', letterSpacing: '0.18em', color: 'var(--ink)',
                }}>綿甜體 {w.name}</span>
                <span style={{
                  fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
                  fontSize: '0.85rem', color: 'var(--warm-mid)',
                  letterSpacing: '0.1em',
                }}>{w.en}</span>
              </div>
              <p style={{
                fontFamily: "'Noto Sans TC', sans-serif",
                fontSize: '0.72rem', color: '#888',
                lineHeight: 2, letterSpacing: '0.04em',
              }}>{w.desc}</p>
            </div>
          ))}
        </ScrollReveal>
      </section>

      {/* TESTIMONIALS */}
      <section style={{
        padding: '6rem 4rem',
        background: 'var(--bg-alt)',
      }}>
        <div style={{
          display: 'flex', alignItems: 'baseline', gap: '1.5rem',
          marginBottom: '4rem', paddingBottom: '1rem',
          borderBottom: '1px solid var(--light-rule)',
        }}>
          <span style={{
            fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
            fontSize: '0.8rem', color: 'var(--warm-mid)', letterSpacing: '0.15em',
          }}>02</span>
          <h2 style={{
            fontFamily: "'Noto Serif TC', serif", fontWeight: 500,
            fontSize: '1.1rem', letterSpacing: '0.15em',
          }}>設計師見證</h2>
        </div>
        <div className="testimonials-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem',
        }}>
          {testimonials.map((t) => (
            <article key={t.name} style={{
              background: 'var(--paper)',
              border: '1px solid var(--light-rule)',
              padding: '2.5rem 2rem',
              display: 'flex', flexDirection: 'column', gap: '1.5rem',
            }}>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic', fontSize: '3rem',
                color: 'var(--accent)', lineHeight: 0.5,
                opacity: 0.6,
              }}>“</div>
              <p style={{
                fontFamily: "'Noto Serif TC', serif", fontWeight: 300,
                fontSize: '0.85rem', color: 'var(--ink)',
                lineHeight: 2, letterSpacing: '0.04em',
                flex: 1,
              }}>{t.quote}</p>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--light-rule)',
              }}>
                <div style={{
                  width: '2.5rem', height: '2.5rem',
                  borderRadius: '50%',
                  background: 'var(--ink)', color: 'var(--paper)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Noto Serif TC', serif",
                  fontSize: '0.85rem', letterSpacing: '0.05em',
                }}>{t.avatar}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  <span style={{
                    fontFamily: "'Noto Serif TC', serif",
                    fontSize: '0.8rem', color: 'var(--ink)', letterSpacing: '0.06em',
                  }}>{t.name}</span>
                  <span style={{
                    fontFamily: "'Noto Sans TC', sans-serif",
                    fontSize: '0.65rem', color: 'var(--warm-mid)', letterSpacing: '0.08em',
                  }}>{t.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '6rem 4rem' }}>
        <div style={{
          display: 'flex', alignItems: 'baseline', gap: '1.5rem',
          marginBottom: '4rem', paddingBottom: '1rem',
          borderBottom: '1px solid var(--light-rule)',
        }}>
          <span style={{
            fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
            fontSize: '0.8rem', color: 'var(--warm-mid)', letterSpacing: '0.15em',
          }}>03</span>
          <h2 style={{
            fontFamily: "'Noto Serif TC', serif", fontWeight: 500,
            fontSize: '1.1rem', letterSpacing: '0.15em',
          }}>常見問題</h2>
          <span style={{
            marginLeft: 'auto',
            fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
            fontSize: '0.8rem', color: 'var(--warm-mid)',
          }}>FAQ · {faqs.length} questions</span>
        </div>
        <FAQAccordion items={faqs} />
      </section>

      {/* CROWDFUNDING CTA */}
      <section style={{
        padding: '6rem 4rem',
        background: 'var(--ink)', color: 'var(--paper)',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
          fontSize: '0.85rem', color: 'var(--accent)',
          letterSpacing: '0.25em', marginBottom: '1.5rem',
        }}>Crowdfunding on zeczec</p>
        <h2 style={{
          fontFamily: "'Noto Serif TC', serif", fontWeight: 300,
          fontSize: 'clamp(2rem, 3.5vw, 3rem)',
          lineHeight: 1.4, letterSpacing: '0.08em',
          marginBottom: '1.5rem',
        }}>支持下一款<em style={{ fontStyle: 'normal', color: 'var(--accent)' }}>原創字型</em></h2>
        <p style={{
          fontFamily: "'Noto Sans TC', sans-serif",
          fontSize: '0.85rem', color: '#999',
          letterSpacing: '0.06em', lineHeight: 2.2,
          maxWidth: '34rem', margin: '0 auto 3rem',
        }}>
          字趣 fontsfun 的新字型開發正在嘖嘖募資中。<br />
          每一筆贊助都直接資助字符繪製工時。<br />
          贊助專屬回饋：限量試用版、終身授權、命名權。
        </p>
        <a
          href="https://www.zeczec.com/projects/ten"
          target="_blank" rel="noopener noreferrer"
          className="pulse"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
            padding: '1.1rem 3rem',
            background: 'var(--accent)', color: '#fff',
            fontFamily: "'Noto Sans TC', sans-serif",
            fontSize: '0.85rem', letterSpacing: '0.18em',
            textDecoration: 'none', transition: 'opacity 0.2s',
          }}
        >前往嘖嘖贊助 ↗</a>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .weights-grid, .testimonials-grid,
          .specimen-banner {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
