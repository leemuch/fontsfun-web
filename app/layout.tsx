import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: '字趣 fontsfun — 原創繁體中文字型',
  description: '專為繁體中文設計的原創字型工作室，提供高品質手感字體，適合品牌、出版、數位設計使用。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@300;400;500;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Noto+Sans+TC:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Nav />
          <main style={{ paddingTop: '61px' }}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
