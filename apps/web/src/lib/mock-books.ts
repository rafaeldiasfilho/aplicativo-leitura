// Dados fictícios para o design-lab. Sem banco, sem Supabase.
// Servem apenas para avaliar a sensação visual das variações de tela.

export type MockBook = {
  id: string;
  title: string;
  author: string;
  /** Progresso de leitura em 0–100. */
  progress: number;
  /** Tempo total de leitura acumulado, em minutos. */
  totalMinutes: number;
  /** Cores do gradiente da capa fictícia. */
  cover: { from: string; to: string };
};

export const readingBooks: MockBook[] = [
  {
    id: "habito",
    title: "O Poder do Hábito",
    author: "Charles Duhigg",
    progress: 62,
    totalMinutes: 320,
    cover: { from: "#6b7f6e", to: "#46604f" },
  },
  {
    id: "sapiens",
    title: "Sapiens",
    author: "Yuval N. Harari",
    progress: 28,
    totalMinutes: 145,
    cover: { from: "#7c7185", to: "#534a5c" },
  },
  {
    id: "atomicos",
    title: "Hábitos Atômicos",
    author: "James Clear",
    progress: 81,
    totalMinutes: 410,
    cover: { from: "#85756b", to: "#5c4f46" },
  },
  {
    id: "duna",
    title: "Duna",
    author: "Frank Herbert",
    progress: 12,
    totalMinutes: 60,
    cover: { from: "#6b7785", to: "#46525c" },
  },
];

/** Formata minutos como "5h20", "5h" ou "45min". */
export function formatReadingTime(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h === 0) return `${m}min`;
  if (m === 0) return `${h}h`;
  return `${h}h${m.toString().padStart(2, "0")}`;
}
