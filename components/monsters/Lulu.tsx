import type { MonsterProps } from './types';

const INK = '#1B2845';
const BODY = '#FAF7EE';
const ORANGE = '#FF8C42';

export function Lulu({ size = 120, className = '', expression = 'happy' }: MonsterProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="流線優雅（Lulu）"
    >
      <defs>
        <linearGradient id="lulu-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0.3" stopColor={BODY} stopOpacity="1" />
          <stop offset="1" stopColor={BODY} stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="lulu-stroke-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0.3" stopColor={INK} stopOpacity="1" />
          <stop offset="1" stopColor={INK} stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/* Body — droplet/ghost with wavy tail */}
      <path
        d="M 100 38
           Q 60 38 56 90
           Q 54 122 60 150
           Q 64 162 72 168
           Q 78 158 86 168
           Q 94 158 100 168
           Q 106 158 114 168
           Q 122 158 128 168
           Q 138 162 142 150
           Q 148 122 144 90
           Q 140 38 100 38 Z"
        fill="url(#lulu-fade)"
        stroke="url(#lulu-stroke-fade)"
        strokeWidth={3}
        strokeLinejoin="round"
      />

      {/* Bow on top */}
      <g transform="translate(100 36)">
        <path d="M -12 -6 L 0 0 L -12 6 Z" fill={ORANGE} stroke={INK} strokeWidth={2} strokeLinejoin="round" />
        <path d="M 12 -6 L 0 0 L 12 6 Z" fill={ORANGE} stroke={INK} strokeWidth={2} strokeLinejoin="round" />
        <circle cx="0" cy="0" r="2.5" fill={INK} />
      </g>

      {/* Tiny waving arm on left */}
      <path d="M 58 100 Q 42 92 38 78" stroke={INK} strokeWidth={2} fill="none" strokeLinecap="round" />
      <circle cx="38" cy="78" r="4" fill={BODY} stroke={INK} strokeWidth={2} />

      {/* Eyes */}
      <circle cx="84" cy="98" r="6" fill={INK} />
      <circle cx="86" cy="96" r="2" fill="white" />
      <circle cx="116" cy="98" r="6" fill={INK} />
      <circle cx="118" cy="96" r="2" fill="white" />

      {/* Smile */}
      <path d="M 90 122 Q 100 130 110 122" stroke={INK} strokeWidth={2.5} fill="none" strokeLinecap="round" />

      {/* Blush */}
      <ellipse cx="76" cy="116" rx="6" ry="3" fill={ORANGE} opacity={0.5} />
      <ellipse cx="124" cy="116" rx="6" ry="3" fill={ORANGE} opacity={0.5} />
    </svg>
  );
}
