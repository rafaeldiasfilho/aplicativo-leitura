"use client";

import { useState } from "react";
import { MOCK_BOOKS, MOCK_THEMES, radialPositions } from "./mock-data";

// V2 — Orgânica/jardim: cérebro como forma orgânica no centro; os temas
// "crescem" dele como folhas, ligados por hastes. Paleta quente (papel/sálvia).
// Ao focar um tema, raízes sutis descem até os livros daquele tema.
export function V2Organica() {
  const [active, setActive] = useState<string | null>(null);

  const themePos = radialPositions(MOCK_THEMES.length, 30);
  const activeTheme = MOCK_THEMES.find((t) => t.id === active) ?? null;
  // Livros numa faixa inferior, espaçados.
  const bookX = (i: number) => 12 + (i * 76) / (MOCK_BOOKS.length - 1);

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-xl overflow-hidden rounded-3xl"
      style={{ background: "var(--mural-surface)" }}
      onMouseLeave={() => setActive(null)}
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        {/* Hastes: do centro a cada tema */}
        {MOCK_THEMES.map((theme, i) => {
          const p = themePos[i];
          return (
            <path
              key={theme.id}
              d={`M50 50 Q ${(50 + p.x) / 2} ${(50 + p.y) / 2 - 4} ${p.x} ${p.y}`}
              fill="none"
              stroke="var(--accent)"
              strokeWidth={0.3}
              opacity={0.35}
            />
          );
        })}
        {/* Raízes: do tema ativo aos seus livros (faixa inferior, y≈88) */}
        {activeTheme &&
          activeTheme.bookIds.map((bid) => {
            const ti = MOCK_THEMES.findIndex((t) => t.id === activeTheme.id);
            const p = themePos[ti];
            const bi = MOCK_BOOKS.findIndex((b) => b.id === bid);
            const bx = bookX(bi);
            return (
              <path
                key={bid}
                d={`M${p.x} ${p.y} C ${p.x} ${p.y + 25}, ${bx} ${88 - 25}, ${bx} 86`}
                fill="none"
                stroke="var(--accent)"
                strokeWidth={0.45}
                opacity={0.7}
              />
            );
          })}
      </svg>

      {/* Cérebro orgânico central */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="mural-breathe h-24 w-28 bg-accent/25"
          style={{ borderRadius: "60% 40% 55% 45% / 55% 50% 50% 45%" }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-14 w-16 -translate-x-1/2 -translate-y-1/2 bg-accent/40"
          style={{ borderRadius: "60% 40% 55% 45% / 55% 50% 50% 45%" }}
        />
      </div>

      {/* Temas como folhas */}
      {MOCK_THEMES.map((theme, i) => {
        const p = themePos[i];
        const size = 26 + theme.notes * 3.5;
        const isActive = active === theme.id;
        return (
          <button
            key={theme.id}
            type="button"
            onMouseEnter={() => setActive(theme.id)}
            onFocus={() => setActive(theme.id)}
            onClick={() => setActive((a) => (a === theme.id ? null : theme.id))}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: size + 14,
              height: size,
              borderRadius: "70% 30% 65% 35% / 60% 65% 35% 40%",
              color: "var(--mural-ink)",
              transform: `translate(-50%, -50%) rotate(${(i % 2 === 0 ? 1 : -1) * 12}deg)`,
              background: isActive
                ? "color-mix(in oklab, var(--accent) 55%, var(--mural-surface))"
                : "color-mix(in oklab, var(--accent) 30%, var(--mural-surface))",
            }}
          >
            <span className="px-1 text-[10px] font-medium leading-tight">
              {theme.label}
            </span>
          </button>
        );
      })}

      {/* Livros (faixa inferior, como canteiros) */}
      {MOCK_BOOKS.map((book, i) => {
        const linked = activeTheme?.bookIds.includes(book.id) ?? false;
        const dim = activeTheme && !linked;
        return (
          <div
            key={book.id}
            className="absolute bottom-[8%] -translate-x-1/2 transition-opacity duration-300"
            style={{ left: `${bookX(i)}%`, opacity: dim ? 0.3 : 1 }}
          >
            <div
              className="h-10 w-8 rounded shadow-sm"
              style={{
                background: `linear-gradient(150deg, ${book.cover.from}, ${book.cover.to})`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
