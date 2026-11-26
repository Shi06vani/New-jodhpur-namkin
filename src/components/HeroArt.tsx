/**
 * Hero scene built around the shop's name:
 * Jodhpur's blue city + Mehrangarh-style fort at dusk, a marigold toran,
 * and the shop counter with sweets (laddoo), hot kachori and namkeen (bhujia),
 * under a "New Jodhpur — Sweets & Namkeens" signboard.
 */

const backHouses = [
  { x: -6, w: 52, h: 70 }, { x: 44, w: 40, h: 92 }, { x: 82, w: 56, h: 66 },
  { x: 136, w: 44, h: 84 }, { x: 178, w: 60, h: 72 }, { x: 236, w: 42, h: 96 },
  { x: 276, w: 56, h: 70 }, { x: 330, w: 44, h: 88 }, { x: 372, w: 40, h: 64 },
];
const frontHouses = [
  { x: -4, w: 64, h: 46, dome: false }, { x: 58, w: 46, h: 60, dome: true },
  { x: 102, w: 70, h: 40, dome: false }, { x: 170, w: 50, h: 56, dome: false },
  { x: 218, w: 64, h: 44, dome: true }, { x: 280, w: 48, h: 62, dome: false },
  { x: 326, w: 80, h: 42, dome: false },
];
const BASE = 345;

// marigold points along the hanging toran curve
const garland = Array.from({ length: 19 }, (_, i) => {
  const t = i / 18;
  const x = (1 - t) ** 2 * 50 + 2 * (1 - t) * t * 200 + t ** 2 * 350;
  const y = (1 - t) ** 2 * 95 + 2 * (1 - t) * t * 190 + t ** 2 * 95;
  return { x, y, c: i % 2 ? "#f0ad00" : "#df3f26" };
});

const stars = [
  [60, 60], [110, 40], [150, 95], [255, 55], [330, 40], [360, 110], [90, 120], [200, 30],
];

