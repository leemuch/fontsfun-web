import type { MonsterProps } from './types';

const INK = '#1B2845';
const BODY = '#FAF7EE';
const ORANGE = '#FF8C42';

export function Pixel({ size = 120, className = '', expression = 'neutral' }: MonsterProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="像素復古（小八）"
      shapeRendering="crispEdges"
    >
      {/* Pixel staircase body — drawn as polygon of 10×10 steps */}
      <path
        d="M 70 60
           L 130 60
           L 130 70
           L 140 70
           L 140 80
           L 150 80
           L 150 140
           L 140 140
           L 140 150
           L 130 150
           L 130 160
           L 70 160
           L 70 150
           L 60 150
           L 60 140
           L 50 140
           L 50 80
           L 60 80
           L 60 70
           L 70 70
           Z"
        fill={BODY}
        stroke={INK}
        strokeWidth={4}
        strokeLinejoin="miter"
      />

      {/* Pixel hat (orange) — stacked blocks on top */}
      <g fill={ORANGE} stroke={INK} strokeWidth={2.5}>
        <rect x="80" y="40" width="40" height="10" />
        <rect x="70" y="50" width="60" height="10" />
        <rect x="100" y="32" width="10" height="8" />
      </g>

      {/* Square eyes */}
      <rect x="74" y="96" width="14" height="14" fill={INK} />
      <rect x="112" y="96" width="14" height="14" fill={INK} />

      {/* Mouth — flat pixel line */}
      <rect x="84" y="130" width="32" height="6" fill={INK} />

      {/* Square pixel feet */}
      <rect x="68" y="160" width="14" height="14" fill={BODY} stroke={INK} strokeWidth={3} />
      <rect x="118" y="160" width="14" height="14" fill={BODY} stroke={INK} strokeWidth={3} />
    </svg>
  );
}
