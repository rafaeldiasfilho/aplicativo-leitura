# aplicativo

Uma **memória de leitura calma, organizada e pessoal**. Um espaço para guardar livros, anotações, reflexões e tudo aquilo que a leitura despertou — sem transformar a experiência em trabalho pesado.

> O aplicativo é uma memória de leitura calma, não uma máquina de produtividade.

O nome do produto ainda não está definido; usamos "o aplicativo" por enquanto.

## Stack

- Monorepo **pnpm + Turborepo**
- `apps/web`: **Next.js 16** (App Router) · **React 19** · **TypeScript** · **Tailwind CSS 4**
- Desenvolvimento dentro de **Dev Container**

## Como rodar

Na raiz do monorepo:

```bash
pnpm install        # instalar dependências
pnpm --filter @aplicativo/web dev   # subir o app em http://localhost:3000
```

Validação (rodar após qualquer alteração):

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Estrutura

```text
apps/web        aplicação web (Next.js)
packages        pacotes compartilhados (futuro)
docs            documentação de produto, arquitetura e decisões
.claude         skills e subagentes do Claude Code
.devcontainer   ambiente de desenvolvimento isolado
```

## Documentação

Comece por estes documentos em `docs/`:

- [`APP_CONTEXT.md`](docs/APP_CONTEXT.md) — contexto mestre de produto (fonte de verdade)
- [`PRODUCT_PRINCIPLES.md`](docs/PRODUCT_PRINCIPLES.md) — princípios fixos de produto
- [`ROADMAP.md`](docs/ROADMAP.md) — plano de evolução em fases
- [`KANBAN.md`](docs/KANBAN.md) — tarefas atuais
- [`ACTIVE_DECISIONS.md`](docs/ACTIVE_DECISIONS.md) — decisões vigentes
- [`WORKFLOW.md`](docs/WORKFLOW.md) — método de trabalho com IA, Git e validação
- [`UX_LANGUAGE.md`](docs/UX_LANGUAGE.md) · [`VISUAL_DECISIONS.md`](docs/VISUAL_DECISIONS.md) · [`READING_SOURCES.md`](docs/READING_SOURCES.md) · [`FUTURE_IDEAS.md`](docs/FUTURE_IDEAS.md) · [`AI_AGENTS.md`](docs/AI_AGENTS.md)

## Método

> contexto → especificação → tarefa pequena → implementação → validação → documentação → commit

A IA é apoio de engenharia, não piloto automático. Telas importantes passam pelo processo de decisão visual por variações (ver `APP_CONTEXT.md` §90). Não se altera Supabase/Auth/RLS/Storage sem autorização explícita.
