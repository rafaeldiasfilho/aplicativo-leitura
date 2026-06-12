---
name: release-checklist
description: Use ao final de uma tarefa, antes de considerá-la pronta ou de fazer commit, para validar build, lint, tipos, UX e documentação. Aciona ao encerrar uma fatia de implementação ou antes de deploy/beta.
---

# release-checklist

Uma tarefa só está pronta depois de validada. "Funciona na minha cabeça" não conta.

## Quando usar
- Ao terminar qualquer fatia de implementação.
- Antes de um commit.
- Depois de refatoração.
- Antes de deploy ou de liberar para beta.

## Checklist

### Técnico
```bash
pnpm lint
pnpm typecheck
pnpm build
git status
git diff
```
- Tudo passa, sem warnings novos.
- O `git diff` contém só o que a tarefa pedia (sem arquivos ou trechos a mais).

### Produto / UX
- Não quebrou o fluxo principal (cadastrar → ler → anotar → finalizar → revisar → voltar).
- Não poluiu a interface (sem excesso de cards/botões; ver regra permanente de produto).
- Linguagem humana e calma (`UX_LANGUAGE.md`).

### Segurança / limites
- Não mexeu em Supabase/Auth/RLS/Storage sem autorização.
- Nenhuma chave/segredo exposto; `.env` fora do Git.

### Documentação
- Decisão relevante registrada (skill `context-update`).
- `KANBAN.md` / `ROADMAP.md` atualizados, se aplicável.

### Commit
- Mensagem clara no padrão (`feat:`/`fix:`/`docs:`/`chore:`/`refactor:`), sem genéricos.
- Commit/push só com permissão do usuário.

## Regra
- Se algum item falhar, a tarefa **não está pronta**. Corrigir antes de seguir.
