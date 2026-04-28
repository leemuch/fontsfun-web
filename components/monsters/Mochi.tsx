import type { MonsterProps } from './types';

const INK = '#1B2845';
const BODY = '#FAF0E6';
const SHADOW = '#EDE0D0';
const ORANGE = '#FF8C42';

export function Mochi({ size = 120, className = '', expression = 'happy' }: MonsterProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="圓潤摩登（麻糬）"
    >
      {/* Body — squishy round with subtle wavy edges */}
      <path
        d="M 50 110
           Q 48 82 70 68
           Q 92 56 118 60
           Q 148 64 156 92
           Q 162 118 144 138
           Q 124 158 96 156
           Q 68 154 56 134
           Q 48 124 50 110 Z"
        fill={BODY}
        stroke={INK}
        strokeWidth={3}
        strokeLinejoin="round"
      />

      {/* Soft shadow crescent inside */}
      <path
        d="M 70 132 Q 100 148 138 130"
        stroke={SHADOW}
        strokeWidth={5}
        fill="none"
        strokeLinecap="round"
        opacity={0.8}
      />

      {/* Beret (orange, tilted left) */}
      <g transform="translate(78 56) rotate(-22)">
        <ellipse cx="0" cy="0" rx="34" ry="11" fill={ORANGE} stroke={INK} strokeWidth={2.5} />
        <circle cx="14" cy="-6" r="5" fill={ORANGE} stroke={INK} strokeWidth={2} />
      </g>

      {/* Left waving arm (上揮) */}
      <path
        d="M 52 108 Q 38 96 32 78"
        stroke={INK}
        strokeWidth={3}
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="32" cy="78" r="6" fill={BODY} stroke={INK} strokeWidth={2.5} />

      {/* Right hand on hip */}
      <path
        d="M 156 110 Q 168 108 168 122"
        stroke={INK}
        strokeWidth={3}
        fill="none"
        strokeLinecap="round"
      />

      {/* Smiling eyes (eye-crease arcs) */}
      <path d="M 78 102 Q 84 96 90 102" stroke={INK} strokeWidth={2.5} fill="none" strokeLinecap="round" />
      <path d="M 118 102 Q 124 96 130 102" stroke={INK} strokeWidth={2.5} fill="none" strokeLinecap="round" />

      {/* Open laughing mouth */}
      <path
        d="M 88 118 Q 104 138 120 118 Q 104 130 88 118 Z"
        fill={INK}
        stroke={INK}
        strokeWidth={2}
        strokeLinejoin="round"
      />
      {/* Tongue */}
      <path d="M 96 124 Q 104 132 112 124 Q 104 130 96 124 Z" fill={ORANGE} />

      {/* Blush */}
      <ellipse cx="72" cy="118" rx="7" ry="4" fill={ORANGE} opacity={0.5} />
      <ellipse cx="136" cy="118" rx="7" ry="4" fill={ORANGE} opacity={0.5} />

      {/* Tiny feet */}
      <g stroke={INK} strokeWidth={3} strokeLinecap="round" fill="none">
        <path d="M 86 158 L 86 174" />
        <path d="M 114 158 L 114 174" />
      </g>
      <ellipse cx="86" cy="178" rx="7" ry="4" fill={BODY} stroke={INK} strokeWidth={2.5} />
      <ellipse cx="114" cy="178" rx="7" ry="4" fill={BODY} stroke={INK} strokeWidth={2.5} />
    </svg>
  );
}
