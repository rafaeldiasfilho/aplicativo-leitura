"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { V1Constelacao } from "./v1-constelacao";
import { V2Organica } from "./v2-organica";
import { V3Nuvem } from "./v3-nuvem";

// Design-lab da Mente (§90) — descartável. 3 variações estáticas em mock para
// escolher a identidade visual antes de implementar a tela real. Será removido
// depois da decisão (como os design-labs anteriores).

const VARIANTS = [
  {
    id: "v1",
    name: "V1 — Constelação",
    hint: "Cérebro ao centro, temas em órbita, conexões que acendem ao focar.",
    render: () => <V1Constelacao />,
  },
  {
    id: "v2",
    name: "V2 — Orgânica",
    hint: "Cérebro vivo; temas crescem como folhas; raízes até os livros.",
    render: () => <V2Organica />,
  },
  {
    id: "v3",
    name: "V3 — Nuvem",
    hint: "O mais calmo: temas em texto; conexão por realce, sem linhas.",
    render: () => <V3Nuvem />,
  },
] as const;

export default function DesignLabMente() {
  const [active, setActive] = useState<(typeof VARIANTS)[number]["id"]>("v1");
  const current = VARIANTS.find((v) => v.id === active)!;

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

      <p className="mt-3 text-center text-sm text-muted">{current.hint}</p>

      <div className="mt-6">{current.render()}</div>
    </main>
  );
}
