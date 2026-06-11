# AI_AGENTS — Skills e Subagentes do Projeto

Índice da arquitetura `.claude/` e política de uso. Baseado em `docs/APP_CONTEXT.md` (§86–§88).

> Skills e subagentes existem para **reduzir bagunça, não criar burocracia**. Criamos aos poucos, só com uso real. Não chamar todos sempre.

---

## Skills (`.claude/skills/`)

| Skill | Quando usar |
|---|---|
| `context-update` | Após uma decisão nova, para atualizar a documentação sem duplicar/contradizer. |
| `task-slicing` | Antes de implementar pedido grande/vago — quebrar em fatias pequenas e testáveis. |

## Subagentes (`.claude/agents/`)

| Subagente | Quando usar |
|---|---|
| `docs-context-curator` | Manter docs vivos e sem contradição; auditar duplicação/conflito. |
| `product-guardian` | Proteger a essência calma ao avaliar feature nova, Premium ou redesign de telas. |

## Como combinar (exemplos)
- Terminou uma tarefa com decisão nova → `docs-context-curator` + skill `context-update`.
- Pedido amplo ("crie a Home") → skill `task-slicing`, depois processo de variações (§90), com `product-guardian` avaliando.

## Próximas levas (criar quando houver uso real)
- **UX/produto:** agente `ux-cleanliness-reviewer`; skills `clean-ui-review`, `visual-decision`, `startup-enxuta-check`.
- **Engenharia:** agentes `frontend-nextjs-architect`, `qa-regression-tester`; skills `release-checklist`, `grill-with-docs`.
- **Leitura:** agente `reading-sources-architect`; skills `reading-session-timer`, `mural-layout`.
- **Banco/arquivos (só quando entrar Supabase/PDF):** `backend-supabase-rls`, `pdf-epub-reader-engineer`, `privacy-copyright-reviewer`; skills `supabase-rls-check`, `pdf-reader-plan`, `kindle-import-plan`.

## Regras
- Um subagente/skill só existe se tiver responsabilidade clara e uso real.
- Não tocar em Supabase/Auth/RLS/Storage nem fazer commit/push sem autorização (vale para todos).
- Decisão de produto é humana; agentes organizam, avaliam e executam fatias pequenas.
