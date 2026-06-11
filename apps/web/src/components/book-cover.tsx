import type { MockBook } from "@/lib/mock-books";
import { cn } from "@/lib/cn";

// Capa do livro. Por enquanto é um gradiente calmo com título e autor;
// quando houver capas reais, troca-se o fundo pela imagem.
export function BookCover({
  book,
  className,
  showText = true,
}: {
  book: MockBook;
  className?: string;
  showText?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative flex aspect-[2/3] flex-col justify-end overflow-hidden rounded-lg p-3 shadow-sm",
        className,
      )}
      style={{
        background: `linear-gradient(150deg, ${book.cover.from}, ${book.cover.to})`,
      }}
    >
      {showText && (
        <>
          <span className="text-sm font-medium leading-tight text-white drop-shadow-sm">
            {book.title}
          </span>
          <span className="mt-0.5 text-xs text-white/80">{book.author}</span>
        </>
      )}
    </div>
  );
}

// Barra de progresso fina e calma.
export function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
      <div
        className="h-full rounded-full bg-accent"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
