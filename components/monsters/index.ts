import type { MonsterMeta } from './types';

export { MonsterFamily } from './MonsterFamily';
export type { MonsterMeta, MonsterPosition } from './types';

/**
 * 9 隻怪獸 metadata。順序與 public/monsters.svg 九宮格的排列一致：
 *   Row 0: 001 / 002 / 003
 *   Row 1: 004 / 005 / 006
 *   Row 2: 007 / 008 / 009
 */
export const monsters: MonsterMeta[] = [
  {
    id: '001',
    slug: 'toast',
    displayName: '襯線老紳士（吐司）',
    nickname: '吐司',
    englishName: 'Toast',
    fontCategory: 'Serif 襯線體',
    personality: '1920 年代英國紳士',
    position: { row: 0, col: 0 },
  },
  {
    id: '002',
    slug: 'mochi',
    displayName: '圓潤摩登（麻糬）',
    nickname: '麻糬',
    englishName: 'Mochi',
    fontCategory: 'Sans-serif 無襯線',
    personality: '摩登藝術家、活潑',
    position: { row: 0, col: 1 },
  },
  {
    id: '003',
    slug: 'tofu',
    displayName: '方塊機械（豆腐）',
    nickname: '豆腐',
    englishName: 'Tofu',
    fontCategory: 'Monospace 等寬字',
    personality: '機械工程師、冷靜認真',
    position: { row: 0, col: 2 },
  },
  {
    id: '004',
    slug: 'lulu',
    displayName: '流線優雅（Lulu）',
    nickname: 'Lulu',
    englishName: 'Lulu',
    fontCategory: 'Script 手寫體',
    personality: '優雅藝術氣質、像水墨畫的線條',
    position: { row: 1, col: 0 },
  },
  {
    id: '005',
    slug: 'pixel',
    displayName: '像素復古（小八）',
    nickname: '小八',
    englishName: 'Pixel',
    fontCategory: 'Pixel 像素字',
    personality: '8-bit 復古遊戲愛好者',
    position: { row: 1, col: 1 },
  },
  {
    id: '006',
    slug: 'bubble',
    displayName: '誇張派對（泡泡）',
    nickname: '泡泡',
    englishName: 'Bubble',
    fontCategory: 'Display 展示字體',
    personality: '派對狂熱者、誇張外向',
    position: { row: 1, col: 2 },
  },
  {
    id: '007',
    slug: 'chunky',
    displayName: '粗壯黑體（阿粗）',
    nickname: '阿粗',
    englishName: 'Chunky',
    fontCategory: 'Heavy/Black 粗黑體',
    personality: '力派健美選手、可靠',
    position: { row: 2, col: 0 },
  },
  {
    id: '008',
    slug: 'noodle',
    displayName: '纖細幽靈（米苔目）',
    nickname: '米苔目',
    englishName: 'Noodle',
    fontCategory: 'Thin/Light 細體',
    personality: '纖細幽靈感、安靜文青',
    position: { row: 2, col: 1 },
  },
  {
    id: '009',
    slug: 'wonky',
    displayName: '扭曲變異（歪歪）',
    nickname: '歪歪',
    englishName: 'Wonky',
    fontCategory: 'Variable/Experimental 變異字',
    personality: '奇派、實驗性、最有戲',
    position: { row: 2, col: 2 },
  },
];
