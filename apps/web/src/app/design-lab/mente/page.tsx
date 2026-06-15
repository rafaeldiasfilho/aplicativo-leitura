"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import {
  MOCK_BOOKS,
  MOCK_BOOKS_MANY,
  MOCK_THEMES,
  MOCK_THEMES_MANY,
  type MenteBook,
  type MenteTheme,
} from "./mock-data";
import { HybridASereno } from "./hybrid-a-sereno";
import { HybridBConstelacao } from "./hybrid-b-constelacao";
import { HybridCOrganico } from "./hybrid-c-organico";

// Design-lab da Mente (§90) — descartável. Demos finalistas (híbridos das 3
// variações iniciais) para a escolha visual antes de implementar a tela real.
// Será removido depois da decisão (como os design-labs anteriores).

type DataSet = { themes: MenteTheme[]; books: MenteBook[] };

const VARIANTS = [
  {
    id: "a",
    name: "A — Cérebro-herói",
    hint: "Cérebro central + só os temas mais usados em volta. Focar um tema mostra seus livros no rodapé; 'ver todos' abre a lista. Escala sem lotar.",
    render: (d: DataSet) => <HybridASereno {...d} />,
  },
  {
    id: "b",
    name: "B — Constelação",
    hint: "Atmosfera etérea, bolhas em órbita, halo; linhas bem sutis + livro acende.",
    render: (d: DataSet) => <HybridBConstelacao {...d} />,
  },
  {
    id: "c",
    name: "C — Orgânico",
    hint: "Papel quente, cérebro vivo, temas como folhas, raízes suaves até os livros.",
    render: (d: DataSet) => <HybridCOrganico {...d} />,
  },
] as const;

export default function DesignLabMente() {
  const [active, setActive] = useState<(typeof VARIANTS)[number]["id"]>("a");
  const [many, setMany] = useState(false);
  const current = VARIANTS.find((v) => v.id === active) ?? VARIANTS[0];

  const data: DataSet = many
    ? { themes: MOCK_THEMES_MANY, books: MOCK_BOOKS_MANY }
    : { themes: MOCK_THEMES, books: MOCK_BOOKS };

  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-10">
      <header className="text-center">
        <p className="text-sm text-muted">Design-lab · §90</p>
        <h1 className="mt-1 text-2xl font-medium tracking-tight">Mente — variações</h1>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted">
          Passe o mouse (ou toque) num tema para ver as conexões com os livros.
        </p>
      </header>

      <div className="mt-6 flex justify-center gap-2">
        {VARIANTS.map((v) => (
          <button
            key={v.id}
            type="button"
            onClick={() => setActive(v.id)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
              active === v.id
                ? "bg-accent text-accent-foreground"
                : "bg-surface text-muted hover:text-foreground",
            )}
          >
            {v.name}
          </button>
        ))}
      </div>

      {/* Interruptor de escala: poucos vs. muitos temas (teste de poluição) */}
      <div className="mt-3 flex items-center justify-center gap-2">
        <span className="text-xs text-muted">Conteúdo:</span>
        <button
          type="button"
          onClick={() => setMany(false)}
          className={cn(
            "rounded-full px-3 py-1 text-xs font-medium transition-colors",
            !many ? "bg-accent text-accent-foreground" : "bg-surface text-muted",
          )}
        >
          Poucos ({MOCK_THEMES.length})
        </button>
        <button
          type="button"
          onClick={() => setMany(true)}
          className={cn(
            "rounded-full px-3 py-1 text-xs font-medium transition-colors",
            many ? "bg-accent text-accent-foreground" : "bg-surface text-muted",
          )}
        >
          Muitos ({MOCK_THEMES_MANY.length})
        </button>
      </div>

      <p className="mt-3 text-center text-sm text-muted">{current.hint}</p>

      <div className="mt-6">{current.render(data)}</div>
    </main>
  );
}
