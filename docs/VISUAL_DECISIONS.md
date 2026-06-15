# VISUAL_DECISIONS — Decisões Visuais

**Status:** em andamento
**Fonte de verdade de produto:** `docs/APP_CONTEXT.md` (seções 9, 21, 45)

> Registra alternativas visuais, a escolha feita e o motivo. Em conflito, `APP_CONTEXT.md` prevalece.

---

## 2026-06-11 — Fundação visual e casca (Fase 0)

**Contexto:** o `apps/web` ainda era o template do `create-next-app` (logos Next/Vercel, textos em inglês, preto/branco puro). Precisávamos de uma base calma antes de qualquer tela de produto.

### Paleta base (tokens)

Direção: "papel", suave, sem cores gritantes, contraste não-agressivo (seção 9).

| Token | Claro | Escuro | Uso |
|---|---|---|---|
| `background` | `#faf9f7` | `#141413` | fundo geral (off-white quente / quase preto quente) |
| `surface` | `#ffffff` | `#1d1c1a` | cartões e blocos elevados |
| `border` | `#e7e4df` | `#2c2a27` | divisórias suaves |
| `foreground` | `#2b2a27` | `#ece9e3` | texto principal (sem preto puro) |
| `muted` | `#6f6c66` | `#a3a09a` | texto secundário |
| `accent` | `#4f6f64` | `#8fb3a5` | acento sereno (sálvia), usar com parcimônia |

Tokens expostos ao Tailwind v4 via `@theme inline` → classes `bg-background`, `text-muted`, etc.

### Decisões

- **Idioma da interface:** `lang="pt-BR"` no `<html>`.
- **Tipografia:** mantida a fonte Geist (sans) do template por ora — limpa e neutra. Reavaliar uma serif para títulos numa fatia futura, se fizer sentido para a sensação de leitura.
- **Tema:** por enquanto seguimos o tema do **sistema** (`prefers-color-scheme`). O **toggle manual** (claro/escuro/sistema da seção 21) fica para uma fatia posterior.
- **Home:** substituída por placeholder calmo ("o aplicativo" + "Uma memória de leitura calma."). A Home real com livros em leitura é da Fase 1.

### Fora desta fatia (próximas)

- Rotas vazias (`/biblioteca`, `/leitura`, `/anotacoes`, `/mente`, `/configuracoes`).
- Componentes base (botão, card, input, badge).
- Toggle manual de tema.
- Cores de post-it e marca-texto (entram com os tipos de anotação, Fase 2).

---

## 2026-06-11 — Componentes base do design system (Fase 0)

**Contexto:** fundação reutilizável antes de montar navegação e Home.

### Decisões

- **Sem dependências de estilo extras:** nada de `cva`/`clsx`. Um helper mínimo `cn()` (em `src/lib/cn.ts`) junta classes. Se um dia houver conflito de classes Tailwind, avaliamos `tailwind-merge`.
- **Padrão dos componentes (React 19):** funções simples que espalham `React.ComponentProps<...>` (o `ref` chega como prop normal, sem `forwardRef`). Localização: `src/components/ui/`.
- **`Button`** — variantes `primary` (acento sálvia), `secondary` (borda/superfície), `ghost`; cantos arredondados (`rounded-full`), foco com `ring-accent/40`.
- **`Card`** — `rounded-2xl`, borda suave, `bg-surface`, sombra discreta.
- **`Input`** — `rounded-xl`, borda suave, foco com `ring-accent/40`, placeholder em `muted`.
- **`Badge`** — `rounded-full`, fundo neutro suave (`border/40`), texto `muted`.

### Observação

Os componentes ainda **não** são usados em nenhuma tela — serão exercitados na fatia da barra de navegação / Home. Validados por typecheck/lint/build.

---

## 2026-06-11 — Barra de navegação principal (Fase 0)

**Contexto:** primeira decisão de UX visível; conecta as áreas. Alinhado com o usuário via perguntas.

### Decisões (escolhidas pelo usuário)

- **Abas:** `Início · Biblioteca · Anotações · Mente`. Diverge da seção 8 do contexto (que listava Mural como 4ª área): por decisão do usuário, **Mural fica acessível dentro da leitura** (onde faz mais sentido) e **Anotações** ganha lugar fixo na navegação. Registrar também em `ACTIVE_DECISIONS.md` quando esse doc for criado.
- **Formato:** adaptativo — barra **inferior fixa no celular** (`fixed bottom-0`), **topo fixo no desktop** (`md:sticky md:top-0`). Mobile-first, pensando em PWA futuro.
- **Aba ativa:** destaque sutil em `text-accent` + `aria-current="page"`; demais em `text-muted`.

