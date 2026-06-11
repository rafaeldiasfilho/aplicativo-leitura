# READING_SOURCES — Fontes de Leitura

Como o aplicativo lida com de onde a leitura vem. Destilado de `docs/APP_CONTEXT.md` (§59–§63, §66, §67). Detalhes de implementação de PDF/EPUB/Kindle entram nas Fases 5–7 do `ROADMAP.md` — aqui ficam os princípios.

> Princípio central: **não importa onde a pessoa leu (físico, PDF, EPUB, Kindle, outra plataforma) — o aplicativo guarda com calma o que aquela leitura despertou nela.**

---

## Dois modos de uso

1. **Companheiro de leitura externa** — a pessoa lê fora do app (físico, Kindle, Kobo, audiobook…) e usa o aplicativo só para guardar a memória da leitura.
   `li fora → capturei pensamento → salvei → organizei depois → revi na Mente`
2. **Leitor interno** — a pessoa lê dentro do app (PDF/EPUB próprios, sem DRM).
   `abri no app → li → marquei/anotei → finalizei sessão → revisão/Mente/Mural`

> O app não pode forçar todos a ler dentro dele, nem ignorar quem quer ler dentro dele.

## Matriz de fontes (orienta o roadmap)

| Fonte | Papel | Prioridade | Regra |
|---|---|---:|---|
| Livro físico | Núcleo emocional | Alta | Acompanha a leitura, não substitui o livro |
| Livro histórico já lido | Enriquece Mente/histórico | Alta | Aceita anotações retroativas |
| PDF do usuário | Leitura interna | Alta/média | Privado, sem compartilhamento, sem DRM bypass |
| EPUB sem DRM | Leitura interna adaptável | Média | Não prometer abrir EPUB protegido |
| Kindle highlights | Importação | Média | Manual/revisável; sem promessa de sync total |
| Kobo/Apple/Google | Importação futura | Baixa/média | Importação, não dependência |
| Foto de post-it/anotação | Ponte físico-digital | Média | OCR/classificação futura, com revisão |
| Audiobook · Spotify/YouTube · caneta · smartwatch | Futuro | Baixa | Ver `FUTURE_IDEAS.md` |
| Nota solta ("só salvar") | Entrada universal | Alta | Vai para a Caixa de Entrada Intelectual |

## Regras permanentes

- **Privacidade:** arquivos do usuário (PDF/EPUB) são privados; sem catálogo público, sem compartilhamento entre usuários, sem usar o conteúdo para treinar modelo, com exclusão respeitada.
- **Direitos autorais:** nunca prometer quebrar DRM; o usuário é responsável pelo que envia.
- **Importações:** começar sempre **manual e revisável** (prévia antes de salvar); nunca depender tecnicamente da Amazon/loja no MVP.
- **Não virar:** clone de Kindle, editor técnico de PDF, biblioteca pirata.

## Caixa de Entrada Intelectual

Camada universal de captura: recebe nota rápida, foto, OCR, destaque importado, anotação de PDF/EPUB, pensamento solto. Fluxo: `capturar rápido → salvar bruto → revisar depois → classificar → conectar à Mente`.

> Capturar deve ser mais fácil do que esquecer.

## Tempo real vs. estimado

Separar sempre o **tempo real medido no app** do **tempo estimado** de livros lidos antes do app. Nunca misturar nas estatísticas.
