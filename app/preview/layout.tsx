import type { Metadata } from 'next';
import './preview.css';

export const metadata: Metadata = {
  title: '盛和設計 Shenghe Design',
  description: '以字為核心的設計工作室',
};

export default function PreviewLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Inter for English sans — React 19 hoists <link> to <head> */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap"
      />
      <div className="preview-scope">{children}</div>
    </>
  );
}
