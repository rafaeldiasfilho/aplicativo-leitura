"use client";

import { useEffect, useRef, useState } from "react";
import type { Note } from "@/lib/notes";
import { NOTE_TYPES, DEFAULT_NOTE_TYPE, type NoteType } from "@/lib/note-types";
import { NoteItem } from "@/components/note-item";
import { Button } from "@/components/ui/button";

export type Pos = { x: number; y: number };

const BALLOON_W = 208; // w-52
const DOTS_KEY = "mural-dots";

// Posição padrão para um balão ainda sem posição própria: centralizado na
// lousa (igual ao que nasce pelo ＋), com leve escalonamento por índice para
// não empilhar exato. Determinístico → estável entre abrir e fechar (§17).
function defaultPos(index: number, w: number, h: number): Pos {
  const off = (index % 6) * 16;
  return { x: w / 2 - BALLOON_W / 2 + off, y: Math.max(72, h / 2 - 56) + off };
}

// Um balão arrastável. Mantém a identidade do tipo (NoteItem, §16) e ganha
// um alfinete + sombra difusa (look V4). Clicar não dispensa (§16).
function Balloon({
  note,
  pos,
  onMove,
  boardRef,
}: {
  note: Note;
  pos: Pos;
  onMove: (id: string, p: Pos) => void;
  boardRef: React.RefObject<HTMLDivElement | null>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef<{ dx: number; dy: number } | null>(null);

  function onPointerDown(e: React.PointerEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    drag.current = { dx: e.clientX - rect.left, dy: e.clientY - rect.top };
    el.setPointerCapture(e.pointerId);
  }

  function onPointerMove(e: React.PointerEvent) {
    const el = ref.current;
    const board = boardRef.current;
    if (!drag.current || !el || !board) return;
    const b = board.getBoundingClientRect();
    const maxX = b.width - el.offsetWidth;
    const maxY = b.height - el.offsetHeight;
    const x = Math.max(0, Math.min(e.clientX - b.left - drag.current.dx, maxX));
    const y = Math.max(0, Math.min(e.clientY - b.top - drag.current.dy, maxY));
    onMove(note.id, { x, y });
  }

  function endDrag(e: React.PointerEvent) {
    drag.current = null;
    ref.current?.releasePointerCapture(e.pointerId);
  }

  return (
    <div
      ref={ref}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      className="absolute w-52 cursor-grab touch-none select-none active:cursor-grabbing [filter:drop-shadow(0_4px_12px_rgba(74,59,48,0.16))]"
      style={{ left: pos.x, top: pos.y }}
    >
      <span
        aria-hidden
        className="absolute -top-1 left-1/2 z-10 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent/70 shadow"
      />
      <NoteItem note={note} />
    </div>
  );
}

// Mural (lousa, §16/§17): overlay dentro do Modo Leitura — não é rota própria,
// para o timer seguir correndo. Look V4 (§90): lousa quente + pontos opcionais.
export function Mural({
  book,
  notes,
  positions,
  onMove,
  onCreate,
  onClose,
  timerLabel,
  running,
}: {
  book: { title: string; author: string; cover: { from: string; to: string } };
  notes: Note[];
  positions: Record<string, Pos>;
  onMove: (id: string, p: Pos) => void;
  onCreate: (content: string, type: NoteType, pos: Pos) => void;
  onClose: () => void;
  timerLabel: string;
  running: boolean;
}) {
  const boardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  // Tamanho da lousa (overlay tela cheia) para centralizar os balões.
  const [size, setSize] = useState(() =>
    typeof window === "undefined"
      ? { w: 360, h: 640 }
      : { w: window.innerWidth, h: window.innerHeight },
  );
  const [showDots, setShowDots] = useState(() =>
    typeof window === "undefined"
      ? true
      : window.localStorage.getItem(DOTS_KEY) !== "off",
  );
  const [composing, setComposing] = useState(false);
  const [text, setText] = useState("");
  const [type, setType] = useState<NoteType>(DEFAULT_NOTE_TYPE);

  // Animação de entrada (§16): defere o setState para fora do corpo do effect.
  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // Acompanha o tamanho da lousa se a janela mudar (rotação/resize).
  useEffect(() => {
    function onResize() {
      setSize({ w: window.innerWidth, h: window.innerHeight });
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Fecha com transição suave (§16) e só então desmonta.
  function requestClose() {
    setVisible(false);
    window.setTimeout(onClose, 200);
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") requestClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function toggleDots() {
    setShowDots((prev) => {
      const next = !prev;
      window.localStorage.setItem(DOTS_KEY, next ? "on" : "off");
      return next;
    });
  }

  // Nova anotação nasce no centro da lousa (§16).
  function saveComposer() {
    const content = text.trim();
    if (!content) return;
    const pos: Pos = { x: size.w / 2 - BALLOON_W / 2, y: size.h / 2 - 56 };
    onCreate(content, type, pos);
    setText("");
    setType(DEFAULT_NOTE_TYPE);
    setComposing(false);
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mural"
      ref={boardRef}
      className="fixed inset-0 z-50 overflow-hidden transition-all duration-200"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.98)",
        // Lousa = papel quente do tema + um sussurro da capa (~12%), para
        // harmonizar com qualquer livro sem destoar nem perder legibilidade.
        backgroundColor: `color-mix(in oklab, var(--mural-surface) 88%, ${book.cover.to} 12%)`,
        backgroundImage: showDots
          ? "radial-gradient(var(--mural-dot) 1px, transparent 1px)"
          : undefined,
        backgroundSize: showDots ? "16px 16px" : undefined,
      }}
    >
      {/* Cabeçalho com a atmosfera da capa: ancora a lousa ao livro atual.
          A capa "derrete" na lousa logo abaixo (faixa de fade). */}
      <header
        className="relative px-4 pb-5 pt-4 text-white"
        style={{
          background: `linear-gradient(160deg, ${book.cover.from}, ${book.cover.to})`,
        }}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[11px] uppercase tracking-wide text-white/70">
              Mural
            </p>
            <h2 className="truncate text-base font-medium leading-tight drop-shadow-sm">
              {book.title}
            </h2>
            <p className="truncate text-xs text-white/80">{book.author}</p>
          </div>
          <div className="flex shrink-0 items-center gap-4 text-xs text-white/85">
            <button
              type="button"
              onClick={toggleDots}
              aria-pressed={showDots}
              className="transition-colors hover:text-white"
            >
              {showDots ? "Ocultar pontos" : "Mostrar pontos"}
            </button>
            <button
              type="button"
              onClick={requestClose}
              className="transition-colors hover:text-white"
            >
              Fechar
            </button>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2 text-xs text-white/80">
          <span className="tabular-nums">{timerLabel}</span>
          {running && (
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-white/70" />
          )}
          <span className="text-white/60">
            {running ? "lendo agora" : "leitura pausada"}
          </span>
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-8 translate-y-full"
          style={{
            background: `linear-gradient(to bottom, ${book.cover.to}, transparent)`,
          }}
        />
      </header>

      {/* Balões */}
      {notes.length === 0 && !composing && (
        <p
          className="absolute left-1/2 top-1/2 w-64 -translate-x-1/2 -translate-y-1/2 text-center text-sm opacity-70"
          style={{ color: "var(--mural-ink)" }}
        >
          Sua lousa está limpa. Toque em ＋ para soltar o primeiro pensamento.
        </p>
      )}
      {notes.map((note, i) => (
        <Balloon
          key={note.id}
          note={note}
          pos={positions[note.id] ?? defaultPos(i, size.w, size.h)}
          onMove={onMove}
          boardRef={boardRef}
        />
      ))}

      {/* Composer central */}
      {composing && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/10 px-6">
          <div className="w-full max-w-sm rounded-2xl border border-border bg-surface p-4 shadow-lg">
            <div className="mb-2 flex flex-wrap gap-1.5">
              {NOTE_TYPES.map((t) => {
                const selected = t.id === type;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setType(t.id)}
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
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Soltar um pensamento na lousa…"
              rows={2}
              autoFocus
              className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
            />
            <div className="mt-2 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setComposing(false)}
                className="text-xs text-muted transition-colors hover:text-foreground"
              >
                Cancelar
              </button>
              <Button
                type="button"
                onClick={saveComposer}
                disabled={!text.trim()}
                className="h-9 px-4"
              >
                Guardar
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* "+" para soltar um balão no centro */}
      {!composing && (
        <button
          type="button"
          onClick={() => setComposing(true)}
          aria-label="Soltar um pensamento"
          className="absolute bottom-6 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-2xl text-accent-foreground shadow-lg transition-transform hover:scale-105"
        >
          ＋
        </button>
      )}
    </div>
  );
}