### Decisão de escopo (tomada por mim, não pelo usuário)

- **Botão "+" adiado:** não incluído nesta fatia para evitar um botão sem destino (botão morto). Entra junto com o primeiro fluxo de adição (adicionar livro). Respeita a regra de "não criar função sem necessidade / não poluir".

### Implementação

- `src/components/site-nav.tsx` (Client Component, usa `usePathname`).
- `layout.tsx` renderiza `<SiteNav />` e envolve o conteúdo com `pb-14 md:pb-0` para compensar a barra fixa no mobile.

Validado com typecheck/lint/build e smoke test (rotas `/` e `/biblioteca` → 200, abas renderizadas).

---

## 2026-06-11 — Toggle manual de tema (Fase 0 — encerramento)

**Contexto:** até aqui o tema só seguia o sistema (`prefers-color-scheme`). Faltava controle manual (claro/escuro/sistema) para fechar a Fase 0.

### Decisões

- **Estratégia de tema:** atributo `data-theme` no `<html>` é a fonte de verdade. `light`/`dark` forçam a paleta; `system` (ou ausência do atributo) segue o `prefers-color-scheme`. Tokens escuros aparecem em dois seletores no CSS (modo sistema e modo escuro manual) — pequena duplicação consciente, pois CSS puro não permite reúso entre regra de media e seletor.
- **Anti-FOUC:** script `beforeInteractive` (`next/script`) aplica o tema salvo antes da hidratação; `<html suppressHydrationWarning>` evita avisos pelo atributo injetado.
- **Leitura do estado sem mismatch:** `ThemeToggle` usa `useSyncExternalStore` (não `useState`+`useEffect`) — também satisfaz a regra `react-hooks/set-state-in-effect` do React 19. O componente reage a um evento `themechange` e ao evento `storage`.
- **Persistência:** `localStorage["theme"]`, com `try/catch` para ambientes sem acesso.
- **UI:** controle segmentado (Claro/Escuro/Sistema) na nova página `/configuracoes`, seção "Aparência".

Validado com typecheck/lint/build e smoke test (`/configuracoes` → 200, toggle e script presentes).

---

## Estado da Fase 0

Concluída: fundação visual, casca/layout, rotas, componentes base, navegação adaptativa e tema manual. Pendências movidas para a Fase 1: Home real e botão "+" de adição rápida.

---

## 2026-06-11 — Home (Fase 1) pelo processo de variações §90

**Contexto:** primeira tela real, seguindo o processo de decisão visual por variações (3 + 1 refinada).

### Processo

- Criadas **3 variações estáticas** em `/design-lab` com dados mock (`src/lib/mock-books.ts`):
  - **V1 — Hero:** livro atual em destaque, "Continuar leitura" dominante.
  - **V2 — Estante:** lista vertical de cards horizontais.
  - **V3 — Carrossel:** capas grandes deslizantes, sensação premium.
- **Escolha do usuário:** V3 (Carrossel) como base.
- **V4 — Refinada (escolhida):** carrossel (V3) + saudação humana e selo "Onde você parou" (V1), tempo de leitura, botão "+" discreto, dots de paginação e mensagem calma do `UX_LANGUAGE` ("Sem pressa. Sua leitura continua aqui.").

### Decisões

- A V4 foi **promovida à Home real** (`/`).
- `BookCover`/`ProgressBar` extraídos para `src/components/book-cover.tsx` (compartilhados).
- O `design-lab` foi **removido** após a decisão (cumpriu o papel; permanece no histórico do Git), conforme §90 ("laboratório é descartável, não vira produto paralelo").
- O botão **"+"** está presente como elemento visual, **sem ação ainda** — será ligado ao fluxo de adicionar livro na próxima fatia da Fase 1.
- Dados ainda são **mock** (Fase 1 sem banco); Supabase entra na Fase 4.

Validado com typecheck/lint/build.

---

## 2026-06-12 — Adicionar livro (Fase 1) pelo processo §90

**Contexto:** fluxo de adicionar livro, ligado ao botão "+" da Home.

### Processo

