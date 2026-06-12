# Aplicativo — Instruções Mestras para Claude Code

Este é o aplicativo, construído em monorepo.

Antes de qualquer alteração, leia obrigatoriamente:

- docs/APP_CONTEXT.md

## Princípio central

O aplicativo é uma memória de leitura calma, organizada e pessoal.

Ele deve ajudar o usuário a guardar livros, anotações, reflexões, marcações, post-its, PDFs, EPUBs, importações futuras do Kindle e outras fontes de leitura sem transformar a experiência em trabalho pesado.

## Regra permanente de produto

Toda função nova precisa deixar o app mais confortável, não mais pesado.

Se uma função poluir, cansar, confundir ou atrapalhar a leitura, ela deve ser simplificada, adiada ou repensada.

## Método obrigatório

Trabalhe sempre no método:

contexto → especificação → tarefa pequena → implementação → validação → documentação → commit

A IA é apoio de engenharia, não piloto automático.

## Regras absolutas

- Não alterar banco de dados, Supabase, autenticação, RLS ou Storage sem autorização explícita.
- Não criar integração real com Kindle, Amazon, Kobo, Apple Books ou Google Play Livros sem documentação e aprovação.
- Não prometer leitura de livros protegidos por DRM.
- Não criar funções só porque são possíveis.
- Não mexer em múltiplas áreas ao mesmo tempo.
- Não fazer commits automáticos sem permissão.
- Antes de implementar, explique o plano.
- Depois de implementar, rode validação.

## Comandos de validação

Na raiz do monorepo:

- pnpm lint
- pnpm typecheck
- pnpm build

## Estrutura do monorepo

- apps/web: aplicação web principal em Next.js
- packages: pacotes compartilhados futuros
- docs: documentação de produto, arquitetura e decisões
- .claude/agents: subagentes do Claude Code
- .claude/skills: skills reutilizáveis do Claude Code

## Direção atual

Este é o primeiro aplicativo, construído com calma desde o início.

Use o contexto mestre para construir com clareza, segurança e organização, sempre priorizando a experiência calma de leitura.
