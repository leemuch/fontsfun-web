import type { MonsterProps } from './types';

const INK = '#1B2845';
const BODY = '#FAF7EE';
const ORANGE = '#FF8C42';

export function Wonky({ size = 120, className = '', expression = 'surprised' }: MonsterProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="扭曲變異（歪歪）"
    >
      {/* Surprise lines around body */}
      <g stroke={ORANGE} strokeWidth={2.5} strokeLinecap="round">
        <line x1="22" y1="60" x2="34" y2="68" />
        <line x1="178" y1="58" x2="166" y2="68" />
        <line x1="20" y1="118" x2="34" y2="118" />
        <line x1="180" y1="124" x2="166" y2="120" />
      </g>

      {/* Asymmetric blob body with 5-6 irregular bulges */}
      <path
        d="M 64 56
           Q 92 38 124 50
           Q 156 56 158 92
           Q 168 110 152 132
           Q 158 158 130 156
           Q 110 170 86 158
           Q 56 162 50 134
           Q 38 116 48 96
           Q 42 70 64 56 Z"
        fill={BODY}
        stroke={INK}
        strokeWidth={3}
        strokeLinejoin="round"
      />

      {/* Orange freckles */}
      <g fill={ORANGE}>
        <circle cx="74" cy="88" r="2.5" />
        <circle cx="138" cy="80" r="2" />
        <circle cx="62" cy="120" r="2.5" />
        <circle cx="146" cy="118" r="3" />
        <circle cx="100" cy="138" r="2" />
      </g>

      {/* Big left eye */}
      <circle cx="80" cy="100" r="11" fill="white" stroke={INK} strokeWidth={2.5} />
      <circle cx="82" cy="102" r="5" fill={INK} />

      {/* Small right eye */}
      <circle cx="122" cy="96" r="3" fill={INK} />

      {/* Lopsided tongue-out smile */}
      <path d="M 84 124 Q 96 138 116 132" stroke={INK} strokeWidth={2.5} fill="none" strokeLinecap="round" />
      {/* Tongue */}
      <path d="M 110 132 Q 118 144 124 138 Q 124 132 116 130 Z" fill={ORANGE} stroke={INK} strokeWidth={2} strokeLinejoin="round" />

      {/* Three asymmetric legs */}
      <g stroke={INK} strokeWidth={3} strokeLinecap="round" fill="none">
        <path d="M 72 168 L 68 188" />
        <path d="M 102 172 L 108 192" />
        <path d="M 132 166 L 138 184" />
      </g>

      {/* One waving arm */}
      <path d="M 156 110 Q 174 102 178 86" stroke={INK} strokeWidth={3} fill="none" strokeLinecap="round" />
      <circle cx="178" cy="86" r="5" fill={BODY} stroke={INK} strokeWidth={2.5} />
    </svg>
  );
}
