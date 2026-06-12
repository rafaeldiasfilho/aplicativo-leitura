# KANBAN — Tarefas Atuais

**Status:** em andamento
**Fonte de verdade de produto:** `docs/APP_CONTEXT.md`
**Plano de fases:** `docs/ROADMAP.md`

> Mantenha este arquivo curto. Tarefas concluídas podem ser removidas ou movidas para "Concluído recentemente"; histórico detalhado fica no Git.

---

## Agora (Fase 0 — Base técnica)

- [x] Fundação visual: tokens de cor calmos + tema do sistema (claro/escuro)
- [x] Casca base do `layout` (pt-BR, fonte, classes base) e Home placeholder
- [x] Criar rotas vazias: `/biblioteca`, `/leitura`, `/anotacoes`, `/mente`, `/configuracoes`
- [x] Criar componentes base: botão, card, input, badge
- [x] Barra de navegação principal (Início · Biblioteca · Anotações · Mente; adaptativa)
- [x] Toggle manual de tema (claro/escuro/sistema)
- [x] Garantir `pnpm lint`, `pnpm typecheck` e `pnpm build` passando após cada mudança

> Fase 0 concluída.

## Agora (Fase 1 — Ciclo mínimo de valor)

- [x] Home com livros em leitura (carrossel, mock) — via processo de variações §90
- [x] Tela `/adicionar` (busca + intenção Ler agora/Já lido/Ler depois) ligada ao "+" — via §90
- [x] Adicionar funcional: store em memória + `/adicionar` salva + Home reflete (carrossel/empty state)
- [x] Biblioteca mínima (livros por status; histórico marcado) — store em memória
- [ ] Modo Leitura mínimo (timer real local + anotação rápida em memória)
- [ ] Tela de revisão da anotação

## Backlog próximo (Fase 2+)

- [ ] Resumo final de sessão
- [ ] Tipos de anotação com identidade visual própria
- [ ] Lixeira
- [ ] Mural (sem pausar timer) e Mente com categorias automáticas

## Bloqueado / aguardando autorização

- Supabase, Auth, RLS, Storage — não iniciar sem autorização explícita
- PDF/EPUB/Kindle — não iniciar sem documentação e aprovação prévia

## Concluído recentemente

- [x] Monorepo pnpm + turbo criado
- [x] `docs/APP_CONTEXT.md` escrito
- [x] `docs/ROADMAP.md` e `docs/KANBAN.md` criados
