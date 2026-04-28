import type { FC } from 'react';

export type MonsterExpression = 'happy' | 'neutral' | 'surprised';

export type MonsterProps = {
  size?: number;
  className?: string;
  expression?: MonsterExpression;
};

export type MonsterMeta = {
  id: string;
  displayName: string;
  nickname: string;
  englishName: string;
  fontCategory: string;
  personality: string;
  component: FC<MonsterProps>;
};
