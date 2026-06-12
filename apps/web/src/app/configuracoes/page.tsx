import { ThemeToggle } from "@/components/theme-toggle";

export default function ConfiguracoesPage() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col gap-8 px-6 py-12">
      <header className="flex flex-col gap-1">
        <h1 className="text-2xl font-medium tracking-tight">Configurações</h1>
        <p className="text-sm text-muted">Ajustes do aplicativo.</p>
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-medium">Aparência</h2>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="text-sm text-muted">Tema</span>
          <ThemeToggle />
        </div>
      </section>
    </main>
  );
}
