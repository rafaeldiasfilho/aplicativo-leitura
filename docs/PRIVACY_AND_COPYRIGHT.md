# PRIVACY_AND_COPYRIGHT — Privacidade e Direitos Autorais

Princípios já decididos sobre dados do usuário, arquivos e IA. Destilado de `docs/APP_CONTEXT.md` (§34, §59.5, §86.18) e `docs/READING_SOURCES.md`. Detalhes técnicos entram quando PDF/EPUB/Kindle e Supabase forem implementados (Fases 4–7).

> O usuário confia mais quando sabe que pode sair sem perder quem ele foi dentro do aplicativo.

---

## Dados do usuário

- Todo dado tem `user_id`; RLS garante que cada usuário veja **apenas** os seus dados.
- Nunca expor dados de um usuário a outro.
- Exclusão é clara e respeitada; quando possível, soft delete via Lixeira antes da exclusão definitiva.
- Exportação existe desde cedo (não é Premium) — o usuário pode levar suas anotações.
- Cancelar o Premium **não** pode sequestrar memórias já salvas.

## Arquivos enviados (PDF / EPUB)

- **Privados por usuário.** Sem catálogo público, sem compartilhamento entre usuários.
- Não usar o arquivo do usuário para treinar modelo.
- Exclusão permanente respeitada quando o usuário apaga.
- O usuário é responsável por enviar documentos que tem direito de usar.

## Direitos autorais

- Nunca prometer **abrir arquivos com DRM** nem quebrar DRM.
- EPUB/PDF: aceitar apenas arquivos sem DRM enviados pelo usuário.
- Não virar biblioteca pirata nem catálogo de livros.

## Importações (Kindle e outras plataformas)

- Começar sempre **manual e revisável**: prévia antes de salvar.
- Não depender tecnicamente da Amazon/loja no MVP; não prometer sincronização automática.

## IA dentro do produto

Quando a IA entrar (OCR, classificação, sugestões), ela deve ser:

- **explícita** (o usuário sabe que é IA);
- **revisável** — nunca salvar resultado automático sem confirmação;
- não invasiva, com privacidade clara e opção de correção;
- sem usar dados do usuário de forma obscura.

> IA no produto deve ajudar o leitor a organizar a própria mente, não parecer que o app está tomando posse dela.

## Antes de qualquer beta/deploy público

RLS revisado · autenticação funcionando · dados isolados por usuário · `.env` fora do Git · nenhuma chave exposta no front-end · nenhuma tabela pública por acidente · termos mínimos de privacidade planejados.
