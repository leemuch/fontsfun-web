import type { MonsterProps } from './types';

const INK = '#1B2845';
const FRONT = '#FAF7EE';
const SIDE = '#E8E2D4';
const ORANGE = '#FF8C42';

export function Tofu({ size = 120, className = '', expression = 'neutral' }: MonsterProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="方塊機械（豆腐）"
    >
      {/* Antenna behind body */}
      <line x1="100" y1="50" x2="100" y2="32" stroke={INK} strokeWidth={2.5} strokeLinecap="round" />
      <circle cx="100" cy="28" r="6" fill={ORANGE} stroke={INK} strokeWidth={2} />

      {/* Right side face (subtle 3D) */}
      <path d="M 150 60 L 162 50 L 162 158 L 150 168 Z" fill={SIDE} stroke={INK} strokeWidth={2.5} strokeLinejoin="round" />
      {/* Top face */}
      <path d="M 50 60 L 62 50 L 162 50 L 150 60 Z" fill={SIDE} stroke={INK} strokeWidth={2.5} strokeLinejoin="round" />
      {/* Front face */}
      <rect x="50" y="60" width="100" height="108" fill={FRONT} stroke={INK} strokeWidth={3} strokeLinejoin="round" />

      {/* Eyes — two horizontal lines (focused) */}
      <line x1="72" y1="100" x2="92" y2="100" stroke={INK} strokeWidth={3} strokeLinecap="round" />
      <line x1="108" y1="100" x2="128" y2="100" stroke={INK} strokeWidth={3} strokeLinecap="round" />

      {/* Mouth — flat line */}
      <line x1="86" y1="130" x2="114" y2="130" stroke={INK} strokeWidth={2.5} strokeLinecap="round" />

      {/* Robotic short arms (mid-body) */}
      <g stroke={INK} strokeWidth={3} strokeLinecap="round" fill="none">
        <path d="M 50 110 L 32 112" />
        <path d="M 150 110 L 168 112" />
      </g>
      {/* Hands — small squares */}
      <rect x="22" y="106" width="12" height="12" fill={FRONT} stroke={INK} strokeWidth={2} />
      <rect x="166" y="106" width="12" height="12" fill={FRONT} stroke={INK} strokeWidth={2} />

      {/* Screw detail bottom-right */}
      <circle cx="138" cy="156" r="5" fill="none" stroke={INK} strokeWidth={1.5} />
      <line x1="135" y1="153" x2="141" y2="159" stroke={INK} strokeWidth={1.5} strokeLinecap="round" />

      {/* Operating warning lines (right side) */}
      <g stroke={ORANGE} strokeWidth={2} strokeLinecap="round">
        <line x1="172" y1="80" x2="180" y2="80" />
        <line x1="174" y1="92" x2="184" y2="92" />
        <line x1="172" y1="104" x2="180" y2="104" />
      </g>

      {/* Square feet */}
      <rect x="68" y="168" width="14" height="14" fill={FRONT} stroke={INK} strokeWidth={2.5} />
      <rect x="118" y="168" width="14" height="14" fill={FRONT} stroke={INK} strokeWidth={2.5} />
    </svg>
  );
}
