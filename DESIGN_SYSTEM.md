# 盛和設計 · 怪獸家族 Design System

> 此設計系統**只服務於怪獸家族（Mascot Family）相關元件與展示頁**。
> 既有的盛和設計站點視覺（`--ink` / `--accent` / `--paper` 等）完全保留不動。
> 兩套 token 並存，怪獸搭配盛和現有頁面時可混用。

---

## 🎨 配色

### Oreo Blue（怪獸線條 / 深色 UI）
| Token | Hex | 用途 |
|---|---|---|
| `oreo-900` | `#1B2845` | 怪獸主線條、深色標題、icon |
| `oreo-700` | `#2E4373` | 次強調 |
| `oreo-500` | `#4A6BA8` | 副標、hover |

### Cream（米白底色）
| Token | Hex | 用途 |
|---|---|---|
| `cream-50`  | `#F5F1E8` | 主背景（接近站點既有 `--paper`） |
| `cream-100` | `#EDE8DC` | 次背景、區塊區隔 |
| `cream-200` | `#FAF7EE` | 卡片背景 |

### Accent（怪獸配件 / 點綴）
| Token | Hex | 用途 |
|---|---|---|
| `accent-orange` | `#FF8C42` | CTA、active、雀斑、舌頭 |
| `accent-yellow` | `#FFD86B` | 派對帽、星星 |
| `accent-pink`   | `#F4A8C8` | 腮紅、輔助 |
| `accent-blue`   | `#7FC5E8` | 淚滴、泡泡 |

### 中性
| Token | Hex | 用途 |
|---|---|---|
| `ink-soft` | `#6B7A99` | 怪獸 UI 次文字 |
| `line`     | `#D4CCB8` | 卡片細邊框 |

---

## 🧩 形狀系統

| Token | 值 | 用途 |
|---|---|---|
| `radius-card`   | `16px` | 怪獸卡片 |
| `radius-button` | `12px` | CTA 按鈕 |

---

## 📐 Typography（怪獸展示頁用）

> 不註冊到 Tailwind theme，避免污染 utility 命名空間。
> 直接在 `/preview/monsters` 展示頁 inline 控制即可。

| 級別 | size / weight / line-height |
|---|---|
| h1 | 32px / 700 / 1.2 |
| h2 | 24px / 700 / 1.3 |
| h3 | 18px / 600 / 1.4 |
| body    | 15px / 400 / 1.6 |
| caption | 12px / 400 / 1.4 |

字體：中文 `system-ui` + Noto Sans TC fallback；英文標題 Inter（Phase 3 視需要再 `next/font` 載入）。

---

## 🦴 怪獸命名規約（Hard rule）

| 場景 | 格式 |
|---|---|
| UI 顯示文字 | `中文形容詞（暱稱）` 例：「襯線老紳士（吐司）」 |
| 程式變數 / 檔名 | English Name 例：`Toast.tsx`、`monsters.find(m => m.englishName === 'Toast')` |

🚫 不要簡寫成「只有暱稱」或「只有形容詞」。

---

## 🦄 9 隻怪獸對照表

| ID | UI 顯示 | EN | 字型分類 |
|---|---|---|---|
| 001 | 襯線老紳士（吐司） | Toast | Serif |
| 002 | 圓潤摩登（麻糬） | Mochi | Sans-serif |
| 003 | 方塊機械（豆腐） | Tofu | Monospace |
| 004 | 流線優雅（Lulu） | Lulu | Script |
| 005 | 像素復古（小八） | Pixel | Pixel |
| 006 | 誇張派對（泡泡） | Bubble | Display |
| 007 | 粗壯黑體（阿粗） | Chunky | Heavy/Black |
| 008 | 纖細幽靈（米苔目） | Noodle | Thin/Light |
| 009 | 扭曲變異（歪歪） | Wonky | Variable |

---

## 🛠 在 Tailwind v4 用法

所有 color / radius token 都已透過 `app/globals.css` 的 `@theme` 區塊註冊，可直接當 utility 使用：

```tsx
<div className="bg-cream-200 border border-line rounded-card text-oreo-900">
  <p className="text-ink-soft text-[12px]">#001</p>
  <h3 className="text-[18px] font-semibold">襯線老紳士（吐司）</h3>
  <span className="text-accent-orange">Serif 襯線體</span>
</div>
```

或在 SVG 內以 CSS 變數引用：

```tsx
<path stroke="var(--color-oreo-900)" strokeWidth={3} />
```
