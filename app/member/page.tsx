'use client';

import dynamic from 'next/dynamic';
import PageHero from '../../components/PageHero';

// Firebase 只能在瀏覽器端執行，ssr: false 確保不會在 build/prerender 時觸發
const MemberClient = dynamic(() => import('./MemberClient'), { ssr: false });

export default function MemberPage() {
  return (
    <>
      <PageHero
        title="加入，就是你品牌的設計夥伴"
        subtitle="字型優惠、新品搶先、設計資源，專屬設計人的社群"
      />
      <MemberClient />
    </>
  );
}
