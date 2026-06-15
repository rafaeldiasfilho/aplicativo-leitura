"use client";

import { useState } from "react";
import {
  MOCK_BOOKS,
  MOCK_THEMES,
  radialPositions,
} from "./mock-data";

// V1 — Constelação: cérebro suave ao centro, temas em órbita, livros num anel
// externo. As conexões (tema → seus livros) só acendem ao focar um tema.
export function V1Constelacao() {
  const [active, setActive] = useState<string | null>(null);

  const themePos = radialPositions(MOCK_THEMES.length, 26);
  const bookPos = radialPositions(MOCK_BOOKS.length, 43, 50, 50);
  const bookIndex = Object.fromEntries(MOCK_BOOKS.map((b, i) => [b.id, i]));

  const activeTheme = MOCK_THEMES.find((t) => t.id === active) ?? null;

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-xl overflow-hidden rounded-3xl"
      style={{
        background:
          "radial-gradient(circle at 50% 45%, #2c3f3a 0%, #1c2a27 55%, #141d1b 100%)",
      }}
      onMouseLeave={() => setActive(null)}
    >
      {/* Linhas de conexão (só do tema ativo) */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        {activeTheme &&
          activeTheme.bookIds.map((bid) => {
            const ti = MOCK_THEMES.findIndex((t) => t.id === activeTheme.id);
            const from = themePos[ti];
            const to = bookPos[bookIndex[bid]];
            return (
              <line
                key={bid}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="#8fb3a5"
                strokeWidth={0.4}
                strokeLinecap="round"
                opacity={0.8}
              />
            );
          })}
      </svg>

      {/* Cérebro central abstrato */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="mural-breathe relative h-28 w-28 rounded-full bg-[#8fb3a5]/20 blur-md" />
        <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8fb3a5]/30 shadow-[0_0_40px_rgba(143,179,165,0.5)]" />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-medium tracking-wide text-[#dce8e2]">
          você
        </span>
      </div>

      {/* Livros (anel externo) */}
      {MOCK_BOOKS.map((book, i) => {
        const pos = bookPos[i];
        const linked = activeTheme?.bookIds.includes(book.id) ?? false;
        const dim = activeTheme && !linked;
        return (
          <div
            key={book.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
            style={{ left: `${pos.x}%`, top: `${pos.y}%`, opacity: dim ? 0.25 : 1 }}
          >
            <div
              className="h-9 w-7 rounded shadow-md ring-1 ring-white/10"
              style={{
                background: `linear-gradient(150deg, ${book.cover.from}, ${book.cover.to})`,
              }}
            />
          </div>
        );
      })}

      {/* Temas (órbita) */}
      {MOCK_THEMES.map((theme, i) => {
        const pos = themePos[i];
        const size = 30 + theme.notes * 4; // peso → tamanho
        const isActive = active === theme.id;
        return (
          <button
            key={theme.id}
            type="button"
            onMouseEnter={() => setActive(theme.id)}
            onFocus={() => setActive(theme.id)}
            onClick={() => setActive((a) => (a === theme.id ? null : theme.id))}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-center text-[#eaf2ee] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8fb3a5]"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              width: size,
              height: size,
              background: isActive
                ? "rgba(143,179,165,0.45)"
                : "rgba(143,179,165,0.18)",
              boxShadow: isActive
                ? "0 0 24px rgba(143,179,165,0.6)"
                : "none",
            }}
          >
            <span className="px-1 text-[10px] font-medium leading-tight">
              {theme.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