- **3 variações** estáticas em `/design-lab/add` (mock):
  - **V1 — Página:** formulário manual completo.
  - **V2 — Folha inferior:** bottom-sheet rápido, mobile-first.
  - **V3 — Busca primeiro:** procurar e selecionar.
- **Escolha do usuário:** V3 (Busca primeiro).
- **V4 — Refinada (escolhida):** busca + escolha de intenção (Ler agora / Já lido / Ler depois) + guardar, num fluxo único; "Adicionar manualmente" como alternativa.

### Decisões

- V4 **promovida** para a rota real **`/adicionar`** (com "voltar"); botão "+" da Home passa a apontar para ela.
- `design-lab` **removido** após a decisão (§90).
- Intenções e regra de tempo estimado do "Já lido" registradas em `ACTIVE_DECISIONS.md` (2026-06-12).
- A tela ainda **não salva** (mock); store em memória é a próxima fatia.

Validado com typecheck/lint/build.

---

## 2026-06-12 — Modo Leitura (Fase 1) pelo processo §90

**Contexto:** o Modo Leitura é a tela central ("coração da experiência"). A lógica de timer/anotação já tinha sido construída direto; voltamos ao processo de variações antes de fixar o visual.

### Processo

- **3 variações** estáticas em `/design-lab/leitura` (mock, `SEED_BOOKS`):
  - **V1 — Foco (Zen):** minimalismo radical, só o timer no centro, anotação escondida atrás de um toque.
  - **V2 — Cartão de leitura:** livro num cartão, timer em bloco, anotação sempre à vista. Estruturado.
  - **V3 — Imersivo:** capa do livro como atmosfera (gradiente no topo), anotação como folha que sobe. Premium.
- **Escolha do usuário:** V2 **e** V3.
- **V4 — Refinada (escolhida):** atmosfera da capa de V3 (gradiente + título/autor) **com o progresso à vista** de V2; timer grande em destaque com controles claros (Pausar / Finalizar); anotação **recolhida** como folha (§13), "＋ Guardar um pensamento" + "Terminei o livro".

### Decisões

- V4 **promovida** para a tela real **`/leitura`** (`leitura-view.tsx`), reaproveitando a lógica de timer (timestamps acumulados) e anotação em memória já existente.
- `design-lab` **removido** após a decisão (§90).
- Comportamento (timer, finalizar sessão, terminei o livro) já registrado em `ACTIVE_DECISIONS.md` (2026-06-12, "Modo Leitura mínimo").

Validado com typecheck/lint/build (`/leitura?id=…` → 200).

---

## 2026-06-12 — Padrão de layout das telas e FAB de adicionar

**Contexto:** ao revisar a Home no desktop, o conteúdo "espalhava" para a esquerda. Isso levou a definir um padrão de layout consistente para todas as telas.

### Padrão definido (duas famílias)

- **Telas de coleção** (Home, Biblioteca, Anotações, Mente): largura **cheia** (canto a canto), **header centralizado** e conteúdo **centralizado** — poucos itens ficam no centro, muitos preenchem e a última fileira fica centrada.
  - Home: carrossel com `[justify-content:safe_center]` (centra poucos, rola muitos).
  - Biblioteca e Anotações: `flex flex-wrap justify-center` com itens de largura fixa (em vez de `grid`, que alinhava à esquerda).
- **Telas de foco** (Adicionar, Leitura, Configurações): largura **contida e legível**, sem FAB.

### FAB de adicionar (§8)

- O "+" de adição rápida virou um **botão flutuante** fixo no **canto inferior direito** (`components/add-fab.tsx`), em cor de acento.
- Aparece **só nas telas de coleção** (some na Leitura, Adicionar e Configurações); no celular fica **acima da barra de navegação**.
- Removido o "+" que ficava no header da Home e da Biblioteca.

### Navegação

- No desktop, os itens da nav passaram de `justify-start` (à esquerda) para **`justify-center`** (centralizados), acompanhando o padrão.

### Observação (futuro)

- Centralizar a Biblioteca fica bom com poucos livros; quando a coleção crescer para dezenas, reavaliar se o alinhamento à esquerda (estante preenchendo) fica melhor.

Validado com typecheck/lint/build (todas as rotas → 200).

---

## 2026-06-12 — Resumo final de sessão (Fase 2) pelo processo §90

**Contexto:** o resumo é o momento de conclusão da leitura (parte do coração do Modo Leitura). Voltamos ao processo de variações antes de fixar o visual.