export default function HeroArt() {
  return (
    <svg
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid slice"
      className="hero-art h-full w-full"
      role="img"
      aria-label="New Jodhpur Sweets & Namkeens: the blue city of Jodhpur behind a counter of laddoos, kachori and bhujia"
    >
      <defs>
        <linearGradient id="ha-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f1d4a" />
          <stop offset="55%" stopColor="#2449b8" />
          <stop offset="100%" stopColor="#5a84ec" />
        </linearGradient>
        <radialGradient id="ha-sun" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffd95c" />
          <stop offset="60%" stopColor="#fbc62a" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#fbc62a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ha-laddoo" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#ffd95c" />
          <stop offset="60%" stopColor="#f0ad00" />
          <stop offset="100%" stopColor="#b97400" />
        </radialGradient>
        <linearGradient id="ha-brass" x1="0" x2="1">
          <stop offset="0%" stopColor="#c98a00" />
          <stop offset="50%" stopColor="#ffe28a" />
          <stop offset="100%" stopColor="#c98a00" />
        </linearGradient>
        <linearGradient id="ha-shine" x1="0" x2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="0" />
          <stop offset="50%" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <clipPath id="ha-sign-clip">
          <rect x="52" y="392" width="296" height="78" rx="14" />
        </clipPath>
      </defs>

      {/* sky */}
      <rect width="400" height="500" fill="url(#ha-sky)" />
      {stars.map(([x, y], i) => (
        <circle key={i} className="ha-star" style={{ ["--n" as string]: i }} cx={x} cy={y} r="1.6" fill="#fff" />
      ))}
      <circle className="ha-sun" cx="315" cy="182" r="62" fill="url(#ha-sun)" />
      <circle cx="315" cy="182" r="24" fill="#ffd95c" />

      {/* hill + fort */}
      <g className="ha-fort">
        <path d="M0 262 Q110 206 200 210 Q300 206 400 258 V345 H0 Z" fill="#172d70" />
        <path
          d="M108 214 V176 H120 V166 H130 V176 H146 V156 H156 V146 H170 V156 H186 V172 H212 V150 H222 V138 H238 V150 H250 V170 H266 V162 H278 V170 H298 V214 Z"
          fill="#0f1d4a"
        />
        {[[150, 170], [162, 170], [226, 160], [234, 160], [196, 190], [268, 186], [124, 192]].map(([x, y], i) => (
          <rect key={i} className="ha-lamp" style={{ ["--n" as string]: i }} x={x} y={y} width="4" height="6" rx="1" fill="#fbc62a" />
        ))}
      </g>

      {/* blue city houses */}
      {backHouses.map((h, i) => (
        <g key={`b${i}`} className="ha-house" style={{ ["--n" as string]: i }}>
          <rect x={h.x} y={BASE - h.h - 24} width={h.w} height={h.h + 24} fill="#8aaaf5" />
          <rect x={h.x + h.w / 2 - 4} y={BASE - h.h - 10} width="8" height="11" rx="4" fill="#2449b8" />
        </g>
      ))}
      {frontHouses.map((h, i) => (
        <g key={`f${i}`} className="ha-house" style={{ ["--n" as string]: i + 4 }}>
          {h.dome && <path d={`M${h.x + h.w / 2 - 12} ${BASE - h.h} a12 12 0 0 1 24 0 Z`} fill="#5a84ec" />}
          <rect x={h.x} y={BASE - h.h} width={h.w} height={h.h} fill="#5a84ec" />
          <rect x={h.x} y={BASE - h.h} width={h.w} height="4" fill="#b9cdfb" />
          <rect x={h.x + 10} y={BASE - h.h + 14} width="9" height="12" rx="4.5" fill="#ffd95c" opacity="0.9" />
          <rect x={h.x + h.w - 19} y={BASE - h.h + 14} width="9" height="12" rx="4.5" fill="#172d70" />
        </g>
      ))}

      {/* marigold toran across the window */}
      <g className="ha-garland">
        <path d="M50 95 Q200 190 350 95" fill="none" stroke="#5fa84a" strokeWidth="2" />
        {garland.map((g, i) => (
          <circle key={i} cx={g.x} cy={g.y} r="7" fill={g.c} />
        ))}
        {[garland[3], garland[9], garland[15]].map((g, i) => (
          <g key={`d${i}`}>
            <line x1={g.x} y1={g.y} x2={g.x} y2={g.y + 22} stroke="#5fa84a" strokeWidth="1.5" />
            <circle cx={g.x} cy={g.y + 26} r="5" fill="#f0ad00" />
          </g>
        ))}
      </g>

      {/* counter */}
      <rect x="0" y={BASE} width="400" height="14" fill="url(#ha-brass)" />
      <rect x="0" y={BASE + 14} width="400" height="160" fill="#0a1433" />

      {/* sweets: laddoo pyramid */}
      <g className="ha-item" style={{ ["--n" as string]: 0 }}>
        <ellipse cx="96" cy={BASE - 1} rx="50" ry="7" fill="url(#ha-brass)" />
        {[
          [70, 330], [96, 330], [122, 330], [83, 306], [109, 306], [96, 283],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="13.5" fill="url(#ha-laddoo)" />
            <ellipse cx={x - 5} cy={y - 6} rx="4" ry="2.4" fill="#fff" opacity="0.55" />
          </g>
        ))}
      </g>

      {/* hot kachori with steam */}
      <g className="ha-item" style={{ ["--n" as string]: 1 }}>
        <g stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.85">
          <path className="animate-steam" d="M186 300c-7-9 7-14 0-24" />
          <path className="animate-steam [animation-delay:1s]" d="M204 296c-7-9 7-14 0-24" />
          <path className="animate-steam [animation-delay:2s]" d="M222 300c-7-9 7-14 0-24" />
        </g>
        <ellipse cx="204" cy={BASE - 1} rx="48" ry="7" fill="url(#ha-brass)" />
        <ellipse cx="190" cy="330" rx="26" ry="13" fill="#c98a00" />
        <ellipse cx="190" cy="326" rx="26" ry="12" fill="#f0ad00" />
        <path d="M178 324 q6 5 12 0 q6 -5 12 1" stroke="#9a6400" strokeWidth="2" fill="none" strokeLinecap="round" />
        <ellipse cx="222" cy="334" rx="24" ry="11" fill="#c98a00" />
        <ellipse cx="222" cy="330" rx="24" ry="10" fill="#fbc62a" />
        <path d="M211 329 q5 4 11 0 q5 -4 11 1" stroke="#9a6400" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>

      {/* namkeen: bowl of bhujia */}
      <g className="ha-item" style={{ ["--n" as string]: 2 }}>
        <path
          d="M276 304 q8 -22 34 -20 q26 -2 34 20"
          fill="#e8a317"
        />
        <g stroke="#c98a00" strokeWidth="1.6" fill="none" strokeLinecap="round">
          <path d="M284 300 q6 -6 12 0 t12 0 t12 0 t12 0" />
          <path d="M290 292 q5 -5 10 0 t10 0 t10 0" />
          <path d="M296 286 q4 -4 8 0 t8 0" />
        </g>
        <path d="M270 304 h80 a40 38 0 0 1 -80 0 Z" fill="url(#ha-brass)" />
        <path d="M278 318 h64" stroke="#c98a00" strokeWidth="2" />
      </g>

      {/* signboard */}
      <g className="ha-sign">
        <rect x="52" y="392" width="296" height="78" rx="14" fill="#fbc62a" />
        <rect x="58" y="398" width="284" height="66" rx="10" fill="none" stroke="#172d70" strokeWidth="1.5" strokeDasharray="4 4" />
        <text x="200" y="430" textAnchor="middle" className="font-display" fontWeight="800" fontSize="28" fill="#0f1d4a" letterSpacing="0.5">
          NEW JODHPUR
        </text>
        <text x="200" y="453" textAnchor="middle" className="font-sans" fontWeight="700" fontSize="11" fill="#172d70" letterSpacing="3.5">
          SWEETS &amp; NAMKEENS
        </text>
        <g clipPath="url(#ha-sign-clip)">
          <rect className="ha-shine" x="-80" y="392" width="60" height="78" fill="url(#ha-shine)" transform="skewX(-20)" />
        </g>
      </g>
    </svg>
  );
}
