// Cérebro abstrato em mock (§12). Desenhado de forma determinística (sem
// aleatoriedade, para SSR e cliente baterem): um contorno "enrugado" (giros)
// simétrico, com a fissura central. Placeholder calmo até o Rafael enviar o
// modelo de cérebro real, que entra trocando só este componente.

function scallopedPath(
  cx: number,
  cy: number,
  baseR: number,
  bumps: number,
  amp: number,
  squashY: number,
) {
  const steps = 160;
  const pts: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const a = (i / steps) * Math.PI * 2;
    const r = baseR + amp * Math.sin(bumps * a);
    const x = cx + Math.cos(a) * r;
    const y = cy + Math.sin(a) * r * squashY;
    pts.push(`${x.toFixed(2)} ${y.toFixed(2)}`);
  }
  return `M${pts[0]} L ${pts.slice(1).join(" L ")} Z`;
}

export function BrainMock({
  className,
  size = 132,
}: {
  className?: string;
  size?: number;
}) {
  const body = scallopedPath(50, 50, 28, 11, 2.6, 0.82);

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-hidden
    >
      {/* corpo do cérebro */}
      <path
        d={body}
        fill="color-mix(in oklab, var(--accent) 22%, transparent)"
        stroke="color-mix(in oklab, var(--accent) 70%, transparent)"
        strokeWidth={1}
        strokeLinejoin="round"
      />
      {/* fissura central (separa os hemisférios) */}
      <path
        d="M50 26 C 46 36, 54 46, 50 56 C 46 64, 53 70, 50 74"
        fill="none"
        stroke="color-mix(in oklab, var(--accent) 70%, transparent)"
        strokeWidth={0.9}
        strokeLinecap="round"
      />
      {/* alguns giros sugeridos em cada hemisfério */}
      <path
        d="M40 36 C 35 39, 36 44, 41 45 M37 52 C 33 55, 36 60, 41 60"
        fill="none"
        stroke="color-mix(in oklab, var(--accent) 50%, transparent)"
        strokeWidth={0.8}
        strokeLinecap="round"
      />
      <path
        d="M60 36 C 65 39, 64 44, 59 45 M63 52 C 67 55, 64 60, 59 60"
        fill="none"
        stroke="color-mix(in oklab, var(--accent) 50%, transparent)"
        strokeWidth={0.8}
        strokeLinecap="round"
      />
    </svg>
  );
}
