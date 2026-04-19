'use client';

import { useState, useEffect } from 'react';
import {
  signInWithEmailAndPassword, createUserWithEmailAndPassword,
  GoogleAuthProvider, signInWithRedirect, getRedirectResult,
  signOut, onAuthStateChanged,
  updateProfile, type User,
} from 'firebase/auth';
import {
  doc, getDoc, setDoc, collection, getDocs, serverTimestamp,
} from 'firebase/firestore';
import { getFirebaseAuth, getFirebaseDb } from '../../lib/firebase';

// ── Demo data ──────────────────────────────────────────────────────────────
const DEMO_USER = {
  displayName: '設計師王小明', email: 'demo@fontsfun.com',
  photoURL: null as string | null, uid: 'demo-uid-001',
  metadata: { creationTime: '2024 年 1 月 12 日' },
};
const DEMO_FONTS = [{
  id: 'miantian-studio', fontName: '綿甜體', fontNameEn: 'Miantian Typeface',
  licenseType: '工作室授權', weights: 'Regular · Light · Bold',
  glyphs: '13,500+', purchaseDate: '2025-03-01', version: '2.0',
  downloadUrl: '#', specimen: '溫柔書寫',
}];
const DEMO_ORDERS = [
  { orderId: 'FF-2025-0301', fontName: '綿甜體 2.0', licenseType: '工作室授權', amount: 3500, date: '2025-03-01', status: 'paid' },
  { orderId: 'FF-2024-0902', fontName: '綿甜體 1.5 字重擴充', licenseType: '個人升級', amount: 990, date: '2024-09-02', status: 'paid' },
  { orderId: 'FF-2024-0115', fontName: '綿甜體 1.0', licenseType: '個人授權', amount: 990, date: '2024-01-15', status: 'paid' },
];

type DemoUser = typeof DEMO_USER;
type FontItem = typeof DEMO_FONTS[number];
type OrderItem = typeof DEMO_ORDERS[number];

function getLicenseScope(type?: string) {
  if (!type) return '個人商業使用';
  if (type.includes('企業')) return '全場景無限制';
  if (type.includes('工作室')) return '商業設計全場景';
  return '個人商業使用';
}

function parseFirebaseError(code: string) {
  const map: Record<string, string> = {
    'auth/user-not-found': '找不到此 Email 的帳號',
    'auth/wrong-password': '密碼錯誤，請重試',
    'auth/email-already-in-use': '此 Email 已被使用',
    'auth/weak-password': '密碼強度不足',
    'auth/invalid-email': 'Email 格式不正確',
    'auth/popup-closed-by-user': '登入視窗已關閉',
    'auth/popup-blocked': '瀏覽器阻擋了登入視窗，正改為網頁跳轉登入…',
    'auth/cancelled-popup-request': '已取消先前的登入請求',
    'auth/too-many-requests': '嘗試次數過多，請稍後再試',
    'auth/unauthorized-domain': '此網域尚未授權 Firebase 登入，請聯絡管理員',
    'auth/network-request-failed': '網路連線失敗，請檢查網路',
    'auth/operation-not-allowed': 'Google 登入尚未啟用，請聯絡管理員',
    'auth/internal-error': 'Firebase 內部錯誤，請稍後再試',
    'auth/api-key-not-valid.-please-pass-a-valid-api-key.': 'Firebase API Key 無效（環境變數未設）',
  };
  return map[code] || `發生錯誤（${code || 'unknown'}），請稍後再試`;
}

// (popup detection removed — now always using redirect)

