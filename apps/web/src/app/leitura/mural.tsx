"use client";

import { useEffect, useRef, useState } from "react";
import type { Note } from "@/lib/notes";
import { NOTE_TYPES, DEFAULT_NOTE_TYPE, type NoteType } from "@/lib/note-types";
import { NoteItem } from "@/components/note-item";
import { Button } from "@/components/ui/button";

export type Pos = { x: number; y: number };

const BALLOON_W = 208; // w-52
const SUGG_W = 160; // w-40 — sugeridos são prompts curtos
const DOTS_KEY = "mural-dots";
const SUGG_KEY = "mural-suggestions";

// Perguntas de reflexão dos balões sugeridos (§17/§23). Ordem fixa → estável.
const SUGGESTIONS = [
  "Uma frase que ficou com você?",
  "Uma ideia para lembrar depois?",
  "Uma conexão com sua vida?",
  "Algo de que você discordou?",
  "Uma pergunta que surgiu?",
];

// Um novo sugerido é liberado a cada ~2 min de leitura real — as ideias de
// anotação demoram a vir; não faz sentido despejar os 5 de uma vez (§17).
const SUGGESTION_INTERVAL_S = 120;

// Posição padrão para um balão ainda sem posição própria: centralizado na
// lousa (igual ao que nasce pelo ＋), com leve escalonamento por índice para
// não empilhar exato. Determinístico → estável entre abrir e fechar (§17).
function defaultPos(index: number, w: number, h: number): Pos {
  const off = (index % 6) * 16;
  return { x: w / 2 - BALLOON_W / 2 + off, y: Math.max(72, h / 2 - 56) + off };
}

// Slots fixos (periféricos, longe do centro onde nascem as notas) dos balões
// sugeridos. Estáveis na sessão (§17). Frações da lousa, com x preso à tela.
const SLOT_FRACTIONS = [
  { fx: 0.05, fy: 0.3 },
  { fx: 0.5, fy: 0.22 },
  { fx: 0.08, fy: 0.64 },
  { fx: 0.5, fy: 0.68 },
  { fx: 0.28, fy: 0.84 },
];

