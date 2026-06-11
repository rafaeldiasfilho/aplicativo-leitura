---
name: context-update
description: Use após tomar uma decisão nova ou mudar de direção, para atualizar a documentação do projeto sem duplicar nem contradizer decisões anteriores. Aciona ao registrar decisões de produto, visuais, de escopo ou de processo.
---

# context-update

Toda decisão importante sai da conversa e entra no repositório.

## Quando usar
- Uma decisão nova foi tomada (produto, visual, técnica, escopo, processo).
- Uma feature mudou de escopo ou foi adiada.
- Feedback ou aprendizado gerou uma regra nova.

## Onde registrar (escolha o documento certo)
- **`docs/ACTIVE_DECISIONS.md`** — decisões vigentes (datadas: o quê, por quê, onde reflete).
- **`docs/VISUAL_DECISIONS.md`** — escolhas visuais e variações.
- **`docs/APP_CONTEXT.md`** — quando muda o produto em si (raro; é a fonte mestra).
- **`docs/ROADMAP.md`** / **`docs/KANBAN.md`** — progresso e tarefas.
- **`docs/PRODUCT_PRINCIPLES.md`** / **`docs/UX_LANGUAGE.md`** — só se um princípio/tom mudar.

## Passos
1. Identificar o documento certo (acima).
2. Procurar entrada existente sobre o tema (`grep`) — **atualizar** em vez de duplicar.
3. Se a decisão contradiz algo antigo, corrigir o texto antigo e anotar que foi substituído.
4. Datar a entrada (data absoluta) e linkar documentos relacionados.
5. Conferir que não sobrou contradição (`grep` por termos-chave).

## Regras
- Não duplicar conteúdo entre documentos; cada fato mora em um lugar.
- A decisão mais recente prevalece; deixar isso explícito.
- Não inventar decisão que o usuário não tomou.
