"use client";

import { useState } from "react";
import Link from "next/link";
import {
  SEED_BOOKS,
  intentToStatus,
  type Book,
  type Intent,
} from "@/lib/books";
import { addBook } from "@/lib/books-store";
import { BookCover } from "@/components/book-cover";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const intents: Intent[] = ["Ler agora", "Já lido", "Ler depois"];

// Catálogo de exemplo para a busca, enquanto não há catálogo real.
const CATALOG = SEED_BOOKS;

type Chosen =
  | { kind: "book"; book: Book }
  | { kind: "manual" }
  | null;

export default function AdicionarPage() {
  const [query, setQuery] = useState("");
  const [chosen, setChosen] = useState<Chosen>(null);
  const [intent, setIntent] = useState<Intent>("Ler agora");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [saved, setSaved] = useState<string | null>(null);

  const results = query.trim()
    ? CATALOG.filter((b) =>
        `${b.title} ${b.author}`.toLowerCase().includes(query.toLowerCase()),
      )
    : [];

  function guardar(bookTitle: string, bookAuthor: string) {
    const t = bookTitle.trim();
    if (!t) return;
    const { status, historico } = intentToStatus(intent);
    addBook({ title: t, author: bookAuthor.trim() || "Autor desconhecido", status, historico });
    setSaved(t);
  }

  function reset() {
    setSaved(null);
    setChosen(null);
    setQuery("");
    setTitle("");
    setAuthor("");
    setIntent("Ler agora");
  }

  if (saved) {
    return (
      <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center gap-4 px-6 py-10 text-center">
        <p className="text-base">
          <span className="font-medium">“{saved}”</span> foi guardado na sua
          biblioteca.
        </p>
        <div className="flex gap-3">
          <Link href="/">
            <Button type="button">Ver no início</Button>
          </Link>
          <Button type="button" variant="secondary" onClick={reset}>
            Adicionar outro
          </Button>
        </div>
      </main>
    );
  }

  const intentChips = (
    <>
      <p className="mt-4 text-xs font-medium text-muted">Como adicionar?</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {intents.map((it) => (
          <button
            key={it}
            type="button"
            onClick={() => setIntent(it)}
            aria-pressed={intent === it}
            className={
              intent === it
                ? "rounded-full bg-accent px-3 py-1.5 text-sm text-accent-foreground"
                : "rounded-full border border-border px-3 py-1.5 text-sm text-muted transition-colors hover:text-foreground"
            }
          >
            {it}
          </button>
        ))}
      </div>
      <p className="mt-2 text-xs text-muted">
        “Já lido” entra na sua Mente com um tempo de leitura estimado.
      </p>
    </>
  );

  return (
    <main className="mx-auto w-full max-w-md flex-1 px-6 py-8">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
      >
        <span aria-hidden>←</span> Voltar
      </Link>

      <h1 className="mt-5 text-2xl font-medium tracking-tight">
        Qual livro você está lendo?
      </h1>
      <p className="mt-1 text-sm text-muted">Procure e toque para guardar.</p>

      <div className="relative mt-6">
        <svg
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <Input
          placeholder="Buscar por título ou autor"
          className="pl-9"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setChosen(null);
          }}
        />
      </div>

      {/* Livro escolhido na busca: escolher intenção e guardar */}
      {chosen?.kind === "book" && (
        <div className="mt-5 rounded-2xl border border-border bg-surface p-4">
          <div className="flex items-center gap-3">
            <BookCover
              book={chosen.book}
              className="w-12 shrink-0"
              showText={false}
            />
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">{chosen.book.title}</p>
              <p className="truncate text-xs text-muted">{chosen.book.author}</p>
            </div>
          </div>
          {intentChips}
          <Button
            type="button"
            className="mt-4 w-full"
            onClick={() => guardar(chosen.book.title, chosen.book.author)}
          >
            Guardar livro
          </Button>
        </div>
      )}

      {/* Resultados da busca */}
      {chosen?.kind !== "book" && results.length > 0 && (
        <ul className="mt-5 flex flex-col gap-1">
          {results.map((book) => (
            <li key={book.id}>
              <button
                type="button"
                onClick={() => setChosen({ kind: "book", book })}
                className="flex w-full items-center gap-3 rounded-xl p-2 text-left transition-colors hover:bg-border/30"
              >
                <BookCover
                  book={book}
                  className="w-9 shrink-0"
                  showText={false}
                />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-medium">
                    {book.title}
                  </span>
                  <span className="block truncate text-xs text-muted">
                    {book.author}
                  </span>
                </span>
                <span className="shrink-0 text-lg text-muted">+</span>
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Adicionar manualmente */}
      {chosen?.kind === "manual" ? (
        <div className="mt-5 rounded-2xl border border-border bg-surface p-4">
          <p className="text-sm font-medium">Adicionar manualmente</p>
          <div className="mt-3 flex flex-col gap-3">
            <Input
              placeholder="Título do livro"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              placeholder="Autor"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          {intentChips}
          <Button
            type="button"
            className="mt-4 w-full"
            onClick={() => guardar(title, author)}
          >
            Guardar livro
          </Button>
        </div>
      ) : (
        <p className="mt-6 text-center text-sm text-muted">
          Não encontrou?{" "}
          <button
            type="button"
            onClick={() => setChosen({ kind: "manual" })}
            className="font-medium text-foreground underline"
          >
            Adicionar manualmente
          </button>
        </p>
      )}
    </main>
  );
}
