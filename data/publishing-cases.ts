export interface PublishingCase {
  id: string;
  title: string;
  category: string;
  cover: string;
  services: string[];
  summary: string;
  link?: string;
}

export const publishingCases: PublishingCase[] = [
  {
    id: 'placeholder-1',
    title: '書名待填',
    category: '書類待填',
    cover: '/images/publishing/case-01.jpg',
    services: ['編輯', '設計', '印製'],
    summary: '本書簡介待填，使用者將於後續更新實際案例資料。',
  },
  {
    id: 'placeholder-2',
    title: '書名待填',
    category: '書類待填',
    cover: '/images/publishing/case-02.jpg',
    services: ['編輯', '設計', '印製'],
    summary: '本書簡介待填，使用者將於後續更新實際案例資料。',
  },
  {
    id: 'placeholder-3',
    title: '書名待填',
    category: '書類待填',
    cover: '/images/publishing/case-03.jpg',
    services: ['編輯', '設計', '印製'],
    summary: '本書簡介待填，使用者將於後續更新實際案例資料。',
  },
];
