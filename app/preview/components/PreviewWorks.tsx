type Work = {
  num: string;      // 01–04，顯示於圖片佔位中央
  zhName: string;   // 中文作品名（綿甜體 → Noto Serif TC fallback）
  category: string; // 英文分類（Typeface / Publication / ...）
  year: string;
};

const works: Work[] = [
  { num: '01', zhName: '作品名稱一', category: 'Typeface',    year: '2024' },
  { num: '02', zhName: '作品名稱二', category: 'Publication', year: '2024' },
  { num: '03', zhName: '作品名稱三', category: 'Branding',    year: '2025' },
  { num: '04', zhName: '作品名稱四', category: 'Cultural',    year: '2025' },
];

type Props = {
  /** 「View All Works」連結；現階段無 /works 路由，預設 '#' */
  worksHref?: string;
};

export default function PreviewWorks({ worksHref = '#' }: Props) {
  return (
    <section id="works" className="works-section">
      <div className="works-container">
        <div className="font-serif-en text-[14px] tracking-[0.25em] text-neutral-500 uppercase">
          Works
        </div>
        <h2 className="works-title-gap font-miantian font-light text-[48px]! leading-[1.2] tracking-[0.05em] text-neutral-900">
          作品
        </h2>

        <div className="works-grid-gap works-grid">
          {works.map(w => (
            <article key={w.num} className="work-card">
              <div className="work-image">
                <span className="work-image-label">Work {w.num}</span>
                <div className="work-overlay" aria-hidden />
              </div>
              <div className="work-info">
                <div className="font-miantian text-[20px] tracking-[0.05em] text-neutral-900">
                  {w.zhName}
                </div>
                <div className="work-meta-gap font-serif-en text-[14px] text-neutral-500">
                  {w.category}
                </div>
                <div className="work-year-gap font-sans-en text-[12px] text-neutral-400">
                  {w.year}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="works-cta-wrap">
          <a
            href={worksHref}
            className="works-cta font-sans-zh text-[14px] tracking-[0.12em] text-neutral-900"
          >
            <span>View All Works</span>
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
