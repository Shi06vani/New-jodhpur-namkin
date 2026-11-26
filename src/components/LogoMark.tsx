/**
 * Brand mark: a Jodhpur jharokha (arched window) holding a stack of laddoos
 * with rising steam. Animates on load (arch draws, laddoos drop in, steam rises)
 * and the laddoos bounce on hover (via the parent `group`).
 */
export default function LogoMark({ size = 44, light = false }: { size?: number; light?: boolean }) {
  const arch = light ? "#fbc62a" : "#1d3a92";
  const inner = light ? "#172d70" : "#0f1d4a";
  const trim = "#fbc62a";

  return (
    <svg
      width={size}
      height={size * (60 / 52)}
      viewBox="0 0 52 60"
      className="logo-mark shrink-0 overflow-visible"
      aria-hidden
    >
      {/* finial on top of the arch */}
      <g className="logo-finial">
        <path d="M26 0.5 L28.2 4.5 H23.8 Z" fill={trim} />
        <circle cx="26" cy="6" r="1.6" fill={trim} />
      </g>

      {/* outer arch (filled) */}
      <path className="logo-arch-fill" d="M3 58 V27 A23 23 0 0 1 49 27 V58 Z" fill={arch} />
      {/* outer arch outline that draws itself */}
      <path
        className="logo-arch-line"
        d="M3 58 V27 A23 23 0 0 1 49 27 V58"
        fill="none"
        stroke={trim}
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      {/* inner window */}
      <path d="M10 58 V29 A16 16 0 0 1 42 29 V58 Z" fill={inner} />
      {/* thin inset trim following the window */}
      <path
        d="M13.5 55 V29 A12.5 12.5 0 0 1 38.5 29 V55"
        fill="none"
        stroke={trim}
        strokeWidth="0.9"
        opacity="0.45"
      />

      {/* steam */}
      <g stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.85">
        <path className="logo-steam" d="M22.5 29.5 c-1.6-1.6 1.6-2.6 0-5" />
        <path className="logo-steam logo-steam-2" d="M26 28.5 c-1.6-1.6 1.6-2.6 0-5" />
        <path className="logo-steam logo-steam-3" d="M29.5 29.5 c-1.6-1.6 1.6-2.6 0-5" />
      </g>

      {/* laddoos */}
      <g className="logo-laddoos">
        <circle className="logo-laddoo" style={{ ["--n" as string]: 0 }} cx="19.5" cy="49" r="4.6" fill="#f0ad00" />
        <circle className="logo-laddoo" style={{ ["--n" as string]: 1 }} cx="26" cy="49" r="4.6" fill="#fbc62a" />
        <circle className="logo-laddoo" style={{ ["--n" as string]: 2 }} cx="32.5" cy="49" r="4.6" fill="#f0ad00" />
        <circle className="logo-laddoo" style={{ ["--n" as string]: 3 }} cx="22.75" cy="42.5" r="4.6" fill="#fbc62a" />
        <circle className="logo-laddoo" style={{ ["--n" as string]: 4 }} cx="29.25" cy="42.5" r="4.6" fill="#f0ad00" />
        <circle className="logo-laddoo" style={{ ["--n" as string]: 5 }} cx="26" cy="36.5" r="4.6" fill="#ffd95c" />
      </g>

      {/* thali + base */}
      <rect x="12" y="53" width="28" height="2.6" rx="1.3" fill={trim} />
      <rect x="1" y="57" width="50" height="3" rx="1.5" fill={trim} />
    </svg>
  );
}
