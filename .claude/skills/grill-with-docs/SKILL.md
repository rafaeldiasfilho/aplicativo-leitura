---
name: grill-with-docs
description: Use antes de uma feature grande ou decisão sensível, para entrevistar o usuário com perguntas difíceis comparando a ideia com os docs do projeto, até haver clareza antes de implementar. Aciona antes de Home/Mente/Mural definitivos, Supabase/auth/RLS, PDF/EPUB/Kindle, ou quando o pedido estiver vago.
---

# grill-with-docs

Programar com IA não é adivinhar o que o usuário quer — é chegar a um entendimento claro **antes** de escrever código, cruzando a ideia com o contexto já escrito.

## Quando usar
- Antes de uma feature grande (Mural, Mente, leitor PDF, importações).
- Antes de definir Supabase / auth / RLS / storage.
- Antes de fechar a versão definitiva de Home, Mente ou Modo Leitura.
- Quando o pedido estiver vago ou houver risco de contradizer o contexto mestre.

> Irmã: `grill-me` serve para ideia ainda bruta (sem depender dos docs). Aqui o padrão é **grill-with-docs**, porque já existe documentação rica.

## Fontes de verdade a cruzar
- `docs/APP_CONTEXT.md` (produto, fonte mestra)
- `docs/ACTIVE_DECISIONS.md` (decisões vigentes)
- `docs/ROADMAP.md` / `docs/KANBAN.md` (fase e escopo)
- `docs/PRODUCT_PRINCIPLES.md` / `docs/UX_LANGUAGE.md`

## Como conduzir
1. Ler os trechos relevantes dos docs antes de perguntar.
2. Perguntar **uma coisa por vez**; não despejar tudo de uma vez.
3. Confrontar a ideia com o que já está decidido — apontar conflitos ("isso contraria a §X").
4. Quando fizer sentido, sugerir uma **resposta recomendada** (com o porquê).
5. Cobrir: problema, objetivo, escopo, fora de escopo, fluxo, riscos, é-MVP-ou-não.
6. **Não escrever código durante a entrevista.**

## Saída
- Decisão final clara, registrada em `docs/ACTIVE_DECISIONS.md` (via skill `context-update`).
- Se a decisão for arquitetural e difícil de reverter, sugerir um ADR em `docs/adr/`.
- Em seguida, normalmente: `task-slicing` para fatiar, depois implementar.

## Regras
- O contexto mestre é a fonte de verdade; a decisão mais recente do usuário prevalece e deve ser registrada.
- Não inventar requisitos: a decisão de produto é humana.
- Filtro permanente: a ideia mantém o app calmo, claro e fácil? Se não, simplificar ou adiar.
