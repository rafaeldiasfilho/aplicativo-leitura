import { LeituraView } from "./leitura-view";

// Modo Leitura: server component fino que lê o id do livro da URL e entrega
// para a view client (timer + anotação). Sem banco ainda (Fase 1).
export default async function LeituraPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const { id } = await searchParams;
  return <LeituraView bookId={id ?? null} />;
}
