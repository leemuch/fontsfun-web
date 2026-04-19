const S = 2.5;

// Pain point icons
export function EyeSlash() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d="M6 24 C10 16 16 12 24 12 C32 12 38 16 42 24 C38 32 32 36 24 36 C16 36 10 32 6 24Z" stroke="#e05545" strokeWidth={S} strokeLinejoin="round" />
      <circle cx="24" cy="24" r="6" stroke="#e05545" strokeWidth={S} />
      <line x1="8" y1="40" x2="40" y2="8" stroke="#e05545" strokeWidth={S} strokeLinecap="round" />
    </svg>
  );
}
export function CoinQuestion() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <circle cx="20" cy="26" r="14" stroke="#e8a838" strokeWidth={S} />
      <text x="20" y="30" textAnchor="middle" fontFamily="serif" fontSize="14" fill="#e8a838">$</text>
      <circle cx="38" cy="12" r="8" stroke="#e8a838" strokeWidth="2" />
      <text x="38" y="16" textAnchor="middle" fontFamily="serif" fontSize="12" fontWeight="bold" fill="#e8a838">?</text>
    </svg>
  );
}
export function PuzzleSplit() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d="M6 12 H18 V18 Q22 16 22 20 Q22 24 18 22 V30 H6Z" stroke="#4a9e6b" strokeWidth={S} strokeLinejoin="round" />
      <path d="M30 18 H42 V24 Q46 22 46 26 Q46 30 42 28 V36 H30Z" stroke="#4a9e6b" strokeWidth={S} strokeLinejoin="round" />
      <line x1="23" y1="14" x2="29" y2="24" stroke="#4a9e6b" strokeWidth="1.5" strokeDasharray="3 3" strokeLinecap="round" />
    </svg>
  );
}
export function MapQuestion() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d="M8 10 L18 6 L30 12 L40 8 V38 L30 42 L18 36 L8 40Z" stroke="#4a7ab5" strokeWidth={S} strokeLinejoin="round" />
      <line x1="18" y1="6" x2="18" y2="36" stroke="#4a7ab5" strokeWidth="1.5" />
      <line x1="30" y1="12" x2="30" y2="42" stroke="#4a7ab5" strokeWidth="1.5" />
      <circle cx="38" cy="14" r="7" stroke="#e05545" strokeWidth="1.5" />
      <text x="38" y="18" textAnchor="middle" fontFamily="serif" fontSize="10" fontWeight="bold" fill="#e05545">?</text>
    </svg>
  );
}

// Spectrum step icons (small, 32px)
export function ChessBoard() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="4" y="4" width="24" height="24" rx="2" stroke="#e05545" strokeWidth="2" />
      <rect x="4" y="4" width="12" height="12" fill="#e05545" opacity="0.15" />
      <rect x="16" y="16" width="12" height="12" fill="#e05545" opacity="0.15" />
    </svg>
  );
}
export function DocPen() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="6" y="4" width="16" height="22" rx="2" stroke="#e8a838" strokeWidth="2" />
      <line x1="10" y1="10" x2="18" y2="10" stroke="#e8a838" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="10" y1="15" x2="16" y2="15" stroke="#e8a838" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="22" y1="28" x2="28" y2="12" stroke="#e8a838" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
export function PaletteBrush() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="14" cy="18" r="10" stroke="#4a9e6b" strokeWidth="2" />
      <circle cx="10" cy="14" r="2" fill="#4a9e6b" opacity="0.4" />
      <circle cx="16" cy="12" r="2" fill="#e8a838" opacity="0.4" />
      <circle cx="12" cy="20" r="2" fill="#4a7ab5" opacity="0.4" />
      <line x1="22" y1="10" x2="28" y2="4" stroke="#4a9e6b" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
export function Megaphone() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M6 12 L6 20 L10 20 L20 26 V6 L10 12Z" stroke="#e05545" strokeWidth="2" strokeLinejoin="round" />
      <path d="M22 12 Q26 16 22 20" stroke="#e05545" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M24 9 Q30 16 24 23" stroke="#e05545" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.4" />
    </svg>
  );
}
export function Dashboard() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M6 26 A14 14 0 0 1 26 26" stroke="#4a7ab5" strokeWidth="2" strokeLinecap="round" />
      <line x1="16" y1="24" x2="22" y2="14" stroke="#e05545" strokeWidth="2" strokeLinecap="round" />
      <circle cx="16" cy="24" r="2" fill="#4a7ab5" />
    </svg>
  );
}
export function ExpandCircles() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="4" stroke="#4a9e6b" strokeWidth="2" />
      <circle cx="16" cy="16" r="8" stroke="#4a9e6b" strokeWidth="1.5" strokeDasharray="3 3" />
      <circle cx="16" cy="16" r="12" stroke="#4a9e6b" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
    </svg>
  );
}