### Processo

- **3 variações** estáticas em `/design-lab/resumo` (mock):
  - **V1 — Atmosfera:** capa no topo, tempo + anotações equilibrados.
  - **V2 — Tempo de vida:** o tempo lido em destaque (métrica emocional §14), anotações recolhidas.
  - **V3 — Diário:** anotações como post-its de papel, tempo discreto.
- **Escolha do usuário:** V1 **e** V3.
- **V4 — Refinada (escolhida):** atmosfera da capa + tempo de conclusão (de V1) com **contagem de pensamentos**, anotações como **post-its de papel inclinados** e o fecho "Eles já estão na sua Mente" (de V3).

### Decisões

- V4 **promovida** para o estado de resumo da tela real `/leitura` (`leitura-view.tsx`).
- Cores de papel dos post-its são **provisórias** (`SESSION_PAPER`) — a paleta definitiva por tipo de anotação entra na tarefa "tipos de anotação" da Fase 2.
- `design-lab` **removido** após a decisão (§90).
- **Fora de escopo:** animação do "livro fechando" (§24) e resumo no fluxo "Terminei o livro" (mantém o atual).

Validado com typecheck/lint/build (`/leitura?id=…` → 200).

---

## 2026-06-15 — Identidade visual dos tipos de anotação (Fase 2) pelo processo §90

**Contexto:** os tipos de anotação (Rápida · Reflexão · Marca-texto · Post-it, §15) ganham identidade visual própria. Isso substitui o `SESSION_PAPER` provisório deixado no resumo de sessão.

### Decisões de escopo (antes das variações)

- **4 tipos** entram agora; **Marca-texto** como nota livre estilizada (visual de destaque), já que ainda não há leitura de PDF/EPUB para destacar texto real.
- Ao guardar um pensamento no Modo Leitura, os tipos aparecem **lado a lado**; **Rápida** segue o padrão.

### Processo

- **3 variações** estáticas em `/design-lab` (mock), os 4 tipos no contexto da lista de Anotações:
  - **V1 — Cor de papel:** cada tipo é uma cor de papel suave (diferença = fundo).
  - **V2 — Marca lateral:** fundo neutro + faixa lateral colorida + rótulo (sóbrio).
  - **V3 — Forma/gesto:** cada tipo tem um gesto próprio (linha, citação, realce, papel).
- **Escolha do usuário:** V3.
- **V4 — Refinada (escolhida):** gestos de V3 harmonizados para conviverem numa lista, com linha-meta **"Tipo · horário"** dando o nome sem poluir:
  - **Rápida:** linha fina em acento à esquerda, sem card.
  - **Reflexão:** card de superfície com aspa, itálico.
  - **Marca-texto:** realce âmbar suave (`#f4e7bb`) atrás do texto.
  - **Post-it:** papel quente (`#f4e3d0`) com inclinação leve.

### Decisões

- V4 vira a **fonte única** `components/note-item.tsx`, usada na lista `/anotacoes`, no resumo de sessão e na lista inline do Modo Leitura.
- `SESSION_PAPER` **removido**; o resumo agora renderiza cada nota pelo seu tipo.
- O **seletor** de tipos fica neutro (pills com rótulo) — a identidade se revela na anotação renderizada, não na escolha, para não poluir o momento de leitura.
- `design-lab` **removido** após a decisão (§90).
- **Fora de escopo:** anotação expandida com lixeira (§587, depende da Lixeira) e Mural.

Validado com typecheck/lint/build (`/anotacoes` e `/leitura?id=…` → 200).

---

## 2026-06-15 — Look do Mural (lousa, Fase 3) pelo processo §90

**Contexto:** o Mural é a lousa onde as anotações da sessão viram balões livres (§16). É tela principal → processo de variações. Os balões mantêm a identidade dos tipos (`NoteItem`, §16); a variação é da **superfície da lousa** e do tratamento de profundidade dos balões.

### Processo

- **3 variações** estáticas em `/design-lab` (mock):
  - **V1 — Mesa de papel:** lousa de papel claro, balões com sombra suave.
  - **V2 — Cortiça (alfinete):** tom quente + alfinete em cada balão.
  - **V3 — Lousa pontilhada:** grade de pontos sutil (planner) + sombra difusa.
