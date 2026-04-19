const S = 2.5; // stroke width

export function BrandShield() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      <path d="M32 6 L54 16 V34 C54 46 44 54 32 58 C20 54 10 46 10 34 V16 Z" stroke="#e05545" strokeWidth={S} strokeLinejoin="round" />
      <polygon points="32,24 34,30 40,30 35,34 37,40 32,36 27,40 29,34 24,30 30,30" stroke="#e05545" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function TypographyA() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      <path d="M20 52 L32 12 L44 52" stroke="#e8a838" strokeWidth={S} strokeLinecap="round" strokeLinejoin="round" />
      <line x1="24" y1="38" x2="40" y2="38" stroke="#e8a838" strokeWidth={S} strokeLinecap="round" />
      <line x1="8" y1="52" x2="56" y2="52" stroke="#e8a838" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 3" />
      <line x1="8" y1="46" x2="56" y2="46" stroke="#e8a838" strokeWidth="1" strokeLinecap="round" strokeDasharray="3 4" opacity="0.4" />
    </svg>
  );
}

export function BookDesign() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      <rect x="12" y="8" width="32" height="46" rx="3" stroke="#4a9e6b" strokeWidth={S} />
      <line x1="18" y1="8" x2="18" y2="54" stroke="#4a9e6b" strokeWidth="1.5" />
      <rect x="22" y="16" width="16" height="3" rx="1" fill="#4a9e6b" opacity="0.3" />
      <rect x="22" y="23" width="12" height="2" rx="1" fill="#4a9e6b" opacity="0.2" />
      {/* Bookmark */}
      <path d="M46 8 V28 L50 24 L54 28 V8" stroke="#e05545" strokeWidth={S} strokeLinejoin="round" />
    </svg>
  );
}

export function GovBuilding() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      <path d="M12 54 H52" stroke="#4a7ab5" strokeWidth={S} strokeLinecap="round" />
      <rect x="16" y="30" width="32" height="24" stroke="#4a7ab5" strokeWidth={S} />
      <path d="M12 30 L32 16 L52 30" stroke="#4a7ab5" strokeWidth={S} strokeLinecap="round" strokeLinejoin="round" />
      <rect x="24" y="38" width="6" height="10" rx="1" stroke="#4a7ab5" strokeWidth="1.5" />
      <rect x="34" y="38" width="6" height="10" rx="1" stroke="#4a7ab5" strokeWidth="1.5" />
      {/* Stamp */}
      <circle cx="50" cy="14" r="8" stroke="#e05545" strokeWidth="1.5" strokeDasharray="3 2" />
    </svg>
  );
}

export function RocketUp() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      <path d="M32 8 C32 8 22 20 22 36 L28 38 L32 48 L36 38 L42 36 C42 20 32 8 32 8Z" stroke="#e05545" strokeWidth={S} strokeLinejoin="round" />
      <circle cx="32" cy="28" r="4" stroke="#e05545" strokeWidth="1.5" />
      {/* Flames */}
      <path d="M28 48 Q30 56 32 52 Q34 56 36 48" stroke="#e8a838" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Arrow */}
      <line x1="50" y1="44" x2="50" y2="20" stroke="#4a9e6b" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" />
      <polygon points="46,22 50,14 54,22" fill="#4a9e6b" opacity="0.6" />
    </svg>
  );
}

export function FilmSlate() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      <rect x="10" y="22" width="44" height="34" rx="3" stroke="#e8a838" strokeWidth={S} />
      {/* Clapper top */}
      <path d="M10 22 L10 14 L54 14 L54 22" stroke="#e8a838" strokeWidth={S} strokeLinejoin="round" />
      <line x1="20" y1="14" x2="16" y2="22" stroke="#e8a838" strokeWidth="1.5" />
      <line x1="30" y1="14" x2="26" y2="22" stroke="#e8a838" strokeWidth="1.5" />
      <line x1="40" y1="14" x2="36" y2="22" stroke="#e8a838" strokeWidth="1.5" />
      <line x1="50" y1="14" x2="46" y2="22" stroke="#e8a838" strokeWidth="1.5" />
      {/* Lens */}
      <circle cx="32" cy="40" r="10" stroke="#e8a838" strokeWidth="1.5" />
      <circle cx="32" cy="40" r="5" stroke="#e8a838" strokeWidth="1" />
    </svg>
  );
}

