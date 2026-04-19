import type { Metadata } from 'next';
import WorksGrid from '../components/WorksGrid';
import HeroCarousel from '../components/HeroCarousel';
import ScrollReveal from '../components/ScrollReveal';
import { HERO_SLIDES, WORKS } from '../lib/constants';
import ProcessIllustrated from '../components/sections/ProcessIllustrated';
import { BrandShield, TypographyA, BookDesign, GovBuilding, FilmSlate, CalendarIcon, FolderIcon, PenNibIcon } from '../components/icons/ServiceIcons';

export const metadata: Metadata = {
  title: '盛和設計 — 平面設計・字體・品牌視覺',
  description: '專注品牌識別、字體排版與文化視覺設計。從企業品牌到政府標案，讓你的形象說話。',
};

// heroSlides + works → imported from lib/constants.ts

/* WORKS_CUT_START
  { cat: 'brand', workCat: 'Brand Visual', titleEn: 'Cloud Bookfont',
    title: '字趣 雲書體 主視覺',
    desc: '字趣 fontsfun 2025 年度新作「雲書體」發表主視覺。以青空、雲形、墨痕構成飄逸書寫意象，強調「圓潤筆觸 · 現代優雅」的字型氣質。',
    result: '2025 年度新字型發表＋早鳥試用活動視覺',
    img: '/images/works/brand/fontsfun-cloudbook.jpg',
    alt: '字趣 雲書體 字型發表主視覺' },

  { cat: 'editorial', workCat: 'Book Cover', titleEn: 'Joseph de Prémare',
    title: '馬若瑟的文學世界',
    desc: '臺大出版中心《臺大哈佛燕京學術叢書 13》。書封以馬若瑟手稿原跡為視覺主軸，疊合書名印章，呈現古典文獻的學術質感。',
    result: '臺大出版中心 學術叢書裝幀設計',
    img: '/images/works/editorial/book-joseph-premare.jpg',
    alt: '馬若瑟的文學世界 書封' },

  { cat: 'brand', workCat: 'OOH Campaign', titleEn: 'Lunar Greeting Bus',
    title: '正官庄 蔘享新年公車',
    desc: '正官庄「蔘享新年・臺品之選深意極現」公車車體廣告 KV。整合品牌代言人許光漢形象、產品全系列陳列、新春節慶氛圍，於大南汽車 085-FR 車線曝光。',
    result: '代言人 KV ＋全產品線車體廣告整合',
    img: '/images/works/brand/chkj-bus-ad.jpg',
    alt: '正官庄 公車車體廣告' },

  { cat: 'editorial', workCat: 'Book Cover', titleEn: 'Tranquil Distance',
    title: '寧靜致遠',
    desc: 'Sunny 文庫 265《富蘭克林的人生守則》。封面以暖色插畫描繪冥想場景，搭配手寫風書名，呼應「品格高尚是一生的財富」的閱讀主題。',
    result: 'Sunny 文庫 富蘭克林人生守則 書封',
    img: '/images/works/editorial/book-tranquil-distance.jpg',
    alt: '寧靜致遠 書封設計' },

  { cat: 'packaging', workCat: 'Packaging Design', titleEn: 'Ginseng Milk Tea',
    title: '正官庄 × 3點1刻 高麗蔘奶茶',
    desc: '跨品牌聯名包裝設計。以「遊客必買伴手禮」為主訴求，融合臺灣黑熊插畫、紅金主視覺與韓文標題，鎖定來臺觀光客伴手禮市場。',
    result: '高麗蔘奶茶聯名禮盒包裝設計',
    img: '/images/works/packaging/chkj-3pm-milktea.jpg',
    alt: '正官庄 × 3點1刻 高麗蔘奶茶聯名包裝' },

  { cat: 'brand', workCat: 'Key Visual', titleEn: 'Everytime',
    title: '正官庄 EVERYTIME',
    desc: '高麗蔘精 EVERYTIME 系列主視覺。以「提升保護力」為標語訴求，紅綠對比配色搭配人蔘原料插畫，建立輕巧包裝、即撕即飲的清新印象。',
    result: '高麗蔘精系列主視覺與包裝海報',
    img: '/images/works/brand/chkj-everytime-poster.jpg',
    alt: '正官庄 EVERYTIME 主視覺海報' },

  { cat: 'editorial', workCat: 'Book Cover', titleEn: 'Women & National Trauma',
    title: '明清文學中的女子與國難',
    desc: '臺大出版中心《中國文學研究叢書 16》。以明清文人線描仕女圖搭配深藍主色，呼應書名「女子與國難」的歷史厚度與文學批判視角。',
    result: '臺大出版中心 學術叢書設計',
    img: '/images/works/editorial/book-ming-qing-women.jpg',
    alt: '明清文學中的女子與國難 書封' },

  { cat: 'brand', workCat: 'Promo Campaign', titleEn: 'Flash Sale Day',
    title: '正官庄 破盤日 KV',
    desc: '夏季「破盤日 7.1–7.31」季節促銷主視覺。以紅色爆破字體、立體浮雕標題搭配代言人實拍，建立超殺折扣的視覺張力，整合 9 款主打商品價格資訊。',
    result: '季節促銷主視覺＋商品 DM 整合',
    img: '/images/works/brand/chkj-flash-sale-dm.jpg',
    alt: '正官庄 破盤日 DM' },

  { cat: 'type', workCat: 'Character Design', titleEn: 'Cookie Expressions',
    title: '餅乾人 字符組',
    desc: '40 款表情字符組（character set）設計，以擬人化餅乾為造型主體，每一格細節豐富刻畫情緒：開心／驚訝／無奈／害羞⋯⋯適用於通訊貼圖與品牌 IP 衍伸。',
    result: '40 款擬人化表情貼圖字符設計',
    img: '/images/works/type/cookie-character-set.jpg',
    alt: '餅乾人 40 款表情字符組' },

  { cat: 'editorial', workCat: 'Book Cover', titleEn: 'Lonely Boat Inquiry',
    title: '寂寞舟中誰借問',
    desc: 'Sara 文庫 268《我們的「人之初」為誰殉葬》。封面以水墨潑灑的孤舟少年背影為主視覺，深藍冷色調呼應「再尋一代少年背影」的詩意主題。',
    result: 'Sara 文庫 詩集裝幀設計',
    img: '/images/works/editorial/book-lonely-boat.jpg',
    alt: '寂寞舟中誰借問 書封' },

  { cat: 'editorial', workCat: 'Event Visual', titleEn: 'Thank You Campaign',
    title: '正官庄 感謝有您',
    desc: '正官庄會員回饋活動視覺。粉綠雙色塊配色搭配代言人李敏鎬實拍，傳達「與正官庄勇往直前」的品牌承諾，含限量 120 盒早鳥優惠資訊。',
    result: '會員回饋活動視覺＋優惠資訊整合',
    img: '/images/works/editorial/chkj-thanks-poster.jpg',
    alt: '正官庄 感謝有您 海報' },

  { cat: 'brand', workCat: 'Promo Campaign', titleEn: 'Anniversary Sale',
    title: '正官庄 周年慶 KV',
    desc: '正官庄年度週年慶主視覺。金黃節慶配色搭配「年末最強特惠組」標題，整合多檔商品優惠（活蔘 28D PLUS / 高麗蔘雞精 / EVERYTIME PLUS）的完整 DM 設計。',
    result: '週年慶主視覺＋商品優惠 DM 設計',
    img: '/images/works/brand/chkj-anniversary-dm.jpg',
    alt: '正官庄 周年慶 DM' },

  { cat: 'brand', workCat: 'Brand Concept', titleEn: 'The Idea Collective',
    title: 'IDEA 創意團隊概念視覺',
    desc: '創意團隊形象概念照。俯拍視角呈現多人協作的工作桌面，融合手繪 IDEA 字樣、色票、手稿、平板、咖啡與多元雙手，傳達跨領域協作的創意能量。',
    result: '創意團隊形象與品牌概念視覺',
    img: '/images/works/brand/idea-team.jpg',
    alt: 'IDEA 創意團隊概念照' },

  { cat: 'packaging', workCat: 'Print Collateral', titleEn: 'Lottery Ticket',
    title: '正官庄 抽獎券',
    desc: '正官庄健康蔘級「消費抽好禮」紙本抽獎券設計。18.7 × 8.2 cm 雙聯式票券，含流水號區、撕線、店家聯回收聯，整合 iPhone 13 抽獎活動視覺與使用說明。',
    result: '雙聯式抽獎券＋活動辦法整合設計',
    img: '/images/works/packaging/chkj-lottery-ticket.jpg',
    alt: '正官庄 抽獎券' },

  { cat: 'packaging', workCat: 'Print Collateral', titleEn: 'Anniversary Flyer',
    title: '正官庄 周年慶傳單',
    desc: '正官庄週年慶實體傳單設計。10.12–11.8 限定回饋上市，整合 AirPods Pro 滿額贈、Dyson 高額贈與兒童保健精選商品，主打「滿 6000 現折 600」優惠機制。',
    result: '週年慶 DM 傳單＋滿額贈機制視覺',
    img: '/images/works/packaging/chkj-anniversary-flyer.jpg',
    alt: '正官庄 周年慶傳單' },

  { cat: 'type', workCat: 'Character Design', titleEn: 'Koala Stickers',
    title: '無尾熊 字符組',
    desc: '原創 IP 角色字符設計。以橘色無尾熊為造型主體，繪製揮手「88～」、痛哭、開心三款核心情緒表情，可延伸至貼圖系列與品牌吉祥物應用。',
    result: '原創 IP 無尾熊角色設計',
    img: '/images/works/type/koala-character-set.jpg',
    alt: '無尾熊 字符組' },
WORKS_CUT_END */

