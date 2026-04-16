'use client';

import dynamic from 'next/dynamic';

// Firebase 只能在瀏覽器端執行，ssr: false 確保不會在 build/prerender 時觸發
const MemberClient = dynamic(() => import('./MemberClient'), { ssr: false });

export default function MemberPage() {
  return <MemberClient />;
}