// Weight icons
export function FeatherIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
      <path d="M44 8 C30 14 18 30 14 50 Q24 40 34 38 Q28 34 44 8Z" stroke="#e05545" strokeWidth={S} strokeLinejoin="round" />
      <line x1="14" y1="50" x2="44" y2="8" stroke="#e05545" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
    </svg>
  );
}
export function SunRays() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
      <circle cx="30" cy="30" r="10" stroke="#e8a838" strokeWidth={S} />
      {[0,45,90,135,180,225,270,315].map(a => {
        const r1 = 15, r2 = 22, rad = a * Math.PI / 180;
        return <line key={a} x1={30+r1*Math.cos(rad)} y1={30+r1*Math.sin(rad)} x2={30+r2*Math.cos(rad)} y2={30+r2*Math.sin(rad)} stroke="#e8a838" strokeWidth="2" strokeLinecap="round" />;
      })}
    </svg>
  );
}
export function SnowflakeIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
      {[0,60,120].map(a => { const rad = a * Math.PI / 180; return <line key={a} x1={30-20*Math.cos(rad)} y1={30-20*Math.sin(rad)} x2={30+20*Math.cos(rad)} y2={30+20*Math.sin(rad)} stroke="#4a7ab5" strokeWidth={S} strokeLinecap="round" />; })}
      <circle cx="30" cy="30" r="6" stroke="#4a7ab5" strokeWidth="1.5" />
    </svg>
  );
}
export function WaterDrop() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
      <path d="M30 8 C30 8 14 28 14 38 C14 48 21 54 30 54 C39 54 46 48 46 38 C46 28 30 8 30 8Z" stroke="#4a9e6b" strokeWidth={S} strokeLinejoin="round" />
      <path d="M24 40 Q28 34 32 40" stroke="#4a9e6b" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
    </svg>
  );
}
export function CoffeeIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
      <rect x="12" y="22" width="28" height="28" rx="4" stroke="#8b7355" strokeWidth={S} />
      <path d="M40 28 C48 28 50 34 48 40 C46 44 40 44 40 44" stroke="#8b7355" strokeWidth={S} strokeLinecap="round" />
      <path d="M20 18 Q22 10 24 18" stroke="#8b7355" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M28 16 Q30 8 32 16" stroke="#8b7355" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}
export function HoneyJar() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
      <rect x="16" y="22" width="28" height="30" rx="6" stroke="#e8a838" strokeWidth={S} />
      <path d="M20 22 V16 H40 V22" stroke="#e8a838" strokeWidth={S} strokeLinejoin="round" />
      <rect x="24" y="12" width="12" height="6" rx="2" stroke="#e8a838" strokeWidth="1.5" />
      <path d="M22 34 Q30 28 38 34 Q30 40 22 34Z" stroke="#e8a838" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

// Plan icons
export function PersonIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="16" r="8" stroke="#8b7355" strokeWidth={S} />
      <path d="M8 44 C8 32 16 28 24 28 C32 28 40 32 40 44" stroke="#8b7355" strokeWidth={S} strokeLinecap="round" />
    </svg>
  );
}
export function StudioIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <rect x="8" y="18" width="32" height="24" rx="2" stroke="#e05545" strokeWidth={S} />
      <path d="M8 18 L24 8 L40 18" stroke="#e05545" strokeWidth={S} strokeLinejoin="round" />
      <rect x="18" y="28" width="12" height="14" rx="1" stroke="#e05545" strokeWidth="1.5" />
    </svg>
  );
}
export function CrownIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d="M8 36 L8 18 L16 26 L24 12 L32 26 L40 18 L40 36Z" stroke="#e8a838" strokeWidth={S} strokeLinejoin="round" />
      <rect x="8" y="36" width="32" height="6" rx="2" stroke="#e8a838" strokeWidth={S} />
    </svg>
  );
}

// Stat icons
export function CalendarIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="4" y="8" width="32" height="28" rx="3" stroke="#e05545" strokeWidth="2" />
      <line x1="4" y1="16" x2="36" y2="16" stroke="#e05545" strokeWidth="2" />
      <line x1="12" y1="4" x2="12" y2="12" stroke="#e05545" strokeWidth="2" strokeLinecap="round" />
      <line x1="28" y1="4" x2="28" y2="12" stroke="#e05545" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
export function FolderIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M4 12 L4 32 C4 34 6 36 8 36 H32 C34 36 36 34 36 32 V16 C36 14 34 12 32 12 H20 L16 8 H8 C6 8 4 10 4 12Z" stroke="#4a9e6b" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}
export function PenNibIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M20 4 L28 20 L20 36 L12 20Z" stroke="#4a7ab5" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="20" cy="20" r="3" stroke="#4a7ab5" strokeWidth="1.5" />
      <line x1="20" y1="36" x2="20" y2="40" stroke="#4a7ab5" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
