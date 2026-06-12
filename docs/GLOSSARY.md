# GLOSSARY — Glossário do Produto

Os termos do aplicativo, com um significado só. Serve para manter os nomes consistentes entre **interface, código e documentação**. Em conflito, `docs/APP_CONTEXT.md` e `docs/ACTIVE_DECISIONS.md` prevalecem.

---

## Áreas e telas

- **Início (Home)** — onde o leitor "continua de onde parou": carrossel dos livros em leitura.
- **Biblioteca** — todos os livros do leitor, agrupados por status.
- **Anotações** — onde o leitor reencontra o que guardou (revisão).
- **Mente** — o "cérebro" do leitor: temas, padrões e conexões entre livros e ideias, de forma visual e calma. Categorias automáticas nascem aqui. (Fase 3.)
- **Modo Leitura** — a tela de uma sessão: timer real + anotação rápida; é o coração da experiência.
- **Mural** — espaço de pensamento visual (tipo lousa), acessado **de dentro do Modo Leitura**, não é aba. Abrir o Mural **não pausa** o timer. (Fase 3.)

## Livros

- **Status do livro** — `Quero ler` · `Lendo` · `Pausado` · `Lido`. (No código atual: `quero-ler` · `lendo` · `lido`; "Pausado" entra quando o Modo Leitura puder gerá-lo.)
- **Intenção (ao adicionar)** — escolha do leitor: `Ler agora` → Lendo · `Já lido` → Lido/Histórico · `Ler depois` → Quero ler.
- **Histórico de leitura** — livro lido **antes** do app; entra na Mente com **tempo estimado**. No modelo: `status: "lido"` + `historico: true`.
- **Lido no aplicativo** — livro terminado **dentro** do app, com **tempo real** medido. No modelo: `status: "lido"` + `historico: false`.

## Leitura e tempo

- **Sessão de leitura** — um período de leitura medido pelo timer (iniciar → pausar/retomar → finalizar).
- **Tempo real** — tempo medido dentro do app numa sessão. Nunca misturado com o estimado.
- **Tempo estimado** — tempo atribuído a um livro do histórico (fonte: audiobook quando houver; senão, estimativa por páginas).

## Anotações

- **Anotação rápida** — o padrão: um pensamento curto guardado durante a leitura.
- **Reflexão** — anotação mais longa/pessoal, com visual próprio. (Fase 2.)
- **Marca-texto** — destaque de um trecho, com aparência de marcação. (Fase 2.)
- **Post-it** — nota curta com cara de post-it; pode empilhar. (Fase 2.)
- **Nota retroativa** — anotação feita sobre um livro já lido ("lembrou de algo depois").

## Captura e organização

- **Caixa de Entrada Intelectual** — camada universal de captura: nota rápida, foto, OCR, destaque importado, pensamento solto. Fluxo: `capturar rápido → salvar bruto → revisar depois → classificar → conectar à Mente`. (Futuro.)
- **Lixeira** — soft delete: o que é apagado vai para cá e pode ser restaurado antes da exclusão definitiva. (Fase 2.)
- **Categoria** — agrupamento opcional de livros/anotações; manual (do leitor) ou automática (sugerida pela Mente).
