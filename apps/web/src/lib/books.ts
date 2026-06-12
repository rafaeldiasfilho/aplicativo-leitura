// Modelo de livro e dados locais (Fase 1, sem banco).

export type BookStatus = "lendo" | "lido" | "quero-ler";

// Rótulos calmos dos status, na ordem em que aparecem na Biblioteca.
// "Pausado" entra quando o Modo Leitura existir (ver ACTIVE_DECISIONS 2026-06-12).
export const STATUS_LABELS: Record<BookStatus, string> = {
  lendo: "Lendo",
  "quero-ler": "Quero ler",
  lido: "Lido",
};

export const STATUS_ORDER: BookStatus[] = ["lendo", "quero-ler", "lido"];

export type Book = {
  id: string;
  title: string;
  author: string;
  status: BookStatus;
  /** lido antes do app (entra na Mente com tempo estimado, não real). */
  historico: boolean;
  /** Progresso de leitura em 0–100. */
  progress: number;
  /** Tempo de leitura acumulado, em minutos. */
  totalMinutes: number;
  /** Cores do gradiente da capa. */
  cover: { from: string; to: string };
};

// Intenção escolhida ao adicionar um livro (ver ACTIVE_DECISIONS 2026-06-12).
export type Intent = "Ler agora" | "Já lido" | "Ler depois";

export function intentToStatus(intent: Intent): {
  status: BookStatus;
  historico: boolean;
} {
  switch (intent) {
    case "Ler agora":
      return { status: "lendo", historico: false };
    case "Já lido":
      return { status: "lido", historico: true };
    case "Ler depois":
      return { status: "quero-ler", historico: false };
  }
}

// Paleta de capas calmas; escolhida de forma estável a partir do texto.
const COVERS = [
  { from: "#6b7f6e", to: "#46604f" },
  { from: "#7c7185", to: "#534a5c" },
  { from: "#85756b", to: "#5c4f46" },
  { from: "#6b7785", to: "#46525c" },
  { from: "#7d6b6b", to: "#574646" },
];

export function pickCover(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return COVERS[h % COVERS.length];
}

/** Formata minutos como "5h20", "5h" ou "45min". */
export function formatReadingTime(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h === 0) return `${m}min`;
  if (m === 0) return `${h}h`;
  return `${h}h${m.toString().padStart(2, "0")}`;
}

// Livros iniciais (exemplo). Servem de catálogo da busca e povoam a Home.
export const SEED_BOOKS: Book[] = [
  {
    id: "habito",
    title: "O Poder do Hábito",
    author: "Charles Duhigg",
    status: "lendo",
    historico: false,
    progress: 62,
    totalMinutes: 320,
    cover: { from: "#6b7f6e", to: "#46604f" },
  },
  {
    id: "sapiens",
    title: "Sapiens",
    author: "Yuval N. Harari",
    status: "lendo",
    historico: false,
    progress: 28,
    totalMinutes: 145,
    cover: { from: "#7c7185", to: "#534a5c" },
  },
  {
    id: "atomicos",
    title: "Hábitos Atômicos",
    author: "James Clear",
    status: "lendo",
    historico: false,
    progress: 81,
    totalMinutes: 410,
    cover: { from: "#85756b", to: "#5c4f46" },
  },
  {
    id: "duna",
    title: "Duna",
    author: "Frank Herbert",
    status: "lendo",
    historico: false,
    progress: 12,
    totalMinutes: 60,
    cover: { from: "#6b7785", to: "#46525c" },
  },
];
