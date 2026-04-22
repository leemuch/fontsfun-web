'use client';

import { usePathname } from 'next/navigation';
import Nav from './Nav';
import Footer from './Footer';

/**
 * 根 layout 使用 <SiteChrome> 包裝 children，讓 /preview 路由可以
 * 關閉全站的 Nav + Footer + 61px 頂部 padding，渲染自己的設計骨架。
 *
 * 對 /、/fonts 等既有路由的輸出完全一致（passthrough 到舊行為）。
 * 未來 /preview promote 到 / 時，只要刪除此條件或整個 SiteChrome 即可。
 */
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPreview = pathname === '/preview' || pathname?.startsWith('/preview/');

  if (isPreview) return <>{children}</>;

  return (
    <>
      <Nav />
      <main style={{ paddingTop: '61px' }}>{children}</main>
      <Footer />
    </>
  );
}
