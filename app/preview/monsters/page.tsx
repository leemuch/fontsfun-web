import type { Metadata } from 'next';
import { monsters, MonsterFamily } from '../../../components/monsters';
import './monsters.css';

export const metadata: Metadata = {
  title: '怪獸家族 · 盛和設計',
  description: '盛和設計品牌吉祥物家族 — 9 隻字型化身怪獸，為品牌注入靈魂。',
};

export default function MonstersShowcase() {
  return (
    <main className="monsters-page">
      <div className="monsters-container">
        {/* ── Header ── */}
        <header>
          <p
            className="font-sans-en text-[12px] tracking-[0.25em] uppercase"
            style={{ color: '#6B7A99' }}
          >
            Mascot Family
          </p>
          <h1
            className="monsters-h1-gap font-sans-zh text-[clamp(28px,5vw,40px)] leading-[1.2] tracking-[0.04em]"
            style={{ color: '#1B2845', fontWeight: 700 }}
          >
            盛和設計怪獸家族
          </h1>
          <p
            className="monsters-sub-gap font-sans-zh text-[15px] leading-[1.6]"
            style={{ color: '#4A6BA8' }}
          >
            9 隻字型化身 · 每一種字型都有自己的個性與故事
          </p>
          <div className="monsters-rule" aria-hidden />
        </header>

        {/* ── Hero: full family illustration ── */}
        <section className="monsters-hero-wrap" aria-label="怪獸家族主視覺">
          <div className="monsters-hero-frame">
            <MonsterFamily className="monsters-hero-img" />
          </div>
        </section>

        {/* ── Roster: text-only info grid ── */}
        <section aria-label="怪獸家族名冊">
          <p className="monsters-roster-heading">Roster · 9 隻怪獸</p>
          <h2 className="monsters-roster-h2 font-sans-zh">字型分類對照</h2>

          <div className="monsters-grid">
            {monsters.map((m) => (
              <article key={m.id} className="monsters-card">
                <p className="monsters-card-id">#{m.id} · {m.englishName}</p>
                <h3 className="monsters-card-name">{m.displayName}</h3>
                <p className="monsters-card-tag">{m.fontCategory}</p>
                <div className="monsters-card-divider" aria-hidden />
                <p className="monsters-card-personality">{m.personality}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── Footer back link ── */}
        <footer className="monsters-footer">
          <a href="/preview" className="monsters-back font-sans-zh">
            <span aria-hidden>←</span>
            <span>回 /preview 首頁</span>
          </a>
        </footer>
      </div>
    </main>
  );
}
