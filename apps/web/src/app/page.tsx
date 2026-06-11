import { readingBooks, formatReadingTime } from "@/lib/mock-books";
import { BookCover, ProgressBar } from "@/components/book-cover";
import { Button } from "@/components/ui/button";

// Home: continua de onde o leitor parou. Carrossel calmo dos livros em
// leitura, com destaque para o atual. Dados ainda são mock (Fase 1).
export default function Home() {
  return (
    <main className="flex-1 py-10">
      <header className="flex items-start justify-between px-6">
        <div>
          <p className="text-sm text-muted">Bom te ver de novo.</p>
          <h1 className="mt-1 text-2xl font-medium tracking-tight">
            Continue de onde parou
          </h1>
        </div>
        <button
          type="button"
          aria-label="Adicionar livro"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-lg text-muted transition-colors hover:text-foreground"
        >
          +
        </button>
      </header>

      <div className="mt-7 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2">
        {readingBooks.map((book, i) => (
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
            <Button className="mt-3 w-full" type="button">
              {i === 0 ? "Continuar leitura" : "Continuar"}
            </Button>
          </article>
        ))}
      </div>

      <div className="mt-4 flex justify-center gap-1.5">
        {readingBooks.map((book, i) => (
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
    </main>
  );
}