const services: { icon: React.ReactNode; name: string; desc: string; price: string }[] = [
  { icon: <BrandShield />, name: '品牌識別系統', desc: 'Logo設計・色彩規範・字體系統・品牌手冊。為你的品牌建立一致、有說服力的視覺語言。', price: 'from NT$80,000' },
  { icon: <TypographyA />, name: '排版與印刷品設計', desc: '書籍・年報・宣傳手冊・文化出版品排版設計。精通繁體中文排版美學，細節講究。', price: 'from NT$15,000' },
  { icon: <GovBuilding />, name: '政府標案視覺設計', desc: '展覽視覺・城市形象・文宣物料・活動主視覺。熟悉政府採購流程，交件準時可靠。', price: '依標案規模報價' },
  { icon: <FilmSlate />, name: '影視企劃書設計', desc: '提案書版型・視覺敘事規劃・高質感印刷企劃書製作。讓你的提案第一眼就脫穎而出。', price: 'from NT$20,000' },
  { icon: <BookDesign />, name: '文化機構視覺顧問', desc: '長期視覺策略規劃・出版品整體設計・品牌年度維護。與機構建立深度合作關係。', price: '月顧問制洽詢' },
];

const processSteps = [
  { num: '01', title: '需求溝通', desc: '深度了解你的品牌定位、目標受眾、競爭環境與視覺期望，確認合作範疇與時程。' },
  { num: '02', title: '概念提案', desc: '提出 2–3 個設計方向，以視覺草稿說明設計理念與應用場景，共同確認方向。' },
  { num: '03', title: '精稿修訂', desc: '根據選定方向深入製作，提供 2 次修改機會，確保每個細節都符合品牌需求。' },
  { num: '04', title: '交付完稿', desc: '提供可印刷與數位版本的完整檔案，附使用規範說明，確保後續應用無障礙。' },
];

