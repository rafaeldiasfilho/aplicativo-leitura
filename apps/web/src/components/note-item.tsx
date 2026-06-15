import type { Note } from "@/lib/notes";
import { NOTE_TYPES } from "@/lib/note-types";

// Identidade visual de cada tipo de anotação (V4, §90 — direção "Forma/gesto").
// Fonte única usada na lista de Anotações e no resumo de sessão.
// - Rápida: linha fina em acento, sem card (gesto mínimo).
// - Reflexão: card de superfície com aspa, itálico (gesto de citação).
// - Marca-texto: realce âmbar suave atrás do texto (gesto de destaque).
// - Post-it: papel quente com inclinação leve.
// A linha-meta "Tipo · horário" dá o nome do tipo sem poluir.

const LABEL: Record<Note["type"], string> = Object.fromEntries(
  NOTE_TYPES.map((t) => [t.id, t.label]),
) as Record<Note["type"], string>;

function Meta({ label, time }: { label: string; time?: string }) {
  return (
    <p className="mt-1.5 text-xs text-muted">
      {time ? `${label} · ${time}` : label}
    </p>
  );
}

export function NoteItem({ note, time }: { note: Note; time?: string }) {
  const label = LABEL[note.type];

  switch (note.type) {
    case "reflexao":
      return (
        <div className="rounded-2xl border border-border bg-surface px-4 py-3">
          <p className="text-sm italic leading-relaxed text-foreground">
            <span className="mr-0.5 font-serif text-accent">“</span>
            {note.content}
          </p>
          <Meta label={label} time={time} />
        </div>
      );

    case "marca-texto":
      return (
        <div>
          <span
            className="box-decoration-clone text-sm leading-loose text-[#4a4332]"
            style={{ backgroundColor: "#f4e7bb", padding: "0.15em 0.3em" }}
          >
            {note.content}
          </span>
          <Meta label={label} time={time} />
        </div>
      );

    case "post-it":
      return (
        <div>
          <div
            className="inline-block rounded-md px-4 py-3 shadow-sm"
            style={{
              backgroundColor: "#f4e3d0",
              color: "#4a3b30",
              transform: "rotate(-1.5deg)",
            }}
          >
            <p className="text-sm leading-relaxed">{note.content}</p>
          </div>
          <Meta label={label} time={time} />
        </div>
      );

    case "rapida":
    default:
      return (
        <div className="border-l-2 border-accent/40 pl-3">
          <p className="text-sm leading-relaxed text-foreground">
            {note.content}
          </p>
          <Meta label={label} time={time} />
        </div>
      );
  }
}
