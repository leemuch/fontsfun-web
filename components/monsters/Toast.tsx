import type { MonsterProps } from './types';

const INK = '#1B2845';
const BODY = '#FFE8B8';
const CRUST = '#D4A04A';
const ORANGE = '#FF8C42';

export function Toast({ size = 120, className = '', expression = 'happy' }: MonsterProps) {
  const eyeY = expression === 'surprised' ? 110 : 112;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="襯線老紳士（吐司）"
    >
      {/* Cane (behind body, draw first) */}
      <path d="M 32 110 L 32 175 M 32 110 Q 32 100 42 100 L 50 100"
        stroke={INK} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />

      {/* Toast body */}
      <path
        d="M 50 175 L 50 90 Q 50 45 100 45 Q 150 45 150 90 L 150 175 Z"
        fill={BODY}
        stroke={INK}
        strokeWidth={3}
        strokeLinejoin="round"
      />
      {/* Crust inset (toasted edge) */}
      <path
        d="M 60 168 L 60 92 Q 60 55 100 55 Q 140 55 140 92 L 140 168"
        fill="none"
        stroke={CRUST}
        strokeWidth={2}
        strokeLinejoin="round"
        opacity={0.7}
      />

      {/* Top hat — perched right of center */}
      <g transform="translate(108 28) rotate(8)">
        <rect x="-26" y="-30" width="52" height="32" fill={INK} stroke={INK} strokeWidth={2} strokeLinejoin="round" />
        <rect x="-34" y="-2" width="68" height="6" fill={INK} stroke={INK} strokeWidth={2} strokeLinejoin="round" />
      </g>

      {/* Monocle (left eye) + chain */}
      <circle cx="80" cy={eyeY} r="14" fill="white" stroke={INK} strokeWidth={2.5} />
      <circle cx="80" cy={eyeY} r="3" fill={INK} />
      <path d={`M 94 ${eyeY + 4} Q 100 130 92 145`} stroke={INK} strokeWidth={1.5} fill="none" strokeLinecap="round" />

      {/* Right eye */}
      <circle cx="120" cy={eyeY} r="3" fill={INK} />

      {/* Curly mustache */}
      <path
        d="M 78 138 Q 88 132 100 138 Q 112 132 122 138 M 78 138 Q 70 134 70 128 M 122 138 Q 130 134 130 128"
        stroke={INK}
        strokeWidth={2.5}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Smile under mustache */}
      <path d="M 90 152 Q 100 158 110 152" stroke={INK} strokeWidth={2} fill="none" strokeLinecap="round" />

      {/* Bow tie (orange) */}
      <g transform="translate(100 168)">
        <path d="M -14 -6 L 0 0 L -14 6 Z" fill={ORANGE} stroke={INK} strokeWidth={2} strokeLinejoin="round" />
        <path d="M 14 -6 L 0 0 L 14 6 Z" fill={ORANGE} stroke={INK} strokeWidth={2} strokeLinejoin="round" />
        <circle cx="0" cy="0" r="3" fill={INK} />
      </g>

      {/* Serif feet (two short stumps with horizontal serifs) */}
      <g stroke={INK} strokeWidth={2.5} strokeLinecap="round" fill="none">
        <path d="M 78 175 L 78 188 M 70 188 L 86 188" />
        <path d="M 122 175 L 122 188 M 114 188 L 130 188" />
      </g>
    </svg>
  );
}
