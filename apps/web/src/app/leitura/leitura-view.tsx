"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  addReadingMinutes,
  finishBook,
  useBooks,
} from "@/lib/books-store";
import { formatReadingTime } from "@/lib/books";
import { addNote } from "@/lib/notes-store";
import type { Note } from "@/lib/notes";
import { NOTE_TYPES, DEFAULT_NOTE_TYPE, type NoteType } from "@/lib/note-types";
import { NoteItem } from "@/components/note-item";
import { Mural, type Pos } from "./mural";
import { Button } from "@/components/ui/button";

// Formata segundos como "MM:SS" ou "H:MM:SS".
function formatTimer(totalSeconds: number): string {
  const s = Math.floor(totalSeconds);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  const pad = (n: number) => n.toString().padStart(2, "0");
  return h > 0 ? `${h}:${pad(m)}:${pad(sec)}` : `${pad(m)}:${pad(sec)}`;
}

// Layout V4 (atmosfera da capa + estrutura legível + anotação como folha),
// escolhido pelo processo §90. Lógica de timer/anotação em memória (Fase 1).
export function LeituraView({ bookId }: { bookId: string | null }) {
  const router = useRouter();
  const books = useBooks();
  const book = bookId ? books.find((b) => b.id === bookId) : undefined;

  // Timer por timestamps acumulados (confiável mesmo se a aba dormir), §13.
  const [running, setRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const accumulatedRef = useRef(0);
  const startRef = useRef<number | null>(null);

  // Anotação recolhida por padrão (§13).
  const [draft, setDraft] = useState("");
  const [draftType, setDraftType] = useState<NoteType>(DEFAULT_NOTE_TYPE);
  const [sessionNotes, setSessionNotes] = useState<Note[]>([]);
  const [noteOpen, setNoteOpen] = useState(false);
  const [confirmFinish, setConfirmFinish] = useState(false);
  // Mural (overlay): aberto/fechado e posições dos balões na sessão (§17).
  const [muralOpen, setMuralOpen] = useState(false);
  const [positions, setPositions] = useState<Record<string, Pos>>({});
  // Resumo final: segundos da sessão concluída (null = sessão ainda em curso).
  const [finishedSeconds, setFinishedSeconds] = useState<number | null>(null);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      const segment = startRef.current ? (Date.now() - startRef.current) / 1000 : 0;
      setElapsed(accumulatedRef.current + segment);
    }, 250);
    return () => clearInterval(id);
  }, [running]);

  if (!book) {
    return (
      <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center gap-4 px-6 py-24 text-center">
        <p className="text-sm text-muted">
          Nenhum livro selecionado para leitura.
        </p>
        <Link href="/biblioteca">
          <Button type="button" variant="secondary">
            Ir para a Biblioteca
          </Button>
        </Link>
      </main>
    );
  }

  const started = running || elapsed > 0;

  function start() {
    startRef.current = Date.now();
    setRunning(true);
  }

  function pause() {
    if (startRef.current) {
      accumulatedRef.current += (Date.now() - startRef.current) / 1000;
      startRef.current = null;
    }
    setElapsed(accumulatedRef.current);
    setRunning(false);
  }

  function currentSeconds() {
    const segment =
      running && startRef.current ? (Date.now() - startRef.current) / 1000 : 0;
    return accumulatedRef.current + segment;
  }

  function saveDraft() {
    const content = draft.trim();
    if (!content || !book) return;
    const note = addNote({ bookId: book.id, content, type: draftType });
    setSessionNotes((prev) => [note, ...prev]);
    setDraft("");
    setDraftType(DEFAULT_NOTE_TYPE);
  }

  // Cria uma anotação direto no Mural, já posicionada (nasce no centro, §16).
  function createInMural(content: string, type: NoteType, pos: Pos) {
    if (!book) return;
    const note = addNote({ bookId: book.id, content, type });
    setSessionNotes((prev) => [note, ...prev]);
    setPositions((prev) => ({ ...prev, [note.id]: pos }));
  }

  function moveBalloon(id: string, pos: Pos) {
    setPositions((prev) => ({ ...prev, [id]: pos }));
  }

  // Finaliza a sessão: congela o tempo, soma ao livro e mostra o resumo.
  function finishSession() {
    if (!book) return;
    const secs = currentSeconds();
    pause();
    addReadingMinutes(book.id, Math.round(secs / 60));
    setFinishedSeconds(secs);
  }

  function finishBookAndLeave() {
    if (!book) return;
    addReadingMinutes(book.id, Math.round(currentSeconds() / 60));
    finishBook(book.id);
    router.push("/biblioteca");
  }

  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col">
      {/* Atmosfera da capa: título, autor e progresso */}
      <header
        className="relative flex flex-col justify-end p-6 pt-12"
        style={{
          background: `linear-gradient(160deg, ${book.cover.from}, ${book.cover.to})`,
        }}
      >
        <Link
          href="/"
          className="absolute left-6 top-5 text-sm text-white/85 transition-colors hover:text-white"
        >
          ← Sair da leitura
        </Link>
        <h1 className="text-xl font-medium leading-tight text-white drop-shadow-sm">
          {book.title}
        </h1>
        <p className="text-sm text-white/80">{book.author}</p>
        <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/25">
          <div
            className="h-full rounded-full bg-white/90"
            style={{ width: `${book.progress}%` }}
          />
        </div>
        <p className="mt-1 text-xs text-white/80">{book.progress}% lido</p>
      </header>

      {finishedSeconds !== null ? (
        /* Resumo final da sessão (layout V4 via §90) */
        <div className="flex flex-1 flex-col px-6 py-8">
          <div className="text-center">
            <p className="text-sm text-muted">Sessão concluída</p>
            <p className="mt-2 text-2xl font-medium tracking-tight">
              Você leu por{" "}
              {finishedSeconds >= 60
                ? formatReadingTime(Math.round(finishedSeconds / 60))
                : "menos de um minuto"}
            </p>
            <p className="mt-1 text-sm text-muted">Sua leitura ficou guardada.</p>
          </div>

          {sessionNotes.length > 0 ? (
            <>
              <p className="mt-5 text-center text-xs text-muted">
                {sessionNotes.length}{" "}
                {sessionNotes.length === 1
                  ? "pensamento guardado"
                  : "pensamentos guardados"}
              </p>
              <ul className="mt-3 flex flex-1 flex-col justify-center gap-3">
                {sessionNotes.map((note) => (
                  <li key={note.id}>
                    <NoteItem note={note} />
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-center text-xs text-muted">
                Eles já estão na sua Mente.
              </p>
            </>
          ) : (
            <p className="mt-6 flex flex-1 items-center justify-center text-center text-sm text-muted">
              Nenhuma anotação desta vez — tudo bem.
            </p>
          )}

          <Link href="/" className="mt-6 block">
            <Button type="button" className="w-full">
              Voltar ao início
            </Button>
          </Link>
        </div>
      ) : (
        <>
          {/* Timer em destaque */}
          <div className="flex flex-1 flex-col items-center justify-center px-6 py-10 text-center">
            <span className="font-mono text-6xl tabular-nums tracking-tight">
              {formatTimer(elapsed)}
            </span>
            <span className="mt-2 text-xs text-muted">
              {running
                ? "Lendo agora"
                : started
                  ? "Pausado"
                  : "Pronto para começar"}
            </span>

            <div className="mt-7 flex gap-3">
              {!started && (
                <Button type="button" onClick={start}>
                  Iniciar leitura
                </Button>
              )}
              {running && (
                <Button type="button" onClick={pause}>
                  Pausar
                </Button>
              )}
              {started && !running && (
                <>
                  <Button type="button" onClick={start}>
                    Retomar
                  </Button>
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={finishSession}
                  >
                    Finalizar
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* Folha de anotação (recolhida por padrão) */}
          <div className="rounded-t-3xl border-t border-border bg-surface px-6 py-5">
            <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-border" />

            {confirmFinish ? (
              <div className="flex flex-col items-center gap-3 text-center">
                <p className="text-sm text-muted">
                  Marcar “{book.title}” como lido no aplicativo?
                </p>
                <div className="flex gap-3">
                  <Button type="button" onClick={finishBookAndLeave}>
                    Sim, terminei
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setConfirmFinish(false)}
                  >
                    Cancelar
                  </Button>
                </div>
              </div>
            ) : noteOpen ? (
              <div>
                {/* Tipos lado a lado; Rápida é o padrão. Visual neutro —
                    a identidade de cada tipo entra na Fatia 3 (§90). */}
                <div className="mb-2 flex flex-wrap gap-1.5">
                  {NOTE_TYPES.map((t) => {
                    const selected = t.id === draftType;
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setDraftType(t.id)}
                        aria-pressed={selected}
                        className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                          selected
                            ? "border-accent bg-accent/10 text-foreground"
                            : "border-border text-muted hover:text-foreground"
                        }`}
                      >
                        {t.label}
                      </button>
                    );
                  })}
                </div>
                <textarea
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder="Guardar um pensamento…"
                  rows={2}
                  autoFocus
                  className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                />
                <div className="mt-2 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setNoteOpen(false)}
                    className="text-xs text-muted transition-colors hover:text-foreground"
                  >
                    Fechar
                  </button>
                  <Button
                    type="button"
                    onClick={saveDraft}
                    disabled={!draft.trim()}
                    className="h-9 px-4"
                  >
                    Guardar
                  </Button>
                </div>

                {sessionNotes.length > 0 && (
                  <ul className="mt-3 flex flex-col gap-3">
                    {sessionNotes.map((note) => (
                      <li key={note.id}>
                        <NoteItem note={note} />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setNoteOpen(true)}
                  className="text-sm text-foreground transition-colors hover:text-accent"
                >
                  ＋ Guardar um pensamento
                  {sessionNotes.length > 0 && (
                    <span className="ml-2 text-xs text-muted">
                      ({sessionNotes.length})
                    </span>
                  )}
                </button>
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setMuralOpen(true)}
                    className="text-xs text-muted transition-colors hover:text-foreground"
                  >
                    Mural
                  </button>
                  <button
                    type="button"
                    onClick={() => setConfirmFinish(true)}
                    className="text-xs text-muted underline transition-colors hover:text-foreground"
                  >
                    Terminei o livro
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {muralOpen && (
        <Mural
          book={book}
          notes={sessionNotes}
          positions={positions}
          onMove={moveBalloon}
          onCreate={createInMural}
          onClose={() => setMuralOpen(false)}
          timerLabel={formatTimer(elapsed)}
          running={running}
        />
      )}
    </main>
  );
}
