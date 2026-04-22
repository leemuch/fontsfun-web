export default function PreviewHero() {
  return (
    <section className="hero-section relative h-screen flex flex-col items-center text-center overflow-hidden">
      {/* 上方 60% 留白，文字塊從 58vh 開始 */}
      <div className="preview-hero-anim hero-text-anchor">
        <div className="font-serif-en text-[24px] md:text-[32px] tracking-[0.25em] text-neutral-700">
          Shenghe Design
        </div>
        <h1 className="hero-h1-gap font-miantian font-light leading-[1.1] tracking-[0.08em] text-[56px]! md:text-[96px]! text-neutral-900">
          盛和設計
        </h1>
        <div className="hero-sub-gap font-sans-zh text-[14px] md:text-[18px] tracking-[0.08em] text-neutral-600">
          以字為核心的設計工作室
        </div>
      </div>

      {/* Scroll 指示，距底 80px */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-sans-en text-[10px] tracking-[0.3em] text-neutral-500 uppercase">
          Scroll
        </span>
        <span className="text-neutral-400 text-[14px]">↓</span>
      </div>
    </section>
  );
}
