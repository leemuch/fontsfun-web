import type { MonsterProps } from './types';

const INK = '#1B2845';
const BODY = '#F5DCB4';
const ORANGE = '#FF8C42';

export function Chunky({ size = 120, className = '', expression = 'happy' }: MonsterProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="粗壯黑體（阿粗）"
    >
      {/* Flexed arms (behind body) */}
      <g fill={BODY} stroke={INK} strokeWidth={3} strokeLinejoin="round">
        {/* Left arm — up + bicep curl */}
        <path d="M 56 116
                 Q 38 110 30 86
                 Q 26 70 38 60
                 Q 50 56 60 68
                 Q 64 78 60 88
                 Q 74 96 70 110 Z" />
        {/* Right arm */}
        <path d="M 144 116
                 Q 162 110 170 86
                 Q 174 70 162 60
                 Q 150 56 140 68
                 Q 136 78 140 88
                 Q 126 96 130 110 Z" />
      </g>
      {/* Fists */}
      <circle cx="42" cy="56" r="9" fill={BODY} stroke={INK} strokeWidth={2.5} />
      <circle cx="158" cy="56" r="9" fill={BODY} stroke={INK} strokeWidth={2.5} />

      {/* Onigiri body — stout triangle with rounded corners */}
      <path
        d="M 100 56
           Q 110 56 116 66
           L 162 152
           Q 168 168 152 168
           L 48 168
           Q 32 168 38 152
           L 84 66
           Q 90 56 100 56 Z"
        fill={BODY}
        stroke={INK}
        strokeWidth={3}
        strokeLinejoin="round"
      />

      {/* Nori belt (deep navy) */}
      <rect x="38" y="120" width="124" height="22" fill={INK} />
      {/* "阿粗" text on belt */}
      <text x="100" y="137" textAnchor="middle"
        fontFamily="system-ui, 'Noto Sans TC', sans-serif"
        fontSize="14" fontWeight="700" fill="white">阿粗</text>

      {/* Determined eyebrows */}
      <line x1="74" y1="86" x2="86" y2="92" stroke={INK} strokeWidth={3} strokeLinecap="round" />
      <line x1="126" y1="86" x2="114" y2="92" stroke={INK} strokeWidth={3} strokeLinecap="round" />

      {/* Eyes */}
      <circle cx="82" cy="100" r="4" fill={INK} />
      <circle cx="118" cy="100" r="4" fill={INK} />

      {/* Big toothy smile */}
      <path d="M 84 110 Q 100 122 116 110" stroke={INK} strokeWidth={2.5} fill={INK} strokeLinecap="round" strokeLinejoin="round" />
      {/* Top teeth (white inset) */}
      <path d="M 88 112 L 92 116 L 96 112 L 100 116 L 104 112 L 108 116 L 112 112" stroke="white" strokeWidth={1.5} fill="none" />

      {/* Blush */}
      <ellipse cx="70" cy="106" rx="6" ry="3" fill={ORANGE} opacity={0.6} />
      <ellipse cx="130" cy="106" rx="6" ry="3" fill={ORANGE} opacity={0.6} />
    </svg>
  );
}
