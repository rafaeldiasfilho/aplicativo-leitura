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

// Distribui n nós em círculo, começando no topo. Retorna posições em % (0–100).
export function radialPositions(count: number, radius: number, cx = 50, cy = 50) {
  return Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
    return { x: cx + Math.cos(angle) * radius, y: cy + Math.sin(angle) * radius };
  });
}
