# IDEAS — Funil de Triagem de Ideias

Registro vivo das ideias que surgem na **colaboração de produto** (founder + IA). Toda ideia recebe um **veredito datado** e o **porquê**, confrontada com os docs do projeto. Serve para nenhuma ideia se perder e para nenhum veredito ser esquecido.

> A IA aqui **avalia e recomenda**; o founder decide. Veredito não é implementação — é só a decisão sobre o destino da ideia.

## Como funciona

1. Ideia entra na tabela de triagem abaixo com data, descrição e contexto.
2. A IA confronta com os docs (`APP_CONTEXT.md`, `PRODUCT_PRINCIPLES.md`, `ACTIVE_DECISIONS.md`, etc.) e propõe um **veredito** + porquê.
3. O founder confirma, discorda ou ajusta.
4. A ideia segue para o **destino** conforme o veredito.

## Vereditos e destinos

| Veredito | Significado | Destino |
|----------|-------------|---------|
| **Entra** | Cabe no escopo atual e vale agora | Vira tarefa no `KANBAN.md`/`ROADMAP.md` + decisão em `ACTIVE_DECISIONS.md` |
| **Adia** | Válida, mas fora do momento | Se for grande/de escopo futuro, sobe para `FUTURE_IDEAS.md`; senão fica aqui marcada |
| **Meio-termo** | Não como pedida, mas há uma versão menor que cabe | Reescrita como nova ideia "Entra" |
| **Veta** | Conflita com a essência calma ou com um limite do produto | Fica aqui registrada com o porquê, para não voltar à toa |

> Fronteira com os outros docs: **`IDEAS.md` é o funil de entrada.** `FUTURE_IDEAS.md` é o catálogo curado do que está conscientemente fora do MVP. `ACTIVE_DECISIONS.md` é o registro do que foi aceito e por quê. Não duplicar: uma vez que a ideia chega ao destino, este arquivo só guarda o veredito + link.

---

## Triagem

### Arrastar balões de sugestão no Mural — **ADIADO** (2026-06-15)

- **Ideia:** permitir que o leitor arraste os balões sugeridos para reposicioná-los, como faz com as notas.
- **Veredito:** **Adia.**
- **Porquê:**
  - O §17 prioriza **estabilidade de posição** dos sugeridos (anti-estresse) — a estabilidade visada é a do *sistema* (posições determinísticas, previsíveis), não a customização pelo usuário.
  - Valor baixo: os balões são um **andaime temporário** (somem ao virarem notas), então investir em manipulá-los rende pouco.
  - Risco de **ambiguidade de gesto**: arrastar um sugerido (andaime) vs. arrastar uma nota (conteúdo real) confunde dois objetos com pesos diferentes.
- **Se voltar:** considerar antes o **meio-termo** já levantado — melhorar as posições padrão dos slots periféricos, sem dar arraste ao usuário.
- **Reflete em:** `APP_CONTEXT.md` §17, `ACTIVE_DECISIONS.md` (Balões sugeridos §17).
