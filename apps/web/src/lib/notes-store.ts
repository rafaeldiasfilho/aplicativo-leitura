"use client";

import { useSyncExternalStore } from "react";
import type { Note } from "./notes";
import { DEFAULT_NOTE_TYPE, type NoteType } from "./note-types";

// Store de anotações em memória (Fase 1, sem banco). Volta a vazio ao recarregar.
// Soft delete (§19): nada some sem ação clara — apagar move para a Lixeira.
let notes: Note[] = [];
// Derivados memorizados: identidade estável entre emits (exigência do
// useSyncExternalStore — não filtrar dentro do getSnapshot).
let active: Note[] = [];
let trashed: Note[] = [];
const listeners = new Set<() => void>();
const EMPTY: Note[] = [];

function recompute() {
  active = notes.filter((n) => n.deletedAt === null);
  trashed = notes
    .filter((n) => n.deletedAt !== null)
    .sort((a, b) => (b.deletedAt ?? 0) - (a.deletedAt ?? 0));
}

function emit() {
  recompute();
  for (const listener of listeners) listener();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function addNote(input: {
  bookId: string;
  content: string;
  type?: NoteType;
}): Note {
  const note: Note = {
    id: `n${Date.now()}`,
    bookId: input.bookId,
    type: input.type ?? DEFAULT_NOTE_TYPE,
    content: input.content,
    createdAt: Date.now(),
    deletedAt: null,
  };
  notes = [note, ...notes];
  emit();
  return note;
}

// Move para a Lixeira (reversível).
export function deleteNote(id: string) {
  notes = notes.map((n) =>
    n.id === id ? { ...n, deletedAt: Date.now() } : n,
  );
  emit();
}

// Tira da Lixeira e volta para as anotações ativas.
export function restoreNote(id: string) {
  notes = notes.map((n) => (n.id === id ? { ...n, deletedAt: null } : n));
  emit();
}

// Remoção definitiva (irreversível).
export function purgeNote(id: string) {
  notes = notes.filter((n) => n.id !== id);
  emit();
}

export function useNotes(): Note[] {
  return useSyncExternalStore(subscribe, () => active, () => EMPTY);
}

export function useTrashedNotes(): Note[] {
  return useSyncExternalStore(subscribe, () => trashed, () => EMPTY);
}
