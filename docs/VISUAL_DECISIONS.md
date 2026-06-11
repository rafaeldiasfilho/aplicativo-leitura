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
