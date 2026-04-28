import type { MonsterProps } from './types';

const INK = '#1B2845';
const BODY = '#FAF7EE';

export function Noodle({ size = 120, className = '', expression = 'neutral' }: MonsterProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="纖細幽靈（米苔目）"
    >
      {/* Four thin asymmetric noodle legs (drawn first, behind head) */}
      <g stroke={INK} strokeWidth={1.5} fill="none" strokeLinecap="round">
        <path d="M 78 102 Q 70 130 76 158 Q 80 174 74 184" />
        <path d="M 92 110 Q 90 142 96 168 Q 100 178 94 188" />
        <path d="M 108 110 Q 110 138 104 162 Q 100 174 108 182" />
        <path d="M 122 102 Q 132 128 124 152 Q 120 168 130 178" />
      </g>

      {/* Round head */}
      <circle cx="100" cy="84" r="38" fill={BODY} stroke={INK} strokeWidth={2.5} />

      {/* Big round eyes */}
      <circle cx="86" cy="82" r="5" fill={INK} />
      <circle cx="114" cy="82" r="5" fill={INK} />

      {/* Tiny pursed mouth */}
      <line x1="94" y1="100" x2="106" y2="100" stroke={INK} strokeWidth={1.8} strokeLinecap="round" />
    </svg>
  );
}
