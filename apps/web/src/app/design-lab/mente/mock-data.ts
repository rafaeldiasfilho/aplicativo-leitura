// Dados de exemplo para as variações da Mente (§90, design-lab descartável).
// Nada disso é real: serve só para sentir o visual antes de implementar.

export type MenteTheme = {
  id: string;
  label: string;
  notes: number; // quantidade de anotações — define o "peso" visual do tema
  bookIds: string[]; // livros que tocam este tema (conexões sob demanda)
};

export type MenteBook = {
  id: string;
  title: string;
  cover: { from: string; to: string };
};

export const MOCK_BOOKS: MenteBook[] = [
  { id: "meditacoes", title: "Meditações", cover: { from: "#3f5c54", to: "#26433b" } },
  { id: "habitos", title: "Hábitos Atômicos", cover: { from: "#b9743f", to: "#8a4f28" } },
  { id: "ler-livros", title: "Como Ler Livros", cover: { from: "#4b5a78", to: "#2f3a52" } },
  { id: "roube", title: "Roube como um Artista", cover: { from: "#9a4f6a", to: "#6d3149" } },
  { id: "deep-work", title: "Trabalho Focado", cover: { from: "#56707a", to: "#324851" } },
];

// Ordenados do mais presente ao menos — o peso guia tamanho/posição.
export const MOCK_THEMES: MenteTheme[] = [
  { id: "estoicismo", label: "Estoicismo", notes: 9, bookIds: ["meditacoes", "ler-livros"] },
  { id: "habitos", label: "Hábitos", notes: 7, bookIds: ["habitos", "deep-work"] },
  { id: "memoria", label: "Memória", notes: 5, bookIds: ["ler-livros", "meditacoes"] },
  { id: "criatividade", label: "Criatividade", notes: 4, bookIds: ["roube"] },
  { id: "foco", label: "Foco", notes: 3, bookIds: ["deep-work", "habitos"] },
  { id: "tempo", label: "Tempo", notes: 2, bookIds: ["meditacoes", "deep-work"] },
];

export const bookById = (id: string) => MOCK_BOOKS.find((b) => b.id === id);

// --- Conjunto de estresse: biblioteca grande (~15 livros, ~20 temas) ---
// Para sentir como a Mente se comporta com muito conteúdo (escala).
const MANY_COVERS: Array<{ from: string; to: string }> = [
  { from: "#3f5c54", to: "#26433b" },
  { from: "#b9743f", to: "#8a4f28" },
  { from: "#4b5a78", to: "#2f3a52" },
  { from: "#9a4f6a", to: "#6d3149" },
  { from: "#56707a", to: "#324851" },
  { from: "#6a7b4f", to: "#48542f" },
  { from: "#7a566f", to: "#523047" },
  { from: "#8a6a3f", to: "#5e4626" },
];

export const MOCK_BOOKS_MANY: MenteBook[] = Array.from({ length: 15 }, (_, i) => ({
  id: `livro-${i}`,
  title: `Livro ${i + 1}`,
  cover: MANY_COVERS[i % MANY_COVERS.length],
}));

const MANY_LABELS = [
  "Estoicismo", "Hábitos", "Memória", "Criatividade", "Foco",
  "Tempo", "Disciplina", "Liderança", "Filosofia", "Psicologia",
  "Escrita", "Aprendizado", "Felicidade", "Dinheiro", "Relações",
  "Mentalidade", "Produtividade", "Saúde", "Espiritualidade", "Atenção",
];

export const MOCK_THEMES_MANY: MenteTheme[] = MANY_LABELS.map((label, i) => ({
  id: `tema-${i}`,
  label,
  notes: ((i * 7) % 9) + 2, // 2..10, espalhado de forma determinística
  bookIds: [
    MOCK_BOOKS_MANY[i % MOCK_BOOKS_MANY.length].id,
    MOCK_BOOKS_MANY[(i * 3 + 1) % MOCK_BOOKS_MANY.length].id,
  ],
}));

// Distribui n nós em círculo, começando no topo. Retorna posições em % (0–100).
export function radialPositions(count: number, radius: number, cx = 50, cy = 50) {
  return Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
    return { x: cx + Math.cos(angle) * radius, y: cy + Math.sin(angle) * radius };
  });
}
