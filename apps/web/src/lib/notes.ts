// Modelo de anotação (Fase 1, sem banco). A anotação rápida é o padrão (§15).

export type Note = {
  id: string;
  bookId: string;
  content: string;
  createdAt: number;
};