function slotPos(index: number, w: number, h: number): Pos {
  const f = SLOT_FRACTIONS[index];
  return {
    x: Math.max(16, Math.min(f.fx * w, w - SUGG_W - 16)),
    y: Math.max(72, f.fy * h),
  };
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
  consumedSlots,
  dismissedSlots,
  started,
  elapsedSeconds,
  onMove,
  onCreate,
  onFillSuggestion,
  onDismissSuggestion,
  onClose,
  timerLabel,
  running,
}: {
  book: { title: string; author: string; cover: { from: string; to: string } };
  notes: Note[];
  positions: Record<string, Pos>;
  consumedSlots: number[];
  dismissedSlots: number[];
  started: boolean;
  elapsedSeconds: number;
  onMove: (id: string, p: Pos) => void;
  onCreate: (content: string, type: NoteType, pos: Pos) => void;
  onFillSuggestion: (
    index: number,
    content: string,
    type: NoteType,
    pos: Pos,
  ) => void;
  onDismissSuggestion: (index: number) => void;
  onClose: () => void;
  timerLabel: string;
  running: boolean;
}) {
  const boardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  // Tamanho da lousa (overlay tela cheia) para centralizar/posicionar balões.
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
  const [showSuggestions, setShowSuggestions] = useState(() =>
    typeof window === "undefined"
      ? true
      : window.localStorage.getItem(SUGG_KEY) !== "off",
  );
  // compose: null = fechado; index null = balão livre (＋); index = sugerido.
  const [compose, setCompose] = useState<{
    index: number | null;
    pos: Pos;
    prompt?: string;
  } | null>(null);
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

  function toggleSuggestions() {
    setShowSuggestions((prev) => {
      const next = !prev;
      window.localStorage.setItem(SUGG_KEY, next ? "on" : "off");
      return next;
    });
  }

  function saveComposer() {
    const content = text.trim();
    if (!content || !compose) return;
    if (compose.index === null) {
      onCreate(content, type, compose.pos);
    } else {
      onFillSuggestion(compose.index, content, type, compose.pos);
    }
    setText("");
    setType(DEFAULT_NOTE_TYPE);
    setCompose(null);
  }

  // Sugeridos visíveis: liberados aos poucos (1 a cada ~2 min de leitura),
  // sem os preenchidos nem os dispensados, e some tudo em 5 notas (§17).
  const unlocked = Math.min(
    5,
    1 + Math.floor(elapsedSeconds / SUGGESTION_INTERVAL_S),
  );
  const suggestions =
    started && showSuggestions && notes.length < 5
      ? SUGGESTIONS.map((prompt, i) => ({ prompt, i })).filter(
          (s) =>
            s.i < unlocked &&
            !consumedSlots.includes(s.i) &&
            !dismissedSlots.includes(s.i),
        )
      : [];

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
          <button
            type="button"
            onClick={requestClose}
            className="shrink-0 text-xs text-white/85 transition-colors hover:text-white"
          >
            Fechar
          </button>
        </div>
        <div className="mt-3 flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-white/80">
            <span className="tabular-nums">{timerLabel}</span>
            {running && (
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-white/70" />
            )}
            <span className="text-white/60">
              {running ? "lendo agora" : "leitura pausada"}
            </span>
          </div>
          <div className="flex items-center gap-3 text-white/85">
            <button
              type="button"
              onClick={toggleDots}
              aria-pressed={showDots}
              className={`transition-opacity hover:text-white ${showDots ? "" : "opacity-50"}`}
            >
              Pontos
            </button>
            <button
              type="button"
              onClick={toggleSuggestions}
              aria-pressed={showSuggestions}
              className={`transition-opacity hover:text-white ${showSuggestions ? "" : "opacity-50"}`}
            >
              Sugestões
            </button>
          </div>
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-8 translate-y-full"
          style={{
            background: `linear-gradient(to bottom, ${book.cover.to}, transparent)`,
          }}
        />
      </header>

      {/* Lousa vazia (sem notas nem sugeridos) */}
      {notes.length === 0 && suggestions.length === 0 && !compose && (
        <p
          className="absolute left-1/2 top-1/2 w-64 -translate-x-1/2 -translate-y-1/2 text-center text-sm opacity-70"
          style={{ color: "var(--mural-ink)" }}
        >
          Sua lousa está limpa. Toque em ＋ para soltar o primeiro pensamento.
        </p>
      )}

      {/* Balões sugeridos (fantasma tracejado) — convites a escrever (§17).
          Entrada escalonada (wrapper, atraso por índice visível) + chamado
          calmo no balão (respiração + halo de acento, §1+§3 escolhidos). */}
      {suggestions.map((s, idx) => {
        const pos = slotPos(s.i, size.w, size.h);
        return (
          <div
            key={`sugg-${s.i}`}
            className="absolute"
            style={{
              left: pos.x,
              top: pos.y,
              animation: "mural-fade-in 0.5s ease-out both",
              animationDelay: `${idx * 0.35}s`,
            }}
          >
            <div
              className="relative w-40 rounded-xl border-2 border-dashed hover:[animation-play-state:paused]"
              style={{
                animation:
                  "mural-breathe 3s ease-in-out infinite, mural-halo 2.8s ease-in-out infinite",
                borderColor:
                  "color-mix(in oklab, var(--mural-ink) 40%, transparent)",
                color: "color-mix(in oklab, var(--mural-ink) 78%, transparent)",
                backgroundColor:
                  "color-mix(in oklab, var(--mural-surface) 50%, transparent)",
              }}
            >
              <button
                type="button"
                onClick={() =>
                  setCompose({ index: s.i, pos, prompt: s.prompt })
                }
                className="block w-full px-4 py-3 pr-7 text-left text-sm leading-snug"
              >
                {s.prompt}
              </button>
              <button
                type="button"
                onClick={() => onDismissSuggestion(s.i)}
                aria-label="Dispensar sugestão"
                className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full text-sm leading-none opacity-60 transition-opacity hover:opacity-100"
              >
                ×
              </button>
            </div>
          </div>
        );
      })}

      {/* Notas reais */}
      {notes.map((note, i) => (
        <Balloon
          key={note.id}
          note={note}
          pos={positions[note.id] ?? defaultPos(i, size.w, size.h)}
          onMove={onMove}
          boardRef={boardRef}
        />
      ))}

      {/* Composer central (balão livre ou preenchimento de um sugerido) */}
      {compose && (
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
              placeholder={compose.prompt ?? "Soltar um pensamento na lousa…"}
              rows={2}
              autoFocus
              className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
            />
            <div className="mt-2 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setCompose(null)}
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
      {!compose && (
        <button
          type="button"
          onClick={() =>
            setCompose({
              index: null,
              pos: { x: size.w / 2 - BALLOON_W / 2, y: size.h / 2 - 56 },
            })
          }
          aria-label="Soltar um pensamento"
          className="absolute bottom-6 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-2xl text-accent-foreground shadow-lg transition-transform hover:scale-105"
        >
          ＋
        </button>
      )}
    </div>
  );
}
