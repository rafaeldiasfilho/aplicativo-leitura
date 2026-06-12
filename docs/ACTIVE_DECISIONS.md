# ACTIVE_DECISIONS — Decisões Ativas

Registro cronológico das decisões vigentes do projeto. A decisão mais recente prevalece sobre uma anterior conflitante. Em conflito com `docs/APP_CONTEXT.md`, o `APP_CONTEXT.md` é a fonte de produto, mas decisões registradas aqui têm precedência quando forem mais recentes.

> Cada entrada: **o quê** decidimos, **por quê** e **onde reflete**.

---

## 2026-06-11

### Nome do projeto
- **Decisão:** usar "o aplicativo" / "aplicativo" em código, documentação, commits e interface. Não fixar marca (SERENE/Liv/Nous etc.) por enquanto.
- **Por quê:** não prender o produto a uma marca antes da experiência amadurecer.
- **Reflete em:** `APP_CONTEXT.md` §1, todo o código e docs.

### Enquadramento do projeto
- **Decisão:** tratar como **o primeiro aplicativo**, construído com calma desde o início — sem linguagem de "V2/reconstrução/código perdido".
- **Por quê:** o projeto é o produto do usuário, não uma migração; clareza emocional e de contexto.
- **Reflete em:** `CLAUDE.md`, `AGENTS.md`, `APP_CONTEXT.md` (limpeza aplicada nas §0 e §86–88).

### Idioma
- **Decisão:** interface e documentação em **pt-BR** (`<html lang="pt-BR">`).
- **Por quê:** público inicial brasileiro; localização vem depois (`APP_CONTEXT.md` §79).
- **Reflete em:** `apps/web/src/app/layout.tsx`.

### Gerenciador de pacotes e validação
- **Decisão:** comandos oficiais são **`pnpm lint`, `pnpm typecheck`, `pnpm build`** (monorepo pnpm + turbo). `npm run` está obsoleto.
- **Por quê:** o projeto usa pnpm workspaces.
- **Pendência:** ~5 blocos do `APP_CONTEXT.md` ainda citam `npm run` (linhas 982, 1446, 1628, 1737, 1962) — converter num passe próprio.
- **Reflete em:** `CLAUDE.md`, `AGENTS.md`, `package.json`.

### Navegação principal
- **Decisão:** 4 abas — **Início · Biblioteca · Anotações · Mente**. O **Mural** é acessado de dentro do Modo Leitura (não é aba). O botão **"+"** de adição rápida foi adiado para a Fase 1 (entra junto do fluxo de adicionar livro), para não ser um botão sem destino.
- **Por quê:** decisão do usuário; Anotações merece lugar fixo e o Mural faz mais sentido dentro da leitura.
- **Observação:** isto **substitui** a antiga ideia "Início · Biblioteca · Mural · Mente" que aparecia em §8/§45 (já corrigida).
- **Reflete em:** `apps/web/src/components/site-nav.tsx`, `APP_CONTEXT.md` §8 e §45, `VISUAL_DECISIONS.md`.

### Tema
- **Decisão:** **claro/escuro/sistema**. Padrão segue o sistema (`prefers-color-scheme`); há **toggle manual** com persistência em `localStorage`, aplicado antes da hidratação (sem flash).
- **Por quê:** conforto de leitura em qualquer ambiente, sem complexidade.
- **Reflete em:** `apps/web/src/app/globals.css`, `theme-toggle.tsx`, `layout.tsx`, página `/configuracoes`.

### Direção visual / tokens
- **Decisão:** paleta calma "papel/sálvia" via tokens (`background`, `surface`, `border`, `foreground`, `muted`, `accent`), sem cores gritantes. Fonte Geist por ora.
- **Por quê:** sensação de calma e leitura (§9).
- **Reflete em:** `globals.css`, `VISUAL_DECISIONS.md`.

### Processo de decisão visual por variações
- **Decisão:** antes de telas importantes (Home, Biblioteca, Modo Leitura, Mural, Mente), criar **3 variações estáticas → escolher → 4ª refinada → revisar com o usuário → só então implementar**, em `design-lab`/mock (sem banco/auth/lógica real), registrando a escolha em `VISUAL_DECISIONS.md`.
- **Por quê:** evitar implementar uma tela ruim cedo demais.
- **Reflete em:** `APP_CONTEXT.md` §89.

### Stack e estrutura
- **Decisão:** monorepo **pnpm + Turborepo**; `apps/web` em **Next.js 16 (App Router) + React 19 + TypeScript + Tailwind 4**; desenvolvimento dentro do **Dev Container**.
- **Por quê:** base moderna, previsível e isolada.
- **Reflete em:** raiz do repositório, `apps/web`, `.devcontainer`.

### Limites permanentes (não-decisões, mas travas)
- Não mexer em **Supabase/Auth/RLS/Storage** sem autorização explícita.
- Não criar integração real com **Kindle/Amazon/Kobo/Apple Books/Google Play**, nem prometer **DRM**, sem documentação e aprovação.
- Não fazer **commit/push** sem permissão.
- **Reflete em:** `CLAUDE.md` (Regras absolutas), `APP_CONTEXT.md` §32/§34.
