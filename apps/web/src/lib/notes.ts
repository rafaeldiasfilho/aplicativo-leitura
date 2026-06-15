// Modelo de anotação (Fase 1, sem banco). A anotação rápida é o padrão (§15).

import type { NoteType } from "./note-types";

export type Note = {
  id: string;
  bookId: string;
  type: NoteType;
  content: string;
  createdAt: number;
  // Soft delete (§19): null = ativa; timestamp = na Lixeira.
  deletedAt: number | null;
};
