# @aplicativo/web

Aplicação web principal do aplicativo (uma memória de leitura calma).

Stack: Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4.

## Comandos

A partir da raiz do monorepo:

```bash
pnpm --filter @aplicativo/web dev     # desenvolvimento
pnpm --filter @aplicativo/web build   # build de produção
pnpm lint && pnpm typecheck && pnpm build   # validação
```

## Estrutura

```text
src/
  app/          rotas (App Router): /, /biblioteca, /leitura, /anotacoes, /mente, /configuracoes
  components/   componentes da aplicação
    ui/         design system (button, card, input, badge)
  lib/          utilidades e dados (cn, mock-books)
```

Consulte a documentação de produto e arquitetura em [`../../docs`](../../docs) e as instruções em [`../../CLAUDE.md`](../../CLAUDE.md).
