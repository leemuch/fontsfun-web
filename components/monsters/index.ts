import { Toast } from './Toast';
import { Mochi } from './Mochi';
import { Tofu } from './Tofu';
import { Lulu } from './Lulu';
import { Pixel } from './Pixel';
import { Bubble } from './Bubble';
import { Chunky } from './Chunky';
import { Noodle } from './Noodle';
import { Wonky } from './Wonky';
import type { MonsterMeta } from './types';

export const monsters: MonsterMeta[] = [
  {
    id: '001',
    displayName: '襯線老紳士（吐司）',
    nickname: '吐司',
    englishName: 'Toast',
    fontCategory: 'Serif 襯線體',
    personality: '1920 年代英國紳士',
    component: Toast,
  },
  {
    id: '002',
    displayName: '圓潤摩登（麻糬）',
    nickname: '麻糬',
    englishName: 'Mochi',
    fontCategory: 'Sans-serif 無襯線',
    personality: '摩登藝術家、活潑',
    component: Mochi,
  },
  {
    id: '003',
    displayName: '方塊機械（豆腐）',
    nickname: '豆腐',
    englishName: 'Tofu',
    fontCategory: 'Monospace 等寬字',
    personality: '機械工程師、冷靜認真',
    component: Tofu,
  },
  {
    id: '004',
    displayName: '流線優雅（Lulu）',
    nickname: 'Lulu',
    englishName: 'Lulu',
    fontCategory: 'Script 手寫體',
    personality: '優雅藝術氣質、像水墨畫的線條',
    component: Lulu,
  },
  {
    id: '005',
    displayName: '像素復古（小八）',
    nickname: '小八',
    englishName: 'Pixel',
    fontCategory: 'Pixel 像素字',
    personality: '8-bit 復古遊戲愛好者',
    component: Pixel,
  },
  {
    id: '006',
    displayName: '誇張派對（泡泡）',
    nickname: '泡泡',
    englishName: 'Bubble',
    fontCategory: 'Display 展示字體',
    personality: '派對狂熱者、誇張外向',
    component: Bubble,
  },
  {
    id: '007',
    displayName: '粗壯黑體（阿粗）',
    nickname: '阿粗',
    englishName: 'Chunky',
    fontCategory: 'Heavy/Black 粗黑體',
    personality: '力派健美選手、可靠',
    component: Chunky,
  },
  {
    id: '008',
    displayName: '纖細幽靈（米苔目）',
    nickname: '米苔目',
    englishName: 'Noodle',
    fontCategory: 'Thin/Light 細體',
    personality: '纖細幽靈感、安靜文青',
    component: Noodle,
  },
  {
    id: '009',
    displayName: '扭曲變異（歪歪）',
    nickname: '歪歪',
    englishName: 'Wonky',
    fontCategory: 'Variable/Experimental 變異字',
    personality: '奇派、實驗性、最有戲',
    component: Wonky,
  },
];

export { Toast, Mochi, Tofu, Lulu, Pixel, Bubble, Chunky, Noodle, Wonky };
export type { MonsterMeta, MonsterProps, MonsterExpression } from './types';
