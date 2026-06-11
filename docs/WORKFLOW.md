# WORKFLOW — Como Trabalhamos

Método de trabalho com IA, Git e validação. Destilado de `docs/APP_CONTEXT.md` (§35, §36, §41, §55) e do `CLAUDE.md`.

---

## Método obrigatório

> contexto → especificação → tarefa pequena → implementação → validação → documentação → commit

A IA é **apoio de engenharia, não piloto automático**. O fundador decide produto, escopo e critério de pronto.

## Fluxo por tarefa

1. Definir o objetivo humano da tarefa.
2. Confirmar se pertence ao MVP ou ao futuro.
3. Escrever uma especificação curta.
4. A IA lista os arquivos que pretende alterar **antes** de mexer.
5. Autorizar apenas escopo pequeno (uma área por vez).
6. Implementar.
7. Rodar validações.
8. Revisar visual e funcionalmente.
9. Atualizar documentação se a decisão mudou (`ACTIVE_DECISIONS.md`/`VISUAL_DECISIONS.md`).
10. Commit pequeno e claro. Só então avançar.

## Validação (monorepo)

```bash
pnpm lint
pnpm typecheck
pnpm build
```

(Quando houver testes: `pnpm test`.) Build passando **não** significa experiência funcionando — testar o fluxo manualmente.

## Telas importantes → processo de variações

Antes de Home, Biblioteca, Modo Leitura, Mural e Mente: **3 variações estáticas → escolher → 4ª refinada → revisar com o usuário → só então implementar**, em `design-lab`/mock, sem banco. Registrar em `VISUAL_DECISIONS.md` (ver `APP_CONTEXT.md` §89).

## Git

- Branch por tarefa; nunca commitar/empurrar sem permissão.
- Revisar `git diff` antes do commit; evitar `git add .` sem revisar.
- Commits claros: `feat:`, `fix:`, `docs:`, `refactor:`, `chore:`. Evitar "update", "final", "arruma tudo".
- Não rodar comandos destrutivos (`rm -rf`, `git reset --hard`, force push, `drop table`) sem entender e autorizar.

## Ambiente

Desenvolvimento dentro do **Dev Container** (Node/pnpm/Turbo previsíveis, ambiente isolado). Nunca commitar `.env`, `node_modules/` ou `.turbo/`. Segredos nunca em prompt.

## Limites que exigem autorização explícita

Supabase, Auth, RLS, Storage, migrações, deploy, integrações reais (Kindle/Amazon/Kobo/Apple/Google) e qualquer promessa de DRM.

## Política de erro da IA

Erro da IA vira melhoria de contexto: explicar o erro, atualizar a documentação/regra se necessário, pedir correção pequena e revalidar — sem gambiarra e sem mudanças enormes para um erro pequeno.

## Critérios de pronto

Respeita o contexto · não polui a interface · não quebra o build · testado minimamente · não prejudica dados · não viola RLS/segurança · documentado se mudou decisão · passou lint/typecheck/build · commit claro.
