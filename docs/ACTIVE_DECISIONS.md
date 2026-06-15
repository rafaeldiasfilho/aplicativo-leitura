# ACTIVE_DECISIONS — Decisões Ativas

Registro cronológico das decisões vigentes do projeto. A decisão mais recente prevalece sobre uma anterior conflitante. Em conflito com `docs/APP_CONTEXT.md`, o `APP_CONTEXT.md` é a fonte de produto, mas decisões registradas aqui têm precedência quando forem mais recentes.

> Cada entrada: **o quê** decidimos, **por quê** e **onde reflete**.

---

## 2026-06-11

### Nome do projeto
- **Decisão:** usar "o aplicativo" / "aplicativo" em código, documentação, commits e interface. Não fixar marca (SERENE/Liv/Nous etc.) por enquanto.
- **Por quê:** não prender o produto a uma marca antes da experiência amadurecer.
- **Reflete em:** `APP_CONTEXT.md` §1, todo o código e docs.

### Enquadramento do projeto
- **Decisão:** tratar como **o primeiro aplicativo**, construído com calma desde o início — sem linguagem de "V2/reconstrução/código perdido".
- **Por quê:** o projeto é o produto do usuário, não uma migração; clareza emocional e de contexto.
- **Reflete em:** `CLAUDE.md`, `AGENTS.md`, `APP_CONTEXT.md` (limpeza aplicada nas §0 e §86–88).

### Idioma
- **Decisão:** interface e documentação em **pt-BR** (`<html lang="pt-BR">`).
- **Por quê:** público inicial brasileiro; localização vem depois (`APP_CONTEXT.md` §79).
- **Reflete em:** `apps/web/src/app/layout.tsx`.

### Gerenciador de pacotes e validação
- **Decisão:** comandos oficiais são **`pnpm lint`, `pnpm typecheck`, `pnpm build`** (monorepo pnpm + turbo). `npm run` está obsoleto.
- **Por quê:** o projeto usa pnpm workspaces.
- **Reflete em:** `CLAUDE.md`, `AGENTS.md`, `package.json`.

### Navegação principal
- **Decisão:** 4 abas — **Início · Biblioteca · Anotações · Mente**. O **Mural** é acessado de dentro do Modo Leitura (não é aba). O botão **"+"** de adição rápida foi adiado para a Fase 1 (entra junto do fluxo de adicionar livro), para não ser um botão sem destino.
- **Por quê:** decisão do usuário; Anotações merece lugar fixo e o Mural faz mais sentido dentro da leitura.
- **Observação:** isto **substitui** a antiga ideia "Início · Biblioteca · Mural · Mente" que aparecia em §8/§45 (já corrigida).
- **Reflete em:** `apps/web/src/components/site-nav.tsx`, `APP_CONTEXT.md` §8 e §45, `VISUAL_DECISIONS.md`.

### Tema
- **Decisão:** **claro/escuro/sistema**. Padrão segue o sistema (`prefers-color-scheme`); há **toggle manual** com persistência em `localStorage`, aplicado antes da hidratação (sem flash).
- **Por quê:** conforto de leitura em qualquer ambiente, sem complexidade.
- **Reflete em:** `apps/web/src/app/globals.css`, `theme-toggle.tsx`, `layout.tsx`, página `/configuracoes`.

### Direção visual / tokens
- **Decisão:** paleta calma "papel/sálvia" via tokens (`background`, `surface`, `border`, `foreground`, `muted`, `accent`), sem cores gritantes. Fonte Geist por ora.
- **Por quê:** sensação de calma e leitura (§9).
- **Reflete em:** `globals.css`, `VISUAL_DECISIONS.md`.

### Processo de decisão visual por variações
- **Decisão:** antes de uma **tela principal** (Home, Biblioteca, Modo Leitura, Mural, Mente) **ou de qualquer tela/momento com peso emocional** (resumo de sessão, conclusão de livro, onboarding, vazios acolhedores), criar **3 variações estáticas → escolher → 4ª refinada → revisar com o usuário → só então implementar**, em `design-lab`/mock (sem banco/auth/lógica real), registrando a escolha em `VISUAL_DECISIONS.md`.
- **Por quê:** evitar implementar uma tela ruim cedo demais; telas com peso emocional são parte do coração do produto.
- **Atualização (2026-06-12):** regra **ampliada** para abranger momentos emocionais, não só as cinco telas-âncora (gatilho: resumo final de sessão). Na dúvida se uma tela "conta", tratar como se contasse.
- **Reflete em:** `docs/WORKFLOW.md`, `APP_CONTEXT.md` §90 (o design-lab descartável é §89.9).

