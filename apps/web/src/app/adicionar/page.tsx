import Link from "next/link";
import { readingBooks } from "@/lib/mock-books";
import { BookCover } from "@/components/book-cover";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Adicionar livro: buscar e guardar, escolhendo a intenção (Ler agora /
// Já lido / Ler depois). A busca é mock por enquanto; salvar de verdade
// é a próxima fatia. Acessada pelo botão "+" da Home.
const intents = ["Ler agora", "Já lido", "Ler depois"];

export default function AdicionarPage() {
  const [selected, ...rest] = readingBooks;

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
        <Input placeholder="Buscar por título ou autor" className="pl-9" />
      </div>

      {/* Resultado selecionado: escolher a intenção e guardar, sem trocar de tela */}
      <div className="mt-5 rounded-2xl border border-border bg-surface p-4">
        <div className="flex items-center gap-3">
          <BookCover book={selected} className="w-12 shrink-0" showText={false} />
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">{selected.title}</p>
            <p className="truncate text-xs text-muted">{selected.author}</p>
          </div>
        </div>

        <p className="mt-4 text-xs font-medium text-muted">Como adicionar?</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {intents.map((intent) => (
            <button
              key={intent}
              type="button"
              className={
                intent === "Ler agora"
                  ? "rounded-full bg-accent px-3 py-1.5 text-sm text-accent-foreground"
                  : "rounded-full border border-border px-3 py-1.5 text-sm text-muted transition-colors hover:text-foreground"
              }
            >
              {intent}
            </button>
          ))}
        </div>
        <p className="mt-2 text-xs text-muted">
          “Já lido” entra na sua Mente com um tempo de leitura estimado.
        </p>

        <Button type="button" className="mt-4 w-full">
          Guardar livro
        </Button>
      </div>

      {/* Outros resultados da busca */}
      <ul className="mt-4 flex flex-col gap-1">
        {rest.map((book) => (
          <li key={book.id}>
            <button
              type="button"
              className="flex w-full items-center gap-3 rounded-xl p-2 text-left transition-colors hover:bg-border/30"
            >
              <BookCover book={book} className="w-9 shrink-0" showText={false} />
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

      <p className="mt-6 text-center text-sm text-muted">
        Não encontrou?{" "}
        <span className="font-medium text-foreground underline">
          Adicionar manualmente
        </span>
      </p>
    </main>
  );
}
