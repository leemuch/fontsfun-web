export default function Footer() {
  return (
    <footer style={{
      background: 'var(--ink)', color: '#444',
      borderTop: '1px solid #222',
      padding: '2rem 4rem',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      fontFamily: "'Noto Sans TC', sans-serif",
      fontSize: '0.7rem', letterSpacing: '0.1em',
    }}>
      <span>© 2025 字趣 fontsfun · 盛和有限公司 Shenghe Co., Ltd.</span>
      <span style={{ color: '#444' }}>fontsfun.com</span>
    </footer>
  );
}