### Stack e estrutura
- **Decisão:** monorepo **pnpm + Turborepo**; `apps/web` em **Next.js 16 (App Router) + React 19 + TypeScript + Tailwind 4**; desenvolvimento dentro do **Dev Container**.
- **Por quê:** base moderna, previsível e isolada.
- **Reflete em:** raiz do repositório, `apps/web`, `.devcontainer`.

### Limites permanentes (não-decisões, mas travas)
- Não mexer em **Supabase/Auth/RLS/Storage** sem autorização explícita.
- Não criar integração real com **Kindle/Amazon/Kobo/Apple Books/Google Play**, nem prometer **DRM**, sem documentação e aprovação.
- Não fazer **commit/push** sem permissão.
- **Reflete em:** `CLAUDE.md` (Regras absolutas), `APP_CONTEXT.md` §32/§34.

---

## 2026-06-12

### Adicionar livro — intenção em vez de status técnico
- **Decisão:** ao adicionar um livro, a escolha é a **intenção**, com três opções: **Ler agora**, **Já lido**, **Ler depois**. Elas mapeiam para os status internos da Biblioteca (§11):
  - Ler agora → **Lendo** (conta tempo real no app);
  - Já lido → **Lido / Histórico** (entra na Mente; tempo estimado, não real);
  - Ler depois → **Quero ler**.
  - "Pausado" continua existindo, mas surge depois — não é escolha de entrada.
- **Por quê:** é a escolha natural do usuário; cobre quem adiciona um livro já lido só para enriquecer a Mente.
- **Reflete em:** `apps/web/src/app/adicionar/page.tsx`, `APP_CONTEXT.md` §11.

### Tempo de leitura de "Já lido"
- **Decisão:** "Já lido" entra na Mente **com tempo estimado**, sempre **separado** do tempo real medido no app. Fonte: **duração do audiobook quando houver fonte de dados**; enquanto isso, **estimativa por páginas** (fallback viável no MVP).
- **Na interface:** mostrar apenas "tempo estimado" — a fonte (audiobook/páginas) fica nos bastidores.
- **Ressalvas registradas:** duração de audiobook exige fonte de dados externa (frente futura); audiobook tende a superestimar o tempo de leitura silenciosa; nem todo livro tem audiobook (por isso o fallback).
- **Reflete em:** `APP_CONTEXT.md` §14, `docs/READING_SOURCES.md`.

### Biblioteca mínima — agrupar por status; separar lido no app vs. histórico
- **Decisão:** a `/biblioteca` mostra os livros do store agrupados por status na ordem **Lendo · Quero ler · Lido** (`STATUS_ORDER`/`STATUS_LABELS` em `lib/books.ts`). Cada seção só aparece se tiver livros.
- **Lido no app vs. histórico (§11/§14):** a distinção é de **dados** — `status: "lido"` + `historico: false` = lido dentro do app (tempo real); `historico: true` = lido antes do app (tempo estimado). Na seção **Lido**, quando os dois tipos coexistem, mostram-se duas subseções: **"Lido no aplicativo"** e **"Histórico de leitura"**. Quando há só um tipo, **não subdivide** e o título da seção reflete o tipo (evita subtítulo/seção vazia). Abandonado o badge "Histórico" anterior, que era redundante com o subtítulo.
- **"Pausado":** continua fora da Biblioteca por enquanto — entra quando o Modo Leitura puder gerar esse status.
- **Layout:** grade de capas (visão geral, não carrossel), empty state calmo, botão "+" como na Home. Sem banco (Fase 1).
- **Reflete em:** `apps/web/src/app/biblioteca/page.tsx`, `apps/web/src/lib/books.ts`, `APP_CONTEXT.md` §11/§14.

### Fluxo de adicionar (UI)
- **Decisão:** **busca primeiro** (procurar e tocar para guardar) + **"Adicionar manualmente"** como alternativa. Acessado pelo botão **"+"** da Home, na rota `/adicionar`. Escolhido via processo de variações §90 (V3 → V4).
- **Estado atual:** tela estática; busca é mock; salvar de verdade (store em memória) é a próxima fatia.
- **Reflete em:** `apps/web/src/app/adicionar/page.tsx`, `apps/web/src/app/page.tsx` (botão "+"), `docs/VISUAL_DECISIONS.md`.

