# 會員頁手機版 RWD 修復提案（封存）

> **此方案於 2026-04-20 提案未執行，待未來會員系統重啟時參考。**
>
> 會員系統（`/member`、`/login`）已於同日封存為 redirect 至首頁，Nav 入口也已註解。
> `app/member/MemberClient.tsx` 與 Firebase auth 相關檔案保留原狀不動，未來重啟時可直接沿用本文件。

---

## 背景

2026-04-20 使用者回報會員頁手機版畫面重疊。
第一次嘗試的全域 CSS sweep（commit `b5e32cd`）誤傷首頁 / /fonts，已 revert。
下方為改良版：**scope 於 `.member-page` 之下**，完全不動 position / flex / grid 全域 utility。

## 問題清單（以 375px 寬度檢視 `MemberClient.tsx`）

| # | 位置 | 現有寫法 | 手機問題 |
|---|---|---|---|
| 1 | AuthScreen L129 | `gridTemplateColumns: '1fr 1fr'` | 左右分欄各 ~170px 擠壓 |
| 2 | Dashboard Header L251 | `1fr auto` + `padding: 4rem` | 姓名撞頭像、padding 吃掉半螢幕 |
| 3 | Stats L272 | `repeat(4, 1fr)` | 4 欄擠死、`NT$3,500` 爆版 |
| 4 | Dash Tabs L287 | `padding: 0 4rem` + 4 按鈕 | 橫向溢出切掉最後一個 tab |
| 5 | Orders table L336 | 7 欄寬表格 | 必然橫向爆出 viewport |
| 6 | Profile L399 | `1fr 1fr` + `padding: 3rem` | 雙欄擠到每欄 ~140px |
| 7 | Cert Modal L440 | `padding: 4rem` | 內容被 padding 逼到只剩窄條 |

---

## 解法：scoped CSS（追加至 `app/globals.css` 檔尾）

