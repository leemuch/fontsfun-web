export type MonsterPosition = {
  /** 0-2, 由上至下 */
  row: number;
  /** 0-2, 由左至右 */
  col: number;
};

export type MonsterMeta = {
  /** 三位數編號（例：'001'） */
  id: string;
  /** 程式碼用 slug（小寫英文） */
  slug: string;
  /** UI 顯示名稱 — 中文形容詞（暱稱），例：'襯線老紳士（吐司）' */
  displayName: string;
  /** 暱稱單獨使用，例：'吐司' */
  nickname: string;
  /** 對應的英文名（與 slug 同義，但首字大寫，給 UI 顯示用） */
  englishName: string;
  /** 字型分類，例：'Serif 襯線體' */
  fontCategory: string;
  /** 個性描述，例：'1920 年代英國紳士' */
  personality: string;
  /** 在 public/monsters.svg 九宮格中的位置（用於未來高亮某一隻） */
  position: MonsterPosition;
};
