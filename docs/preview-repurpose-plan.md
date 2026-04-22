# /preview 資產重用計畫

## 目的

原本 `/preview` 路由是為了給「盛和設計」首頁做 redesign 試作。
2026-04-22 方向調整：**不做盛和設計首頁 redesign**。
新版 `/preview` 所有資產改留給**字趣 fontsfun 品牌頁**未來重構使用。

目前 `/preview` 留在 main 分支上作為內部預覽基底，不影響正式的 `/`
以及其他既有路由輸出。Vercel 上會開始可瀏覽 `/preview`。

## 可復用元件

以下全部已 commit 進 main，未來字趣品牌重構可直接取用：

- **SiteChrome**（`components/SiteChrome.tsx`）
  路由感知 chrome 切換 — `/preview` 路徑關閉全站 Nav + Footer + 61px
  頂部 padding，渲染自身設計骨架。未來 promote 時改條件或刪此檔即可。

- **綿甜體載入機制**（`public/fonts/miantian/` + `app/preview/preview.css`
  `@font-face` 段）
  目前 @font-face 整段註解中（字體檔是 WIP / skeleton，glyph outline 空）。
  骨架保留，字趣團隊交付完整字重後取消註解即可自動啟用。
  詳見 `docs/tech-debt-notes.md §2`。

- **Nav / Hero / Concept / Works 四個 component 的排版骨架**
  （`app/preview/components/*.tsx`）
  日式極簡基調、scoped CSS 寫法、RWD breakpoint、gap utility 命名慣例、
  hover 過渡、CTA 樣式（inline-flex + border-bottom + opacity 0.2s）。
  文案要換掉、視覺語言不用大改。

- **Hero fade-in 動畫設定**（`.preview-hero-anim` + `@keyframes
  preview-hero-in` + `prefers-reduced-motion` 處理）
  0.8s ease-out 淡入上移 24px，可直接給字趣 Hero 用。

- **CSS Cascade Layer 繞路方案**
  `html:not(.dark) body:has(.preview-scope)` 雙條 selector 壓過 globals
  特異度、`.preview-scope` scoped utility 命名、`!important` 局部使用
  規則。詳見 `docs/tech-debt-notes.md §1 / §1a`。
  ⚠️ 字趣品牌頁重構前最好先把 globals.css 整理成 @layer 版本，
  這些 workaround 就可以逐步撤掉。

## 待重構內容（文案 + 架構層面）

未來啟用字趣品牌頁時，下列內容需要針對字趣語境重寫：

- **Hero 文案**：「盛和設計 / Shenghe Design / 以字為核心的設計工作室」
  → 換成字趣主張，例如「字 趣 / fontsfun / 繁體中文字體設計」之類
- **Concept「關於盛和」** → 換成「關於字趣」的品牌敘事
- **Works 作品集** → 換成**字體作品集**（綿甜體、以及未來字體）
  卡片內容從「作品名稱 / 分類 / 年份」改成「字體名 / 字重 / 發行年」
  配合字體樣張圖而非作品攝影
- **Fonts section 邏輯**：原本 Step 5 實作已刪除
  （站名不能在 section 裡 — 見下方歸檔）
  字趣品牌頁改以字體主題區塊呈現，不重複展示站名
- **Contact** → 從「洽詢盛和」改成**字體授權洽詢**
  （個人授權 / 商用授權 / 企業授權的入口）

## 時機

等字趣有明確的品牌重構需求時啟動。
在那之前，`/preview` 保持現狀當內部預覽用，不要再往上加 section。

---

## 設計決定歸檔

### 字體大展示 section 版型（原 Step 5 Fonts section）

這個 section 實作後被刪除，但設計邏輯值得保留：

- 全寬 section，高度 80vh
- 主視覺字體 200px（mobile 120px）
- letter-spacing 拉寬（0.1–0.2em）
- 下方 serif 32px 副標
- 黑體 18px 說明文字
- CTA 置中
- 純白背景、無裝飾、無動畫
- 核心精神：「空間就是內容」，讓字形本身成為主角

未來字趣品牌頁重構時可參考此版型，
但不要叫「Fonts section」—— 因為那時 `/preview` 根目錄已是字趣主頁，
section 名稱需重新思考（例如「綿甜體展示」、「字體樣張」、
「當季字體」等依實際用途命名）。
