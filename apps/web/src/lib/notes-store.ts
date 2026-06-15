"use client";

import { useSyncExternalStore } from "react";
import type { Note } from "./notes";
import { DEFAULT_NOTE_TYPE, type NoteType } from "./note-types";

// Store de anotações em memória (Fase 1, sem banco). Volta a vazio ao recarregar.
let notes: Note[] = [];
const listeners = new Set<() => void>();
const EMPTY: Note[] = [];

function emit() {
  for (const listener of listeners) listener();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot() {
  return notes;
}

function getServerSnapshot() {
  return EMPTY;
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
  };
  notes = [note, ...notes];
  emit();
  return note;
}

export function useNotes(): Note[] {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
