---
name: task-slicing
description: Use antes de implementar qualquer pedido grande ou vago, para quebrá-lo em fatias pequenas, revisáveis e testáveis. Obrigatória ao receber pedidos amplos como "crie a Home", "faça o Mural", "adicione Supabase" ou "crie leitura por PDF".
---

# task-slicing

Programar com IA é executar partes pequenas, testáveis e revisáveis — não pedir o sistema inteiro de uma vez.

## Quando usar
- Pedido amplo ("crie a Home", "faça o Mural", "adicione Supabase", "crie leitura por PDF", "faça a Mente").
- Qualquer tarefa que toque mais de uma área (UI + dados + segurança).

## Saída esperada
1. **Fatias** — lista de passos pequenos, cada um entregável e validável sozinho.
2. **Ordem** — sequência recomendada.
3. **Arquivos prováveis** — o que cada fatia deve tocar.
4. **Riscos** — o que pode dar errado.
5. **Validações** — como conferir cada fatia (`pnpm lint`/`typecheck`/`build` + teste manual).
6. **Fora de escopo agora** — o que explicitamente não será feito.

## Regras
- Nenhuma fatia mistura produto, banco, UI, segurança e deploy ao mesmo tempo.
- Telas importantes (Home, Biblioteca, Leitura, Mural, Mente) passam antes pelo processo de variações (`APP_CONTEXT.md` §90).
- Não tocar em Supabase/Auth/RLS/Storage sem autorização explícita.
- A primeira fatia deve ser a menor que já entrega valor ou valida uma hipótese.