### Modo Leitura mínimo — timer real + anotação rápida
- **Decisão:** rota `/leitura?id=<livro>` (server component lê o `id`; `leitura-view.tsx` client cuida da interação). Aberta pelo botão "Continuar leitura" da Home.
- **Timer (§13):** estados *iniciar → pausar → retomar → finalizar*. Contagem por **timestamps acumulados** (`accumulatedRef` + `startRef`), não só por `setInterval`, para ser confiável mesmo se a aba dormir. O tempo só corre quando ativo.
- **Anotação rápida (§15):** campo "Guardar um pensamento", salvo em `notes-store.ts` (memória) vinculado ao livro. As anotações da sessão ficam **recolhidas por padrão**, com contador que expande a lista.
- **Dois fechamentos:** **"Finalizar sessão"** soma o tempo real (`addReadingMinutes`) e volta à Home; **"Terminei o livro"** (com confirmação inline) soma o tempo, marca `status: "lido" / historico: false` (`finishBook`) e vai à Biblioteca — alimentando "Lido no aplicativo".
- **Visual (§90):** o layout passou pelo processo de variações (V1 Foco / V2 Cartão / V3 Imersivo → V4 refinada, combinando V2+V3). Detalhe em `VISUAL_DECISIONS.md` (2026-06-12).
- **Fora do escopo agora:** Mural, balões sugeridos, PiP, resumo final animado, tela de revisão. `progress` ainda não é editável manualmente (só vai a 100 ao terminar o livro).
- **Reflete em:** `apps/web/src/app/leitura/`, `apps/web/src/lib/notes.ts`, `notes-store.ts`, `books-store.ts`, `apps/web/src/app/page.tsx`, `APP_CONTEXT.md` §13/§15.

### Tela de revisão da anotação — `/anotacoes` (fecha o ciclo da Fase 1)
- **Decisão:** a área `/anotacoes` lista as anotações do store **agrupadas por livro**, mais recentes primeiro, cada uma num cartão com conteúdo e horário ("às HH:MM" se hoje, senão "DD/MM"). Empty state acolhedor.
- **Por quê:** fecha o ciclo mínimo do MVP — o leitor reencontra o que guardou e percebe valor (§3).
- **Escopo:** sem filtros, ordenações ou tipos de anotação (a organização rica da §15 e a identidade visual por tipo são Fase 2). Não está na lista do §90, então feita direto.
- **Reflete em:** `apps/web/src/app/anotacoes/page.tsx`, `APP_CONTEXT.md` §15. **Fase 1 concluída.**

### Ferramentas de desenvolvimento — gh CLI, MCPs e plugins do Claude Code
- **gh CLI:** instalado no ambiente (`~/.local/bin`, fora do versionamento) e autenticado, usado para abrir/mesclar PRs. É a ferramenta padrão de PR/issue por ora — resolve sem precisar de MCP do GitHub.
- **MCPs (§76):** **adiados**. O **Supabase MCP** é o que mais agrega, mas só **na Fase 4** (quando o banco entrar) — registrado no `ROADMAP.md`. GitHub/Vercel MCP ficam **opcionais** (o `gh` já cobre o GitHub). Mantêm-se as travas da §76: sem escrita em produção sem revisão, sem alterar banco real sem plano, sem expor `.env`.
- **Plugins do Claude Code:** **não criar agora**. O `.claude/` do repositório já carrega skills e subagentes automaticamente; um plugin só valeria para reaproveitar/distribuir entre projetos. Reavaliar se surgir um 2º projeto.
- **Por quê:** manter o ambiente simples e não adicionar integração só porque é possível (regra permanente de produto/processo).
- **Fluxo de PRs:** preferir **uma branch por tema → um PR pequeno** desde o início (evita a dança de rebase/empilhamento que tivemos ao separar a Fase 1 retroativamente).
- **Reflete em:** `docs/ROADMAP.md` (Fase 4), `APP_CONTEXT.md` §76.

---

## 2026-06-15

### Lixeira — soft delete de anotações (§19)
- **Decisão:** apagar uma anotação é **soft delete** (`deletedAt` no `Note`): some das Anotações e vai para a **Lixeira**, de onde pode ser **Restaurada** ou **Excluída definitivamente** (irreversível). Nada some sem ação clara do usuário.
- **Escopo agora:** só **anotações** (ainda não há excluir livro). Sem purga automática. Sem banco (memória, Fase 1).
- **UX:** apagar é uma **ação sutil por nota** em `/anotacoes`, com **confirmação inline** tanto ao apagar quanto ao excluir definitivamente (escolha do usuário). A Lixeira é **área secundária**, acessada por **Configurações** (§45), não é aba.
- **Store:** `deleteNote`/`restoreNote`/`purgeNote`; `useNotes` passa a esconder apagados e `useTrashedNotes` alimenta a Lixeira (derivados memorizados para o `useSyncExternalStore`).
- **Por quê:** proteger contra perda acidental (§19) sem pesar a experiência.
- **Não é §90:** tela utilitária/secundária, sem peso emocional — feita direto, sem variações.
- **Reflete em:** `apps/web/src/app/lixeira/page.tsx`, `apps/web/src/app/anotacoes/page.tsx`, `apps/web/src/app/configuracoes/page.tsx`, `lib/notes.ts`, `lib/notes-store.ts`, `lib/dates.ts`, `APP_CONTEXT.md` §19.

