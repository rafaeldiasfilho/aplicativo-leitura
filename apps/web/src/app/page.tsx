"use client";

import Link from "next/link";
import { formatReadingTime } from "@/lib/books";
import { useBooks } from "@/lib/books-store";
import { BookCover, ProgressBar } from "@/components/book-cover";
import { Button } from "@/components/ui/button";

// Home: continua de onde o leitor parou. Carrossel dos livros em leitura,
// lidos do store local. Sem banco ainda (Fase 1).
export default function Home() {
  const books = useBooks();
  const reading = books.filter((b) => b.status === "lendo");

  return (
    <main className="w-full flex-1 py-10">
      <header className="px-6 text-center">
        <p className="text-sm text-muted">Bom te ver de novo.</p>
        <h1 className="mt-1 text-2xl font-medium tracking-tight">
          {reading.length > 0 ? "Continue de onde parou" : "Sua leitura mora aqui"}
        </h1>
      </header>

      {reading.length === 0 ? (
        <div className="mx-auto mt-16 flex max-w-xs flex-col items-center gap-4 px-6 text-center">
          <p className="text-sm text-muted">
            Nenhum livro em leitura ainda. Que tal guardar o que você está
            lendo?
          </p>
          <Link href="/adicionar">
            <Button type="button">Adicionar livro</Button>
          </Link>
        </div>
      ) : (
        <>
          <div className="mt-7 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 [justify-content:safe_center]">
            {reading.map((book, i) => (
              <article key={book.id} className="w-60 shrink-0 snap-center">
                <div className="relative">
                  <BookCover book={book} showText={false} />
                  {i === 0 && (
                    <span className="absolute left-3 top-3 rounded-full bg-background/85 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur">
                      Onde você parou
                    </span>
                  )}
                </div>
                <h2 className="mt-3 text-base font-medium leading-tight">
                  {book.title}
                </h2>
                <p className="text-sm text-muted">{book.author}</p>
                <div className="mt-3">
                  <ProgressBar value={book.progress} />
                </div>
                <p className="mt-1.5 text-xs text-muted">
                  {book.progress}% · {formatReadingTime(book.totalMinutes)} de
                  leitura
                </p>
                <Link href={`/leitura?id=${book.id}`} className="mt-3 block">
                  <Button className="w-full" type="button">
                    {i === 0 ? "Continuar leitura" : "Continuar"}
                  </Button>
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-4 flex justify-center gap-1.5">
            {reading.map((book, i) => (
              <span
                key={book.id}
                className={
                  i === 0
                    ? "h-1.5 w-4 rounded-full bg-accent"
                    : "h-1.5 w-1.5 rounded-full bg-border"
                }
              />
            ))}
          </div>

          <p className="mt-8 px-6 text-center text-sm text-muted">
            Sem pressa. Sua leitura continua aqui.
          </p>
        </>
      )}
    </main>
  );
}
