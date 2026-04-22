type Props = {
  /** CTA 目的地。現階段無 /about 路由，預設 '#'；未來可改成 '/about' */
  aboutHref?: string;
};

export default function PreviewConcept({ aboutHref = '#' }: Props) {
  return (
    <section id="concept" className="concept-section">
      <div className="concept-container">
        <div className="font-serif-en text-[14px] tracking-[0.25em] text-neutral-500 uppercase">
          About
        </div>
        <h2 className="concept-title-gap font-miantian font-light text-[48px]! leading-[1.2] tracking-[0.05em] text-neutral-900">
          關於盛和
        </h2>

        <div className="concept-rule" aria-hidden />

        <div className="concept-body font-sans-zh">
          <p>
            盛和設計專注於以文字為核心的視覺溝通。
            <br />
            從字體設計、排版到品牌識別，
            <br />
            我們相信每一個文字都值得被精心對待。
          </p>
          <p>
            旗下字體品牌「字趣 fontsfun」
            <br />
            開發繁體中文原創字型，
            <br />
            為華文世界提供更多書寫與表達的可能。
          </p>
        </div>

        <a href={aboutHref} className="concept-cta font-sans-zh text-[14px] tracking-[0.12em] text-neutral-900">
          <span>了解更多</span>
          <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}
