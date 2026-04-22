# Tech Debt Notes

## 1. globals.css CSS Cascade Layer 問題

**現象**：
globals.css 有 `* { margin: 0 }` 為 unlayered，
導致 Tailwind 的 @layer utilities margin/padding 失效。

**受影響範圍**：
- 整個專案的 Tailwind margin/padding utility
- h1 等 typography 也需要 !important 才能覆蓋

**現階段繞路方案（/preview 採用）**：
- scoped CSS class：.nav-inner、.hero-text-anchor、.hero-h1-gap、
  .hero-sub-gap、.hero-section 等
- 必要時使用 !important modifier
- inline style 補強

**正統修復方案（未來執行）**：
- 將 globals.css 的 reset 包進 @layer base
- 或移除 universal selector reset，改用更精確的 targeting
- 修復後，/preview 的 scoped class 可逐步改回 Tailwind utility

**優先度**：Medium
**建議執行時機**：redesign 上線後的第一個清理 sprint

### 1a. 衍生問題：`html:not(.dark) body` 特異度太高（2026-04-22 實測）

**現象**：
globals.css 裡有 `html:not(.dark) body { background-color: var(--paper) !important }`
（特異度 0,0,2,2 — 兩個類別、兩個 type），把 /preview 原本用
`body:has(.preview-scope)`（0,0,2,1）想蓋掉它的嘗試完全輸掉，
造成 /preview 頁面仍然吃到 globals 的 paper 米色底，而非 `#ffffff`。

**現場止血方案（已套用於 app/preview/preview.css）**：
同時寫 `html:not(.dark) body:has(.preview-scope)` 與
`html.dark body:has(.preview-scope)` 兩條 selector（都是 0,0,2,2 +
`:has()`，特異度 0,0,3,2 > globals 的 0,0,2,2）強制蓋 background。
配 `!important` 以防未來再出現更高特異度競爭。

**正統修復方案（未來執行）**：
- globals.css 改用 @layer 管理 cascade；`html:not(.dark) body` 這條
  放進 `@layer base`，/preview 的 override 放進 `@layer utilities`
  或獨立 layer，層級天然贏過 base，不需堆 `:has()` 與 `!important`。
- 或者直接把 paper 底色的 `!important` 拿掉、改用 CSS variable 在
  需要的時候 opt-in（真正乾淨做法）。

**優先度**：和 §1 綁定（同一份 globals.css 整理時一併處理）

---

## 2. 綿甜體字體檔為 WIP / skeleton（@font-face 已暫停）

**現況（2026-04-21 實測）**：
`public/fonts/miantian/miantian-regular.otf`（822 KB）的 cmap 表宣告覆蓋
8,729 個字元，但大多數 glyph outline 為空 —「盛、關、於」等常用字皆
渲染為空白（非 tofu / 非 .notdef，而是 zero-width 空字形）。

**實測證據**：
- Hero 主標「盛和設計」啟用 Miantian 時只剩「和設計」，「盛」空白
- Concept 標題「關於盛和」啟用 Miantian 時只剩「和」，其餘 3 字空白
- 直接測試個別字：和、設、計、趣 有繪製；盛、關、於、品、體 空白

**為什麼 fallback 沒有自動發生**：
瀏覽器 font-matching 依 cmap 判定字體是否「擁有」字符；此檔 cmap 宣告
擁有，所以不會 fallback 到 font-family 清單下一順位（Noto Serif TC）。

**現階段處置**：
`app/preview/preview.css` 的 `@font-face { font-family: 'Miantian' }`
整段已註解。`.preview-scope` 內的 `--font-miantian` CSS var 仍指向
`'Miantian', 'Noto Serif TC', serif` — 字型系統骨架保留，等正式字體
交付後取消註解即可自動接管。

**後續正統步驟（待字趣團隊交付完整 Regular 字重後）**：
1. 用 FontForge / Glyphs / 字趣自家工具確認 cmap 所宣告的字都有 outline
2. 用 `pyftsubset` subset：僅保留 /preview 用到的字（約 80-100 字）
   + 基本拉丁 + 標點
3. 轉 woff2 格式（單字重 < 200 KB）
4. 覆蓋 `public/fonts/miantian/miantian-regular.woff2`
5. 把 preview.css 的 `@font-face` 取消註解，src 與 format 更新為 woff2

**Light 字重**：
目前沒有 Light。Hero `font-weight: 300` 會 fallback 到 Noto Serif TC Light
（視覺差異小）。拿到 MianTian-Light 後同樣流程處理。

**優先度**：High（redesign 的字體靈魂，沒有它視覺語言不完整）
**阻塞對象**：字趣團隊（需交付有完整 glyph outline 的 .otf 或 .ttf）
