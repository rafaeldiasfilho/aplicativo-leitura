# ROADMAP — Plano de Evolução do Aplicativo

**Status:** em andamento
**Fonte:** consolida o roadmap da seção 77 de `docs/APP_CONTEXT.md`. Em caso de conflito, `APP_CONTEXT.md` prevalece.

> Este documento é vivo. Ao concluir uma fase ou mudar de direção, atualize aqui e registre o motivo em `docs/ACTIVE_DECISIONS.md`.

---

## Fase -1 — Memória e documentação

Objetivo: ter contexto, regras e plano escritos antes de qualquer código de produto.

- [x] `docs/APP_CONTEXT.md`
- [x] `CLAUDE.md` / `AGENTS.md`
- [x] `docs/ROADMAP.md` (este arquivo)
- [x] `docs/KANBAN.md`
- [x] `docs/ACTIVE_DECISIONS.md`
- [x] `docs/PRODUCT_PRINCIPLES.md`
- [x] `docs/UX_LANGUAGE.md`
- [x] `docs/WORKFLOW.md`
- [x] `docs/FUTURE_IDEAS.md`
- [x] `docs/READING_SOURCES.md`
- [x] `docs/AI_AGENTS.md`
- [x] `docs/PRIVACY_AND_COPYRIGHT.md`
- [x] `docs/GLOSSARY.md`
- [x] `.claude/agents/` (1ª leva: docs-context-curator, product-guardian)
- [x] `.claude/skills/` (1ª leva: context-update, task-slicing)

## Fase 0 — Base técnica

Objetivo: esqueleto técnico mínimo, sem telas de produto ainda.

- [x] Monorepo pnpm + turbo + `apps/web` (Next.js + TypeScript + Tailwind)
- [x] Layout shell (casca, navegação adaptativa, tipografia, espaçamento calmo)
- [x] Tema claro / escuro / sistema (toggle manual + persistência)
- [x] Tokens visuais mínimos (cores) — cores de post-it/marca-texto entram na Fase 2
- [x] Componentes base (botão, card, input, badge)
- [x] Rotas vazias: `/`, `/biblioteca`, `/leitura`, `/anotacoes`, `/mente`, `/configuracoes`
- [x] `pnpm lint` / `pnpm typecheck` / `pnpm build` passando

> Fase 0 concluída. Navegação principal: Início · Biblioteca · Anotações · Mente (Mural vai para dentro da leitura). Botão "+" de adição rápida foi movido para a Fase 1, junto com o fluxo de adicionar livro.

## Fase 1 — Ciclo mínimo de valor

Objetivo: provar `cadastrar livro → iniciar leitura → anotar rápido → finalizar sessão → revisar pensamento → voltar`, ainda sem banco (dados mockados/locais).

- [x] Home estática com livro(s) em leitura (mock) e botão "Continuar leitura"
- [x] Botão "+" de adição rápida (junto com o fluxo de adicionar livro)
- [x] Biblioteca mínima (Quero ler / Lendo / Pausado / Lido, mock)
- [x] Modo Leitura mínimo: timer real local + anotação rápida em memória
- [x] Tela de revisão simples da anotação criada
- [x] Mente simples (placeholder calmo, sem categorização ainda)
- [x] Configurações básicas (tema)

> Fase 1 concluída — ciclo `cadastrar → ler → anotar → finalizar → revisar → voltar` de pé, tudo em memória.

## Fase 2 — UX de leitura e anotações

- [x] Pausar / retomar / finalizar sessão com resumo final
- [x] Tipos de anotação (Rápida, Reflexão, Marca-texto, Post-it) com identidade visual própria
- [ ] Pilha de post-its (não construída — "post-it" virou um tipo de anotação; reavaliar se ainda faz sentido)
- [x] Lixeira (soft delete / restaurar)

> Fase 2 concluída — itens centrais entregues; "pilha de post-its" fica em avaliação.

## Fase 3 — Mural e Mente

- [x] Mural (lousa) — overlay no Modo Leitura, balões arrastáveis (look V4 via §90)
- [x] Garantir que abrir o Mural não pausa o timer de leitura (overlay no `leitura-view`)
- [x] Balões sugeridos (até 5, posição fixa na sessão; fantasma tracejado, somem ao escrever)
- [ ] Mente com cérebro central e categorias automáticas simples

## Fase 4 — Supabase e beta fechado

> Só inicia após Fases 1–3 validadas visualmente. Não mexer em Supabase/Auth/RLS sem autorização explícita, mesmo nesta fase.

- [ ] Modelagem de `profiles`, `books`, `reading_sessions`, `notes` com RLS
- [ ] Autenticação e isolamento por usuário (testar A/B)
- [ ] Contas individuais para 3–5 testers
- [ ] Feedback dentro do app + painel admin básico
- [ ] Avaliar **Supabase MCP** para apoiar schema/queries/RLS (com as travas da §76; sem escrita em produção sem revisão)

## Fase 5 — PDF no aplicativo

- [ ] Upload privado de PDF
- [ ] Leitor simples integrado ao Modo Leitura
- [ ] Anotações vinculadas à página
- [ ] Progresso e exportação das notas

## Fase 6 — Importações (Kindle e similares)

- [ ] Importação manual/colar texto de destaques
- [ ] Caixa de Entrada Intelectual com revisão antes de salvar

## Fase 7 — EPUB

- [ ] EPUB sem DRM, posição por capítulo/trecho, tema e fonte ajustáveis

## Fase 8 — Futuro amplo (fora do escopo atual)

Audiobook, Apple Watch/smartwatch, caneta inteligente, Spotify/YouTube, app separado de oportunidades profissionais — não iniciar sem decisão explícita.

---

## Critério de avanço entre fases

Uma fase só avança para a próxima quando:

- o ciclo da fase atual foi testado manualmente;
- `pnpm lint`, `pnpm typecheck` e `pnpm build` passam;
- decisões relevantes foram registradas em `docs/ACTIVE_DECISIONS.md`;
- não há poluição visual nova sem revisão (regra permanente de produto).
