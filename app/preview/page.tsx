import PreviewNav from './components/PreviewNav';
import PreviewHero from './components/PreviewHero';
import PreviewConcept from './components/PreviewConcept';
import PreviewWorks from './components/PreviewWorks';

export default function PreviewHome() {
  return (
    <>
      <PreviewNav />
      <PreviewHero />
      <PreviewConcept />
      <PreviewWorks />
      {/* /preview 留作字趣 fontsfun 品牌重構基底，暫停新增 section */}
    </>
  );
}
