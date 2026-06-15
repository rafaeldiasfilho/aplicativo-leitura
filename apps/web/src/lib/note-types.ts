// Tipos de anotação (§15). A Rápida é o padrão.
// Aqui ficam só os metadados estáveis (id + rótulo calmo); a identidade
// visual definitiva de cada tipo é decidida pelo processo §90 (Fatia 3).

export type NoteType = "rapida" | "reflexao" | "marca-texto" | "post-it";

export const NOTE_TYPES: { id: NoteType; label: string }[] = [
  { id: "rapida", label: "Rápida" },
  { id: "reflexao", label: "Reflexão" },
  { id: "marca-texto", label: "Marca-texto" },
  { id: "post-it", label: "Post-it" },
];

export const DEFAULT_NOTE_TYPE: NoteType = "rapida";