// ── Sub-components ──────────────────────────────────────────────────────────
function AuthScreen({ onLogin }: { onLogin: (user: User | DemoUser, demo?: boolean) => void }) {
  const [tab, setTab] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState(''); const [pw, setPw] = useState('');
  const [name, setName] = useState(''); const [regEmail, setRegEmail] = useState('');
  const [regPw, setRegPw] = useState('');
  const [loginErr, setLoginErr] = useState(''); const [regErr, setRegErr] = useState('');
  const [loading, setLoading] = useState(false);

  const _apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '';
  const isDemoMode = !_apiKey || _apiKey === 'YOUR_API_KEY';

  async function doLogin() {
    if (isDemoMode) { onLogin(DEMO_USER, true); return; }
    setLoginErr(''); setLoading(true);
    try { const c = await signInWithEmailAndPassword(getFirebaseAuth(), email, pw); onLogin(c.user); }
    catch (e: any) { setLoginErr(parseFirebaseError(e.code)); }
    finally { setLoading(false); }
  }

  async function doRegister() {
    if (!name || !regEmail || !regPw) { setRegErr('請填寫所有欄位'); return; }
    if (regPw.length < 6) { setRegErr('密碼至少需要 6 個字元'); return; }
    setRegErr(''); setLoading(true);
    try {
      const cred = await createUserWithEmailAndPassword(getFirebaseAuth(), regEmail, regPw);
      await updateProfile(cred.user, { displayName: name });
      await setDoc(doc(getFirebaseDb(), 'users', cred.user.uid), { displayName: name, email: regEmail, createdAt: serverTimestamp() });
      onLogin(cred.user);
    } catch (e: any) { setRegErr(parseFirebaseError(e.code)); }
    finally { setLoading(false); }
  }

  async function doGoogleLogin() {
    console.log('[auth] Google login button clicked');
    if (isDemoMode) { console.log('[auth] Demo mode — skipping real auth'); onLogin(DEMO_USER, true); return; }
    setLoginErr(''); setLoading(true);

    const auth = getFirebaseAuth();
    console.log('[auth] Firebase auth object:', auth ? 'OK' : 'NULL');
    const provider = new GoogleAuthProvider();
    provider.addScope('email');
    provider.addScope('profile');
    provider.setCustomParameters({ prompt: 'select_account' });

    try {
      console.log('[auth] Calling signInWithRedirect...');
      await signInWithRedirect(auth, provider);
      console.log('[auth] signInWithRedirect returned (browser should navigate away)');
    } catch (e: any) {
      const code = e?.code || 'unknown';
      const msg = e?.message || String(e);
      console.error('[auth] signInWithRedirect ERROR:', code, msg);
      setLoginErr(`${parseFirebaseError(code)} (${code})`);
      setLoading(false);
    }
  }

  return (
    <div style={{
      minHeight: '100vh', paddingTop: '5rem',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        width: 'min(860px, 94vw)', border: '1px solid var(--light-rule)',
        animation: 'fadeUp 0.6s ease forwards',
      }}>
        {/* Visual */}
        <div style={{
          background: '#f0ece3', padding: '4rem',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            fontFamily: "'Noto Serif TC', serif",
            fontWeight: 300, fontSize: 'clamp(1.8rem, 3vw, 3rem)',
            lineHeight: 1.3, letterSpacing: '0.06em', color: '#1a1714',
          }}>
            你的字體，<br />永遠<span style={{ color: 'var(--accent)' }}>在這裡</span>
          </div>
          <p style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontSize: '0.75rem', color: '#666',
            letterSpacing: '0.08em', lineHeight: 2, marginTop: '1.5rem',
          }}>登入後可下載購買的字體檔案、查看授權證書，以及管理所有購買紀錄。</p>
          <div style={{
            position: 'absolute', bottom: '-2rem', right: '-2rem',
            fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
            fontSize: '8rem', color: '#222', lineHeight: 1, pointerEvents: 'none',
          }}>字</div>
        </div>

        {/* Panel */}
        <div style={{ padding: '4rem 3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 style={{ fontFamily: "'Noto Serif TC', serif", fontWeight: 400, fontSize: '1.2rem', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>會員專區</h2>
          <p style={{ fontFamily: "'Noto Sans TC', sans-serif", fontSize: '0.72rem', color: 'var(--warm-mid)', letterSpacing: '0.08em', marginBottom: '2.5rem' }}>字趣 fontsfun · Member Portal</p>

          {/* Tabs */}
          <div style={{ display: 'flex', borderBottom: '1px solid var(--light-rule)', marginBottom: '2rem' }}>
            {(['login', 'register'] as const).map(t => (
              <button key={t} onClick={() => setTab(t)} style={{
                flex: 1, padding: '0.75rem', textAlign: 'center',
                fontFamily: "'Noto Sans TC', sans-serif",
                fontSize: '0.7rem', letterSpacing: '0.12em',
                color: tab === t ? 'var(--ink)' : 'var(--warm-mid)',
                background: 'none', border: 'none',
                borderBottom: tab === t ? '2px solid var(--ink)' : '2px solid transparent',
                cursor: 'pointer', transition: 'all 0.2s',
              }}>{t === 'login' ? '登入' : '註冊'}</button>
            ))}
          </div>

          {tab === 'login' ? (
            <>
              {[{ label: 'Email', type: 'email', val: email, set: setEmail },
                { label: '密碼', type: 'password', val: pw, set: setPw }].map(f => (
                <div key={f.label} style={{ display: 'flex', flexDirection: 'column', marginBottom: '1.25rem' }}>
                  <label style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '0.72rem', color: 'var(--warm-mid)', letterSpacing: '0.18em', marginBottom: '0.4rem' }}>{f.label}</label>
                  <input type={f.type} value={f.val} onChange={e => f.set(e.target.value)}
                    placeholder={f.type === 'email' ? 'your@email.com' : '••••••••'}
                    style={{ background: 'transparent', border: 'none', borderBottom: '1px solid var(--light-rule)', padding: '0.5rem 0', fontFamily: "'Noto Sans TC', sans-serif", fontSize: '0.82rem', color: 'var(--ink)', outline: 'none', letterSpacing: '0.05em' }} />
                </div>
              ))}
              <button className="auth-btn-primary" onClick={doLogin} disabled={loading} style={{ width: '100%', padding: '0.9rem', fontFamily: "'Noto Sans TC', sans-serif", fontSize: '16px', letterSpacing: '0.15em', cursor: 'pointer', marginTop: '0.5rem', opacity: loading ? 0.5 : 1 }}>
                {loading ? '登入中…' : '登入'}
              </button>
              {loginErr && <p style={{ fontFamily: "'Noto Sans TC', sans-serif", fontSize: '0.7rem', color: 'var(--accent)', marginTop: '0.75rem' }}>{loginErr}</p>}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '1.5rem 0' }}>
                <div style={{ flex: 1, height: '1px', background: 'var(--light-rule)' }} />
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '0.75rem', color: '#bbb' }}>或</span>
                <div style={{ flex: 1, height: '1px', background: 'var(--light-rule)' }} />
              </div>
              <button className="auth-btn-google" onClick={doGoogleLogin} style={{ width: '100%', padding: '0.85rem', fontFamily: "'Noto Sans TC', sans-serif", fontSize: '16px', letterSpacing: '0.12em', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
                <svg width="16" height="16" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" /><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
                使用 Google 帳號登入
              </button>
            </>
          ) : (
            <>
              {[{ label: '姓名', type: 'text', val: name, set: setName, ph: '王小明' },
                { label: 'Email', type: 'email', val: regEmail, set: setRegEmail, ph: 'your@email.com' },
                { label: '密碼（至少 6 碼）', type: 'password', val: regPw, set: setRegPw, ph: '••••••••' }].map(f => (
                <div key={f.label} style={{ display: 'flex', flexDirection: 'column', marginBottom: '1.25rem' }}>
                  <label style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '0.72rem', color: 'var(--warm-mid)', letterSpacing: '0.18em', marginBottom: '0.4rem' }}>{f.label}</label>
                  <input type={f.type} value={f.val} onChange={e => f.set(e.target.value)} placeholder={f.ph}
                    style={{ background: 'transparent', border: 'none', borderBottom: '1px solid var(--light-rule)', padding: '0.5rem 0', fontFamily: "'Noto Sans TC', sans-serif", fontSize: '0.82rem', color: 'var(--ink)', outline: 'none', letterSpacing: '0.05em' }} />
                </div>
              ))}
              <button className="auth-btn-primary" onClick={doRegister} disabled={loading} style={{ width: '100%', padding: '0.9rem', fontFamily: "'Noto Sans TC', sans-serif", fontSize: '16px', letterSpacing: '0.15em', cursor: 'pointer', marginTop: '0.5rem', opacity: loading ? 0.5 : 1 }}>
                {loading ? '建立中…' : '建立帳號'}
              </button>
              {regErr && <p style={{ fontFamily: "'Noto Sans TC', sans-serif", fontSize: '16px', color: 'var(--accent)', marginTop: '0.75rem' }}>{regErr}</p>}
              <button className="auth-btn-google" onClick={doGoogleLogin} style={{ width: '100%', padding: '0.85rem', fontFamily: "'Noto Sans TC', sans-serif", fontSize: '16px', letterSpacing: '0.12em', cursor: 'pointer', marginTop: '1rem' }}>
                使用 Google 帳號註冊
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Dashboard({
  user, fonts, orders, isDemo, onLogout,
}: {
  user: User | DemoUser; fonts: FontItem[]; orders: OrderItem[];
  isDemo: boolean; onLogout: () => void;
}) {
  const [dashTab, setDashTab] = useState<'fonts' | 'orders' | 'licenses' | 'profile'>('fonts');
  const [certFont, setCertFont] = useState<FontItem | null>(null);
  const name = user.displayName || (user as User).email?.split('@')[0] || '設計師';
  const total = orders.reduce((s, o) => s + (o.amount || 0), 0);

  const dashTabs = [
    { key: 'fonts', label: '我的字體' },
    { key: 'orders', label: '購買紀錄' },
    { key: 'licenses', label: '授權證書' },
    { key: 'profile', label: '帳號設定' },
  ] as const;

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ padding: '4rem', borderBottom: '1px solid var(--light-rule)', display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', alignItems: 'center' }}>
        <div>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '0.85rem', color: 'var(--warm-mid)', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>Welcome back</p>
          <h1 style={{ fontFamily: "'Noto Serif TC', serif", fontWeight: 300, fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', letterSpacing: '0.06em' }}>
            {name.slice(0, -1)}<span style={{ color: 'var(--accent)' }}>{name.slice(-1)}</span>
          </h1>
          <p style={{ fontFamily: "'Noto Sans TC', sans-serif", fontSize: '0.72rem', color: 'var(--warm-mid)', letterSpacing: '0.08em', marginTop: '0.75rem' }}>
            {user.email}　·　{isDemo ? '示範帳號' : '會員'}
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '1rem' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', border: '1px solid var(--light-rule)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '1.5rem', color: 'var(--warm-mid)', background: 'var(--bg-alt)', overflow: 'hidden' }}>
            {(user as User).photoURL
              ? <img src={(user as User).photoURL!} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} alt="" />
              : name[0]}
          </div>
          <button onClick={onLogout} style={{ fontFamily: "'Noto Sans TC', sans-serif", fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--warm-mid)', background: 'none', border: '1px solid var(--light-rule)', padding: '0.4rem 1rem', cursor: 'pointer', transition: 'all 0.2s' }}>登出</button>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderBottom: '1px solid var(--light-rule)' }}>
        {[
          { num: fonts.length, label: '已購字體' },
          { num: orders.length, label: '購買紀錄' },
          { num: fonts.length, label: '有效授權' },
          { num: `NT$${total.toLocaleString()}`, label: '累計消費' },
        ].map((s, i) => (
          <div key={i} style={{ padding: '2rem 3rem', borderRight: i < 3 ? '1px solid var(--light-rule)' : 'none' }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: '2.5rem', lineHeight: 1, color: 'var(--ink)' }}>{s.num}</div>
            <div style={{ fontFamily: "'Noto Sans TC', sans-serif", fontSize: '0.68rem', color: 'var(--warm-mid)', letterSpacing: '0.1em', marginTop: '0.4rem' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Dash Tabs */}
      <div style={{ display: 'flex', borderBottom: '1px solid var(--light-rule)', padding: '0 4rem', position: 'sticky', top: '61px', background: 'var(--paper)', zIndex: 50 }}>
        {dashTabs.map(t => (
          <button key={t.key} onClick={() => setDashTab(t.key)} style={{ padding: '1.2rem 2rem', fontFamily: "'Noto Sans TC', sans-serif", fontSize: '0.72rem', letterSpacing: '0.12em', color: dashTab === t.key ? 'var(--ink)' : 'var(--warm-mid)', background: 'none', border: 'none', borderBottom: dashTab === t.key ? '2px solid var(--ink)' : '2px solid transparent', cursor: 'pointer', transition: 'all 0.2s' }}>{t.label}</button>
        ))}
      </div>

      {/* Tab: My Fonts */}
      {dashTab === 'fonts' && (
        <div style={{ padding: '4rem' }}>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '0.8rem', color: 'var(--warm-mid)', letterSpacing: '0.2em', marginBottom: '2.5rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--light-rule)' }}>My Fonts · 已購字體</p>
          {fonts.length === 0 ? (
            <div style={{ padding: '6rem 2rem', textAlign: 'center', border: '1px dashed var(--light-rule)' }}>
              <p style={{ fontFamily: "'Noto Serif TC', serif", fontWeight: 300, fontSize: '1rem', color: 'var(--warm-mid)', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>還沒有購買的字體</p>
              <p style={{ fontFamily: "'Noto Sans TC', sans-serif", fontSize: '0.72rem', color: '#bbb', letterSpacing: '0.06em' }}>前往字體專區選購你的第一款字體</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', border: '1px solid var(--light-rule)' }}>
              {fonts.map(f => (
                <div key={f.id} style={{ padding: '2.5rem', borderRight: '1px solid var(--light-rule)', borderBottom: '1px solid var(--light-rule)', transition: 'background 0.25s' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                    <div style={{ fontFamily: "'Noto Serif TC', serif", fontSize: '2rem', lineHeight: 1.2, letterSpacing: '0.04em' }}>{f.specimen}</div>
                    <span style={{ fontFamily: "'Noto Sans TC', sans-serif", fontSize: '0.6rem', letterSpacing: '0.15em', padding: '0.25rem 0.6rem', background: '#3a2a0a', color: '#c4a040' }}>{f.licenseType}</span>
                  </div>
                  <div style={{ fontFamily: "'Noto Serif TC', serif", fontWeight: 500, fontSize: '0.95rem', letterSpacing: '0.12em', marginBottom: '0.3rem' }}>{f.fontName}</div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '0.8rem', color: 'var(--warm-mid)', marginBottom: '0.75rem' }}>{f.fontNameEn}</div>
                  <div style={{ fontFamily: "'Noto Sans TC', sans-serif", fontSize: '0.68rem', color: '#888', letterSpacing: '0.06em', lineHeight: 1.8 }}>
                    字重：{f.weights}<br />字數：{f.glyphs} 字元<br />版本：{f.version}　·　購入：{f.purchaseDate}
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
                    <button onClick={() => alert(isDemo ? '⚠️ 示範模式：實際部署後請在 Firebase Storage 存放字體檔案。' : '下載中…')}
                      style={{ flex: 1, padding: '0.65rem', background: '#1a1714', color: '#f5f2eb', border: '1px solid #555', fontFamily: "'Noto Sans TC', sans-serif", fontSize: '0.65rem', letterSpacing: '0.12em', cursor: 'pointer' }}>
                      ⬇ 下載字體
                    </button>
                    <button onClick={() => setCertFont(f)}
                      style={{ flex: 1, padding: '0.65rem', background: 'none', color: 'var(--ink)', border: '1px solid var(--light-rule)', fontFamily: "'Noto Sans TC', sans-serif", fontSize: '0.65rem', letterSpacing: '0.12em', cursor: 'pointer' }}>
                      授權證書
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Tab: Orders */}
      {dashTab === 'orders' && (
        <div style={{ padding: '4rem' }}>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '0.8rem', color: 'var(--warm-mid)', letterSpacing: '0.2em', marginBottom: '2.5rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--light-rule)' }}>Purchase History · 購買紀錄</p>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                {['訂單編號', '字體', '授權類型', '金額', '日期', '狀態', '發票'].map(h => (
                  <th key={h} style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '0.75rem', color: 'var(--warm-mid)', letterSpacing: '0.18em', fontWeight: 300, padding: '0.75rem 1.5rem', textAlign: 'left', borderBottom: '1px solid var(--light-rule)', background: 'var(--bg-alt)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {orders.map(o => (
                <tr key={o.orderId}>
                  <td style={{ fontFamily: "'Noto Sans TC', sans-serif", fontSize: '0.72rem', color: 'var(--ink)', padding: '1.1rem 1.5rem', borderBottom: '1px solid var(--light-rule)', letterSpacing: '0.05em' }}>{o.orderId}</td>
                  <td style={{ fontFamily: "'Noto Sans TC', sans-serif", fontSize: '0.72rem', color: 'var(--ink)', padding: '1.1rem 1.5rem', borderBottom: '1px solid var(--light-rule)', letterSpacing: '0.05em' }}>{o.fontName}</td>
                  <td style={{ fontFamily: "'Noto Sans TC', sans-serif", fontSize: '0.72rem', color: 'var(--ink)', padding: '1.1rem 1.5rem', borderBottom: '1px solid var(--light-rule)', letterSpacing: '0.05em' }}>{o.licenseType}</td>
                  <td style={{ fontFamily: "'Noto Sans TC', sans-serif", fontSize: '0.72rem', color: 'var(--ink)', padding: '1.1rem 1.5rem', borderBottom: '1px solid var(--light-rule)', letterSpacing: '0.05em' }}>NT${o.amount.toLocaleString()}</td>
                  <td style={{ fontFamily: "'Noto Sans TC', sans-serif", fontSize: '0.72rem', color: 'var(--ink)', padding: '1.1rem 1.5rem', borderBottom: '1px solid var(--light-rule)', letterSpacing: '0.05em' }}>{o.date}</td>
                  <td style={{ padding: '1.1rem 1.5rem', borderBottom: '1px solid var(--light-rule)' }}>
                    <span style={{ fontFamily: "'Noto Sans TC', sans-serif", fontSize: '0.6rem', letterSpacing: '0.12em', padding: '0.2rem 0.65rem', background: '#1a3a1a', color: '#7ac47a' }}>已付款</span>
                  </td>
                  <td style={{ padding: '1.1rem 1.5rem', borderBottom: '1px solid var(--light-rule)' }}>
                    <button onClick={() => alert('發票功能需串接綠界/藍新金流系統')} style={{ fontFamily: "'Noto Sans TC', sans-serif", fontSize: '0.65rem', letterSpacing: '0.1em', color: 'var(--warm-mid)', background: 'none', border: 'none', cursor: 'pointer', borderBottom: '1px solid var(--light-rule)' }}>查看發票</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Tab: Licenses */}
      {dashTab === 'licenses' && (
        <div style={{ padding: '4rem' }}>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '0.8rem', color: 'var(--warm-mid)', letterSpacing: '0.2em', marginBottom: '2.5rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--light-rule)' }}>License Certificates · 授權證書</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', border: '1px solid var(--light-rule)' }}>
            {fonts.map((f, i) => (
              <div key={f.id} style={{ padding: '2.5rem', borderRight: '1px solid var(--light-rule)', borderBottom: '1px solid var(--light-rule)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <div>
                    <div style={{ fontFamily: "'Noto Serif TC', serif", fontWeight: 500, fontSize: '1rem', letterSpacing: '0.12em', marginBottom: '0.3rem' }}>{f.fontName}</div>
                    <div style={{ fontFamily: "'Noto Sans TC', sans-serif", fontSize: '0.7rem', color: 'var(--warm-mid)', letterSpacing: '0.1em' }}>{f.licenseType}</div>
                  </div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '0.72rem', color: 'var(--warm-mid)', letterSpacing: '0.15em' }}>No.{String(i + 1).padStart(4, '0')}</div>
                </div>
                <ul style={{ listStyle: 'none' }}>
                  {[['授權對象', user.displayName || user.email || '—'], ['授權範圍', getLicenseScope(f.licenseType)], ['有效期限', '永久授權'], ['購入日期', f.purchaseDate], ['版本', `v${f.version}`]].map(([k, v]) => (
                    <li key={k} style={{ fontFamily: "'Noto Sans TC', sans-serif", fontSize: '0.7rem', color: '#888', padding: '0.4rem 0', borderBottom: '1px solid var(--light-rule)', letterSpacing: '0.05em', display: 'flex', justifyContent: 'space-between' }}>
                      <span>{k}</span><strong style={{ color: 'var(--ink)', fontWeight: 400 }}>{v}</strong>
                    </li>
                  ))}
                </ul>
                <button onClick={() => setCertFont(f)} style={{ display: 'block', width: '100%', marginTop: '1.5rem', padding: '0.7rem', textAlign: 'center', fontFamily: "'Noto Sans TC', sans-serif", fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--warm-mid)', border: '1px solid var(--light-rule)', cursor: 'pointer', background: 'none' }}>
                  查看並下載證書 →
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab: Profile */}
      {dashTab === 'profile' && (
        <div style={{ padding: '4rem' }}>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '0.8rem', color: 'var(--warm-mid)', letterSpacing: '0.2em', marginBottom: '2.5rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--light-rule)' }}>Account Settings · 帳號設定</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', border: '1px solid var(--light-rule)' }}>
            {[
              {
                title: '基本資料', fields: [
                  { label: '顯示名稱', type: 'text', defaultValue: user.displayName || '', readOnly: false, placeholder: '你的名字' },
                  { label: 'Email', type: 'email', defaultValue: user.email || '', readOnly: true, placeholder: '' },
                  { label: '公司 / 工作室', type: 'text', defaultValue: '', readOnly: false, placeholder: '某某設計有限公司' },
                  { label: '統一編號（開立發票用）', type: 'text', defaultValue: '', readOnly: false, placeholder: '00000000' },
                ],
              },
              {
                title: '安全設定', fields: [
                  { label: '目前密碼', type: 'password', defaultValue: '', readOnly: false, placeholder: '••••••••' },
                  { label: '新密碼', type: 'password', defaultValue: '', readOnly: false, placeholder: '••••••••' },
                  { label: '確認新密碼', type: 'password', defaultValue: '', readOnly: false, placeholder: '••••••••' },
                ],
              },
            ].map(section => (
              <div key={section.title} style={{ padding: '3rem', borderRight: '1px solid var(--light-rule)', borderBottom: '1px solid var(--light-rule)' }}>
                <h3 style={{ fontFamily: "'Noto Serif TC', serif", fontWeight: 400, fontSize: '0.9rem', letterSpacing: '0.15em', marginBottom: '1.5rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--light-rule)' }}>{section.title}</h3>
                {section.fields.map(f => (
                  <div key={f.label} style={{ marginBottom: '1.25rem' }}>
                    <label style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '0.7rem', color: 'var(--warm-mid)', letterSpacing: '0.18em', display: 'block', marginBottom: '0.4rem' }}>{f.label}</label>
                    <input type={f.type} defaultValue={f.defaultValue} readOnly={f.readOnly} placeholder={f.placeholder}
                      style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid var(--light-rule)', padding: '0.4rem 0', fontFamily: "'Noto Sans TC', sans-serif", fontSize: '0.82rem', color: f.readOnly ? 'var(--warm-mid)' : 'var(--ink)', outline: 'none', cursor: f.readOnly ? 'not-allowed' : 'auto' }} />
                  </div>
                ))}
                <button onClick={() => isDemo ? alert('示範模式：正式部署後可儲存設定到 Firestore。') : alert('儲存功能需連接 Firebase')}
                  style={{ padding: '0.75rem 2rem', background: 'var(--ink)', color: 'var(--paper)', border: 'none', fontFamily: "'Noto Sans TC', sans-serif", fontSize: '0.7rem', letterSpacing: '0.15em', cursor: 'pointer', marginTop: '0.5rem', transition: 'background 0.2s' }}>
                  {section.title === '基本資料' ? '儲存變更' : '更新密碼'}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Cert Modal */}
      {certFont && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,8,6,.9)', backdropFilter: 'blur(4px)' }} onClick={() => setCertFont(null)} />
          <div style={{ position: 'relative', zIndex: 1, width: 'min(560px, 94vw)', background: 'var(--paper)', border: '1px solid var(--light-rule)', padding: '4rem', animation: 'fadeUp 0.3s ease' }}>
            <button onClick={() => setCertFont(null)} style={{ position: 'absolute', top: '1rem', right: '1.5rem', background: 'none', border: 'none', fontSize: '1.5rem', color: 'var(--warm-mid)', cursor: 'pointer', fontFamily: "'Cormorant Garamond', serif" }}>×</button>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem', paddingBottom: '2rem', borderBottom: '1px solid var(--light-rule)' }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--warm-mid)', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>字趣 fontsfun</div>
              <h2 style={{ fontFamily: "'Noto Serif TC', serif", fontWeight: 400, fontSize: '1.4rem', letterSpacing: '0.15em' }}>字體授權證書</h2>
            </div>
            <div style={{ fontFamily: "'Noto Serif TC', serif", fontWeight: 300, fontSize: '0.88rem', lineHeight: 2.4, letterSpacing: '0.05em', color: '#555', textAlign: 'center' }}>
              <p>茲證明</p>
              <p><strong style={{ color: 'var(--ink)', fontWeight: 500 }}>{user.displayName || user.email || '持證人'}</strong></p>
              <p>已合法取得</p>
              <p><strong style={{ color: 'var(--ink)', fontWeight: 500 }}>字趣 fontsfun《{certFont.fontName}》{certFont.licenseType}</strong></p>
              <p>授權範圍：{getLicenseScope(certFont.licenseType)}</p>
              <p>授權期限：<strong style={{ color: 'var(--ink)', fontWeight: 500 }}>永久有效</strong></p>
              <p>版本：<strong style={{ color: 'var(--ink)', fontWeight: 500 }}>v{certFont.version}</strong></p>
            </div>
            <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--light-rule)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--warm-mid)' }}>字趣 fontsfun<br />盛和有限公司</div>
              <div style={{ fontFamily: "'Noto Sans TC', sans-serif", fontSize: '0.6rem', color: '#bbb', letterSpacing: '0.1em' }}>FF-{certFont.purchaseDate.replace(/-/g, '')}-{Math.random().toString(36).slice(2, 6).toUpperCase()}</div>
            </div>
            <button onClick={() => window.print()} style={{ display: 'block', width: '100%', marginTop: '1.5rem', padding: '0.8rem', background: 'var(--ink)', color: 'var(--paper)', border: 'none', fontFamily: "'Noto Sans TC', sans-serif", fontSize: '0.7rem', letterSpacing: '0.15em', cursor: 'pointer', transition: 'background 0.2s' }}>列印 / 儲存 PDF</button>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Main Page ───────────────────────────────────────────────────────────────
export default function MemberClient() {
  const [state, setState] = useState<'loading' | 'auth' | 'dashboard'>('loading');
  const [currentUser, setCurrentUser] = useState<User | DemoUser | null>(null);
  const [fonts, setFonts] = useState<FontItem[]>([]);
  const [orders, setOrders] = useState<OrderItem[]>([]);
  const [isDemo, setIsDemo] = useState(false);
  const [authDebug, setAuthDebug] = useState<string[]>([]);

  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '';
  const isDemoConfig = !apiKey || apiKey === 'YOUR_API_KEY';

  // Helper: append debug message (shown on-page in auth screen)
  function addDebug(msg: string) {
    const ts = new Date().toLocaleTimeString('zh-TW', { hour12: false });
    setAuthDebug(prev => [...prev.slice(-9), `[${ts}] ${msg}`]);
    console.log('[auth-debug]', msg);
  }

  useEffect(() => {
    if (isDemoConfig) {
      setCurrentUser(DEMO_USER); setFonts(DEMO_FONTS);
      setOrders(DEMO_ORDERS); setIsDemo(true); setState('dashboard');
      return;
    }

    const auth = getFirebaseAuth();

    // Log env var status for debugging
    const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '';
    const authDomain = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || '';
    addDebug(`Firebase init: apiKey=${apiKey.slice(0, 8)}…, authDomain=${authDomain}`);

    // Pick up the result of signInWithRedirect
    addDebug('Calling getRedirectResult...');
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) {
          addDebug(`Redirect 登入成功: ${result.user.email}`);
        } else {
          addDebug('getRedirectResult: no user (no redirect in progress)');
        }
      })
      .catch((err) => {
        const code = err?.code || 'unknown';
        const msg = err?.message || '';
        addDebug(`getRedirectResult ERROR: ${code} — ${msg}`);
        console.error('[auth] getRedirectResult error:', err);
      });

    const unsub = onAuthStateChanged(auth, async user => {
      if (user) {
        setCurrentUser(user);
        try {
          const fontsSnap = await getDocs(collection(getFirebaseDb(), 'users', user.uid, 'fonts'));
          const ordersSnap = await getDocs(collection(getFirebaseDb(), 'users', user.uid, 'orders'));
          setFonts(fontsSnap.docs.map(d => ({ id: d.id, ...d.data() } as FontItem)));
          setOrders(ordersSnap.docs.map(d => ({ id: d.id, ...d.data() } as unknown as OrderItem)));
        } catch { setFonts(DEMO_FONTS); setOrders(DEMO_ORDERS); }
        setState('dashboard');
      } else {
        setState('auth');
      }
    });
    return () => unsub();
  }, [isDemoConfig]);

  function handleLogin(user: User | DemoUser, demo = false) {
    setCurrentUser(user); setIsDemo(demo);
    setFonts(DEMO_FONTS); setOrders(DEMO_ORDERS);
    setState('dashboard');
  }

  async function handleLogout() {
    if (isDemo) { setCurrentUser(null); setState('auth'); return; }
    await signOut(getFirebaseAuth()); setCurrentUser(null); setState('auth');
  }

  if (state === 'loading') {
    return (
      <div style={{ position: 'fixed', inset: 0, background: 'var(--paper)', zIndex: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '2rem', color: 'var(--warm-mid)' }}>fontsfun</div>
        <div style={{ width: '160px', height: '1px', background: 'var(--light-rule)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', left: '-100%', top: 0, height: '100%', width: '100%', background: 'var(--warm-mid)', animation: 'loadSlide 1s ease infinite' }} />
        </div>
      </div>
    );
  }

  if (state === 'auth') return (
    <>
      <AuthScreen onLogin={handleLogin} />
      {/* Debug panel — visible on auth screen for troubleshooting */}
      {authDebug.length > 0 && (
        <div style={{
          position: 'fixed', bottom: 0, left: 0, right: 0,
          background: 'rgba(0,0,0,0.85)', color: '#7f7',
          fontFamily: 'monospace', fontSize: '11px', lineHeight: 1.6,
          padding: '0.75rem 1rem', maxHeight: '180px', overflowY: 'auto',
          zIndex: 9999,
        }}>
          <strong style={{ color: '#ff0' }}>Auth Debug Log:</strong>
          {authDebug.map((m, i) => <div key={i}>{m}</div>)}
        </div>
      )}
    </>
  );

  return (
    <Dashboard
      user={currentUser!}
      fonts={fonts}
      orders={orders}
      isDemo={isDemo}
      onLogout={handleLogout}
    />
  );
}
