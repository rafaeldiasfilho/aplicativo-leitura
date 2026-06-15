"use client";

import { useState } from "react";
import { MOCK_BOOKS, MOCK_THEMES, radialPositions } from "./mock-data";

// V3 — Nuvem tipográfica: o mais calmo. Cérebro é só um contorno que respira;
// os temas são texto em tamanhos diferentes (peso = presença). Sem linhas:
// ao focar um tema, os livros ligados acendem em acento (conexão por realce).
export function V3Nuvem() {
  const [active, setActive] = useState<string | null>(null);
  const themePos = radialPositions(MOCK_THEMES.length, 30);
  const activeTheme = MOCK_THEMES.find((t) => t.id === active) ?? null;

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-xl overflow-hidden rounded-3xl border border-border bg-background"
      onMouseLeave={() => setActive(null)}
    >
      {/* Cérebro: contorno tracejado que respira */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="mural-breathe h-24 w-24 rounded-full border border-dashed border-accent/50" />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-muted">
          sua mente
        </span>
      </div>

      {/* Temas como texto, tamanho conforme peso */}
      {MOCK_THEMES.map((theme, i) => {
        const p = themePos[i];
        const isActive = active === theme.id;
        const fontSize = 12 + theme.notes * 1.6;
        return (
          <button
            key={theme.id}
            type="button"
            onMouseEnter={() => setActive(theme.id)}
            onFocus={() => setActive(theme.id)}
            onClick={() => setActive((a) => (a === theme.id ? null : theme.id))}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded px-1 font-medium leading-none transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              fontSize,
              color: isActive ? "var(--accent)" : "var(--foreground)",
              opacity: activeTheme && !isActive ? 0.4 : 1,
            }}
          >
            {theme.label}
          </button>
        );
      })}

      {/* Livros: títulos discretos no rodapé; acendem se ligados ao tema ativo */}
      <div className="absolute inset-x-0 bottom-4 flex flex-wrap justify-center gap-x-4 gap-y-1 px-6">
        {MOCK_BOOKS.map((book) => {
          const linked = activeTheme?.bookIds.includes(book.id) ?? false;
          return (
            <span
              key={book.id}
              className="text-xs transition-all duration-300"
              style={{
                color: linked ? "var(--accent)" : "var(--muted)",
                opacity: activeTheme && !linked ? 0.35 : 1,
                fontWeight: linked ? 600 : 400,
              }}
            >
              {book.title}
            </span>
          );
        })}
      </div>
    </div>
  );
}