// WhyUs icons
export function TrophyIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M12 6 H28 V18 C28 26 24 30 20 32 C16 30 12 26 12 18Z" stroke="#e8a838" strokeWidth={S} strokeLinejoin="round" />
      <path d="M12 10 H6 C6 16 8 18 12 18" stroke="#e8a838" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M28 10 H34 C34 16 32 18 28 18" stroke="#e8a838" strokeWidth="2" strokeLinecap="round" fill="none" />
      <line x1="16" y1="36" x2="24" y2="36" stroke="#e8a838" strokeWidth="2" strokeLinecap="round" />
      <line x1="20" y1="32" x2="20" y2="36" stroke="#e8a838" strokeWidth="2" />
    </svg>
  );
}
export function HandshakeIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M4 18 L12 14 L20 20 L28 14 L36 18" stroke="#4a9e6b" strokeWidth={S} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 14 L18 24 L24 20 L28 24" stroke="#4a9e6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <line x1="4" y1="18" x2="4" y2="28" stroke="#4a9e6b" strokeWidth="2" strokeLinecap="round" />
      <line x1="36" y1="18" x2="36" y2="28" stroke="#4a9e6b" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
export function MagnifyIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="18" cy="18" r="12" stroke="#4a7ab5" strokeWidth={S} />
      <line x1="27" y1="27" x2="36" y2="36" stroke="#4a7ab5" strokeWidth={S} strokeLinecap="round" />
      <text x="18" y="22" textAnchor="middle" fontFamily="serif" fontSize="12" fill="#4a7ab5">Aa</text>
    </svg>
  );
}
export function FlagIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <line x1="8" y1="6" x2="8" y2="36" stroke="#e05545" strokeWidth={S} strokeLinecap="round" />
      <path d="M8 6 L34 6 L28 14 L34 22 L8 22Z" stroke="#e05545" strokeWidth={S} strokeLinejoin="round" fill="none" />
    </svg>
  );
}

// Process timeline icons
export function ChatBubbleSmall() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="3" y="4" width="22" height="16" rx="8" stroke="#e05545" strokeWidth="2" />
      <polygon points="10,20 8,26 16,20" fill="none" stroke="#e05545" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}
export function LightbulbSmall() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="12" r="8" stroke="#e8a838" strokeWidth="2" />
      <path d="M11 20 L12 24 L16 24 L17 20" stroke="#e8a838" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}
export function BrushSmall() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <line x1="6" y1="22" x2="18" y2="6" stroke="#4a9e6b" strokeWidth="2" strokeLinecap="round" />
      <rect x="16" y="4" width="6" height="6" rx="1" stroke="#4a9e6b" strokeWidth="1.5" transform="rotate(30 19 7)" />
    </svg>
  );
}
export function FlameSmall() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 4 C14 4 8 12 8 18 C8 24 10 26 14 26 C18 26 20 24 20 18 C20 12 14 4 14 4Z" stroke="#e8a838" strokeWidth="2" strokeLinejoin="round" />
      <path d="M14 14 C14 14 12 18 12 20 C12 22 13 23 14 23 C15 23 16 22 16 20 C16 18 14 14 14 14Z" stroke="#e05545" strokeWidth="1.5" fill="none" />
    </svg>
  );
}
export function RocketSmall() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 2 C14 2 8 8 8 16 L11 18 L14 24 L17 18 L20 16 C20 8 14 2 14 2Z" stroke="#e05545" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="14" cy="12" r="2" stroke="#e05545" strokeWidth="1.5" />
    </svg>
  );
}
export function EnvelopeStarSmall() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="3" y="8" width="22" height="16" rx="2" stroke="#4a7ab5" strokeWidth="2" />
      <path d="M3 10 L14 18 L25 10" stroke="#4a7ab5" strokeWidth="2" strokeLinejoin="round" />
      <polygon points="22,4 23,7 26,7 23.5,9 24.5,12 22,10 19.5,12 20.5,9 18,7 21,7" stroke="#e8a838" strokeWidth="1" fill="#e8a838" opacity="0.6" />
    </svg>
  );
}
