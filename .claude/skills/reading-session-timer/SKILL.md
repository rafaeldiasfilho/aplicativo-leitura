---
name: reading-session-timer
description: Use ao criar ou alterar o contador de leitura, sessões ou o Modo Leitura, para proteger as regras do tempo real. Aciona ao mexer em timer, pausa/retomada, finalização de sessão, tempo por livro ou separação entre tempo real e estimado.
---

# reading-session-timer

O contador de leitura é o coração da experiência (`APP_CONTEXT.md` §13). Ele precisa ser confiável: tempo errado quebra a confiança no app.

## Quando usar
- Criar ou alterar o timer do Modo Leitura.
- Mexer em iniciar / pausar / retomar / finalizar sessão.
- Mudar como o tempo é somado ao livro.
- Quando o Mural entrar (ele **não** pode pausar o timer).

## Regras obrigatórias (§13/§14)
- Contar **somente** quando a leitura está ativa.
- **Pausar** quando o usuário pausa; **retomar** continua de onde parou.
- Abrir o **Mural não pausa** o tempo (já implementado: overlay no `leitura-view`).
- Acumular o tempo total do livro a cada sessão finalizada.
- Separar **tempo real** (medido no app, `historico: false`) do **tempo estimado** (livros já lidos, `historico: true`) — nunca misturar.
- Não perder a sessão por engano (estado preservado durante a leitura).

## Implementação confiável
- Medir por **timestamps acumulados** (`accumulatedRef` + `startRef`), não só por `setInterval`, para não perder tempo se a aba dormir.
- Ao finalizar: capturar o tempo atual, somar minutos reais ao livro (`addReadingMinutes`).
- "Terminei o livro" soma o tempo e marca `status: "lido" / historico: false` (`finishBook`).

## Onde mexer
- `apps/web/src/app/leitura/leitura-view.tsx` — timer + anotação + overlay do Mural.
- `apps/web/src/lib/books-store.ts` — `addReadingMinutes`, `finishBook`.

> Status do que já existe vs. pendente (PiP, etc.) vive em `docs/ROADMAP.md`/`docs/KANBAN.md`, não aqui — esta skill carrega as **regras** do tempo, não o estado.

## Validação
- Iniciar → pausar → conferir que o tempo congela; retomar → conferir que continua.
- Finalizar → conferir que o total do livro aumentou pelo tempo da sessão.
- `pnpm lint` / `pnpm typecheck` / `pnpm build`.
