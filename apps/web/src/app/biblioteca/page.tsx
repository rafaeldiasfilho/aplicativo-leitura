"use client";

import Link from "next/link";
import {
  STATUS_LABELS,
  STATUS_ORDER,
  type Book,
  type BookStatus,
} from "@/lib/books";
import { useBooks } from "@/lib/books-store";
import { BookCover, ProgressBar } from "@/components/book-cover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

// Biblioteca: visão geral calma de todos os livros do store, agrupados por
// status. Dentro de "Lido", separa o que foi lido no app do histórico
// (lido antes do app) — ver §11 e ACTIVE_DECISIONS 2026-06-12. Sem banco (Fase 1).
export default function BibliotecaPage() {
  const books = useBooks();

  if (books.length === 0) {
    return (
      <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center gap-4 px-6 py-24 text-center">
        <h1 className="text-2xl font-medium tracking-tight">Biblioteca</h1>
        <p className="text-sm text-muted">
          Sua biblioteca está vazia. Guarde o primeiro livro quando quiser.
        </p>
        <Link href="/adicionar">
          <Button type="button">Adicionar livro</Button>
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-10">
      <header className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-medium tracking-tight">Biblioteca</h1>
          <p className="mt-1 text-sm text-muted">Tudo o que você guardou.</p>
        </div>
        <Link
          href="/adicionar"
          aria-label="Adicionar livro"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-lg text-muted transition-colors hover:text-foreground"
        >
          +
        </Link>
      </header>

      {STATUS_ORDER.map((status) => {
        const group = books.filter((b) => b.status === status);
        if (group.length === 0) return null;
        return <Section key={status} status={status} books={group} />;
      })}
    </main>
  );
}

function Section({ status, books }: { status: BookStatus; books: Book[] }) {
  if (status === "lido") return <LidoSection books={books} />;
  return (
    <section className="mt-9">
      <SectionHeading label={STATUS_LABELS[status]} count={books.length} />
      <BookGrid books={books} showProgress={status === "lendo"} className="mt-4" />
    </section>
  );
}

// Seção "Lido": só subdivide quando há livros lidos no app E de histórico.
// Com só um tipo, o título da seção reflete o tipo (sem subtítulo redundante).
function LidoSection({ books }: { books: Book[] }) {
  const noApp = books.filter((b) => !b.historico);
  const historico = books.filter((b) => b.historico);

  if (noApp.length === 0) {
    return (
      <section className="mt-9">
        <SectionHeading label="Histórico de leitura" count={historico.length} />
        <BookGrid books={historico} className="mt-4" />
      </section>
    );
  }

  if (historico.length === 0) {
    return (
      <section className="mt-9">
        <SectionHeading label="Lido" count={noApp.length} />
        <BookGrid books={noApp} className="mt-4" />
      </section>
    );
  }

  return (
    <section className="mt-9">
      <SectionHeading label="Lido" count={books.length} />
      <SubGroup label="Lido no aplicativo" books={noApp} />
      <SubGroup label="Histórico de leitura" books={historico} />
    </section>
  );
}

function SubGroup({ label, books }: { label: string; books: Book[] }) {
  return (
    <div className="mt-5">
      <p className="text-xs font-medium text-muted">
        {label} · {books.length}
      </p>
      <BookGrid books={books} className="mt-3" />
    </div>
  );
}

function SectionHeading({ label, count }: { label: string; count: number }) {
  return (
    <div className="flex items-baseline gap-2">
      <h2 className="text-sm font-medium text-foreground">{label}</h2>
      <span className="text-xs text-muted">{count}</span>
    </div>
  );
}

function BookGrid({
  books,
  showProgress = false,
  className,
}: {
  books: Book[];
  showProgress?: boolean;
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-4 md:grid-cols-5",
        className,
      )}
    >
      {books.map((book) => (
        <li key={book.id}>
          <BookCover book={book} showText={false} />
          <h3 className="mt-2 line-clamp-2 text-sm font-medium leading-tight">
            {book.title}
          </h3>
          <p className="truncate text-xs text-muted">{book.author}</p>
          {showProgress && (
            <div className="mt-2">
              <ProgressBar value={book.progress} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