- **Escolha do usuário:** V2 **e** V3.
- **V4 — Refinada (escolhida):** lousa quente + **grade de pontos sutil** + balões com **alfinete** e **sombra difusa** (`drop-shadow(0 4px 12px rgba(74,59,48,.16))`).
  - A lousa é **tokenizada por tema** (`--mural-surface`/`--mural-dot`/`--mural-ink` em `globals.css`): warm clara no tema claro (`#efe7d9`), warm escura no escuro. Necessário porque os balões usam as cores de texto do tema (`NoteItem`) — uma lousa de cor fixa deixaria a anotação **Rápida** ilegível no tema escuro.

### Decisões

- V4 implementada direto na tela real `apps/web/src/app/leitura/mural.tsx` (overlay).
- **Âncora do livro (enriquecimento):** o Mural ganhou um cabeçalho com a **atmosfera da capa** (gradiente + título/autor, como no Modo Leitura) que "derrete" na lousa, e o tempo com linha viva ("lendo agora"). Decidido para dar alma à lousa sem poluir (a alternativa de "mais informações" foi contida pelo princípio §45 "espaço vazio é design"). Controles (pontos/fechar) moram nesse cabeçalho.
- **Fundo harmonizado com a capa:** como a cor fixa da lousa brigava com algumas capas (frias/saturadas), o fundo passou a ser `color-mix(in oklab, var(--mural-surface) 88%, cover.to 12%)` — o papel quente do tema com **um sussurro (~12%) da capa**. Sempre harmoniza com o livro, mantém legibilidade (majoritariamente o token neutro) e dá continuidade com a base do cabeçalho.
- **Pontos opcionais:** toggle "Mostrar/Ocultar pontos" no Mural, persistido em `localStorage` (§21).
- Arquitetura (overlay vs rota) e interação (arrastar, criar no centro, timer correndo) em `ACTIVE_DECISIONS.md`.
- `design-lab` **removido** após a decisão (§90).
- **Fora de escopo:** balões sugeridos (§17), banco.

Validado com typecheck/lint/build (`/leitura?id=…` → 200).

## 2026-06-15 — Identidade visual da Mente (Fase 3) pelo processo §90

**Contexto:** a Mente é o "cérebro" do leitor (§12) — temas, padrões, conexões. Tela-âncora → processo de variações. Esta fatia define **só a identidade visual em mock**; o motor de extração de temas é fatia posterior.

### Processo

- **3 variações** iniciais em `/design-lab/mente`: V1 Constelação, V2 Orgânica, V3 Nuvem tipográfica.
- Usuário quis **misturar** → montei **3 demos finalistas** (A Sereno, B Constelação serena, C Orgânico).
- Ao testar escala (interruptor "Poucos/Muitos" com ~20 temas), a órbita lotava (sobreposição). Repensamos o layout: o usuário escolheu a **Direção 1 — Cérebro-herói + panorama**.

### Escolha final — Cérebro-herói + panorama (evolução da demo A)

- **Cérebro central** como herói (`BrainMock`, SVG abstrato determinístico) — **trocável** pelo modelo de cérebro que o Rafael vai enviar (§12), mexendo só nesse componente.
- **Panorama curado:** só os **~6 temas mais usados** orbitam, bem espaçados (nunca lota). Tamanho do texto = uso; ordenação por nº de anotações.
- **Profundidade separada (anti "mapa confuso", §12):** focar um tema revela **os livros daquele tema** no rodapé (conexão sob demanda, por realce — sem linhas); "ver todos os temas" abre uma **lista calma rolável**.
- **Escala:** a sensação é idêntica com 6 ou 200 temas — o panorama é sempre curado, o resto vive na lista.
- **Estética (herdada da demo A):** papel quente (`--mural-surface`/`--mural-ink`), temas em **texto**, acento sálvia, cérebro respirando (`mural-breathe`).
- **Ajuste registrado para os dados reais:** tamanho do tema deve sair da **proporção de uso (%)**, não da contagem crua, para um tema gigante não esmagar os demais.

### Pendências (não nesta fatia)

- **Motor de temas** (extrair temas das anotações) — sem ele, a `/mente` real não tem dados. Decisão de quando/como implementar a tela real em `ACTIVE_DECISIONS.md`.
- `design-lab/mente` será **removido** após a implementação da tela real (como nos anteriores). Por ora **permanece** para referência.

Validado: lint/typecheck/build verdes; `/design-lab/mente` → 200.