const skills = [
  { name: '繁體中文字體設計', pct: 95 },
  { name: '品牌識別系統',     pct: 90 },
  { name: '書籍與出版排版',   pct: 92 },
  { name: '政府標案視覺',     pct: 80 },
  { name: '影視提案書設計',   pct: 85 },
  { name: 'Adobe Creative Suite', pct: 98 },
];

const stats = [
  { num: '10+',  label: '年設計經驗' },
  { num: '50+',  label: '完成專案' },
  { num: '3',    label: '原創字體' },
  { num: '100%', label: '客戶回頭率' },
];

const clientNames = ['臺大出版中心', '正官庄 CKJ', '字趣 fontsfun', '盛和有限公司', '3點1刻', 'Sunny 文庫', 'GWO 移民工協會', '好芯芩工作坊', '施恩國際'];

export default function PortfolioPage() {
  return (
    <>
      {/* HERO CAROUSEL */}
      <HeroCarousel slides={HERO_SLIDES} />

      {/* SERVICES */}
      <section id="services" style={{
        padding: '6rem 4rem', background: '#f0ece3',
      }}>
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
            fontSize: '1.1rem', letterSpacing: '0.15em', color: '#262626',
          }}>服務項目</h2>
        </div>
        <ScrollReveal className="services-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        }}>
          {services.map((s, i) => (
            <div key={s.name} className="service-card stagger-item hover-lift" style={{
              padding: '3rem 2.5rem',
              borderRight: (i + 1) % 3 !== 0 ? '1px solid #2a2a2a' : 'none',
              borderBottom: Math.floor(i / 3) < Math.floor((services.length - 1) / 3) ? '1px solid #2a2a2a' : 'none',
              transition: 'background 0.3s',
            }}>
              <div style={{ marginBottom: '1.5rem' }}>{s.icon}</div>
              <h3 style={{
                fontFamily: "'Noto Serif TC', serif", fontWeight: 500,
                fontSize: '1rem', letterSpacing: '0.12em', marginBottom: '0.75rem',
              }}>{s.name}</h3>
              <p style={{
                fontFamily: "'Noto Sans TC', sans-serif",
                fontSize: '0.75rem', color: '#888',
                lineHeight: 2, letterSpacing: '0.05em',
              }}>{s.desc}</p>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '0.85rem', color: 'var(--warm-mid)',
                marginTop: '1.5rem', letterSpacing: '0.1em',
              }}>{s.price}</p>
            </div>
          ))}
        </ScrollReveal>
      </section>

      {/* SERVICE SHOWCASE — 圖上文下，Hero 風格 */}

      {/* 募資服務 */}
      <section style={{ background: '#f5f2eb', borderTop: '1px solid var(--light-rule)' }}>
        <div className="svc-img" style={{
          width: '100%', height: '400px', overflow: 'hidden', background: '#e8e4db',
        }}>
          <img src="/images/crowdfunding/service-01.jpg" alt="募資服務" loading="lazy" style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
          }} />
        </div>
        <div style={{
          padding: '4rem 4rem 5rem',
          maxWidth: '680px',
          margin: '0 auto',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
            fontSize: '14px', color: 'var(--warm-mid)',
            letterSpacing: '0.25em', marginBottom: '1.25rem',
          }}>Crowdfunding Creative Direction</p>
          <h2 style={{
            fontFamily: "'Noto Serif TC', serif", fontWeight: 300,
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            lineHeight: 1.3, letterSpacing: '0.06em',
            color: '#1a1714', marginBottom: '1.5rem',
          }}>募資成敗，從設計與行銷開始</h2>
          <p style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontSize: '18px', lineHeight: 1.8,
            color: '#5a5550', letterSpacing: '0.04em',
            marginBottom: '2.5rem',
          }}>嘖嘖、貝殼放大專案代操 × 廣告投放 × 視覺設計一條龍</p>
          <a href="/crowdfunding" style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontSize: '16px', letterSpacing: '0.15em',
            color: '#1a1714', textDecoration: 'none',
            borderBottom: '1px solid #1a1714',
            paddingBottom: '0.3rem',
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          }}>了解服務 →</a>
        </div>
      </section>

      {/* 出版服務 */}
      <section style={{ background: '#f5f2eb', marginTop: '6rem', borderTop: '1px solid var(--light-rule)' }}>
        <div className="svc-img" style={{
          width: '100%', height: '400px', overflow: 'hidden', background: '#e8e4db',
        }}>
          <img src="/images/publishing/service-01.jpg" alt="出版服務" loading="lazy" style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
          }} />
        </div>
        <div style={{
          padding: '4rem 4rem 5rem',
          maxWidth: '680px',
          margin: '0 auto',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
            fontSize: '14px', color: 'var(--warm-mid)',
            letterSpacing: '0.25em', marginBottom: '1.25rem',
          }}>Self-Publishing Full Service</p>
          <h2 style={{
            fontFamily: "'Noto Serif TC', serif", fontWeight: 300,
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            lineHeight: 1.3, letterSpacing: '0.06em',
            color: '#1a1714', marginBottom: '1.5rem',
          }}>從一個想法，到一本書</h2>
          <p style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontSize: '18px', lineHeight: 1.8,
            color: '#5a5550', letterSpacing: '0.04em',
            marginBottom: '2.5rem',
          }}>自費出版全流程｜詩集、散文、小說、設計雜誌<br />每一種書，都值得被好好做出來</p>
          <a href="/publishing" style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontSize: '16px', letterSpacing: '0.15em',
            color: '#1a1714', textDecoration: 'none',
            borderBottom: '1px solid #1a1714',
            paddingBottom: '0.3rem',
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          }}>了解服務 →</a>
        </div>
      </section>

      {/* WORKS */}
      <section id="works" style={{ padding: '6rem 4rem 0', overflow: 'hidden' }}>
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
          }}>精選作品</h2>
        </div>
        <WorksGrid works={WORKS} />
      </section>

      {/* PROCESS — illustrated cartoon style */}
      <ProcessIllustrated />

      {/* ABOUT */}
      <section id="about" style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', padding: 0,
      }}>
        <div className="about-left" style={{
          padding: '6rem 4rem', borderRight: '1px solid var(--light-rule)',
        }}>
          <div style={{
            display: 'flex', alignItems: 'baseline', gap: '1.5rem',
            marginBottom: '4rem', paddingBottom: '1rem',
            borderBottom: '1px solid var(--light-rule)',
          }}>
            <span style={{
              fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
              fontSize: '0.8rem', color: 'var(--warm-mid)', letterSpacing: '0.15em',
            }}>04</span>
            <h2 style={{
              fontFamily: "'Noto Serif TC', serif", fontWeight: 500,
              fontSize: '1.1rem', letterSpacing: '0.15em',
            }}>關於設計師</h2>
          </div>
          <p style={{
            fontFamily: "'Noto Serif TC', serif", fontWeight: 300,
            fontSize: '0.95rem', lineHeight: 2.2,
            letterSpacing: '0.05em', color: 'var(--ink)', marginTop: '2rem',
          }}>
            深耕平面設計逾十年，專注於繁體中文字體與排版美學的探索與實踐。
            <br /><br />
            主持字趣 fontsfun 字型工作室，開發原創繁體中文字體；同時以盛和有限公司承接品牌識別、出版設計、政府視覺標案等多元設計專案。
            <br /><br />
            相信好的設計不只是美觀，而是能精準傳達訊息、建立信任、創造長期價值的溝通工具。
          </p>
        </div>
        <div className="about-right" style={{
          padding: '6rem 4rem', background: 'var(--bg-alt)',
        }}>
          <div style={{
            display: 'flex', alignItems: 'baseline', gap: '1.5rem',
            marginBottom: '4rem', paddingBottom: '1rem',
            borderBottom: '1px solid var(--light-rule)',
          }}>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
              fontSize: '0.8rem', color: 'var(--warm-mid)', letterSpacing: '0.15em',
              opacity: 0,
            }}>—</span>
            <h2 style={{
              fontFamily: "'Noto Serif TC', serif", fontWeight: 500,
              fontSize: '1.1rem', letterSpacing: '0.15em',
            }}>專業能力</h2>
          </div>
          <ul style={{ listStyle: 'none', marginTop: '2rem' }}>
            {skills.map(sk => (
              <li key={sk.name} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '0.85rem 0', borderBottom: '1px solid var(--light-rule)',
                fontFamily: "'Noto Sans TC', sans-serif",
                fontSize: '0.75rem', letterSpacing: '0.08em', color: 'var(--warm-mid)',
              }}>
                <span>{sk.name}</span>
                <div style={{
                  width: '8rem', height: '1px', background: 'var(--light-rule)',
                  position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute', top: 0, left: 0,
                    height: '1px', background: 'var(--ink)',
                    width: `${sk.pct}%`,
                  }} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CLIENTS */}
      <section id="clients" style={{ padding: '6rem 4rem' }}>
        <div style={{
          display: 'flex', alignItems: 'baseline', gap: '1.5rem',
          marginBottom: '4rem', paddingBottom: '1rem',
          borderBottom: '1px solid var(--light-rule)',
        }}>
          <span style={{
            fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
            fontSize: '0.8rem', color: 'var(--warm-mid)', letterSpacing: '0.15em',
          }}>05</span>
          <h2 style={{
            fontFamily: "'Noto Serif TC', serif", fontWeight: 500,
            fontSize: '1.1rem', letterSpacing: '0.15em',
          }}>合作客戶</h2>
        </div>
        <div style={{
          overflow: 'hidden',
          borderTop: '1px solid var(--light-rule)',
          borderBottom: '1px solid var(--light-rule)',
          padding: '2rem 0', marginTop: '3rem',
        }}>
          <div className="clients-marquee" style={{
            display: 'flex', gap: '4rem',
            whiteSpace: 'nowrap', animation: 'marquee 22s linear infinite',
          }}>
            {[...clientNames, ...clientNames].map((c, i) => (
              <span key={i} style={{
                fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
                fontSize: '1.2rem', color: 'var(--light-rule)',
                letterSpacing: '0.1em', flexShrink: 0,
              }}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT THE DESIGNER */}
      <section id="designer" style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', padding: 0,
      }} className="designer-section">
        <div style={{
          position: 'relative', minHeight: '420px', overflow: 'hidden',
          background: '#e8e3d8',
        }}>
          <img
            src="/images/designer-studio.jpg"
            alt="設計師工作室"
            loading="lazy"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', display: 'block',
              position: 'absolute', inset: 0,
            }}
          />
        </div>
        <div style={{
          padding: '5rem 4rem',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          background: 'var(--bg-alt)',
        }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
            fontSize: '14px', color: 'var(--accent)',
            letterSpacing: '0.25em', marginBottom: '1.5rem',
          }}>About the Designer</p>
          <h2 style={{
            fontFamily: "'Noto Serif TC', serif", fontWeight: 300,
            fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
            lineHeight: 1.5, letterSpacing: '0.08em',
            marginBottom: '2rem',
          }}>設計，是讓複雜的事<br />變得簡單且美好</h2>
          <p style={{
            fontFamily: "'Noto Serif TC', serif", fontWeight: 300,
            fontSize: '16px', lineHeight: 2.2,
            letterSpacing: '0.05em', color: '#262626',
          }}>
            深耕平面設計逾十年，專注於繁體中文字體與排版美學的探索與實踐。主持字趣 fontsfun 字型工作室，同時以盛和有限公司承接品牌識別、出版設計、政府視覺標案等多元設計專案。
          </p>
          <div style={{
            display: 'flex', gap: '3rem', marginTop: '2.5rem',
            paddingTop: '2rem', borderTop: '1px solid var(--light-rule)',
          }}>
            {([
              { num: '10+', label: '年設計經驗', icon: <CalendarIcon /> },
              { num: '50+', label: '完成專案',   icon: <FolderIcon /> },
              { num: '3',   label: '原創字體',   icon: <PenNibIcon /> },
            ] as const).map(s => (
              <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ flexShrink: 0 }}>{s.icon}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  <span style={{
                    fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
                    fontSize: '2.2rem', lineHeight: 1, color: 'var(--ink)',
                  }}>{s.num}</span>
                  <span style={{
                    fontFamily: "'Noto Sans TC', sans-serif",
                    fontSize: '14px', color: 'var(--warm-mid)',
                    letterSpacing: '0.1em',
                  }}>{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBER CTA */}
      <section id="member-cta" style={{
        background: '#e8e4db',
        padding: '6rem 4rem',
        borderTop: '1px solid #2a2a2a',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
          fontSize: '0.85rem', color: 'var(--accent)',
          letterSpacing: '0.2em', marginBottom: '1.5rem',
        }}>Member Zone</p>
        <h2 style={{
          fontFamily: "'Noto Serif TC', serif", fontWeight: 300,
          fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
          lineHeight: 1.4, letterSpacing: '0.08em',
          marginBottom: '1.5rem',
        }}>加入字趣會員</h2>
        <p style={{
          fontFamily: "'Noto Sans TC', sans-serif",
          fontSize: '0.85rem', color: '#999',
          letterSpacing: '0.06em', lineHeight: 2.2,
          maxWidth: '34rem', margin: '0 auto 3rem',
        }}>
          購買字體後可在會員專區下載字體檔案、查看授權證書，<br />
          並隨時掌握新字體發布、優惠活動與更新通知。
        </p>
        <a href="/member" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
          padding: '1rem 2.5rem',
          background: 'var(--accent)', color: '#fff',
          fontFamily: "'Noto Sans TC', sans-serif",
          fontSize: '0.78rem', letterSpacing: '0.18em',
          textDecoration: 'none',
          transition: 'opacity 0.2s, gap 0.3s',
        }}>立即加入 →</a>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{
        background: '#f0ece3',
        display: 'grid', gridTemplateColumns: '1fr 1fr', padding: 0,
      }}>
        <div className="contact-left" style={{
          padding: '6rem 4rem', borderRight: '1px solid var(--light-rule)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
        }}>
          <h2 style={{
            fontFamily: "'Noto Serif TC', serif", fontWeight: 300,
            fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
            lineHeight: 1.4, letterSpacing: '0.08em',
          }}>
            讓我們一起<br />做出<em style={{ fontStyle: 'normal', color: 'var(--accent)' }}>有意義</em>的<br />設計
          </h2>
          <p style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontSize: '0.75rem', color: '#777',
            letterSpacing: '0.08em', lineHeight: 2, marginTop: '2rem',
          }}>
            填寫右側表單，或透過以下方式聯絡。<br />通常在 24 小時內回覆。
          </p>
          <div style={{
            marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem',
          }}>
            {[
              { label: 'Email',         value: <a href="mailto:muchbin@gmail.com" style={{ color: '#262626', textDecoration: 'none' }}>muchbin@gmail.com</a> },
              { label: 'Phone / LINE',  value: '0938-938-862' },
              { label: '字體工作室',     value: <a href="https://fontsfun.com" target="_blank" rel="noopener noreferrer" style={{ color: '#262626', textDecoration: 'none' }}>fontsfun.com</a> },
            ].map(it => (
              <div key={it.label} style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <span style={{
                  fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
                  fontSize: '0.75rem', color: 'var(--warm-mid)', letterSpacing: '0.2em',
                }}>{it.label}</span>
                <span style={{
                  fontFamily: "'Noto Serif TC', serif",
                  fontSize: '0.95rem', color: '#262626', letterSpacing: '0.1em',
                }}>{it.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="contact-right" style={{
          padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center',
        }}>
          <h3 style={{
            fontFamily: "'Noto Serif TC', serif", fontWeight: 400,
            fontSize: '1rem', letterSpacing: '0.15em',
            color: '#262626', marginBottom: '2rem',
            paddingBottom: '1rem', borderBottom: '1px solid var(--light-rule)',
          }}>傳送訊息</h3>
          <ContactForm />
        </div>
      </section>

      <style>{`
        @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }

        /* ─── PORTFOLIO MOBILE RWD (page-scoped) ─── */
        @media (max-width: 900px) {
          #about, #contact, #designer, .designer-section,
          .svc-img { height: 250px !important; }
          .services-grid, .process-steps { grid-template-columns: 1fr !important; }
          .service-card { border-right: none !important; border-bottom: 1px solid #2a2a2a !important; }
          .process-step { border-right: none !important; border-bottom: 1px solid #2a2a2a !important; }
          .process-step:last-child { border-bottom: none !important; }
          .about-left { padding: 4rem 1.5rem !important; border-right: none !important; border-bottom: 1px solid var(--light-rule); }
          .about-right { padding: 4rem 1.5rem !important; }
          .contact-left { padding: 4rem 1.5rem !important; border-right: none !important; border-bottom: 1px solid #2a2a2a; }
          .contact-right { padding: 3rem 1.5rem !important; }
          section { padding-left: 1.5rem !important; padding-right: 1.5rem !important; }
          .works-grid { grid-template-columns: 1fr !important; gap: 1px !important; }
          .work-card { aspect-ratio: 4/3 !important; grid-column: span 1 !important; grid-row: span 1 !important; }
          .lb-stage { grid-template-columns: 1fr !important; max-height: 92vh !important; }
          .lb-content { padding: 1.5rem !important; max-height: 40vh; overflow-y: auto; }
        }
        @media (hover: none) and (pointer: coarse) {
          .work-card .work-overlay {
            opacity: 1 !important;
            background: linear-gradient(to top, rgba(26,23,20,0.92) 0%, rgba(26,23,20,0.7) 50%, transparent 100%) !important;
            justify-content: flex-end !important;
            padding-top: 3rem !important;
          }
          .service-card:hover { background: transparent !important; }
        }
      `}</style>
    </>
  );
}

/* ── inline ContactForm component ── */
function ContactForm() {
  const fieldStyle: React.CSSProperties = {
    display: 'flex', flexDirection: 'column', gap: '0.5rem',
  };
  const labelStyle: React.CSSProperties = {
    fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
    fontSize: '0.7rem', color: 'var(--warm-mid)', letterSpacing: '0.15em',
  };
  const inputStyle: React.CSSProperties = {
    background: 'transparent', color: '#262626',
    border: 'none', borderBottom: '1px solid #3a3a3a',
    padding: '0.65rem 0',
    fontFamily: "'Noto Sans TC', sans-serif",
    fontSize: '0.8rem', letterSpacing: '0.05em',
    outline: 'none',
  };
  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div style={fieldStyle}>
          <label htmlFor="f-name" style={labelStyle}>姓名 / 公司</label>
          <input id="f-name" name="name" type="text" placeholder="王小明 / 某某公司" style={inputStyle} />
        </div>
        <div style={fieldStyle}>
          <label htmlFor="f-email" style={labelStyle}>Email</label>
          <input id="f-email" name="email" type="email" placeholder="you@company.com" style={inputStyle} />
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div style={fieldStyle}>
          <label htmlFor="f-service" style={labelStyle}>需要的服務</label>
          <select id="f-service" name="service" style={{ ...inputStyle, color: '#888' }}>
            <option value="">請選擇…</option>
            <option>品牌識別系統</option>
            <option>字體設計與授權</option>
            <option>排版與印刷品設計</option>
            <option>政府標案視覺</option>
            <option>影視企劃書設計</option>
            <option>視覺顧問</option>
            <option>其他</option>
          </select>
        </div>
        <div style={fieldStyle}>
          <label htmlFor="f-budget" style={labelStyle}>預算範圍</label>
          <select id="f-budget" name="budget" style={{ ...inputStyle, color: '#888' }}>
            <option value="">請選擇…</option>
            <option>NT$10,000 以下</option>
            <option>NT$10,000–30,000</option>
            <option>NT$30,000–80,000</option>
            <option>NT$80,000–200,000</option>
            <option>NT$200,000 以上</option>
            <option>標案（另議）</option>
          </select>
        </div>
      </div>
      <div style={fieldStyle}>
        <label htmlFor="f-msg" style={labelStyle}>訊息內容</label>
        <textarea id="f-msg" name="message" rows={4} placeholder="簡單描述你的專案需求、時程與任何想讓我知道的事…" style={{ ...inputStyle, resize: 'vertical', minHeight: '6rem' }} />
      </div>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        gap: '1.5rem', flexWrap: 'wrap', marginTop: '1rem',
      }}>
        <p style={{
          fontFamily: "'Noto Sans TC', sans-serif",
          fontSize: '0.65rem', color: '#666',
          lineHeight: 2, letterSpacing: '0.05em', flex: 1, minWidth: '14rem',
        }}>
          送出後通常在 24 小時內回覆。<br />急件請直接來電或 LINE。
        </p>
        <button type="submit" style={{
          background: 'var(--accent)', color: '#fff',
          border: 'none', padding: '0.85rem 2.5rem',
          fontFamily: "'Noto Sans TC', sans-serif",
          fontSize: '0.75rem', letterSpacing: '0.18em',
          cursor: 'pointer', transition: 'opacity 0.2s',
        }}>送出訊息</button>
      </div>
    </form>
  );
}
