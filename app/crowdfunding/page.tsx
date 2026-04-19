import type { Metadata } from 'next';
import PageHero from '../../components/PageHero';
import PainPointCards from '../../components/sections/PainPointCard';
import ServiceSpectrum from '../../components/sections/ServiceSpectrum';
import ServiceDetailSection from '../../components/sections/ServiceDetailSection';
import WhyUsGrid from '../../components/sections/WhyUsGrid';
import ProcessTimeline from '../../components/sections/ProcessTimeline';
import FAQAccordion from '../../components/FAQAccordion';
import CTASection from '../../components/sections/CTASection';
import { crowdfundingCases } from '../../data/crowdfunding-cases';

export const metadata: Metadata = {
  title: '募資代操 — 盛和設計 × 字趣 fontsfun',
  description: '嘖嘖、貝殼放大專案代操 × 廣告投放 × 視覺設計一條龍。',
};

const platforms = ['嘖嘖 zeczec', '貝殼放大 Backer-Founder', 'flyingV', 'Kickstarter'];

export default function CrowdfundingPage() {
  return (
    <>
      {/* 1. Hero — 保留不動 */}
      <PageHero
        title="募資成敗，從設計與行銷開始"
        subtitle="嘖嘖、貝殼放大專案代操 × 廣告投放 × 視覺設計一條龍"
      />

      {/* 2. 問題意識 */}
      <PainPointCards
        sectionTitle="你是不是也遇過這些狀況？"
        items={[
          { icon: '○', title: '募資頁做得漂亮，卻沒人看見', desc: '流量不來，再好的產品也賣不出去' },
          { icon: '○', title: '廣告投了一堆，轉換率卻不如預期', desc: '素材、受眾、節奏——哪個環節出了問題？' },
          { icon: '○', title: '設計跟行銷是兩批人，訊息接不起來', desc: '品牌語言被切碎，消費者看完也記不得你是誰' },
          { icon: '○', title: '第一次做募資，不知道從哪一步開始', desc: '平台規則、提案格式、排程節奏，全靠自己摸索太慢' },
        ]}
      />

      {/* 3. 服務光譜 */}
      <ServiceSpectrum
        title="從產品到銷售，我們全程陪你走"
        subtitle="不只是把頁面做好看，是讓好產品真的被買單"
        nodes={['策略', '企劃', '設計', '廣告', '操盤', '延伸']}
      />

      {/* 4. 3 大服務細節 */}
      <ServiceDetailSection services={[
        {
          headline: '從 0 到 1，把好產品變成能賣的故事',
          items: ['平台選擇與提案策略', '回饋方案與定價邏輯', '上線節奏操盤'],
          differentiator: '不只是做一頁，而是陪你跑完 30-60 天的戰役。',
          image: '/images/crowdfunding/service-01.svg',
        },
        {
          headline: '視覺，是讓人按下贊助的關鍵',
          items: ['主視覺與產品情境圖', '影片腳本與動態素材', '頁面敘事排版'],
          differentiator: '字型工作室的血統，讓版面的呼吸節奏比別人更講究。',
          image: '/images/crowdfunding/service-02.svg',
        },
        {
          headline: '讓對的人，在對的時候看到你',
          items: ['Meta / Google 廣告規劃', '素材 A/B 測試', '即時數據調整'],
          differentiator: '數據是方向盤，不是後照鏡。',
          image: '/images/crowdfunding/service-03.svg',
        },
      ]} />

      {/* 5. 為什麼選 fontsfun */}
      <WhyUsGrid
        sectionTitle="為什麼客戶選我們"
        items={[
          { title: '我們自己跑過募資', desc: '娉婷體 1,488%、綿甜體 704%——下過場、拿過成績。你踩的坑我們都踩過。' },
          { title: '設計與行銷同一組人', desc: '不用在兩個廠商間傳話，訊息不會被翻譯成兩種語言。' },
          { title: '字型級的視覺細節', desc: '對排版、留白、筆畫的要求比一般行銷團隊更嚴格。' },
          { title: '陪你走長線', desc: '粉絲、素材、數據資產都是品牌資本。我們幫你把流量變成品牌力。' },
        ]}
      />

      {/* 6. 合作流程 */}
      <ProcessTimeline
        title="從第一次聊天，到募資結案"
        steps={[
          { num: '01', name: '初步諮詢', duration: '1 週', desc: '聊產品、目標、時程' },
          { num: '02', name: '策略規劃', duration: '2-3 週', desc: '主軸、TA、回饋、排程' },
          { num: '03', name: '視覺製作', duration: '4-6 週', desc: '主視覺、影片、募資頁' },
          { num: '04', name: '預熱期', duration: '2-4 週', desc: '名單蒐集、廣告測試' },
          { num: '05', name: '上線衝刺', duration: '30-60 天', desc: '即時操盤、每日優化' },
          { num: '06', name: '結案交付', duration: '1-2 週', desc: '報告、發貨、粉絲經營' },
        ]}
      />

      {/* 7. 合作平台 — 保留不動 */}
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

      {/* 8. 精選案例 — 保留不動 */}
      <section id="cases" style={{ padding: '7.5rem 4rem' }}>
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
            <a key={c.id} href={c.link} target="_blank" rel="noopener noreferrer"
              className="hover-lift" style={{
                textDecoration: 'none', color: 'inherit',
                border: '1px solid var(--light-rule)', overflow: 'hidden',
                display: 'flex', flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}>
              <div style={{ aspectRatio: '16/9', overflow: 'hidden', background: '#e8e4db' }}>
                <img src={c.cover} alt={c.fullTitle} loading="lazy" style={{
                  width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                }} />
              </div>
              <div style={{ padding: '1.75rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <span style={{
                  alignSelf: 'flex-start',
                  fontFamily: "'Noto Sans TC', sans-serif", fontSize: '12px',
                  letterSpacing: '0.1em', color: 'var(--warm-mid)',
                  border: '1px solid var(--light-rule)', padding: '0.15rem 0.5rem',
                }}>{c.platform}</span>
                <h3 style={{
                  fontFamily: "'Noto Serif TC', serif", fontWeight: 500,
                  fontSize: '1.15rem', letterSpacing: '0.06em', lineHeight: 1.5,
                }}>{c.title}</h3>
                <span style={{
                  fontFamily: "'Cormorant Garamond', serif", fontWeight: 600,
                  fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                  lineHeight: 1, color: 'var(--accent)', letterSpacing: '0.02em',
                }}>{c.achievement}</span>
                <span style={{
                  fontFamily: "'Noto Sans TC', sans-serif",
                  fontSize: '16px', color: 'var(--warm-mid)', letterSpacing: '0.06em',
                }}>{c.amount}</span>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {c.services.map((s) => (
                    <span key={s} style={{
                      fontFamily: "'Noto Sans TC', sans-serif", fontSize: '12px',
                      letterSpacing: '0.08em', color: 'var(--accent)',
                      border: '1px solid var(--accent)', padding: '0.1rem 0.45rem',
                    }}>{s}</span>
                  ))}
                </div>
                <p style={{
                  fontFamily: "'Noto Sans TC', sans-serif",
                  fontSize: '16px', lineHeight: 1.85, color: 'var(--warm-mid)',
                  letterSpacing: '0.04em', marginTop: 'auto',
                  display: '-webkit-box', WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical', overflow: 'hidden',
                } as React.CSSProperties}>{c.summary}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 9. FAQ */}
      <section style={{ padding: '7.5rem 4rem' }}>
        <h2 style={{
          fontFamily: "'Noto Serif TC', serif", fontWeight: 400,
          fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
          letterSpacing: '0.08em', textAlign: 'center',
          marginBottom: '4rem',
        }}>常見問題</h2>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <FAQAccordion items={[
            { q: '我的產品適合做募資嗎？', a: '產品是否有「新」的訴求（新品類、技術、設計、價值）？有，大多數能做。初談時一起評估。' },
            { q: '最小合作金額是多少？', a: '視專案規模。做過目標 1 萬到百萬級的案子，關鍵不在目標金額，而在產品本身是否準備好。' },
            { q: '可以只做設計或只做投放嗎？', a: '可以。三大服務都能單獨委託，但整合委託綜效最高——訊息一致、節奏同步。' },
            { q: '萬一沒達標，費用怎麼算？', a: '採「服務費 + 分潤」混合計價，不完全綁定達標結果，細節依規模談。' },
            { q: '從開始到上線要多久？', a: '平均 2-3 個月籌備期最理想。少於 6 週會犧牲品質，超過 4 個月會失去時效。' },
          ]} />
        </div>
      </section>

      {/* 10. 強化 CTA */}
      <CTASection
        title="不知道你的案子適不適合？先聊聊就好"
        subtitle="30 分鐘免費諮詢，我們誠實告訴你能幫到什麼、不能幫到什麼"
        primaryLabel="預約免費諮詢"
        primaryHref="mailto:fontsfun18@gmail.com?subject=募資服務諮詢"
        secondaryLabel="先看更多案例"
        secondaryHref="#cases"
      />

      <style>{`
        @media (max-width: 1024px) { .cf-cases-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 768px) { .cf-cases-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
