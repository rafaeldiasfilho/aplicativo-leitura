"use client";

import { useSyncExternalStore } from "react";
import {
  SEED_BOOKS,
  pickCover,
  type Book,
  type BookStatus,
} from "./books";

// Store de livros em memória (Fase 1, sem banco). Os dados persistem durante
// a navegação client-side e voltam ao seed ao recarregar a página.
let books: Book[] = SEED_BOOKS;
const listeners = new Set<() => void>();

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
  return books;
}

function getServerSnapshot() {
  return SEED_BOOKS;
}

export function addBook(input: {
  title: string;
  author: string;
  status: BookStatus;
  historico: boolean;
}): Book {
  const book: Book = {
    id: `b${Date.now()}`,
    title: input.title,
    author: input.author,
    status: input.status,
    historico: input.historico,
    progress: 0,
    totalMinutes: 0,
    cover: pickCover(input.title + input.author),
  };
  books = [book, ...books];
  emit();
  return book;
}

export function useBooks(): Book[] {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
