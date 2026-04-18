export interface CrowdfundingCase {
  id: string;
  title: string;
  fullTitle: string;
  platform: string;
  cover: string;
  achievement: string;
  amount: string;
  services: string[];
  summary: string;
  link: string;
}

export const crowdfundingCases: CrowdfundingCase[] = [
  {
    id: 'pingting',
    title: '娉婷體',
    fullTitle: '最後 倒數 不再延長｜娉婷體｜從纖秀至豐盈，翩翩起舞的嶄新電腦字體',
    platform: '嘖嘖 zeczec',
    cover: '/images/crowdfunding/case-pingting.jpg',
    achievement: '1,488%',
    amount: 'NT$ 1,488,700',
    services: ['募資頁企劃', '視覺設計', '廣告投放'],
    summary: '從纖秀至豐盈，翩翩起舞的嶄新中文電腦字型。從企劃、募資頁視覺到廣告操盤一手包辦，破 148 萬集資成績。',
    link: 'https://www.zeczec.com/projects/pingting',
  },
  {
    id: 'mian-tian',
    title: '綿甜體',
    fullTitle: '最後倒數不延長！【綿甜體｜甜而不膩・柔中帶力】每一筆，都是綿甜節奏的電腦字體',
    platform: '嘖嘖 zeczec',
    cover: '/images/crowdfunding/case-mian-tian.jpg',
    achievement: '704%',
    amount: 'NT$ 704,130',
    services: ['募資頁企劃', '視覺設計', '廣告投放'],
    summary: '以奶油質地、甜點節奏延伸而成的中文字型。甜而不膩、柔中帶力，從品牌敘事到流量操盤完整執行。',
    link: 'https://www.zeczec.com/projects/ten',
  },
  {
    id: 'zeelandia',
    title: '熱蘭遮：刺桐花開時',
    fullTitle: '2025 原創中文音樂劇《熱蘭遮：刺桐花開時》演出計畫',
    platform: '嘖嘖 zeczec',
    cover: '/images/crowdfunding/case-zeelandia.jpg',
    achievement: '2,681%',
    amount: 'NT$ 268,148',
    services: ['募資禮視覺設計'],
    summary: '跨越 17 世紀與現代的原創中文音樂劇，讓臺灣歷史被世界聽見。擔綱募資禮視覺設計，共同打造募資頁。',
    link: 'https://www.zeczec.com/projects/EncoreCreativeMusical',
  },
];
