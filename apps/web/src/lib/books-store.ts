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

// Soma o tempo real de uma sessão ao total do livro (tempo medido no app).
export function addReadingMinutes(bookId: string, minutes: number) {
  if (minutes <= 0) return;
  books = books.map((b) =>
    b.id === bookId ? { ...b, totalMinutes: b.totalMinutes + minutes } : b,
  );
  emit();
}

// Marca o livro como lido dentro do app: status "lido", historico false
// (tempo real, alimenta "Lido no aplicativo" na Biblioteca), progresso 100.
export function finishBook(bookId: string) {
  books = books.map((b) =>
    b.id === bookId
      ? { ...b, status: "lido", historico: false, progress: 100 }
      : b,
  );
  emit();
}

export function useBooks(): Book[] {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