```css
/* ═════════════════════════════════════════════════════════════
 * MEMBER PAGE · MOBILE RWD (scoped)
 * All rules are scoped under `.member-page` so that nothing here
 * can affect / or /fonts / /publishing / /crowdfunding.
 * Every !important is annotated with the inline style it defeats.
 * ═════════════════════════════════════════════════════════════ */
@media (max-width: 768px) {
  /* Root safety: prevent long email/uid from pushing horizontal scroll */
  .member-page { max-width: 100%; overflow-x: hidden; }

  /* AuthScreen card — MemberClient.tsx L129 inline style={{ display:'grid', gridTemplateColumns:'1fr 1fr', width:'min(860px, 94vw)' }} */
  .member-page .auth-card {
    grid-template-columns: 1fr !important;   /* beats L129 inline gridTemplateColumns */
    width: min(420px, 94vw) !important;      /* beats L129 inline width */
  }
  /* AuthScreen decorative visual — MemberClient.tsx L135 inline style={{ display:'flex', padding:'4rem', ... }} */
  .member-page .auth-visual {
    display: none !important;                /* beats L135 inline display:flex */
  }
  /* AuthScreen form panel — MemberClient.tsx L160 inline style={{ padding:'4rem 3rem', ... }} */
  .member-page .auth-panel {
    padding: 2.5rem 1.75rem !important;      /* beats L160 inline padding */
  }

  /* Dashboard header — MemberClient.tsx L251 inline style={{ padding:'4rem', gridTemplateColumns:'1fr auto', gap:'2rem' }} */
  .member-page .dash-header {
    grid-template-columns: 1fr !important;   /* beats L251 inline gridTemplateColumns */
    gap: 1.5rem !important;                  /* beats L251 inline gap */
    padding: 2.25rem 1.25rem !important;     /* beats L251 inline padding */
  }
  /* Header right-side actions — MemberClient.tsx L261 inline style={{ flexDirection:'column', alignItems:'flex-end' }} */
  .member-page .dash-header-actions {
    flex-direction: row !important;          /* beats L261 inline flexDirection:'column' */
    align-items: center !important;          /* beats L261 inline alignItems:'flex-end' */
  }
  .member-page .dash-header h1 { word-break: keep-all; }
  .member-page .dash-header p  { word-break: break-all; }  /* long email wraps */

  /* Stats grid — MemberClient.tsx L272 inline style={{ gridTemplateColumns:'repeat(4, 1fr)' }} */
  .member-page .dash-stats {
    grid-template-columns: repeat(2, 1fr) !important;  /* beats L272 inline (4→2 cols) */
  }
  /* Stats cells — MemberClient.tsx L279 inline style={{ padding:'2rem 3rem', borderRight: i<3 ? '...' : 'none' }} */
  .member-page .dash-stats > div {
    padding: 1.5rem 1rem !important;         /* beats L279 inline padding */
    border-right: none !important;           /* beats L279 inline conditional borderRight */
    border-bottom: 1px solid var(--light-rule);
  }
  .member-page .dash-stats > div:nth-child(odd) {
    border-right: 1px solid var(--light-rule) !important;  /* re-add divider for new 2-col layout */
  }
  .member-page .dash-stats > div:nth-last-child(-n+2) {
    border-bottom: none;
  }

  /* Dash tabs strip — MemberClient.tsx L287 inline style={{ padding:'0 4rem', ... }} */
  .member-page .dash-tabs {
    padding: 0 1rem !important;              /* beats L287 inline padding */
    overflow-x: auto;
    scrollbar-width: none;
  }
  .member-page .dash-tabs::-webkit-scrollbar { display: none; }
  /* Tab buttons — MemberClient.tsx L289 inline style={{ padding:'1.2rem 2rem' }} */
  .member-page .dash-tabs button {
    padding: 1rem 1rem !important;           /* beats L289 inline padding */
    white-space: nowrap;
    flex-shrink: 0;
  }

  /* Section wrappers — MemberClient.tsx L295 / L334 / L367 / L397 all inline style={{ padding:'4rem' }} */
  .member-page .dash-section {
    padding: 2rem 1.25rem !important;        /* beats inline padding:'4rem' on 4 tab bodies */
  }

  /* Font / License card grids — MemberClient.tsx L303 / L369 inline style={{ gridTemplateColumns:'repeat(auto-fill, minmax(320/340px, 1fr))' }} */
  .member-page .dash-card-grid {
    grid-template-columns: 1fr !important;   /* beats L303/L369 inline gridTemplateColumns */
  }
  /* Card inner — MemberClient.tsx L305 / L371 inline style={{ padding:'2.5rem' }} */
  .member-page .dash-card {
    padding: 1.75rem 1.5rem !important;      /* beats L305/L371 inline padding */
  }

  /* Orders table horizontal scroll — wrapper added at MemberClient.tsx L336 */
  .member-page .dash-table-wrap {
    overflow-x: auto;                        /* lets the table scroll horizontally on phone */
    -webkit-overflow-scrolling: touch;
  }
  .member-page .dash-table-wrap table {
    min-width: 640px;                        /* force natural table width; wrapper provides scroll */
  }

  /* Profile two-panel grid — MemberClient.tsx L399 inline style={{ gridTemplateColumns:'1fr 1fr' }} */
  .member-page .profile-grid {
    grid-template-columns: 1fr !important;   /* beats L399 inline gridTemplateColumns */
  }
  /* Profile panel inner — MemberClient.tsx L417 inline style={{ padding:'3rem' }} */
  .member-page .profile-panel {
    padding: 2rem 1.5rem !important;         /* beats L417 inline padding */
  }

  /* Cert modal — MemberClient.tsx L440 inline style={{ padding:'4rem', width:'min(560px, 94vw)' }} */
  .member-page .cert-modal {
    padding: 2.5rem 1.5rem !important;       /* beats L440 inline padding */
  }
}
```

## 配合的 className 標註（`MemberClient.tsx`）

無結構變動、只加 `className` 標籤。`dash-table-wrap` 需新增一層 wrapper 包住 `<table>`。

| 行號 | 原 element | 要加的 className |
|---|---|---|
| L125 | AuthScreen root div | `member-page` |
| L129 | AuthScreen card | `auth-card` |
| L135 | AuthScreen visual | `auth-visual` |
| L160 | AuthScreen panel | `auth-panel` |
| L249 | Dashboard root div | `member-page` |
| L251 | Dashboard header | `dash-header` |
| L261 | Header actions | `dash-header-actions` |
| L272 | Stats | `dash-stats` |
| L287 | Dash tabs | `dash-tabs` |
| L295 / L334 / L367 / L397 | 4 個 tab section | `dash-section` |
| L303 / L369 | Card grids | `dash-card-grid` |
| L305 / L371 | Card inner | `dash-card` |
| L336 | **新增 wrapper 包 `<table>`** | `dash-table-wrap` |
| L399 | Profile grid | `profile-grid` |
| L417 | Profile panel | `profile-panel` |
| L440 | Cert modal | `cert-modal` |

## 設計原則檢核表（供未來 review）

- 每條 selector 都以 `.member-page` 為前綴
- 無 `*`、`body`、`html`、`.container`、`[class*="..."]` 等廣域匹配
- 不動 `position` / flex 全域 utility
- `grid-template-columns` 只覆蓋 `.member-page` 下的具名 class
- 每個 `!important` 都明確對應到 `MemberClient.tsx` 的 inline style
