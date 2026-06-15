"use client";

import { useState } from "react";
import Link from "next/link";
import { useTrashedNotes, restoreNote, purgeNote } from "@/lib/notes-store";
import type { Note } from "@/lib/notes";
import { NoteItem } from "@/components/note-item";
import { formatNoteDate } from "@/lib/dates";
import { Button } from "@/components/ui/button";

// Um item apagado + ações: Restaurar (seguro) e Excluir definitivamente
// (irreversível, com confirmação inline). §19.
function TrashedRow({ note }: { note: Note }) {
  const [confirming, setConfirming] = useState(false);
  return (
    <li>
      <NoteItem note={note} time={formatNoteDate(note.createdAt)} />
      <div className="mt-1 flex justify-end gap-3 text-xs">
        {confirming ? (
          <>
            <span className="text-muted">Excluir para sempre?</span>
            <button
              type="button"
              onClick={() => purgeNote(note.id)}
              className="text-muted underline transition-colors hover:text-foreground"
            >
              Excluir
            </button>
            <button
              type="button"
              onClick={() => setConfirming(false)}
              className="text-muted transition-colors hover:text-foreground"
            >
              Cancelar
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              onClick={() => restoreNote(note.id)}
              className="text-muted transition-colors hover:text-foreground"
            >
              Restaurar
            </button>
            <button
              type="button"
              onClick={() => setConfirming(true)}
              className="text-muted/70 transition-colors hover:text-foreground"
            >
              Excluir definitivamente
            </button>
          </>
        )}
      </div>
    </li>
  );
}

// Lixeira: o que foi apagado fica aqui até o usuário decidir (§19). Sem banco
// ainda (Fase 1) — some ao recarregar, como o resto do estado em memória.
export default function LixeiraPage() {
  const trashed = useTrashedNotes();

  if (trashed.length === 0) {
    return (
      <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center gap-4 px-6 py-24 text-center">
        <h1 className="text-2xl font-medium tracking-tight">Lixeira</h1>
        <p className="text-sm text-muted">
          Nada por aqui. O que você apagar fica guardado até você decidir.
        </p>
        <Link href="/anotacoes">
          <Button type="button" variant="secondary">
            Ver anotações
          </Button>
        </Link>
      </main>
    );
  }

  return (
    <main className="w-full flex-1 px-6 py-10">
      <header className="text-center">
        <h1 className="text-2xl font-medium tracking-tight">Lixeira</h1>
        <p className="mt-1 text-sm text-muted">
          Restaure o que quiser de volta. Nada some sem você confirmar.
        </p>
      </header>

      <ul className="mx-auto mt-8 flex max-w-md flex-col gap-4">
        {trashed.map((note) => (
          <TrashedRow key={note.id} note={note} />
        ))}
      </ul>
    </main>
  );
}
