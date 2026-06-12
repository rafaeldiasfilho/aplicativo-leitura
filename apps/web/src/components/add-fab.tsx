"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Rotas de "coleção" onde adicionar um livro faz sentido. Nas telas de foco
// (leitura, adicionar, configurações) o FAB não aparece.
const COLLECTION_ROUTES = ["/", "/biblioteca", "/anotacoes", "/mente"];

// Botão flutuante de adição rápida (§8). Fica no canto inferior direito,
// acima da barra de navegação no celular.
export function AddFab() {
  const pathname = usePathname();
  if (!COLLECTION_ROUTES.includes(pathname)) return null;

  return (
    <Link
      href="/adicionar"
      aria-label="Adicionar livro"
      className="fixed bottom-20 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform hover:scale-105 active:scale-95 md:bottom-8 md:right-8"
    >
      <span className="text-2xl leading-none">+</span>
    </Link>
  );
}
