# KANBAN — Tarefas Atuais

**Status:** em andamento
**Fonte de verdade de produto:** `docs/APP_CONTEXT.md`
**Plano de fases:** `docs/ROADMAP.md`

> Mantenha este arquivo curto. Tarefas concluídas viram uma linha em "Concluído"; o histórico detalhado fica no Git e em `docs/VISUAL_DECISIONS.md`.

---

## Agora (Fase 3 — Mural e Mente)

- [x] Balões sugeridos (até 5, fantasma tracejado, slots fixos, somem ao escrever) — §17
- [ ] Mente com cérebro central e categorias automáticas simples

## Bloqueado / aguardando autorização

- Supabase, Auth, RLS, Storage — não iniciar sem autorização explícita
- PDF/EPUB/Kindle — não iniciar sem documentação e aprovação prévia

## Concluído

- **Fase 0 — Base técnica:** monorepo pnpm+turbo, casca/layout, navegação adaptativa, tema claro/escuro/sistema, componentes base, rotas vazias.
- **Fase 1 — Ciclo mínimo:** Home (carrossel), adicionar livro, Biblioteca, Modo Leitura (timer + anotação), revisão de anotações — tudo em memória. Ciclo `cadastrar → ler → anotar → finalizar → revisar → voltar` de pé.
- **Fase 2 — UX de leitura e anotações:** resumo final de sessão, tipos de anotação com identidade visual e Lixeira (soft delete) — via §90 onde havia peso visual.
- **Mural (lousa, Fase 3):** overlay no Modo Leitura, balões arrastáveis, timer correndo, âncora da capa harmonizada — via §90.
- **Refinamentos:** padrão de layout (coleção/foco) + FAB de adicionar, fix de hidratação, 3 skills de apoio (`reading-session-timer`, `release-checklist`, `grill-with-docs`).
