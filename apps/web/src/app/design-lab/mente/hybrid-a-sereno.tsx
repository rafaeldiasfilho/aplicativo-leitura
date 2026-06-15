"use client";

import { useState } from "react";
import {
  MOCK_BOOKS,
  MOCK_THEMES,
  bookById,
  type MenteBook,
  type MenteTheme,
} from "./mock-data";
import { BrainMock } from "./brain-mock";

// Posiciona `count` nós num anel de raio `radius` (% do palco), começando no topo.
function ring(count: number, radius: number) {
  return Array.from({ length: count }, (_, i) => {
    const a = (i / count) * Math.PI * 2 - Math.PI / 2;
    return { x: 50 + Math.cos(a) * radius, y: 50 + Math.sin(a) * radius };
  });
}

// Demo A — Cérebro-herói + panorama (Direção 1). O cérebro é o centro; só os
// temas mais usados aparecem em volta (panorama curado, nunca lota). A
// profundidade fica separada: focar um tema revela seus livros no rodapé; "ver
// todos os temas" abre a lista calma completa. Escala sem virar "mapa confuso".
export function HybridASereno({
  themes = MOCK_THEMES,
  books = MOCK_BOOKS,
}: {
  themes?: MenteTheme[];
  books?: MenteBook[];
} = {}) {
  const [active, setActive] = useState<string | null>(null);
  const [showList, setShowList] = useState(false);

  const PANORAMA = 6;
  const sorted = [...themes].sort((a, b) => b.notes - a.notes);
  const panorama = sorted.slice(0, PANORAMA); // só os mais fortes no panorama
  const rest = sorted.length - panorama.length;
  const pos = ring(panorama.length, 33);
  const activeTheme = themes.find((t) => t.id === active) ?? null;
  const activeBooks = activeTheme
    ? activeTheme.bookIds.map(bookById).filter((b): b is MenteBook => Boolean(b))
    : [];

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-xl overflow-hidden rounded-3xl"
      style={{ background: "var(--mural-surface)" }}
      onMouseLeave={() => setActive(null)}
    >
      {/* Cérebro abstrato (mock), herói central — trocável pelo modelo real */}
      <div className="mural-breathe absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2">
        <BrainMock size={168} />
      </div>

      {/* Panorama: só os temas mais usados, bem espaçados */}
      {panorama.map((theme, i) => {
        const p = pos[i];
        const isActive = active === theme.id;
        const fontSize = 13 + theme.notes * 1.4;
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
              top: `${p.y * 0.92}%`, // sobe um pouco para liberar o rodapé
              fontSize,
              color: isActive ? "var(--accent)" : "var(--mural-ink)",
              opacity: activeTheme && !isActive ? 0.35 : 1,
            }}
          >
            {theme.label}
          </button>
        );
      })}

      {/* Rodapé inteligente: livros do tema focado OU acesso a todos os temas */}
      <div className="absolute inset-x-0 bottom-0 flex h-24 items-center justify-center px-5">
        {activeTheme ? (
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-xs" style={{ color: "var(--mural-ink)", opacity: 0.7 }}>
              Livros sobre {activeTheme.label}
            </span>
            <div className="flex items-end justify-center gap-2">
              {activeBooks.map((book) => (
                <div
                  key={book.id}
                  className="h-12 w-9 rounded shadow-sm"
                  style={{
                    background: `linear-gradient(150deg, ${book.cover.from}, ${book.cover.to})`,
                    boxShadow: "0 0 16px color-mix(in oklab, var(--accent) 45%, transparent)",
                  }}
                  title={book.title}
                />
              ))}
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setShowList(true)}
            className="rounded-full px-4 py-1.5 text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            style={{
              color: "var(--mural-ink)",
              background: "color-mix(in oklab, var(--accent) 18%, var(--mural-surface))",
            }}
          >
            ver todos os temas{rest > 0 ? ` (${sorted.length})` : ""}
          </button>
        )}
      </div>

      {/* Lista completa dos temas (painel calmo, rolável) */}
      {showList && (
        <div className="absolute inset-0 flex flex-col bg-[color-mix(in_oklab,var(--mural-surface)_92%,transparent)] backdrop-blur-sm">
          <div className="flex items-center justify-between px-5 py-3">
            <span className="text-sm font-medium" style={{ color: "var(--mural-ink)" }}>
              Todos os temas
            </span>
            <button
              type="button"
              onClick={() => setShowList(false)}
              className="rounded-full px-3 py-1 text-xs font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              style={{ color: "var(--mural-ink)" }}
            >
              fechar
            </button>
          </div>
          <ul className="flex-1 overflow-y-auto px-5 pb-5">
            {sorted.map((theme) => (
              <li
                key={theme.id}
                className="flex items-center justify-between border-b py-2 text-sm"
                style={{
                  color: "var(--mural-ink)",
                  borderColor: "color-mix(in oklab, var(--mural-ink) 12%, transparent)",
                }}
              >
                <span>{theme.label}</span>
                <span className="text-xs opacity-60">{theme.notes} anotações</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
