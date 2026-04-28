import type { MonsterProps } from './types';

const INK = '#1B2845';
const BODY = '#FAF7EE';
const ORANGE = '#FF8C42';
const YELLOW = '#FFD86B';
const BLUE = '#7FC5E8';

export function Bubble({ size = 120, className = '', expression = 'happy' }: MonsterProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="誇張派對（泡泡）"
    >
      {/* Surrounding bubbles */}
      <g stroke={BLUE} strokeWidth={1.5} fill="none">
        <circle cx="32" cy="60" r="6" />
        <circle cx="170" cy="50" r="4" />
        <circle cx="22" cy="130" r="5" />
        <circle cx="178" cy="148" r="7" />
        <circle cx="160" cy="180" r="3.5" />
      </g>

      {/* Cheering arms (drawn behind body) */}
      <g stroke={INK} strokeWidth={3} strokeLinecap="round" fill="none">
        <path d="M 60 102 Q 36 86 32 64" />
        <path d="M 140 102 Q 164 86 168 64" />
      </g>
      <circle cx="32" cy="64" r="6" fill={BODY} stroke={INK} strokeWidth={2.5} />
      <circle cx="168" cy="64" r="6" fill={BODY} stroke={INK} strokeWidth={2.5} />

      {/* Round body */}
      <circle cx="100" cy="118" r="52" fill={BODY} stroke={INK} strokeWidth={3} />

      {/* Party hat (yellow + orange stripes) */}
      <g transform="translate(100 64)">
        <path d="M -22 0 L 0 -42 L 22 0 Z" fill={YELLOW} stroke={INK} strokeWidth={2.5} strokeLinejoin="round" />
        <path d="M -16 -12 L -8 -28 L 8 -28 L 16 -12 Z" fill={ORANGE} />
        <path d="M -22 0 L 22 0" stroke={INK} strokeWidth={2.5} strokeLinecap="round" />
        {/* Star on top */}
        <path d="M 0 -50 L 2 -45 L 7 -45 L 3 -42 L 5 -37 L 0 -40 L -5 -37 L -3 -42 L -7 -45 L -2 -45 Z" fill={YELLOW} stroke={INK} strokeWidth={1.5} strokeLinejoin="round" />
      </g>

      {/* Sparkly eyes */}
      <circle cx="82" cy="110" r="7" fill={INK} />
      <circle cx="84" cy="108" r="2" fill="white" />
      <circle cx="80" cy="112" r="1" fill="white" />
      <circle cx="118" cy="110" r="7" fill={INK} />
      <circle cx="120" cy="108" r="2" fill="white" />
      <circle cx="116" cy="112" r="1" fill="white" />

      {/* Big open mouth */}
      <path
        d="M 78 130 Q 100 162 122 130 Q 100 150 78 130 Z"
        fill={INK}
        stroke={INK}
        strokeWidth={2.5}
        strokeLinejoin="round"
      />
      {/* Tongue */}
      <path d="M 92 142 Q 100 156 108 142 Q 100 150 92 142 Z" fill={ORANGE} />
      {/* Top teeth */}
      <path d="M 84 132 L 88 140 L 92 132 M 96 132 L 100 140 L 104 132 M 108 132 L 112 140 L 116 132"
        stroke="white" strokeWidth={1.2} fill="white" strokeLinejoin="miter" />
    </svg>
  );
}
