/** Three small graphs illustrating the types of discontinuity. */
export function DiscontinuityFigure() {
  const panels = [
    { x: 10, label: "устранимый" },
    { x: 150, label: "скачок" },
    { x: 290, label: "второй род" },
  ];

  return (
    <svg
      viewBox="0 0 420 210"
      className="h-auto w-full"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {panels.map((panel) => (
        <g key={panel.label} transform={`translate(${panel.x} 0)`}>
          <line x1="10" y1="150" x2="120" y2="150" stroke="var(--color-line-strong)" strokeWidth="1.2" />
          <line x1="65" y1="20" x2="65" y2="150" stroke="var(--color-line-strong)" strokeWidth="1.2" />
          <text
            x="65"
            y="186"
            textAnchor="middle"
            fontSize="11"
            fontFamily="var(--font-sans)"
            fill="var(--color-ink-faint)"
          >
            {panel.label}
          </text>
        </g>
      ))}

      {/* removable discontinuity */}
      <g transform="translate(10 0)">
        <g stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round">
          <line x1="10" y1="126" x2="58" y2="80" />
          <line x1="72" y1="67" x2="120" y2="24" />
        </g>
        <circle cx="65" cy="74" r="4" fill="var(--color-surface)" stroke="var(--color-accent)" strokeWidth="1.8" />
        <circle cx="65" cy="108" r="3.4" fill="var(--color-accent)" />
      </g>

      {/* jump discontinuity */}
      <g transform="translate(150 0)">
        <g stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round">
          <line x1="10" y1="100" x2="60" y2="100" />
          <line x1="70" y1="58" x2="120" y2="58" />
        </g>
        <circle cx="63" cy="100" r="3.4" fill="var(--color-accent)" />
        <circle cx="67" cy="58" r="4" fill="var(--color-surface)" stroke="var(--color-accent)" strokeWidth="1.8" />
        <line x1="65" y1="50" x2="65" y2="110" stroke="var(--color-line)" strokeWidth="1" strokeDasharray="3 3" />
      </g>

      {/* infinite discontinuity */}
      <g transform="translate(290 0)">
        <path
          d="M10 118 C35 118 52 108 60 46"
          stroke="var(--color-accent)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M70 24 C78 84 92 106 120 108"
          stroke="var(--color-accent)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line x1="65" y1="18" x2="65" y2="150" stroke="var(--color-line-strong)" strokeWidth="1" strokeDasharray="4 4" />
      </g>
    </svg>
  );
}
