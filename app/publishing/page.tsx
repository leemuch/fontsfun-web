import type { Metadata } from 'next';
import PageHero from '../../components/PageHero';
import ServiceSpectrum from '../../components/sections/ServiceSpectrum';
import PainPointCards from '../../components/sections/PainPointCard';
import ServiceDetailSection from '../../components/sections/ServiceDetailSection';
import WhyUsGrid from '../../components/sections/WhyUsGrid';
import ProcessTimeline from '../../components/sections/ProcessTimeline';
import FAQAccordion from '../../components/FAQAccordion';
import CTASection from '../../components/sections/CTASection';
import { publishingCases } from '../../data/publishing-cases';

export const metadata: Metadata = {
  title: '自費出版 — 盛和設計 × 字趣 fontsfun',
  description: '自費出版全流程｜詩集、散文、小說、設計雜誌——每一種書，都值得被好好做出來。',
};

export default function PublishingPage() {
  return (
    <>
      {/* 1. Hero */}
      <PageHero
        title="從一個想法，到一本書"
        subtitle="自費出版全流程｜詩集、散文、小說、設計雜誌——每一種書，都值得被好好做出來"
      />

      {/* 2. 服務光譜 */}
      <ServiceSpectrum
        title="從想法到成書，我們全程陪你走"
        subtitle="不論詩集、散文、小說或設計雜誌——每一種書，都能從零做到上架"
        nodes={['想法', '編輯', '設計', '印製', '通路', '行銷']}
      />

      {/* 3. 問題意識 */}
      <PainPointCards
        sectionTitle="你是不是也遇過這些狀況？"
        items={[
          { icon: '○', title: '寫了很多年的稿子，不知道怎麼變成一本書', desc: '編輯、排版、印刷、書號、通路——太多環節沒頭緒' },
          { icon: '○', title: '找印刷廠報價，結果印出來跟想像差很遠', desc: '紙張、裝幀、色彩、裁切，每個選擇都影響最後成品' },
          { icon: '○', title: '書做好了，卻不知道怎麼被看見', desc: '自費出版最大的挑戰不是印出來，是讓讀者找到你' },
          { icon: '○', title: '預算有限，但不想要廉價的成品', desc: '花了錢做書，至少要做得讓自己拿在手上會驕傲' },
        ]}
      />

      {/* 4. 3 大服務細節 */}
      <ServiceDetailSection services={[
        {
          headline: '把文字整理成讀者願意翻下去的節奏',
          items: ['內容架構與章節規劃', '文字編輯與校對', 'ISBN 書號與 CIP 申請'],
          differentiator: '不只幫你排版，是把原稿當一本真正的書來對待。',
        },
        {
          headline: '紙張、字型、油墨——都是這本書的一部分',
          items: ['封面設計與裝幀選擇', '內頁排版與字型選用', '紙張、加工與印刷監製'],
          differentiator: '字型工作室的血統，內文的字距、行高比一般美編更講究。',
        },
        {
          headline: '書印出來只是開始，讓書走到讀者手上才是結束',
          items: ['新書預購／募資規劃', '獨立書店與通路鋪貨', '新書發表會與媒體合作'],
          differentiator: '同時做募資——如果你的書適合走募資通路，我們可以直接銜接。',
        },
      ]} />

      {/* 5. 為什麼選 fontsfun */}
      <WhyUsGrid
        sectionTitle="為什麼客戶選我們做書"
        items={[
          { title: '字型專業等級的內頁排版', desc: '我們懂中文排版的呼吸節奏，讀起來舒服是基本要求。' },
          { title: '設計與企劃同一組人', desc: '從文字到視覺到行銷不用在多個廠商間傳話。' },
          { title: '詩集到設計雜誌都能做', desc: '不同書類有不同的節奏與美感語言，我們都接。' },
          { title: '可延伸到募資與活動', desc: '書不是印完就結束，後續推廣我們也幫。' },
        ]}
      />

      {/* 6. 合作流程 */}
      <ProcessTimeline
        title="從一個想法，到書在讀者手上"
        steps={[
          { num: '01', name: '初步諮詢', duration: '1 週', desc: '聊稿子、出版目標、預算' },
          { num: '02', name: '編輯企劃', duration: '2-4 週', desc: '稿件評估、結構建議、裝幀方向' },
          { num: '03', name: '設計製作', duration: '6-10 週', desc: '封面、內頁、打樣、校對' },
          { num: '04', name: '印刷監製', duration: '2-3 週', desc: '紙張選擇、印刷廠溝通、成品把關' },
          { num: '05', name: '通路與行銷', duration: '2-4 週', desc: '書號申請、上架、宣傳素材' },
          { num: '06', name: '發表與延伸', duration: '1-2 個月', desc: '新書活動、讀者經營、再版規劃' },
        ]}
      />

      {/* 7. 精選案例（placeholder） */}
      <section id="cases" style={{ padding: '7.5rem 4rem' }}>
        <div style={{
          display: 'flex', alignItems: 'baseline', gap: '1.5rem',
          marginBottom: '4rem', paddingBottom: '1rem',
          borderBottom: '1px solid var(--light-rule)',
        }}>
          <span style={{
            fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
            fontSize: '14px', color: 'var(--warm-mid)', letterSpacing: '0.15em',
          }}>Selected Works</span>
          <h2 style={{
            fontFamily: "'Noto Serif TC', serif", fontWeight: 500,
            fontSize: '1.1rem', letterSpacing: '0.15em',
          }}>出版案例</h2>
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem',
        }} className="pub-cases-grid">
          {publishingCases.map((c) => (
            <div key={c.id} className="hover-lift" style={{
              border: '1px solid var(--light-rule)', overflow: 'hidden',
              display: 'flex', flexDirection: 'column',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}>
              <div style={{ aspectRatio: '3/4', overflow: 'hidden', background: '#1a1714' }}>
                <img src={c.cover} alt={c.title} loading="lazy" style={{
                  width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                }} />
              </div>
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span style={{
                  alignSelf: 'flex-start',
                  fontFamily: "'Noto Sans TC', sans-serif", fontSize: '12px',
                  letterSpacing: '0.1em', color: 'var(--warm-mid)',
                  border: '1px solid var(--light-rule)', padding: '0.15rem 0.5rem',
                }}>{c.category}</span>
                <h3 style={{
                  fontFamily: "'Noto Serif TC', serif", fontWeight: 500,
                  fontSize: '1.1rem', letterSpacing: '0.06em', lineHeight: 1.5,
                }}>{c.title}</h3>
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
                }}>{c.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. FAQ */}
      <section style={{ padding: '7.5rem 4rem' }}>
        <h2 style={{
          fontFamily: "'Noto Serif TC', serif", fontWeight: 400,
          fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
          letterSpacing: '0.08em', textAlign: 'center',
          marginBottom: '4rem',
        }}>常見問題</h2>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <FAQAccordion items={[
            { q: '自費出版要多少錢？', a: '看書的規格——頁數、印量、紙張、裝幀、色彩。做過 6 萬到 60 萬的案子，初談依預算建議配置。' },
            { q: '我的稿子還沒完稿，可以找你嗎？', a: '可以。稿子越早來，能協助的編輯空間越大。' },
            { q: '書號、ISBN、CIP 我不懂怎麼辦？', a: '我們全部協助處理，你只要提供作者資料。' },
            { q: '一定要走通路販售嗎？只想自己收藏可以嗎？', a: '當然。紀念書、生日書、企業禮書只印少量不上通路，都接。' },
            { q: '詩集、散文、小說、設計雜誌，你們都能做嗎？', a: '都能。不同書類節奏和視覺語言不同，初談討論方向。' },
          ]} />
        </div>
      </section>

      {/* 9. CTA */}
      <CTASection
        title="有一本書想做嗎？先聊聊就好"
        subtitle="30 分鐘免費諮詢，不管稿子完成多少，我們一起看下一步怎麼走"
        primaryLabel="預約免費諮詢"
        primaryHref="mailto:fontsfun18@gmail.com?subject=出版服務諮詢"
        secondaryLabel="先看出版案例"
        secondaryHref="#cases"
      />

      <style>{`
        @media (max-width: 1024px) { .pub-cases-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 768px) { .pub-cases-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
