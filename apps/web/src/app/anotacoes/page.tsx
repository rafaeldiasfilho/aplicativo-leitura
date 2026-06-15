"use client";

import Link from "next/link";
import { useBooks } from "@/lib/books-store";
import { useNotes } from "@/lib/notes-store";
import type { Note } from "@/lib/notes";
import { NoteItem } from "@/components/note-item";
import { Button } from "@/components/ui/button";

// Mostra o horário de forma calma: "às 14:32" se for hoje, senão "12/06".
function formatNoteDate(createdAt: number): string {
  const d = new Date(createdAt);
  const now = new Date();
  const sameDay =
    d.getDate() === now.getDate() &&
    d.getMonth() === now.getMonth() &&
    d.getFullYear() === now.getFullYear();
  const pad = (n: number) => n.toString().padStart(2, "0");
  if (sameDay) return `às ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}`;
}

// Anotações: onde o leitor reencontra o que guardou (fecha o ciclo do MVP).
// Agrupadas por livro, mais recentes primeiro. Sem banco ainda (Fase 1).
export default function AnotacoesPage() {
  const notes = useNotes();
  const books = useBooks();

  if (notes.length === 0) {
    return (
      <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center gap-4 px-6 py-24 text-center">
        <h1 className="text-2xl font-medium tracking-tight">Anotações</h1>
        <p className="text-sm text-muted">
          Seus pensamentos aparecem aqui. Comece guardando um durante a leitura.
        </p>
        <Link href="/">
          <Button type="button" variant="secondary">
            Voltar ao início
          </Button>
        </Link>
      </main>
    );
  }

  // notes já vem mais recente primeiro; agrupa por livro preservando essa ordem.
  const titleById = new Map(books.map((b) => [b.id, b.title]));
  const groups: { bookId: string; notes: Note[] }[] = [];
  for (const note of notes) {
    let group = groups.find((g) => g.bookId === note.bookId);
    if (!group) {
      group = { bookId: note.bookId, notes: [] };
      groups.push(group);
    }
    group.notes.push(note);
  }

  return (
    <main className="w-full flex-1 px-6 py-10">
      <header className="text-center">
        <h1 className="text-2xl font-medium tracking-tight">Anotações</h1>
        <p className="mt-1 text-sm text-muted">O que você guardou até aqui.</p>
      </header>

      {groups.map((group) => (
        <section key={group.bookId} className="mt-9">
          <h2 className="text-center text-sm font-medium text-foreground">
            {titleById.get(group.bookId) ?? "Livro"}
          </h2>
          <ul className="mx-auto mt-3 flex max-w-md flex-col gap-3">
            {group.notes.map((note) => (
              <li key={note.id}>
                <NoteItem note={note} time={formatNoteDate(note.createdAt)} />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