### Mural (lousa) — overlay dentro do Modo Leitura (§16/§17)
- **Decisão:** o Mural é um **overlay no `leitura-view`**, não uma rota própria (`/mural`).
- **Por quê:** a regra do timer (§16: abrir o Mural **não pausa** a leitura). O timer vive em memória no `leitura-view`; navegar para uma rota separada zeraria o estado. Como overlay no mesmo componente, o tempo segue correndo. Quando houver sessão persistida (banco), pode virar rota.
- **Interação:** balões **arrastáveis** (pointer events + `setPointerCapture`), posição guardada em memória no `leitura-view` (`positions`) — estável entre abrir/fechar a lousa na mesma sessão (§17). Posição padrão determinística pelo índice. Nova anotação **nasce no centro** (§16). Os balões reusam a identidade dos tipos (`NoteItem`, §16) e **não somem ao clicar**.
- **Look (§90):** processo de variações (V1 Mesa de papel · V2 Cortiça/alfinete · V3 Lousa pontilhada → **V4 = V2+V3**: lousa quente `#efe7d9` + grade de pontos sutil + balões com alfinete e sombra difusa). Detalhe em `VISUAL_DECISIONS.md`.
- **Pontos opcionais:** toggle "Mostrar/Ocultar pontos" no próprio Mural, persistido em `localStorage` (`mural-dots`, padrão ligado) — personalização leve (§21).
- **Transição:** abre/fecha com fade+scale suave (§16); fecha com Esc.
- **Fora de escopo agora:** balões sugeridos (§17), banco/sessão persistida.
- **Reflete em:** `apps/web/src/app/leitura/mural.tsx`, `apps/web/src/app/leitura/leitura-view.tsx`, `APP_CONTEXT.md` §16/§17.

### Balões sugeridos no Mural (§17)
- **Decisão:** até **5** balões sugeridos (fantasma **tracejado**, distinto do papel das notas) com **perguntas de reflexão** curadas (§23), depois que a leitura começou.
- **Cadência (liberação por tempo, não em rajada):** um novo sugerido a cada ~2 min de **leitura real** acumulada (`SUGGESTION_INTERVAL_S`), começando com **1** — as ideias de anotação demoram a vir, então não despeja os 5 de uma vez. Some conforme o leitor escreve; acaba em 5 notas, e daí o leitor cria os próprios (§17).
- **Chamado (calmo, §9 estilo Apple):** ao abrir o Mural, os já liberados entram com leve escalonamento (`mural-fade-in`); o chamado de atenção combina **respiração** (`mural-breathe`) + **halo de acento** sálvia (`mural-halo`) — escolhidos num demo de 4 variações. Keyframes em `globals.css`. Descartado **piscar** (briga com a calma).
- **Consumo:** tocar um sugerido abre o composer naquele ponto (o prompt vira *placeholder*); ao guardar, vira **nota real** ali e aquele **slot é consumido** (`consumedSlots` no `leitura-view`), mantendo os demais no mesmo lugar.
- **Fechar/dispensar:** cada sugerido tem um **×** para dispensar individualmente (`dismissedSlots`, não volta na sessão); e um interruptor global **"Sugestões"** no cabeçalho desliga todos, lembrado em `localStorage` (como os pontos).
- **Posições:** **slots fixos periféricos** (determinísticos pelo índice), longe do centro onde as notas nascem; estáveis entre abrir/fechar (§17).
- **Estabilidade > não-sobreposição:** o §17 prioriza posição estável (anti-estresse). Por isso os slots são fixos e **não** recalculados para nunca encostar numa nota — recalcular moveria balões e geraria o estresse que o §17 quer evitar. Como os slots são periféricos e as notas nascem no centro, a sobreposição é rara.
- **Reflete em:** `apps/web/src/app/leitura/mural.tsx`, `apps/web/src/app/leitura/leitura-view.tsx`, `APP_CONTEXT.md` §17.
