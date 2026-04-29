type MonsterFamilyProps = {
  className?: string;
  /** 之後可加入 highlight prop 高亮某一隻怪獸 */
};

/**
 * 盛和設計品牌吉祥物全家福主視覺。
 * 對應檔案：public/monsters.svg（手繪 3x3 九宮格，viewBox 0 0 1254 1254）
 *
 * 怪獸排列順序（由左至右、由上至下）：
 *   Row 0: 001 吐司 / 002 麻糬 / 003 豆腐
 *   Row 1: 004 Lulu / 005 小八 / 006 泡泡
 *   Row 2: 007 阿粗 / 008 米苔目 / 009 歪歪
 */
export function MonsterFamily({ className }: MonsterFamilyProps) {
  return (
    <img
      src="/monsters.svg"
      alt="盛和設計怪獸家族 — 9 隻字型化身"
      className={className}
      loading="lazy"
    />
  );
}
