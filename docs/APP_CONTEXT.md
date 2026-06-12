# APP_CONTEXT_MASTER — Contexto Mestre Profundo do Aplicativo

**Última atualização:** 2026-06-11 — contexto mestre ampliado com auditoria profunda de lacunas: leitura física/digital, PDF/EPUB/Kindle, plataformas futuras, skills, subagentes, beta, monetização, Home e Mente  
**Uso recomendado:** este é o documento principal para orientar e proteger o projeto no Claude Code, no VS Code e em qualquer implementação.

> Este documento não é uma transcrição literal de todos os chats. Ele consolida, aprofunda e organiza as decisões, ideias, regras, aprendizados, correções, hipóteses e caminhos definidos nas conversas sobre o aplicativo. Quando houver conflito entre uma ideia antiga e uma decisão mais recente, a decisão mais recente deve prevalecer.

> **Como usar estes documentos.** Este é o **arquivo profundo e histórico** do produto. Para o **estado vigente**, consulte os documentos derivados — a fonte viva e enxuta:
> - Decisões atuais → `docs/ACTIVE_DECISIONS.md` (datadas; **prevalecem** sobre o texto antigo daqui)
> - Princípios → `docs/PRODUCT_PRINCIPLES.md` · Tom de voz → `docs/UX_LANGUAGE.md` · Glossário → `docs/GLOSSARY.md`
> - Plano e tarefas → `docs/ROADMAP.md` · `docs/KANBAN.md` · Decisões visuais → `docs/VISUAL_DECISIONS.md`
> - Método → `docs/WORKFLOW.md` · Fontes de leitura → `docs/READING_SOURCES.md` · Privacidade → `docs/PRIVACY_AND_COPYRIGHT.md`
> - Skills/agentes → `docs/AI_AGENTS.md` · Ideias adiadas → `docs/FUTURE_IDEAS.md`

---

## 0. Estado atual da situação

Este é o primeiro aplicativo, sendo construído com calma em Linux, usando este documento como fonte de verdade de produto, UX e engenharia.

A prioridade é construir com clareza: arquitetura simples, documentação forte, validação incremental e ciclos pequenos, sem perder o contexto estratégico, emocional, visual e técnico do aplicativo.

Este documento fica salvo dentro do repositório em:

```text
docs/APP_CONTEXT.md
```

E deve ser usado como fonte de verdade para qualquer IA ou desenvolvedor que mexer no projeto.

### Princípios práticos de construção

- começar pelo menor ciclo de valor;
- criar documentação antes de código;
- criar esqueleto técnico antes de telas complexas;
- usar IA como executor disciplinado, não como piloto automático;
- registrar cada decisão nova em `docs/ACTIVE_DECISIONS.md`;
- manter um `docs/KANBAN.md` desde o início.

O projeto deve tratar aprendizados anteriores como **aprendizado de produto**, não como dependência técnica.

---

## 1. Nomes do projeto e decisão atual de linguagem

O projeto já passou por nomes como:

- IA LIVROS;
- Liv;
- LIV;
- Nous;
- SERENE.

A essência mais forte associada ao nome SERENE era:

- calma;
- silêncio;
- leveza;
- paz;
- presença;
- conforto;
- desaceleração;
- leitura profunda;
- organização da mente.

Porém, existe uma decisão recente importante:

> **Por enquanto, na documentação, interface, commits e nomes de arquivos, usar apenas “o aplicativo” ou “aplicativo”, sem prender o projeto a um nome definitivo.**

Isso evita que o produto fique preso a uma marca antes de a experiência estar madura.

Regra prática:

- em código/documentação atual: usar “aplicativo”;
- em contexto histórico: pode mencionar IA LIVROS, Liv, Nous e SERENE;
- em copy pública futura: decidir nome depois, quando a identidade visual e proposta estiverem mais estáveis.

---

## 2. Essência do aplicativo

O aplicativo não é só um app de cadastro de livros. Ele é uma tentativa de criar uma **memória intelectual viva** do leitor.

A essência definida nas conversas:

> Um espaço calmo para organizar livros, anotações, reflexões, memórias e tudo aquilo que a leitura despertou na pessoa.

Outra formulação forte:

> Toda a mente do leitor em um só lugar.

Outra formulação emocional:

> O aplicativo não deve fazer o leitor sentir que está trabalhando. Ele deve fazer o leitor sentir que está guardando uma parte importante da própria mente com calma, beleza e clareza.

O aplicativo deve unir:

- Biblioteca pessoal;
- sessões reais de leitura;
- anotações rápidas;
- reflexões;
- marca-textos;
- post-its;
- mural visual;
- tela Mente/cérebro;
- estatísticas com significado emocional;
- exportação organizada;
- histórico de leitura;
- memória de pensamentos;
- evolução pessoal do leitor.

---

## 3. Hipótese central do produto

A hipótese principal, alinhada com “A Startup Enxuta”, é:

> Leitores de livros físicos e digitais têm dificuldade em guardar, organizar, revisitar e transformar seus pensamentos de leitura em algo útil, bonito e pessoal.

O aplicativo precisa provar um ciclo mínimo:

1. a pessoa cadastra ou escolhe um livro;
2. inicia uma sessão de leitura;
3. anota algo rapidamente;
4. revisita essa anotação depois;
5. percebe valor real;
6. volta a usar o aplicativo.

Se esse ciclo não for validado, nenhuma função avançada importa.

### Métrica emocional de sucesso

A pergunta não é apenas “a pessoa clicou?”. A pergunta é:

> A pessoa sentiu que valeu a pena guardar aquele pensamento no aplicativo?

### Métrica comportamental de sucesso

O sinal mais forte é:

> O usuário volta espontaneamente para continuar lendo, anotar, revisar ou consultar a Mente.

---

## 4. Regra permanente de produto

Toda nova função precisa passar por este filtro:

- mantém calma?
- mantém clareza?
- melhora a organização?
- respeita a leitura profunda?
- deixa a interface mais fácil?
- evita pressão?
- evita poluição?
- evita sensação de tarefa/trabalho?
- ajuda o leitor a guardar algo importante?

Regra absoluta:

> **Se uma função poluir, cansar, confundir ou atrapalhar a leitura, ela deve ser simplificada, adiada ou repensada.**

A IA pode sugerir, organizar e executar, mas a decisão final de produto, experiência e identidade é humana.

---

## 5. O que o aplicativo não deve virar

O aplicativo não deve virar:

- dashboard corporativo;
- app genérico de notas;
- rede social;
- gamificação agressiva;
- ferramenta de produtividade pesada;
- app de metas que cobra o usuário;
- app cheio de telas e botões;
- clone de Notion;
- clone de Kindle;
- clone de Goodreads;
- app de IA que decide tudo pelo usuário;
- app que obriga categorias manuais demais;
- app que transforma leitura em obrigação.

Ele deve ser profundo por dentro, mas simples por fora.

Formulação importante:

> **Profundo por dentro, simples por fora.**

---

## 6. Público-alvo

### Público primário

- Leitores.

### Públicos possíveis

- professores;
- alunos;
- universitários;
- pesquisadores;
- empresários;
- pessoas que estudam;
- pessoas que gostam de organizar ideias;
- pessoas que leem desenvolvimento pessoal, negócios, filosofia, psicologia, neurociência, literatura, espiritualidade ou técnica;
- pessoas que querem guardar reflexões de livros;
- pessoas que querem uma memória intelectual pessoal.

### Persona principal

Pessoa que lê ou quer ler melhor, mas sente que perde pensamentos importantes. Ela quer organização e praticidade, mas não quer transformar leitura em uma tarefa fria, pesada ou burocrática.

### Dor central

A pessoa lê, marca, pensa, reflete, mas depois perde aquilo.

Dores específicas:

- esquece frases importantes;
- não sabe onde guardar reflexões;
- não quer rabiscar livro físico;
- usa notas soltas e se perde;
- sente que leu muito, mas não transformou em memória;
- quer ver a própria evolução;
- quer um espaço bonito para suas ideias;
- quer continuar lendo sem ficar configurando coisas.

---

## 7. Proposta de valor

Proposta simples:

> Um aplicativo para guardar livros, anotações e reflexões em uma memória de leitura calma, bonita e organizada.

Proposta emocional:

> Um lugar para guardar o que os livros despertam em você.

Proposta funcional:

> Organize seus livros, acompanhe seu tempo de leitura, registre anotações e transforme suas reflexões em uma Mente visual.

Proposta de landing page:

> Toda a mente do leitor em um só lugar.

---

## 8. Princípio de simplicidade atual

A direção recente é deixar o aplicativo mais clean e fácil de usar.

Havia uma preocupação de que o projeto atual tivesse ficado completo demais, pesado demais ou visualmente pouco agradável. A nova direção é:

- menos telas principais;
- menos opções visíveis de uma vez;
- mais foco no livro atual;
- mais foco em continuar leitura;
- mais foco em anotar com facilidade;
- menos “sistema grande”;
- mais sensação de app elegante, pessoal e calmo.

A estrutura principal deve tender a 4 áreas:

1. **Início**
2. **Biblioteca**
3. **Anotações**
4. **Mente**

Com um botão central **“+”** para adicionar rapidamente. O **Mural** é acessado de dentro do Modo Leitura, não como aba principal.

Áreas secundárias que podem ficar escondidas em menu/configurações:

- Exportar;
- Lixeira;
- Atalhos;
- Perfil;
- Configurações;
- Feedback;
- Beta/admin.

---

## 9. Direção visual

A direção visual deve ser:

- clean;
- calma;
- elegante;
- suave;
- minimalista;
- com toque premium;
- com animações leves;
- sem excesso de cards;
- sem dashboard corporativo;
- sem poluição de botões;
- sem cores gritantes;
- com hierarquia clara.

### Sensação desejada

O usuário deve sentir:

- calma;
- segurança;
- vontade de continuar;
- conforto;
- organização;
- que suas ideias têm valor;
- que o app é bonito, mas não chama mais atenção que o livro.

### Estilo de animação

Foi mencionada preferência por animações suaves estilo Apple.

Regra:

> Animação deve melhorar a sensação, não atrasar nem irritar.

---

## 10. Home / Tela inicial

A tela inicial anterior não agradou. A principal crítica foi que ela não mostrava bem os livros em leitura e parecia menos interessante do que deveria.

A Home deve ter foco em:

- livros que o usuário está lendo;
- capas dos livros;
- continuidade;
- progresso simples;
- botão claro para continuar;
- sensação de “voltar para onde parei”.

Ideia forte:

- capa grande do livro atual;
- progresso simples;
- tempo da sessão ou tempo total do livro;
- botão principal: **Continuar leitura**;
- lista/carrossel limpo dos livros em leitura;
- botão de foto acessível, mas sem poluir;
- mensagens humanas e sutis.

Evitar:

- muitos cards de estatística;
- muitos atalhos;
- tela parecida com admin/dashboard;
- excesso de texto explicativo;
- abrir com uma tela vazia sem vida.

### Home refinada escolhida / variações

Podem surgir variações da Home e Biblioteca. A decisão correta não é multiplicar protótipos duplicados, mas escolher com clareza a direção visual.

A “Home refinada” mencionada combinava:

- clareza do livro atual;
- continuidade;
- texto humano;
- acolhimento sem sentimentalismo excessivo;
- superfície principal limpa;
- foco em **Continuar leitura**.

---

## 11. Biblioteca

A Biblioteca organiza os livros do usuário.

Status definidos:

- Quero ler;
- Lendo;
- Pausado;
- Lido.

### Histórico vs leitura dentro do app

Livros lidos antes do aplicativo e livros lidos dentro do aplicativo devem ficar juntos na Biblioteca/Lidos, mas separados visualmente:

- **Histórico de leitura** — livros lidos antes do uso do aplicativo;
- **Lido no aplicativo** — livros lidos com tempo real registrado.

Isso é importante porque o usuário pode enriquecer a Mente e as estatísticas com livros antigos, mas o tempo real medido dentro do app não pode ser misturado sem distinção.

### Anotações retroativas

Livros já lidos devem permitir anotações retroativas.

Exemplos de linguagem:

- “Lembrou de algo importante sobre esse livro?”
- “Você pode registrar uma reflexão mesmo depois de já ter lido.”
- “Esse pensamento também faz parte da sua leitura.”

### Categorias da Biblioteca

A Biblioteca pode ter categorias manuais criadas pelo usuário, mas não deve depender delas.

Regras:

- categorias manuais são opcionais;
- um livro pode ter múltiplas categorias;
- a Biblioteca não pode parecer vazia por falta de categorias;
- categorias automáticas devem nascer principalmente na Mente;
- categorias da Mente podem ser sugeridas para virar categorias manuais da Biblioteca.

---

## 12. Mente / Cérebro

A tela Mente é uma das ideias centrais do aplicativo.

Ela representa:

- pensamentos;
- padrões;
- temas recorrentes;
- conexões entre livros;
- reflexões pessoais;
- evolução intelectual;
- evolução emocional;
- categorias automáticas;
- memória viva do leitor.

A Mente deve ser o “cérebro” do aplicativo.

Já foi decidido trocar o cérebro visual da tela Mente usando um modelo de cérebro enviado pelo usuário como referência.

### Regras da Mente

A Mente deve:

- ser visual;
- ser bonita;
- ser calma;
- organizar sem exigir esforço;
- mostrar temas que aparecem nas anotações;
- conectar livros e ideias;
- sugerir categorias automaticamente;
- não virar painel complexo.

### O que evitar na Mente

Evitar:

- gráfico técnico demais;
- excesso de linhas/conexões;
- visual de dashboard analítico;
- informações demais ao mesmo tempo;
- sensação de mapa mental confuso.

### Ideia de categoria automática

Se a pessoa tem muitas anotações sobre um tema, o app pode sugerir:

> “Você tem muitas ideias sobre este tema. Quer transformar isso em uma categoria da Biblioteca?”

---

## 13. Modo Leitura

O Modo Leitura é o coração da experiência.

Ele deve permitir que a pessoa leia sem distração, mas tenha as ferramentas necessárias por perto.

Funcionalidades:

- Iniciar leitura;
- Retomar leitura;
- Pausar;
- Finalizar;
- contador real;
- minimizar contador estilo picture-in-picture;
- criar anotação rápida;
- abrir Mural;
- tirar foto/anotar por imagem;
- finalizar com resumo.

### Regras do contador

O contador deve:

- contar apenas quando a leitura está ativa;
- pausar quando o usuário pausa;
- continuar rodando quando o Mural abre;
- acumular tempo total do livro;
- alimentar estatísticas;
- registrar sessões;
- ser confiável.

Regra importante:

> Abrir o Mural não deve pausar o tempo de leitura.

### Anotações durante leitura

As anotações devem começar escondidas por padrão para não distrair.

O usuário pode ativar a visualização em tempo real quando quiser.

Ao finalizar a sessão, o app mostra um resumo com todas as anotações feitas naquela leitura.

### Finalizar sessão

O botão de finalizar deve ser visível. O usuário não pode ficar preso ou confuso sobre como encerrar.

Ideia de animação final:

- anotações entram em um livro aberto;
- o livro se fecha;
- a sessão termina com sensação de conclusão.

---

## 14. Estatísticas

As estatísticas existem, mas não devem virar centro da experiência.

A estatística mais importante é emocional:

> **Tempo de vida dedicado aos livros.**

Ela pode aparecer em:

- horas;
- dias;
- talvez semanas ao longo do tempo.

### Tempo real vs tempo estimado

Separar claramente:

- tempo real medido dentro do aplicativo;
- tempo estimado de livros lidos antes do aplicativo.

Livros históricos (adicionados como "Já lido") usam tempo estimado: preferencialmente a duração do audiobook quando houver fonte de dados; enquanto isso, estimativa por páginas (média de leitura). Esse tempo entra na Mente, mas nunca deve ser confundido com tempo real registrado. (Decisão em `docs/ACTIVE_DECISIONS.md`.)

### Estatísticas possíveis

- tempo total lido;
- sessões concluídas;
- livros em andamento;
- livros lidos;
- anotações criadas;
- temas recorrentes;
- evolução por mês;
- categorias mais presentes;
- tempo por livro;
- tempo por tipo de leitura.

Mas todas devem ser secundárias à leitura e à Mente.

---

## 15. Anotações

Tipos definidos:

- Anotação rápida;
- Reflexão;
- Marca-texto;
- Post-it;
- Lembrança/nota retroativa.

A anotação rápida é o padrão.

Toda anotação deve poder ser:

- criada;
- editada;
- apagada;
- enviada para a Lixeira;
- restaurada, se necessário;
- associada a livro;
- associada a sessão, quando existir;
- associada a página, quando existir;
- associada a cor/tipo/origem.

### Identidade visual das anotações

Ao abrir uma anotação expandida:

- post-it abre como post-it maior;
- marca-texto mantém aparência de destaque;
- reflexão tem visual próprio;
- anotação rápida mantém simplicidade.

A anotação expandida deve ter ícone de lixeira no canto inferior direito.

### Organização da área Anotações

A área de Anotações deve permitir organização por:

- livro;
- sessão;
- tipo;
- data;
- cor;
- página;
- origem;
- categoria;
- histórico de leitura;
- lidos no aplicativo;
- criadas durante sessão;
- retroativas.

Filtros/ordenações desejadas:

- ordem alfabética;
- mais recentes;
- mais antigas;
- tipo;
- cor;
- livro;
- categoria;
- origem;
- histórico;
- sessão.

---

## 16. Modo Mural

O Modo Mural deve ser uma tela separada, tipo lousa branca.

Ele é o espaço de pensamento visual, onde as anotações aparecem como balões/post-its.

Regras principais:

- tela separada;
- transição suave ao abrir e fechar;
- anotações feitas fora do mural também aparecem nele;
- organização por ordem de adição;
- nova anotação começa no centro;
- balões têm o mesmo visual da tela Anotações;
- os balões não somem ao clicar;
- o Mural não pausa o contador de leitura;
- abrir o Mural não pode estressar o usuário.

### Mural e tempo de leitura

Correção importante das conversas:

> O tempo ao abrir o Mural não pode ser pausado. Tem que continuar rodando.

---

## 17. Balões sugeridos no Mural

Ideia central: ao iniciar a leitura, o aplicativo pode deixar balões prontos na tela para facilitar a anotação.

Objetivo:

> Facilitar o primeiro pensamento. O usuário olha, vê um espaço pronto, escreve e continua lendo.

Mas isso precisa ser feito com cuidado.

### Regras definidas

- sugerir até 5 balões;
- eles aparecem com atraso, não imediatamente;
- aparição suave;
- posições fixas dentro da sessão;
- não podem sobrepor notas existentes;
- não podem aparecer no mesmo lugar de um balão já escrito;
- ao sair e voltar para o Mural, os balões restantes continuam no mesmo lugar;
- se o usuário escreveu em 1 dos 5, sobram 4;
- depois de escrever em 2, sobram 3;
- até completar 5 anotações;
- depois disso, o usuário cria seus próprios balões.

### Motivo psicológico

Se o balão muda de lugar toda hora, causa:

- estresse;
- preguiça;
- sensação de bagunça;
- perda de familiaridade visual.

O cérebro do usuário se acostuma com o lugar onde a nota apareceu. Por isso, a posição deve ser estável durante a sessão.

---

## 18. Foto, OCR e captura rápida

Foi pensada uma função de tirar foto.

Locais possíveis:

- Home;
- Modo Leitura.

Motivo:

> O usuário pode entrar, tirar uma foto e sair do aplicativo; depois organiza com calma.

Recursos pensados:

- foto da capa do livro;
- IA busca capa oficial;
- foto de post-it físico;
- foto de anotação física;
- OCR/classificação automática;
- botão “Escrever página” para OCR de página inteira;
- marcador manual com “*” para indicar reflexão, ideia ou dúvida.

### Regra importante de IA/OCR

Quando a IA transcrever ou classificar uma foto de anotação física/post-it:

- ela deve sugerir o tipo correto de anotação;
- deve transcrever;
- deve mostrar revisão/confirmar antes de salvar;
- não deve salvar automaticamente sem chance de correção.

Esses recursos são importantes, mas não precisam entrar completos no MVP.

---

## 19. Lixeira

Tudo que for apagado deve ir para a Lixeira.

A Lixeira protege contra perda acidental de:

- anotações;
- livros;
- post-its;
- reflexões;
- registros importantes;
- dados de leitura.

Regra:

> Não excluir definitivamente sem ação clara do usuário.

---

## 20. Exportação

Exportação é função essencial, não Premium.

O usuário deve poder exportar de forma organizada:

- anotações;
- reflexões;
- marca-textos;
- dados de leitura;
- por livro;
- por categoria;
- por período;
- por tipo;
- possivelmente em formatos úteis para estudo.

A exportação deve ser bonita, clara e útil.

Ela deve reforçar a ideia de que o aplicativo guarda algo valioso.

---

## 21. Temas e personalização

Devem existir:

- tema claro;
- tema escuro;
- sincronizar com tema do sistema;
- cores de post-it;
- cores de marca-texto;
- personalização visual;
- escolha inicial de cores no onboarding;
- ajuste posterior em Configurações.

Mas personalização não deve virar bagunça.

Regra:

> Personalização deve dar identidade ao leitor, não poluir o aplicativo.

---

## 22. Onboarding

O onboarding deve ajudar sem cansar.

Objetivos:

- explicar a proposta;
- cadastrar livros em leitura;
- permitir adicionar livros já lidos;
- escolher cores iniciais;
- mostrar que anotações retroativas são possíveis;
- fazer a Mente nascer com dados.

### Por que adicionar livros já lidos?

Para que o usuário não comece do zero absoluto.

A Mente fica mais rica quando o usuário cadastra livros do histórico.

Mas essa etapa deve ser opcional e também possível depois.

---

## 23. Psicologia e linguagem do aplicativo

O aplicativo deve conversar como alguém calmo, não como um gerente de produtividade.

Tom:

- acolhedor;
- humano;
- leve;
- claro;
- sem sentimentalismo excessivo;
- sem cobrança;
- sem culpa;
- sem urgência artificial;
- sem gamificação agressiva.

### Frases e mensagens suaves

Ideias:

- balão sugerindo café;
- beber água;
- fazer uma pausa;
- comer algo;
- descansar os olhos;
- voltar com calma;
- registrar uma reflexão quando fizer sentido.

Essas mensagens devem aparecer como balões de pensamento, sem interromper a leitura.

Exemplos de tom:

- “Talvez seja uma boa hora para beber água.”
- “Quer guardar esse pensamento antes que ele escape?”
- “Sem pressa. Sua leitura continua aqui.”
- “Algumas ideias merecem voltar depois.”
- “Esse trecho parece ter ficado com você.”

Evitar:

- “Você precisa ler mais.”
- “Meta atrasada.”
- “Você está falhando.”
- “Complete sua sequência.”
- “Parabéns, você desbloqueou...” se parecer gamificação forçada.

---

## 24. Animações

Animações desejadas:

- transições suaves;
- Mural abrindo e fechando com calma;
- balões aparecendo suavemente;
- tela de espera com cérebro da Mente em movimento tipo bumerangue;
- animação final da sessão: anotações entram em um livro aberto e o livro se fecha;
- microinterações discretas em botões;
- hover com leve transparência e delay em estatísticas.

Regra:

> Animação é sensação, não enfeite gratuito.

---

## 25. Monetização

Regra mais importante:

> O coração do aplicativo não pode ser bloqueado no Premium.

Não bloquear no Premium:

- anotações ilimitadas;
- exportação organizada;
- estatísticas profundas;
- tela Mente completa;
- personalização visual;
- backup avançado;
- histórico completo;
- categorias;
- recursos de IA importantes;
- temas essenciais;
- funções centrais de leitura.

O usuário quer que as pessoas paguem por valor percebido e carinho pelo produto, não por pressão.

### Premium deve ser outra coisa

Premium pode explorar:

- experiências extras;
- relatórios avançados;
- templates especiais;
- automações de conveniência;
- visuais especiais não essenciais;
- participação em decisões;
- comunidade de fundadores;
- recursos profissionais avançados;
- pacotes de exportação muito refinados;
- personalizações especiais;
- IA mais profunda, desde que a base da IA importante continue acessível.

Ideia já discutida:

- plano tipo “Patrono/Fundador”, com valor emocional e participação, não bloqueio artificial.

---

## 26. Beta fechado

Foi planejado disponibilizar o aplicativo online para algumas pessoas testarem.

Decisões:

- não usar login demo compartilhado como fluxo principal;
- criar acesso individual por pessoa;
- pedir feedback de forma humana;
- agradecer pela ajuda;
- incentivar sugestões e melhorias;
- deixar claro que ideias são bem-vindas;
- usar “o aplicativo”, não necessariamente o nome do projeto.

### Abordagem para usuários

Tom desejado:

- natural;
- sem parecer propaganda;
- considerando que faz tempo que talvez o usuário não fale com essas pessoas;
- pedir ajuda real;
- induzir feedback útil;
- deixar a pessoa confortável para criticar.

### Feedback desejado

Perguntas importantes:

- Você entendeu para que serve o aplicativo?
- O que ficou confuso?
- A tela inicial te deu vontade de continuar?
- Você conseguiu cadastrar um livro?
- Você conseguiu iniciar uma leitura?
- Você sentiu vontade de anotar?
- O visual passou calma?
- Alguma coisa cansou ou atrapalhou?
- O que você mudaria?
- O que faria você voltar a usar?
- Que função você esperava encontrar?
- Você usaria isso na sua rotina real de leitura?

---

## 27. Beta privada implementada anteriormente

Em uma fase anterior, foi implementado:

- remoção de login demo compartilhado da UI;
- campos beta no perfil;
- handling de acesso pendente;
- `last_seen_at`;
- tabela `public.feedback`;
- modal calmo de feedback no menu e Configurações;
- área admin `/beta`;
- RLS do Supabase para beta;
- políticas restritivas de acesso beta;
- seed opcional por usuário beta;
- documentação atualizada;
- validação com typecheck, lint, build e smoke test.

Validações passaram:

```bash
pnpm typecheck
pnpm lint
pnpm build
```

Smoke test local anterior:

- `/` retornou 200;
- `/beta` retornou 200.

Pendências que exigiam contas beta reais:

- isolamento usuário A/B;
- criação de livros/notas/sessões;
- feedback por usuário;
- fluxo pendente/ativo.

---

## 28. Landing page

Objetivo da landing page:

- explicar a proposta;
- captar interessados/fundadores;
- comunicar calma e memória;
- diferenciar de app genérico de notas;
- mostrar que essenciais são para todos;
- preparar o beta.

Mensagem central:

> Toda a mente do leitor em um só lugar.

CTA possível:

> Entrar na lista de fundadores.

Seções sugeridas:

1. Hero com promessa emocional;
2. O problema: pensamentos de leitura se perdem;
3. A solução: guardar livros, notas e reflexões;
4. Mente: sua memória de leitura viva;
5. Como funciona: livro → leitura → anotação → Mural/Mente;
6. Essenciais para todos;
7. Convite para fundadores/beta;
8. FAQ.

---

## 29. Ideias futuras adiadas

Não são prioridade do MVP:

- audiobooks;
- Apple Watch/smartwatch;
- integração com Spotify;
- integração com YouTube;
- caneta inteligente;
- marca-texto inteligente físico;
- aplicativo separado para oportunidades profissionais;
- integração completa com áudio;
- rede social;
- marketplace;
- comunidade pública;
- IA muito complexa.

### Audiobooks

Foi discutido incluir pessoas que escutam audiobooks, mas a decisão foi deixar para atualização futura.

A ideia não é o app tocar audiobooks agora. O foco é manter a essência: leitura, anotações, reflexões, memórias e acompanhamento.

### Apple Watch/smartwatch

Também ficou para futura atualização.

### Aplicativo futuro separado

Existe uma ideia futura de criar outro aplicativo, depois que o principal conquistar confiança dos usuários.

Proposta desse app futuro:

- transformar conhecimento, reflexões e pensamentos selecionados em oportunidades profissionais;
- mostrar que tudo que a pessoa sabe pode abrir portas;
- talvez conectar conhecimento pessoal a carreira, empresas e contratações.

Regra:

> Essa ideia não deve desviar o foco do aplicativo principal.

---

## 30. MVP recomendado agora

Com base nas conversas e no pensamento de Startup Enxuta, o MVP não deve tentar entregar tudo.

O MVP deve provar o ciclo essencial:

1. criar conta/acesso;
2. cadastrar livro;
3. ver livros em leitura na Home;
4. iniciar sessão de leitura;
5. contador real funcionar;
6. criar anotação rápida;
7. finalizar sessão;
8. ver resumo;
9. encontrar a anotação depois;
10. ver algum reflexo inicial na Mente ou no Mural.

### O que entra no MVP

- Auth básica;
- Biblioteca básica;
- Home limpa com livros em leitura;
- Modo Leitura com timer real;
- Anotação rápida;
- Reflexão/Post-it/Marca-texto simples;
- Mural básico;
- Mente inicial simples;
- Lixeira básica;
- Configurações mínimas;
- feedback beta;
- exportação simples, se possível.

### O que não precisa entrar no MVP

- OCR completo;
- IA avançada;
- audiobooks;
- smartwatch;
- relatórios avançados;
- personalização profunda;
- animações complexas;
- integração Spotify/YouTube;
- app futuro de carreira;
- sistema Premium completo.

---

## 31. Tecnologia e arquitetura

Stack definida/planejada:

- Next.js;
- TypeScript;
- Tailwind CSS;
- Supabase;
- Git/GitHub;
- Vercel possivelmente para deploy;
- Claude Code/ChatGPT como apoio;
- Linux como ambiente de desenvolvimento.

Páginas/áreas já existentes ou planejadas:

- `/` Home;
- `/biblioteca`;
- `/anotacoes`;
- `/mente`;
- `/configuracoes`;
- `/lixeira`;
- `/exportar`;
- `/atalhos`;
- `/perfil`;
- `/beta`.

### Princípio técnico

> Não deixar a IA criar funcionalidades sem entender o banco, segurança, estado e experiência.

---

## 32. Supabase e dados

Supabase é usado/planejado para:

- autenticação;
- perfis;
- livros;
- anotações;
- sessões de leitura;
- feedback beta;
- isolamento por usuário;
- RLS;
- possivelmente storage de imagens/capas/fotos.

Regras críticas:

- não mexer em banco, auth, RLS ou migrações sem autorização explícita;
- nunca apagar dados do usuário;
- não criar migração aleatória sem entender schema;
- validar schema antes de alterar código;
- proteger isolamento de usuários;
- testar acesso usuário A/B;
- manter tipos TypeScript alinhados com schema.

Erro antigo importante:

```text
Could not find the 'reading_session_id' column of 'notes' in the schema cache
```

Aprendizado:

- código e banco precisam estar sincronizados;
- migração precisa ser aplicada de verdade;
- tipos precisam ser atualizados;
- cache/schema do Supabase pode precisar ser conferido;
- não assumir que coluna existe só porque o código usa.

---

## 33. Modelo conceitual de dados

Não é schema final, mas o projeto provavelmente precisa de entidades como:

### profiles

- id;
- nome;
- email;
- status beta;
- created_at;
- last_seen_at;
- preferências.

### books

- id;
- user_id;
- title;
- author;
- cover_url;
- status;
- total_pages;
- current_page;
- source/origin: histórico ou app;
- created_at;
- updated_at.

### reading_sessions

- id;
- user_id;
- book_id;
- started_at;
- paused_at;
- ended_at;
- elapsed_seconds;
- status;
- notes_count.

### notes

- id;
- user_id;
- book_id;
- reading_session_id nullable;
- type;
- content;
- page;
- color;
- origin;
- position_x;
- position_y;
- created_at;
- updated_at;
- deleted_at.

### feedback

- id;
- user_id;
- message;
- area;
- rating/opcional;
- created_at.

### categories / tags

- id;
- user_id;
- name;
- type: manual/automatic;
- source;
- created_at.

### book_categories / note_categories

- relação muitos-para-muitos.

---

## 34. Regras de segurança

- Todo dado do usuário deve ter `user_id`.
- RLS deve garantir que cada usuário veja apenas seus dados.
- Admin beta deve ser protegido.
- Feedback deve ser associado ao usuário, quando logado.
- Dados apagados devem ir para lixeira/soft delete quando possível.
- Não usar login demo compartilhado como fluxo principal de beta real.
- Nunca expor dados de outro usuário.

---

## 35. Desenvolvimento com IA

Ferramentas discutidas:

- ChatGPT;
- Claude Code;
- VS Code;
- Linux/WSL.

Regra:

> IA é equipe de apoio, não piloto automático.

Fluxo obrigatório:

1. pedir;
2. revisar;
3. testar;
4. documentar;
5. commitar com clareza;
6. só depois considerar pronto.

A análise do blog e do vídeo do Akita reforçou isso:

- IA acelera quem sabe revisar;
- IA não substitui engenharia;
- código gerado precisa de teste;
- segurança, banco, arquitetura e UX continuam sendo responsabilidade humana;
- contexto escrito é parte do produto;
- prompts devem funcionar como especificações;
- o fundador/desenvolvedor continua responsável por direção, escopo e critérios de pronto.

---

## 36. Método Akita aplicado ao desenvolvimento com IA

Esta seção consolida o que devemos aproveitar do vídeo **“O Método Fábio Akita para programar com IA”**, do canal Mano Deyvin, e do blog **“RANT: o Akita abriu as pernas pra IA??”**, do Fábio Akita.

### Observação de fonte

O vídeo foi identificado como **“O Método Fábio Akita para programar com IA”**. A descrição pública apresenta a ideia como o “Jeito Akita” de programar com IA e reforça que o segredo não está na ferramenta, mas na **engenharia de software por trás dos prompts**. Como não houve acesso confiável à transcrição integral do vídeo, esta seção usa: descrição pública do vídeo, resumos públicos e o blog escrito do Akita como fonte principal de interpretação.

### Ideia central aproveitada

A ideia principal para o nosso projeto é:

> **Programar com IA não é pedir para a IA criar o sistema. É projetar o sistema com clareza e usar a IA para executar partes pequenas, testáveis e revisáveis.**

O Akita defende que IA é útil, mas perigosa quando usada por quem não sabe revisar, testar, proteger e decidir. O problema não é usar IA. O problema é deixar a IA gerar código, banco, autenticação, segurança e deploy sem engenharia.

Para o aplicativo, isso vira uma regra absoluta:

> **A IA pode escrever código, mas não pode ser dona da arquitetura, da segurança, da experiência do usuário nem da decisão de produto.**

### O que aproveitamos do vídeo

Aproveitar:

- o desenvolvedor/fundador é o arquiteto;
- a IA é executor/par de programação;
- contexto escrito é obrigatório;
- prompts bons são especificações, não desejos vagos;
- testes e validações protegem contra alucinação;
- arquitetura vem antes de componente bonito;
- o projeto deve nascer com documentação viva;
- cada tarefa deve ser pequena, verificável e reversível;
- se a IA errar, atualizar a documentação/instrução e mandar corrigir, em vez de aceitar remendos invisíveis;
- não subir nada para produção sem revisar segurança, build e comportamento real.

Não aproveitar de forma literal:

- fazer tudo sem nunca tocar manualmente no código;
- transformar o desenvolvimento em desafio de velocidade;
- priorizar “produzir muito” acima de validar o produto;
- copiar estilo agressivo de comunicação do Akita para o aplicativo;
- confundir método de desenvolvimento com experiência do usuário.

O aplicativo precisa ser calmo, humano e simples. O método de IA pode ser rígido nos bastidores, mas a experiência final não pode parecer técnica, pesada ou fria.

### O que aproveitamos do blog

Do blog, aproveitar principalmente:

- evitar empolgação cega com IA;
- evitar rejeição cega de IA;
- tratar IA como ferramenta poderosa, não como inteligência mágica;
- lembrar que IA não substitui engenharia;
- revisar código gerado antes de confiar;
- proteger banco, RLS, auth, dados e produção;
- não lançar app com banco exposto ou sem entender riscos;
- usar IA para remover tarefas mundanas e focar em hipóteses, testes, produto e decisões;
- manter postura de dono do sistema, não de passageiro.

A frase operacional para o projeto:

> **IA acelera execução; engenharia protege direção.**

### Regra anti-vibe-coding do aplicativo

É proibido trabalhar assim:

```text
Pedir: “crie o aplicativo inteiro” → aceitar tudo → rodar se der → subir para produção.
```

O fluxo correto é:

```text
Contexto → decisão → especificação → tarefa pequena → código → teste → revisão → documentação → commit.
```

Antes de qualquer código, criar:

```text
docs/APP_CONTEXT.md
docs/PRODUCT_PRINCIPLES.md
docs/ROADMAP.md
docs/KANBAN.md
docs/ACTIVE_DECISIONS.md
docs/UX_LANGUAGE.md
CLAUDE.md
README.md
```

Depois, criar o esqueleto técnico mínimo:

```text
Next.js App Router
TypeScript
Tailwind
ESLint
componentes base
tokens visuais
layout shell
rotas vazias
testes/validações mínimas
```

Só depois começar funcionalidades reais.

### Fluxo de trabalho obrigatório com IA

Para cada tarefa:

1. Definir o objetivo humano da tarefa.
2. Confirmar se ela pertence ao MVP ou deve ir para futuro.
3. Escrever uma especificação curta.
4. Pedir para a IA listar arquivos que pretende alterar.
5. Autorizar somente escopo pequeno.
6. Rodar validações.
7. Revisar visualmente e funcionalmente.
8. Atualizar documentação se a decisão mudou.
9. Fazer commit pequeno.
10. Só então avançar.

Comandos mínimos depois de alterações:

```bash
pnpm typecheck
pnpm lint
pnpm build
```

Quando houver testes automatizados:

```bash
pnpm test
```

### Política de erro da IA

Quando a IA errar:

- não aceitar “gambiarra” sem entender;
- não permitir mudanças enormes para corrigir erro pequeno;
- explicar o erro no prompt seguinte;
- atualizar `docs/ACTIVE_DECISIONS.md` se o erro revelou uma regra nova;
- pedir correção pequena;
- rodar validações novamente.

Regra:

> **Erro da IA vira melhoria de contexto.**

### AI Jail / segurança local

Como o projeto está recomeçando no Linux, devemos criar uma camada de segurança para trabalhar com agentes.

Regras:

- nunca colar secrets reais em prompt;
- nunca commitar `.env`;
- usar `.env.example`;
- limitar permissões da IA quando possível;
- preferir branch por tarefa;
- revisar `git diff` antes de commit;
- não rodar comandos destrutivos sugeridos por IA sem entender;
- considerar Docker/devcontainer para isolar ambiente quando o projeto amadurecer;
- bloquear acesso a arquivos sensíveis quando a ferramenta permitir.

Comandos perigosos exigem revisão humana:

```bash
rm -rf
sudo
drop table
truncate
git reset --hard
git clean -fd
force push
```

### Aplicação direta ao desenvolvimento

A construção deve seguir o método:

1. **Documentar antes de codar.** Este arquivo vira `docs/APP_CONTEXT.md`.
2. **Criar PRD curto.** Não um documento gigante; um PRD que prove o ciclo mínimo.
3. **Criar arquitetura simples.** Rotas, entidades, dados, UI base e decisões.
4. **Criar design system mínimo.** Tokens, botões, cards, inputs, badges e layout.
5. **Criar Home estática.** Sem banco no início, apenas para validar sensação visual.
6. **Criar Biblioteca mínima.** Livros em leitura, todos os livros e livro atual.
7. **Criar Modo Leitura mínimo.** Timer real + anotação rápida.
8. **Criar revisão de anotação.** O valor aparece quando o usuário volta.
9. **Só depois Supabase.** Banco entra quando fluxo local/visual estiver claro.
10. **Só depois Mente/Mural avançados.** Não começar pelo mais complexo.

### O que entra no CLAUDE.md por causa do método Akita

Adicionar ao `CLAUDE.md`:

```md
## Método de trabalho com IA

Você é executor técnico, não dono do produto.

Antes de alterar arquivos:
- leia docs/APP_CONTEXT.md;
- explique objetivo;
- liste arquivos que pretende alterar;
- mantenha escopo pequeno;
- não mexa em auth, banco, RLS ou deploy sem autorização;
- não reescreva o projeto inteiro;
- não faça comandos destrutivos;
- depois rode typecheck, lint e build.

Trabalhe como engenharia de software aplicada à IA:
contexto → especificação → implementação pequena → validação → documentação → commit.
```

### Checklist anti-desastre antes de produção

Antes de qualquer deploy público/beta:

- RLS revisado;
- autenticação funcionando;
- dados isolados por usuário;
- `.env` fora do Git;
- build passando;
- lint passando;
- fluxo principal testado manualmente;
- nenhuma chave exposta no front-end;
- nenhuma tabela pública por acidente;
- feedback beta funcionando;
- backup/estratégia de dados definida;
- termos mínimos de privacidade planejados;
- logs de erro básicos definidos.

### Decisão adicionada ao contexto mestre

A partir desta análise, o desenvolvimento do aplicativo deve seguir este princípio:

> **Vamos programar com IA, mas construir como engenheiros: documentação, contexto, escopo pequeno, testes, revisão, segurança e commits claros.**

---

## 37. Claude Code

Antes de usar Claude Code, criar contexto do projeto.

Arquivo recomendado no repositório:

```text
CLAUDE.md
```

Também manter:

```text
docs/APP_CONTEXT.md
docs/PRODUCT_PRINCIPLES.md
docs/ACTIVE_DECISIONS.md
docs/FUTURE_IDEAS.md
docs/WORKFLOW.md
```

### Regras para Claude Code

- não alterar arquivos antes de explicar plano;
- não alterar Supabase, auth, RLS ou migrações sem autorização;
- não mudar rota `/` sem permissão;
- não remover dados ou funcionalidades;
- rodar typecheck, lint e build depois;
- manter app clean, calmo e fácil;
- decisões finais são humanas;
- evitar “git add .” sem revisar;
- fazer commits pequenos e claros.

### Primeira tarefa ideal para Claude Code

```text
Leia o projeto inteiro e me entregue um resumo da arquitetura atual, principais rotas, componentes importantes, dependências, riscos e próximos passos. Não altere nenhum arquivo.
```

### Prompt inicial recomendado

```text
Leia docs/APP_CONTEXT.md e entenda completamente o contexto do aplicativo. Não altere nenhum arquivo ainda. Depois me entregue um resumo da arquitetura atual, riscos, pendências e próximos passos.
```

---

## 38. Linux e preparação do ambiente

O usuário instalou Linux e apagou o sistema anterior.

Ambiente recomendado:

1. atualizar sistema;
2. instalar Git, curl, build-essential;
3. configurar Git;
4. instalar Node via nvm;
5. instalar Claude Code;
6. clonar o repositório em pasta limpa;
7. rodar `pnpm install`;
8. rodar validações.

Validações:

```bash
pnpm typecheck
pnpm lint
pnpm build
```

Regra:

> Não começar mexendo em tela. Primeiro recuperar ambiente, contexto, dependências, build e Git.

---

## 39. Documentos recomendados no repositório

Criar pasta:

```text
docs/
```

Arquivos:

```text
docs/APP_CONTEXT.md
docs/PRODUCT_PRINCIPLES.md
docs/UX_LANGUAGE.md
docs/ACTIVE_DECISIONS.md
docs/FUTURE_IDEAS.md
docs/DEFERRED_IDEAS.md
docs/WORKFLOW.md
docs/ROADMAP.md
docs/KANBAN.md
docs/VISUAL_DECISIONS.md
```

### APP_CONTEXT.md

Contexto geral do produto.

### PRODUCT_PRINCIPLES.md

Regras fixas de produto.

### UX_LANGUAGE.md

Tom de voz, frases, mensagens, microcopy.

### ACTIVE_DECISIONS.md

Decisões atuais e mais recentes.

### FUTURE_IDEAS.md

Ideias para depois.

### DEFERRED_IDEAS.md

Ideias conscientemente adiadas.

### WORKFLOW.md

Como usar IA, Git, testes e commits.

### ROADMAP.md

Plano de evolução do aplicativo em fases.

### KANBAN.md

Tarefas atuais.

### VISUAL_DECISIONS.md

Variações visuais, escolhas e motivos.

---

## 40. Startup Enxuta aplicada

Discussão importante: o aplicativo tinha uma visão grande demais para ser construído todo de uma vez.

Com base em A Startup Enxuta, aprendizados:

- validar hipóteses com usuários reais;
- medir antes de construir demais;
- focar no MVP;
- evitar excesso de funcionalidades;
- aprender com feedback;
- não confundir visão grande com produto inicial grande;
- criar ciclos construir-medir-aprender;
- não gastar tempo polindo função que ninguém usa;
- beta fechado é mais importante que feature futura.

### Ciclo sugerido

1. Construir versão mínima;
2. Colocar 3 a 10 usuários reais;
3. Observar onde travam;
4. Coletar feedback;
5. Ajustar Home/Leitura/Anotação;
6. Repetir.

---

## 41. Regras de Git e trabalho

Antes de mexer:

```bash
git status
pnpm typecheck
pnpm lint
pnpm build
```

Criar branch:

```bash
git checkout -b nome-da-branch
```

Commits devem ser claros:

- `chore: adiciona contexto mestre do aplicativo`
- `docs: registra princípios de produto`
- `feat: adiciona home limpa com livros em leitura`
- `fix: mantém timer ativo ao abrir mural`
- `refactor: simplifica navegação principal`

Evitar commits genéricos:

- `update`
- `final`
- `arruma tudo`
- `teste`

---

## 42. Riscos já identificados

### Produto

- construir funcionalidades demais antes de validar;
- app ficar pesado;
- usuário não entender a proposta;
- Home parecer dashboard;
- Mente ficar confusa;
- Mural gerar estresse se balões mudarem de lugar;
- anotações distraírem durante leitura;
- Premium parecer bloqueio injusto;
- onboarding cansar;
- feedback beta ser genérico demais.

### Técnico

- Supabase schema desalinhado;
- RLS incorreta;
- dados de usuário vazando;
- timer impreciso;
- sessão de leitura perder estado;
- build quebrar;
- IA alterar arquivos demais;
- código virar bagunça;
- deploy sem validação.

### UX

- telas com botões demais;
- animações lentas;
- cores demais;
- categorias manuais complexas;
- filtros avançados muito cedo;
- empty states frios;
- linguagem com cobrança.

---

## 43. Prioridade de construção agora

Ordem recomendada:

1. Salvar este documento no projeto.
2. Criar `CLAUDE.md`.
3. Configurar o repositório.
4. Instalar dependências.
5. Rodar typecheck/lint/build.
6. Garantir a base técnica limpa.
7. Manter o esqueleto técnico simples e organizado.
8. Definir MVP enxuto.
9. Refazer/ajustar Home e Biblioteca.
10. Garantir Modo Leitura com timer real.
11. Garantir Anotação rápida.
12. Garantir Mural básico sem pausar timer.
13. Garantir feedback beta.
14. Só depois avançar para IA/OCR/Mente avançada.

---

## 44. Decisão sobre construir com simplicidade

O aplicativo deve nascer pequeno e limpo, crescendo com calma.

Caminho correto:

- preservar as decisões boas já tomadas;
- construir com clareza, uma área de cada vez;
- descartar o que polui;
- não multiplicar protótipos duplicados sem necessidade;
- manter cada versão menor e mais limpa do que a vontade de fazer tudo de uma vez.

---

## 45. Regras para a interface limpa

- Menos botões na Home.
- Mais foco no livro atual.
- Menos áreas na navegação principal.
- Mente como área especial; Mural acessado de dentro do Modo Leitura.
- Exportar/Lixeira/Atalhos/Perfil em área secundária.
- Estatísticas escondidas ou sutis.
- IA escondida atrás de benefícios, não exposta como “olha a IA”.
- Texto curto.
- Cards grandes somente quando úteis.
- Espaço vazio é parte do design.
- Não explicar tudo o tempo todo.

---

## 46. Fluxo ideal do usuário

### Primeiro uso

1. usuário entra;
2. entende que é um espaço para guardar leitura e pensamentos;
3. adiciona livro atual ou livro já lido;
4. escolhe cores iniciais, se fizer sentido;
5. vai para Home;
6. vê livro em leitura;
7. clica em Continuar/Iniciar leitura.

### Durante leitura

1. contador começa;
2. usuário lê;
3. se quiser, faz anotação rápida;
4. pode abrir Mural;
5. Mural não pausa o tempo;
6. pode usar balões sugeridos;
7. finaliza sessão.

### Depois da leitura

1. vê resumo;
2. vê anotações da sessão;
3. sente que guardou algo;
4. pode revisar depois;
5. Mente começa a organizar padrões.

---

## 47. Microcopy importante

Evitar textos frios como:

- “Adicionar item”;
- “Registro criado”;
- “Erro ao submeter entidade”.

Preferir:

- “Adicionar livro”;
- “Guardar anotação”;
- “Continuar leitura”;
- “Sua leitura ficou salva.”;
- “Não consegui salvar agora. Tente novamente.”;
- “Lembrou de algo desse livro?”;
- “Guardar pensamento”;
- “Ver minha Mente”.

---

## 48. O que não podemos perder

Não perder:

- essência de calma;
- leitura profunda;
- memória intelectual;
- segunda mente emocional;
- Mente como cérebro do leitor;
- Mural como espaço livre e calmo;
- anotações com identidade visual;
- timer real confiável;
- livros lidos antes e no app separados visualmente;
- histórico retroativo;
- exportação gratuita;
- funções essenciais gratuitas;
- beta com feedback honesto;
- app clean e fácil;
- decisões humanas acima da IA;
- regra de não poluir;
- foco em validar antes de construir demais.

---

## 49. Comando emocional do projeto

Este é o comando central:

> **O aplicativo não deve fazer o leitor sentir que está trabalhando. Ele deve fazer o leitor sentir que está guardando uma parte importante da própria mente com calma, beleza e clareza.**

E o filtro final:

> **Se não ajuda o leitor a ler, guardar, lembrar ou entender melhor a própria mente, talvez não deva estar na primeira versão.**

---

## 50. Prompt mestre para colar no Claude Code

```text
Você está trabalhando no projeto do aplicativo de leitura e memória intelectual.

Antes de qualquer alteração, leia docs/APP_CONTEXT.md.

Regras absolutas:
- mantenha a interface clean, calma e fácil de usar;
- não transforme o aplicativo em dashboard corporativo;
- não polua telas;
- trabalhe pelo método: contexto → especificação → implementação pequena → validação → documentação → commit;
- não reescreva o projeto inteiro de uma vez;
- não altere Supabase, auth, RLS, schema ou migrações sem autorização explícita;
- não remova dados, rotas ou funcionalidades sem autorização;
- não altere a rota principal `/` sem explicar antes;
- não faça mudanças grandes em vários lugares sem plano;
- sempre explique arquivos que pretende alterar;
- depois de alterar, rode pnpm typecheck, pnpm lint e pnpm build;
- registre decisões relevantes em docs/ACTIVE_DECISIONS.md ou docs/VISUAL_DECISIONS.md.

A prioridade do produto é:
- Home limpa com livros em leitura;
- Biblioteca simples;
- Modo Leitura com timer real;
- Anotação rápida;
- Mural sem pausar o timer;
- Mente visual e calma;
- feedback beta útil.

Não implemente ideias futuras como audiobooks, smartwatch, Spotify/YouTube, OCR avançado ou app profissional separado sem autorização.

Primeiro, apenas leia o projeto e entregue um diagnóstico da arquitetura, riscos, dependências, rotas, estado do banco e próximos passos. Não altere arquivos.
```

---

## 51. Prompt para auditar a Home

```text
Analise a Home atual do aplicativo com base em docs/APP_CONTEXT.md.

Objetivo: deixar a Home mais clean, fácil e focada nos livros em leitura.

Verifique:
- se a tela mostra claramente o livro atual;
- se existe botão forte de Continuar leitura;
- se há excesso de cards;
- se parece dashboard corporativo;
- se os livros em leitura aparecem com capas;
- se a hierarquia visual está clara;
- se funções secundárias estão ocupando espaço demais;
- se a linguagem está humana e calma.

Não altere arquivos ainda. Entregue diagnóstico e proposta de simplificação.
```

---

## 52. Prompt para auditar o Mural

```text
Analise o Modo Mural com base em docs/APP_CONTEXT.md.

Regras obrigatórias:
- abrir o Mural não pode pausar o contador de leitura;
- balões sugeridos devem manter posição fixa durante a sessão;
- balões não podem sobrepor anotações existentes;
- até 5 sugestões por sessão;
- sugestões restantes devem continuar no mesmo lugar quando o usuário sai e volta;
- nova anotação começa no centro;
- visual deve ser calmo, tipo lousa branca.

Não altere arquivos ainda. Entregue diagnóstico, riscos e plano de correção.
```

---

## 53. Prompt para auditar Supabase

```text
Audite o uso de Supabase no projeto.

Objetivo: verificar alinhamento entre código, tipos TypeScript, tabelas, RLS e migrações.

Atenção especial ao erro antigo:
Could not find the 'reading_session_id' column of 'notes' in the schema cache

Não crie migrações ainda. Primeiro liste:
- tabelas usadas pelo código;
- colunas esperadas;
- tipos TypeScript;
- queries principais;
- possíveis desalinhamentos;
- riscos de RLS;
- pontos que precisam de validação manual.
```

---

## 54. Prompt para definir MVP

```text
Com base em docs/APP_CONTEXT.md, proponha um MVP enxuto do aplicativo.

O MVP deve provar o ciclo:
cadastrar livro → iniciar leitura → anotar rápido → finalizar sessão → revisar anotação → sentir valor → voltar.

Separe em:
- Essencial agora;
- Importante depois;
- Futuro/adiei;
- Riscos;
- Critérios de pronto;
- O que medir no beta.

Não implemente nada ainda.
```

---

## 55. Critérios de pronto

Uma tarefa só pode ser considerada pronta se:

- respeita o contexto do produto;
- não polui a interface;
- não quebra o build;
- foi testada minimamente;
- não prejudica dados do usuário;
- não viola RLS/segurança;
- foi documentada se mudou decisão;
- passou typecheck/lint/build;
- tem commit claro.

---

## 56. Fontes externas incorporadas ao contexto

Fontes analisadas para esta atualização:

- Vídeo: **“O Método Fábio Akita para programar com IA”** — canal Mano Deyvin. Ideia aproveitada: método disciplinado de programação com IA, com engenharia de software, contexto, testes, segurança e revisão.
- Blog: **“RANT: o Akita abriu as pernas pra IA??”** — AkitaOnRails, publicado em 24 de fevereiro de 2026. Ideia aproveitada: IA é ferramenta útil, mas não substitui conhecimento técnico; existem riscos reais quando se usa IA sem revisão, segurança e engenharia.
- Documentação do Claude Code. Ideia aproveitada: manter `CLAUDE.md`/memória de projeto, regras de trabalho, permissões e validações.

Como essas fontes afetam o aplicativo:

- reforçam que o desenvolvimento deve começar por documentação e arquitetura;
- reforçam que o projeto deve ser pequeno, testável e reversível;
- reforçam que a IA não decide produto;
- reforçam que Supabase, auth, RLS e dados do usuário exigem cuidado humano;
- reforçam que o aplicativo deve nascer limpo, com contexto bem definido e implementação cuidadosa.

---

## 57. Frase final de alinhamento

> **O aplicativo é uma memória de leitura calma, não uma máquina de produtividade.**

---

## 58. Auditoria profunda de lacunas — terceira consolidação

Esta seção registra itens que ainda estavam sub-representados no contexto mestre, apesar de já terem aparecido nas conversas. Ela deve ser lida como uma camada de reforço, não como substituição das seções anteriores.

A lacuna principal identificada foi esta:

> O aplicativo não é apenas um gerenciador de livros e anotações. Ele precisa ser uma **camada de leitura e memória** que funcione tanto para leitura física quanto para leitura digital dentro ou fora do aplicativo.

As áreas que precisavam ficar mais explícitas:

- leitura dentro do aplicativo por PDF;
- leitura digital por EPUB;
- conexão/importação com Kindle;
- outras plataformas futuras;
- audiobooks e conteúdos escutados como possibilidade futura;
- Apple Watch/smartwatch como captura rápida futura;
- caneta inteligente/OCR como ponte entre leitura física e digital;
- skills e subagentes para desenvolvimento com Claude Code;
- beta fechado com contas individuais;
- Home com capas dos livros em leitura;
- exibição do nome do usuário em vez de e-mail;
- premium sem bloquear o coração do produto;
- abordagem de feedback com ideias, sugestões, críticas e agradecimento.

Regra desta consolidação:

> Quando uma ideia antiga não contradiz a direção atual de simplicidade, ela deve ser preservada como contexto, mesmo que fique para fase futura.

---

## 59. Dois modos centrais: leitor interno e companheiro de leitura externa

O aplicativo precisa aceitar dois comportamentos diferentes do usuário.

### 57.1. Companheiro de leitura externa

Este é o caso do usuário que lê fora do aplicativo:

- livro físico;
- Kindle;
- Kobo;
- Apple Books;
- Google Play Livros;
- PDF em outro leitor;
- audiobook;
- vídeo/aula/podcast relacionado a livro ou estudo.

Nesse modo, o aplicativo não precisa ser o lugar onde a leitura acontece. Ele é o lugar onde a memória da leitura é guardada.

O fluxo deve ser:

```text
li fora do app → capturei pensamento → salvei no aplicativo → organizei depois → revi na Mente
```

### 57.2. Leitor interno

Este é o caso do usuário que quer ler dentro do próprio aplicativo, principalmente por:

- PDF enviado pelo usuário;
- EPUB sem DRM enviado pelo usuário;
- documentos próprios.

Nesse modo, o aplicativo também vira leitor, mas sem perder a calma.

O fluxo deve ser:

```text
abri PDF/EPUB no app → li → marquei/anotei → finalizei sessão → revisão/Mente/Mural
```

### 57.3. Regra de produto

> O aplicativo não pode forçar todo leitor a ler dentro dele, nem pode ignorar quem quer ler dentro dele.

Portanto, a arquitetura deve permitir:

- livro sem arquivo;
- livro com PDF;
- livro com EPUB;
- livro com importação Kindle;
- livro com anotações manuais;
- livro com fotos/OCR;
- livro com áudio/notas futuras.

---

## 60. Matriz de fontes de leitura

Esta matriz deve orientar o roadmap.

| Fonte | Papel no produto | Prioridade | Regra |
|---|---|---:|---|
| Livro físico | Núcleo emocional do app | Alta | O app acompanha a leitura sem substituir o livro |
| Livro histórico já lido | Enriquece Mente e histórico | Alta | Pode receber anotações retroativas |
| PDF enviado pelo usuário | Leitura interna | Alta/média | Privado, sem compartilhamento, sem DRM bypass |
| EPUB sem DRM | Leitura interna adaptável | Média | Não prometer abrir EPUB protegido |
| Kindle highlights | Importação/memória externa | Média | Começar manual/revisável; não prometer sync total |
| Kobo/Apple Books/Google Play | Futuro/importação | Baixa/média | Entrar como importação, não como dependência |
| Audiobook | Futuro | Baixa | Não virar player de áudio no MVP |
| Spotify/YouTube | Futuro | Baixa | Possível registro de ideias, não player/clonagem |
| Foto de post-it/anotação | Ponte físico-digital | Média | OCR/classificação futura |
| Caneta inteligente | Futuro | Baixa | Só depois de validar núcleo |
| Apple Watch/smartwatch | Futuro | Baixa | Captura rápida/tempo, não MVP |
| Nota solta/“só salvar” | Entrada universal | Alta | Vai para Caixa de Entrada Intelectual |

Regra:

> Todas as fontes podem alimentar a memória, mas nem todas precisam existir no MVP.

---

## 61. Leitura por PDF dentro do aplicativo — aprofundamento

O usuário mencionou explicitamente que quer a opção de ler no aplicativo por meio do PDF do livro inserido.

Isso deve ser tratado como uma frente real do produto, não como detalhe secundário.

### 59.1. O que o leitor de PDF deve ser

Um leitor simples, calmo e integrado ao sistema de anotações.

Ele deve permitir:

- abrir PDF enviado pelo usuário;
- associar PDF a um livro da Biblioteca;
- registrar página atual;
- iniciar/pausar/retomar/finalizar sessão;
- criar anotação rápida vinculada à página;
- criar reflexão vinculada à página;
- criar marca-texto quando tecnicamente possível;
- criar post-it vinculado à página;
- mandar anotações para Anotações, Mural e Mente;
- manter o foco de leitura.

### 59.2. O que o leitor de PDF não deve ser no começo

Não deve virar:

- editor técnico de PDF;
- clone avançado do Adobe Acrobat;
- sistema de compartilhamento de livros;
- biblioteca pirata;
- ferramenta pesada cheia de botões.

### 59.3. UX do PDF

A tela de PDF deve seguir a mesma identidade do Modo Leitura:

- documento no centro;
- controles discretos;
- botão `+` para anotar;
- botão de Mural discreto;
- progresso simples;
- tela sem excesso de barras laterais;
- anotações escondidas por padrão, se isso ajudar o foco;
- resumo ao finalizar sessão.

Frase-guia:

> Ler PDF no aplicativo deve parecer leitura, não trabalho de escritório.

### 59.4. Dados mínimos para PDF

Cada documento PDF precisa guardar:

- `id`;
- `user_id`;
- `book_id`;
- `storage_path`;
- `file_name`;
- `file_size`;
- `page_count`;
- `current_page`;
- `created_at`;
- `updated_at`.

Cada anotação ligada ao PDF precisa guardar:

- `book_id`;
- `reading_source_id`;
- `source_type = pdf`;
- `page_number`;
- `annotation_type`;
- `content`;
- `selection_text`, quando houver;
- `position_data`, quando houver;
- `created_during_session_id`, quando houver.

### 59.5. Privacidade e direitos autorais

PDFs devem ser privados por usuário.

Regras:

- não compartilhar PDF entre usuários;
- não criar catálogo público de PDFs;
- não prometer quebrar DRM;
- não usar o arquivo do usuário para treinar modelo;
- respeitar exclusão permanente quando o usuário apagar;
- deixar claro que o usuário é responsável por enviar documentos que pode usar.

---

## 62. EPUB e leitura digital própria — aprofundamento

EPUB deve ser pensado como caminho natural depois do PDF, porque se adapta melhor a telas pequenas.

### 60.1. Por que EPUB importa

- muitos leitores digitais usam EPUB;
- é melhor para celular do que PDF fixo;
- permite tamanho de fonte, espaçamento e tema;
- aproxima o aplicativo de uma experiência de leitura real.

### 60.2. Limite importante

> EPUB com DRM não deve ser prometido.

O aplicativo pode aceitar EPUBs sem DRM enviados pelo usuário. Não deve prometer abrir arquivos protegidos.

### 60.3. Anotações em EPUB

Em EPUB, página pode mudar conforme tamanho da fonte. Portanto, anotações devem guardar mais do que “página”.

Guardar:

- capítulo/seção;
- posição interna;
- trecho selecionado;
- contexto antes/depois;
- percentual aproximado;
- data;
- sessão de leitura.

---

## 63. Kindle e plataformas externas — aprofundamento

Kindle é uma fonte importante porque muitos leitores já leem nele. Mas o aplicativo não deve depender do Kindle para funcionar.

### 61.1. Princípio correto

> O aplicativo não substitui o Kindle. Ele organiza a memória que nasce também no Kindle.

### 61.2. Fluxos possíveis

Começar por fluxos seguros:

1. **Importação manual de highlights**
   - usuário exporta destaques/notas;
   - cola ou envia arquivo;
   - aplicativo mostra prévia;
   - usuário confirma antes de salvar.

2. **Arquivo de recortes/notas**
   - aceitar texto/arquivo quando o usuário tiver exportação;
   - detectar livro, autor, trecho e nota quando possível;
   - mandar para Caixa de Entrada Intelectual antes de misturar com a Mente.

3. **Importação por copiar e colar**
   - campo simples: “Cole aqui seus destaques do Kindle”.

4. **Sincronização direta futura**
   - só se houver caminho técnico, legal e estável;
   - não vender como promessa inicial.

### 61.3. Plataformas além do Kindle

As outras plataformas devem seguir a mesma lógica:

- Kobo;
- Apple Books;
- Google Play Livros;
- leitores de PDF;
- apps de audiobook;
- apps de notas.

Regra:

> Integrar não significa copiar a plataforma. Integrar significa trazer pensamentos do usuário para a memória dele.

---

## 64. Audiobooks, Spotify, YouTube e conteúdo escutado

Nas conversas, recursos de audiobooks foram deixados para o futuro. A decisão foi não transformar o aplicativo em player de áudio agora.

Mesmo assim, a ideia deve ser preservada.

### 62.1. Direção futura

O aplicativo pode permitir que a pessoa registre pensamentos de conteúdos escutados:

- audiobook;
- podcast;
- aula;
- vídeo do YouTube;
- trilha de leitura no Spotify/YouTube;
- áudio curto gravado pelo usuário.

### 62.2. Regra

> No MVP, o aplicativo não precisa tocar o áudio. Ele pode apenas guardar o pensamento que surgiu enquanto a pessoa escutava.

### 62.3. Fluxo futuro possível

```text
escutei fora do app → salvei uma ideia rápida → vinculei ao livro/tema → revisei depois
```

Isso mantém a essência sem abrir uma frente técnica pesada cedo demais.

---

## 65. Apple Watch, smartwatch e captura rápida futura

Apple Watch/smartwatch foi mencionado como possibilidade futura, não como primeira versão.

### 63.1. Uso ideal futuro

- iniciar/parar sessão;
- registrar tempo;
- salvar pensamento por voz;
- marcar página atual rapidamente;
- lembrete calmo de pausa;
- captura mínima sem abrir o celular.

### 63.2. Regra

> Wearables devem reduzir atrito, não virar distração.

Se um smartwatch fizer o usuário mexer mais em tela, não vale a pena.

---

## 66. Caneta inteligente, OCR e ponte físico-digital

A leitura física é central. Por isso, qualquer tecnologia que ajude a trazer o papel para a memória digital é relevante.

Ideias preservadas:

- foto da capa do livro;
- IA buscando capa oficial;
- foto de post-it físico;
- foto de anotação manuscrita;
- OCR de página inteira;
- botão “Escrever página”;
- marcação manual com `*` para indicar reflexão/ideia/dúvida;
- caneta inteligente como possibilidade futura.

### 64.1. Regra de UX

> O usuário não deve precisar abandonar o prazer do livro físico para usar o aplicativo.

O aplicativo deve respeitar quem não gosta de riscar livro físico.

---

## 67. Caixa de Entrada Intelectual — aprofundamento

A Caixa de Entrada Intelectual é uma das ideias mais importantes para lidar com múltiplas fontes.

Ela recebe tudo que ainda não está organizado:

- nota rápida;
- “não sei explicar, só salvar”;
- foto de post-it;
- foto de página;
- texto OCR;
- destaque importado do Kindle;
- anotação de PDF;
- anotação de EPUB;
- áudio curto transcrito;
- pensamento solto;
- ideia copiada de outra plataforma.

### 65.1. Função da Caixa de Entrada

Ela evita que o usuário precise organizar tudo na hora.

Fluxo:

```text
capturar rápido → salvar bruto → revisar depois → classificar → conectar à Mente
```

### 65.2. Regra emocional

> Capturar deve ser mais fácil do que esquecer.

A pessoa não pode sentir que precisa “trabalhar” para salvar uma ideia.

---

## 68. Anotações: tipos, visual e organização

Os tipos principais já definidos são:

- Anotação Rápida;
- Reflexão;
- Marca-texto;
- Post-it.

### 66.1. Cada tipo precisa ter visual próprio

O usuário já observou que reflexão e marca-texto precisam ter visual diferente de post-it para que a pessoa saiba o que é cada coisa.

Regras:

- Post-it deve parecer post-it físico;
- post-it pode ter sombra, leve rotação e camadas;
- marca-texto deve parecer destaque elegante;
- reflexão deve parecer pensamento mais profundo;
- anotação rápida deve ser simples;
- usar tick/marcação elegante em vez de bolinha genérica quando fizer sentido.

### 66.2. Organização em pastas por tipo

Anotações devem poder aparecer como “pastas” ou agrupamentos por tipo.

Exemplo:

- Todas;
- Anotações rápidas;
- Reflexões;
- Marca-textos;
- Post-its;
- Por livro;
- Por sessão;
- Por origem: físico, PDF, EPUB, Kindle, OCR etc.

### 66.3. Pilha de post-its

A ideia da pilha de post-its deve ser preservada.

Regra:

> Post-its empilhados devem abrir como uma pasta de celular: clicou na pilha, abre todos lado a lado.

Não abrir como card comum sem identidade.

---

## 69. Home, Biblioteca e Mente — itens que não podem ser esquecidos

### 67.1. Home

O usuário não gostou da Home antiga. A nova Home precisa ser mais clean e útil.

Itens obrigatórios de direção:

- mostrar livro atual;
- mostrar também capas de todos os livros em leitura;
- botão claro `Iniciar leitura` ou `Continuar leitura`;
- botão `+` para adicionar;
- opção de foto/capa;
- curiosidades fecháveis;
- curiosidades somente relacionadas aos livros do usuário/selecionados;
- nada de excesso visual;
- sensação de biblioteca calma, não dashboard pesado.

Regra:

> A Home deve fazer o usuário querer voltar para o livro, não gerenciar uma planilha.

### 67.2. Biblioteca

Regras preservadas:

- biblioteca não pode ficar vazia se o usuário não criar categorias;
- categorias automáticas devem organizar a experiência;
- categorias manuais ficam como opção;
- livro pode ter múltiplas categorias;
- livros lidos antes do app e lidos dentro do app ficam no mesmo universo, mas separados visualmente;
- permitir anotações retroativas;
- permitir adicionar livros antigos aos poucos;
- priorizar estantes automáticas.

### 67.3. Mente

A Mente deve ser visual, leve e focada no cérebro.

Regras:

- cérebro como elemento central;
- detalhes aparecem após clique;
- categorias automáticas;
- conexão entre livros, temas, ideias e reflexões;
- Mente não deve virar gráfico técnico pesado;
- deve transmitir evolução pessoal e memória intelectual.

---

## 70. Registro de página e tempo fora do aplicativo

Foi mencionado que o usuário deve conseguir registrar página lida sem necessariamente abrir todo o aplicativo.

Direção futura:

- atalho rápido para atualizar página;
- captura rápida no celular;
- widget/PWA futuramente;
- registro simples: livro + página atual + salvar;
- separar tempo real medido no app de tempo estimado fora do app.

Regra:

> Tempo real do aplicativo e tempo estimado fora do aplicativo devem ser separados.

Isso evita estatísticas falsas.

---

## 71. Beta fechado, feedback e usuário por nome

Beta fechado foi uma decisão importante.

### 69.1. Regras do beta

- não lançar público agora;
- começar com 3 a 5 pessoas;
- cada pessoa deve ter conta individual;
- não usar login demo compartilhado;
- dados totalmente separados;
- feedback fácil dentro do app;
- painel admin para acompanhar uso/feedback;
- botão para ativar/desativar usuários;
- validar isolamento usuário A/B.

### 69.2. Exibir nome, não e-mail

O usuário pediu para colocar o usuário pelo nome em vez do e-mail.

Regra:

> Quando possível, a interface deve chamar a pessoa pelo nome, não mostrar o e-mail como identidade principal.

Exemplo:

- ruim: `rafael@email.com`;
- melhor: `Rafael`.

### 69.3. Feedback

O feedback deve pedir:

- opinião sincera;
- o que ficou confuso;
- o que ficou confortável;
- o que a pessoa usaria de verdade;
- ideias;
- sugestões;
- críticas;
- melhorias.

Também deve agradecer a ajuda, mas sem parecer forçado.

Regra de linguagem atual:

> Em abordagens e textos internos, usar “o aplicativo”, não insistir em SERENE enquanto o nome estiver em aberto.

---

## 72. Monetização e justiça com o usuário

O aplicativo deve faturar, mas sem trair a confiança do leitor.

Regra permanente:

> O coração do aplicativo deve ser para todos.

Não bloquear no Premium:

- anotações ilimitadas;
- exportação organizada;
- estatísticas importantes;
- Mente completa;
- personalização visual essencial;
- backup;
- histórico completo;
- categorias;
- IA essencial;
- temas principais.

### 70.1. Caminhos Premium que combinam mais

Premium deve ser mais parecido com apoio/pertencimento do que bloqueio.

Possibilidades:

- plano Fundador/Patrono;
- retrospectivas mensais/anuais mais bonitas;
- relatórios especiais;
- cards compartilháveis;
- temas estéticos extras sem bloquear conforto básico;
- participação em votações;
- acesso antecipado;
- bastidores;
- mais armazenamento de mídia pesada;
- IA reflexiva mais profunda, desde que a IA essencial continue disponível.

### 70.2. Cancelamento

A filosofia definida:

> O usuário não pode sentir que suas memórias foram sequestradas.

Mesmo que o Premium termine, o usuário deve continuar podendo acessar o que já salvou. Restrições futuras não devem destruir confiança.

---

## 73. Psicologia, identidade emocional e marca subconsciente

O usuário quer que o aplicativo seja lembrado no subconsciente, como marcas fortes conseguem ser lembradas sem esforço.

Isso não deve virar manipulação agressiva. Deve virar consistência emocional.

Elementos já definidos:

- calma;
- conforto;
- clareza;
- sensação de cuidado;
- zero pressão;
- frases sutis de água/café/pausa;
- animações suaves;
- leitura profunda;
- identidade visual memorável;
- vontade de pagar por valor percebido, não por obrigação.

Frase-guia:

> O usuário deve sentir que o aplicativo está do lado dele.

---

## 74. Nome, marca e linguagem atual

Nomes já explorados:

- IA LIVROS;
- Liv/LIV;
- Nous;
- SERENE;
- Lora;
- Dias como possibilidade simbólica.

Significados preservados:

- Liv: vida, leveza, intimidade, leitura;
- Nous: mente, intelecto, consciência profunda;
- SERENE: calma, silêncio, presença, conforto, desaceleração;
- Dias: possibilidade simbólica ligada aos dias da vida de uma pessoa através dos livros.

Decisão atual:

> Por enquanto, usar “o aplicativo” na documentação, interface, commits e textos de beta.

A marca final pode ser definida depois.

Regra:

- evitar nome filosófico demais se não for acolhedor;
- nome precisa ser natural, curto, humano, suave e memorável.

---

## 75. Claude Code: arquitetura de skills e subagentes

O desenvolvimento deve usar Claude Code com disciplina.

### 73.1. Diferença prática

- `CLAUDE.md`: regras globais e memória principal do projeto;
- `docs/APP_CONTEXT.md`: contexto completo de produto;
- skills: procedimentos reutilizáveis para tarefas recorrentes;
- subagentes: especialistas com papel específico;
- hooks: validações automáticas em momentos importantes;
- MCPs/conectores: acesso controlado a serviços externos quando necessário.

Regra:

> `CLAUDE.md` não deve virar um arquivo gigante com tudo. O contexto grande fica em `docs/APP_CONTEXT.md`; procedimentos repetíveis viram skills; especialidades viram subagentes.

### 73.2. Estrutura sugerida

```text
.claude/
  agents/
    product-guardian.md
    ux-cleanliness-reviewer.md
    frontend-nextjs-architect.md
    backend-supabase-rls.md
    reading-sources-architect.md
    pdf-epub-reader-engineer.md
    qa-regression-tester.md
    docs-context-curator.md
    privacy-copyright-reviewer.md
    beta-feedback-analyst.md
  skills/
    context-update/
      SKILL.md
    task-slicing/
      SKILL.md
    visual-decision/
      SKILL.md
    clean-ui-review/
      SKILL.md
    reading-session-timer/
      SKILL.md
    mural-layout/
      SKILL.md
    supabase-rls-check/
      SKILL.md
    pdf-reader-plan/
      SKILL.md
    kindle-import-plan/
      SKILL.md
    export-system/
      SKILL.md
    beta-feedback/
      SKILL.md
    release-checklist/
      SKILL.md
```

### 73.3. Subagentes recomendados

#### product-guardian

Função: proteger essência, escopo e decisões do produto.

Deve perguntar:

- isso deixa o app mais calmo?
- isso ajuda a ler, anotar ou revisitar?
- isso polui?
- isso deveria ir para futuro?

#### ux-cleanliness-reviewer

Função: revisar UI/UX com foco em clareza e conforto.

Deve detectar:

- excesso de botões;
- telas pesadas;
- cards genéricos demais;
- espaços invisíveis clicáveis;
- ações confusas;
- falta de hierarquia visual.

#### frontend-nextjs-architect

Função: manter frontend consistente.

Responsável por:

- Next.js;
- TypeScript;
- Tailwind;
- componentes reutilizáveis;
- rotas;
- estado;
- acessibilidade;
- performance.

#### backend-supabase-rls

Função: proteger banco, auth, RLS e dados.

Responsável por:

- schema;
- migrações;
- tipos;
- RLS;
- isolamento por usuário;
- storage privado;
- evitar erros como schema cache/coluna inexistente.

#### reading-sources-architect

Função: cuidar de múltiplas fontes de leitura.

Responsável por:

- livro físico;
- PDF;
- EPUB;
- Kindle/importações;
- OCR;
- áudio futuro;
- modelagem de `reading_sources`.

#### pdf-epub-reader-engineer

Função: planejar leitor interno.

Responsável por:

- PDF viewer;
- EPUB viewer;
- anotações por página/posição;
- progresso;
- integração com sessão;
- UX limpa.

#### qa-regression-tester

Função: impedir que uma melhoria quebre outra coisa.

Responsável por:

- typecheck;
- lint;
- build;
- testes manuais essenciais;
- fluxo leitura → anotação → finalização → revisão;
- isolamento de usuários.

#### docs-context-curator

Função: manter documentação viva.

Responsável por:

- atualizar `docs/APP_CONTEXT.md`;
- atualizar `docs/KANBAN.md`;
- atualizar decisões;
- registrar o motivo de mudanças;
- evitar duplicações/contradições.

#### privacy-copyright-reviewer

Função: revisar privacidade, copyright e dados sensíveis.

Responsável por:

- uploads privados;
- PDF/EPUB;
- imports;
- exclusão de dados;
- limites de IA;
- não prometer o que não podemos cumprir legalmente.

#### beta-feedback-analyst

Função: organizar feedback real.

Responsável por:

- agrupar feedback;
- detectar padrões;
- separar gosto pessoal de problema real;
- transformar feedback em hipóteses;
- priorizar próximo ciclo.

### 73.4. Skills recomendadas

#### context-update

Quando usar: depois de decisão nova.

Função: atualizar documentação sem duplicar e sem contradizer decisões anteriores.

#### task-slicing

Quando usar: antes de qualquer implementação.

Função: quebrar pedido grande em tarefas pequenas, revisáveis e testáveis.

#### visual-decision

Quando usar: ao comparar variações de tela.

Função: registrar alternativas, critérios, decisão e motivo.

#### clean-ui-review

Quando usar: após qualquer tela nova.

Função: verificar calma, clareza, excesso, acessibilidade e foco.

#### reading-session-timer

Quando usar: alterações no Modo Leitura.

Função: garantir contador real, pausa correta, minimizar, finalizar, resumo.

#### mural-layout

Quando usar: alterações no Mural.

Função: garantir posição fixa, sem sobreposição, até 5 sugestões, persistência na sessão.

#### supabase-rls-check

Quando usar: qualquer mudança em banco/auth/storage.

Função: revisar RLS, isolamento, tipos, migrações e risco de vazamento.

#### pdf-reader-plan

Quando usar: antes de implementar PDF.

Função: planejar leitor interno com UX calma, dados e segurança.

#### kindle-import-plan

Quando usar: antes de qualquer promessa Kindle.

Função: separar importação manual, parsing, revisão e limites técnicos.

#### export-system

Quando usar: ao trabalhar exportação.

Função: garantir exportação organizada, bonita, privada e essencial.

#### beta-feedback

Quando usar: ao preparar beta.

Função: revisar perguntas, abordagem, painel e coleta.

#### release-checklist

Quando usar: antes de merge/deploy.

Função: rodar checagem final de produto + técnica.

### 73.5. Regra de uso

Não chamar todos os subagentes sempre. Usar conforme a tarefa.

Exemplos:

- mexeu no Mural → `ux-cleanliness-reviewer` + skill `mural-layout`;
- mexeu no Supabase → `backend-supabase-rls` + skill `supabase-rls-check`;
- mexeu em PDF → `reading-sources-architect` + `pdf-epub-reader-engineer`;
- mexeu em copy/feedback → `product-guardian` + `beta-feedback-analyst`;
- terminou tarefa → `qa-regression-tester` + `docs-context-curator`.

---

## 76. MCPs, conectores e acesso a serviços externos

O desenvolvimento pode se beneficiar de MCPs/conectores, mas com controle.

Possíveis integrações de desenvolvimento:

- GitHub: issues, commits, PRs;
- Supabase: schema, queries, migrações, RLS;
- Vercel: deploys e logs;
- navegador/testes: smoke tests;
- documentação oficial: consultas técnicas.

Regras:

- não permitir escrita em produção sem revisão;
- não deixar IA alterar banco real sem plano;
- não rodar migração sem backup/plano de reversão;
- não expor chaves `.env`;
- não confiar em MCP sem conferir resultado.

---

## 77. Roadmap recomendado de desenvolvimento

O plano deve ser construído de forma limpa e incremental.

### Fase -1 — Memória e documentação

Criar:

- `docs/APP_CONTEXT.md`;
- `docs/ROADMAP.md`;
- `docs/ACTIVE_DECISIONS.md`;
- `docs/KANBAN.md`;
- `docs/READING_SOURCES.md`;
- `docs/AI_AGENTS.md`;
- `docs/PRIVACY_AND_COPYRIGHT.md`;
- `CLAUDE.md`;
- `.claude/agents/`;
- `.claude/skills/`.

Não escrever produto ainda.

### Fase 0 — Base técnica

- Next.js;
- TypeScript;
- Tailwind;
- Supabase;
- autenticação;
- layout base;
- tema claro/escuro/sistema;
- rotas principais vazias;
- lint/typecheck/build funcionando.

### Fase 1 — Ciclo mínimo de valor

Provar:

```text
cadastrar livro → iniciar leitura → anotar rápido → finalizar sessão → revisar pensamento → voltar
```

Telas mínimas:

- Home;
- Biblioteca;
- Leitura;
- Anotações;
- Mente simples;
- Configurações básicas.

### Fase 2 — UX de leitura e anotações

- contador real;
- pausar/retomar/finalizar;
- botão finalizar visível;
- resumo final;
- tipos de anotação;
- pilha de post-its;
- lixeira.

### Fase 3 — Mural e Mente

- Mural separado;
- balões sugeridos;
- posições fixas;
- não pausar leitura;
- Mente com cérebro central;
- categorias automáticas.

### Fase 4 — Beta fechado

- contas individuais;
- isolamento por usuário;
- feedback;
- painel admin;
- deploy controlado;
- 3 a 5 testers.

### Fase 5 — PDF no aplicativo

- upload privado;
- leitor simples;
- sessão ligada ao PDF;
- anotação por página;
- progresso;
- exportação das notas.

### Fase 6 — Importações

- Kindle manual;
- arquivos/textos de destaques;
- Caixa de Entrada Intelectual;
- revisão antes de salvar.

### Fase 7 — EPUB

- EPUB sem DRM;
- posição por capítulo/trecho;
- tema e fonte;
- integração com anotações.

### Fase 8 — Futuro amplo

- audiobook;
- Apple Watch/smartwatch;
- caneta inteligente;
- Spotify/YouTube;
- integrações externas;
- app separado de oportunidades profissionais.

---

## 78. Antigos bugs e aprendizados que viram requisitos

Problemas antigos não devem ser esquecidos. Mesmo sem código, eles ensinam requisitos.

### 76.1. Mural

- abrir Mural não pausa contador;
- balões não aparecem sobre anotações existentes;
- balões mantêm posição ao sair/voltar;
- até 5 sugestões por sessão;
- sugestões restantes continuam onde estavam;
- nova anotação começa no centro;
- posições aleatórias não podem gerar estresse.

### 76.2. Supabase/schema

Erro antigo:

```text
Could not find the 'reading_session_id' column of 'notes' in the schema cache
```

Lição:

- schema, tipos e código precisam andar juntos;
- migração precisa ser aplicada e validada;
- RLS precisa ser testada;
- cache/schema precisa ser conferido;
- não criar coluna no código sem migração.

### 76.3. UI invisível/clicável

- corrigir espaços invisíveis em cards/post-its;
- evitar áreas clicáveis sobrando;
- hover de estatísticas com delay e transparência;
- botões importantes não podem ficar escondidos.

---

## 79. Internacionalização e lançamento global

O usuário quer lançar globalmente no futuro.

Regra:

> Não depender de tradução automática da plataforma como estratégia principal.

Desde cedo, preparar:

- textos em chaves de tradução;
- português como base inicial;
- inglês como provável segunda língua;
- arquitetura pronta para outros idiomas;
- cuidado com tom emocional em cada idioma.

Tradução não é só trocar palavras. É localização.

---

## 80. App futuro separado para oportunidades profissionais

Foi discutida uma ideia futura: depois que o aplicativo principal conquistar confiança e conforto, criar outro produto separado que transforme conhecimento, reflexões e pensamentos selecionados em oportunidades profissionais.

Decisão:

> Não misturar isso no aplicativo principal agora.

O aplicativo principal continua focado em:

- leitura;
- anotações;
- reflexões;
- memórias;
- evolução pessoal.

Produto futuro separado pode explorar:

- portfólio intelectual;
- oportunidades;
- carreira;
- contratação;
- conexão entre conhecimento e portas profissionais.

---

## 81. Documentos adicionais que devem existir no novo projeto

Além do contexto mestre, criar arquivos menores para a IA não se perder.

```text
docs/
  APP_CONTEXT.md
  ROADMAP.md
  ACTIVE_DECISIONS.md
  KANBAN.md
  VISUAL_DECISIONS.md
  PRODUCT_PRINCIPLES.md
  READING_SOURCES.md
  PDF_READER_PLAN.md
  IMPORTS_AND_INTEGRATIONS.md
  AI_AGENTS.md
  PRIVACY_AND_COPYRIGHT.md
  BETA_FEEDBACK_PLAN.md
  MONETIZATION_PRINCIPLES.md
  MVP_METRICS.md
  LOCALIZATION_PLAN.md
```

Regra:

> O contexto grande fica no mestre; cada tema crítico também deve ter um documento menor e prático.

---

## 82. Prompt inicial atualizado para Claude Code

```text
Leia docs/APP_CONTEXT.md inteiro antes de qualquer implementação.

Contexto atual:
- vamos construir o aplicativo com calma;
- use “o aplicativo” como nome por enquanto;
- o app é uma memória de leitura calma, não uma máquina de produtividade;
- precisa suportar leitura física e futuramente leitura interna por PDF/EPUB;
- Kindle e outras plataformas entram primeiro como importação/manual/revisável, não como promessa de sincronização total;
- o coração do produto não pode ser bloqueado no Premium;
- toda função nova deve deixar o app mais confortável, não mais pesado.

Tarefa:
1. Resuma a essência do produto.
2. Liste as decisões não negociáveis.
3. Proponha a estrutura inicial de pastas e documentos.
4. Proponha as skills e subagentes necessários em `.claude/`.
5. Proponha o roadmap em fatias pequenas.
6. Não altere arquivos de produto ainda.
7. Não crie banco, auth, Supabase ou telas sem aprovação.

Método obrigatório:
contexto → especificação → tarefa pequena → implementação → teste → revisão → documentação → commit.
```

---

## 83. Prompt para criar skills e subagentes

```text
Com base em docs/APP_CONTEXT.md, crie uma proposta de arquitetura `.claude/` para o projeto.

Inclua:
- lista de subagentes;
- função de cada subagente;
- quando cada um deve ser chamado;
- lista de skills;
- função de cada skill;
- estrutura de pastas;
- regras para não inflar contexto;
- regras de segurança para Supabase, RLS, storage e deploy;
- regra de atualização de documentação.

Não implemente código do aplicativo ainda.
Primeiro entregue o plano.
```

---

## 84. Prompt para planejar PDF/EPUB/Kindle sem exagerar

```text
Planeje a arquitetura de fontes de leitura do aplicativo.

O aplicativo deve suportar:
- livro físico;
- livro histórico já lido;
- PDF enviado pelo usuário;
- EPUB sem DRM no futuro;
- importação manual/revisável de Kindle highlights;
- outras plataformas apenas como possibilidades futuras.

Regras:
- não virar clone de Kindle;
- não virar editor técnico de PDF;
- não prometer integração automática com Kindle sem validação técnica/legal;
- não compartilhar PDFs entre usuários;
- proteger privacidade;
- manter UX calma;
- separar tempo real no app de tempo estimado fora do app.

Entregue:
- modelo conceitual de dados;
- fases de implementação;
- riscos;
- critérios de pronto;
- o que fica fora do MVP.

Não implemente ainda.
```

---

## 85. Frase final reforçada

> **Não importa onde a pessoa leu: físico, PDF, EPUB, Kindle ou outra plataforma. O aplicativo deve guardar com calma o que aquela leitura despertou nela.**

---

## 86. Skills externas/adaptadas e skills próprias do aplicativo

Esta seção consolida skills que já tinham sido mencionadas ou lembradas nas conversas, incluindo skills inspiradas em materiais externos sobre Claude Code. Skills antigas devem ser traduzidas para Claude Code dentro do Dev Container.

### 86.1. Decisão sobre origem das skills

As skills podem vir de três lugares:

1. **Skills externas/adaptadas** — ideias conhecidas da comunidade, adaptadas ao aplicativo.
2. **Skills próprias do produto** — criadas para proteger UX, leitura, Mural, Mente, PDF, Kindle/importações, beta e monetização.
3. **Skills de engenharia** — criadas para validação, revisão, release, documentação e segurança.

Regra:

> Não instalar skills aleatórias em massa. Primeiro entender o papel de cada uma, adaptar ao contexto do aplicativo e criar versões próprias quando necessário.

### 86.2. Skill `grill-with-docs` — corrigindo o nome lembrado

O nome lembrado como `grill-with-dock` provavelmente se refere a:

```text
grill-with-docs
```

Função adaptada ao aplicativo:

> Entrevistar o usuário com perguntas difíceis sobre uma decisão ou plano, comparando a ideia com `docs/APP_CONTEXT.md`, `docs/ACTIVE_DECISIONS.md`, `docs/ROADMAP.md` e decisões existentes, até chegar em entendimento claro antes de implementar.

Quando usar:

- antes de uma feature grande;
- antes de mexer em PDF/EPUB/Kindle/importações;
- antes de definir Supabase/auth/RLS;
- antes de escolher Home/Mente/Mural definitivos;
- quando o pedido estiver vago;
- quando houver risco de contradizer o contexto mestre.

Como adaptar para nosso projeto:

```text
.claude/skills/grill-with-docs/SKILL.md
```

Regras específicas:

- usar `docs/APP_CONTEXT.md` como fonte de verdade;
- perguntar uma coisa por vez;
- sugerir uma resposta recomendada quando fizer sentido;
- não implementar código durante a entrevista;
- transformar decisões finais em `docs/ACTIVE_DECISIONS.md`;
- se a decisão for arquitetural e difícil de reverter, sugerir ADR em `docs/adr/`.

### 86.3. Skill `grill-me`

Função:

> Entrevistar o usuário intensamente sobre uma ideia ainda imatura, mesmo sem código ou sem documentação suficiente, até revelar requisitos, dúvidas, riscos e decisões escondidas.

Quando usar:

- quando surgir uma ideia nova;
- antes de decidir monetização;
- antes de mudar nome/marca;
- antes de mudar experiência principal;
- antes de transformar ideia futura em roadmap.

Diferença prática:

- `grill-me`: boa para ideia bruta, sem depender de codebase.
- `grill-with-docs`: melhor quando já existe contexto/documentação do projeto.

No nosso caso:

> Para o aplicativo, usar `grill-with-docs` como padrão e `grill-me` quando a ideia ainda estiver muito aberta.

### 86.4. Skill `write-a-prd`

Função:

> Transformar uma decisão ou ideia validada em PRD curto e acionável.

Quando usar:

- após `grill-with-docs`;
- antes de implementar uma feature;
- para definir Home, Modo Leitura, Mural, Mente, PDF Reader, Importação Kindle, Beta ou Exportação.

Saída esperada:

- problema;
- objetivo;
- usuários;
- escopo;
- fora de escopo;
- fluxo principal;
- critérios de pronto;
- riscos;
- métricas;
- dependências.

Arquivo sugerido:

```text
docs/prd/<nome-da-feature>.md
```

### 86.5. Skill `prd-to-kanban` / `prd-to-issues`

Função:

> Quebrar PRD em tarefas pequenas, revisáveis e testáveis.

Como adaptar:

- usar `docs/KANBAN.md` em vez de depender de GitHub Issues no começo;
- depois, se o projeto usar GitHub Issues, converter tarefas para issues.

Regra:

> Nenhuma tarefa deve misturar produto, banco, UI, segurança e deploy ao mesmo tempo.

### 86.6. Skill `task-slicing`

Função:

> Quebrar pedido grande em fatias pequenas antes da implementação.

Obrigatória quando o usuário pedir algo como:

- “crie a Home”;
- “faça o Mural”;
- “adicione Supabase”;
- “crie leitura por PDF”;
- “faça a Mente”.

Saída esperada:

- fatias;
- ordem;
- arquivos prováveis;
- riscos;
- validações;
- o que não será feito agora.

### 86.7. Skill `context-update`

Função:

> Atualizar documentação quando uma decisão muda, sem duplicar e sem contradizer decisões anteriores.

Arquivos possíveis:

- `docs/APP_CONTEXT.md`;
- `docs/ACTIVE_DECISIONS.md`;
- `docs/KANBAN.md`;
- `docs/VISUAL_DECISIONS.md`;
- `docs/ROADMAP.md`;
- `docs/AI_AGENTS.md`.

Regra:

> Toda decisão importante sai da conversa e entra no repositório.

### 86.8. Skill `clean-ui-review`

Função:

> Revisar se uma tela continua calma, limpa e fácil de usar.

Checar:

- excesso de cards;
- excesso de botões;
- hierarquia fraca;
- linguagem fria;
- dashboard corporativo;
- poluição visual;
- funções secundárias ocupando espaço demais;
- se a tela ajuda a ler/anotar/revisitar.

### 86.9. Skill `visual-decision`

Função:

> Comparar variações visuais e registrar decisão com motivo.

Quando usar:

- Home;
- Biblioteca;
- Mente;
- Mural;
- tela de leitura;
- leitor PDF;
- cards de anotação;
- cérebro visual.

Arquivo:

```text
docs/VISUAL_DECISIONS.md
```

### 86.10. Skill `reading-session-timer`

Função:

> Proteger o contador real de leitura.

Regras obrigatórias:

- contar somente quando ativo;
- pausar quando usuário pausa;
- continuar quando Mural abre;
- finalizar com resumo;
- não perder sessão;
- separar tempo real do tempo estimado.

### 86.11. Skill `mural-layout`

Função:

> Proteger regras do Mural.

Regras obrigatórias:

- até 5 balões sugeridos;
- posições fixas por sessão;
- não sobrepor balões escritos;
- sugestões restantes continuam no mesmo lugar;
- nova anotação começa no centro;
- Mural não pausa timer.

### 86.12. Skill `supabase-rls-check`

Função:

> Revisar mudanças em Supabase, auth, RLS, Storage e schema.

Obrigatória antes de:

- criar tabela;
- criar migração;
- alterar tipos;
- mexer em login;
- mexer em storage;
- criar beta/admin;
- publicar dados.

Regra:

> Nenhuma alteração em banco/auth/RLS sem autorização humana explícita.

### 86.13. Skill `pdf-reader-plan`

Função:

> Planejar leitura por PDF sem transformar o app em editor pesado.

Checar:

- privacidade;
- storage privado;
- vínculo com livro;
- página atual;
- anotações por página;
- sessão de leitura;
- UX calma;
- sem compartilhamento de PDFs;
- sem promessa de DRM bypass.

### 86.14. Skill `kindle-import-plan`

Função:

> Planejar importação manual/revisável de destaques Kindle e outras plataformas.

Checar:

- importação manual primeiro;
- prévia antes de salvar;
- Caixa de Entrada Intelectual;
- sem promessa de sincronização automática;
- sem depender tecnicamente da Amazon no MVP.

### 86.15. Skill `export-system`

Função:

> Garantir exportação organizada, bonita, privada e essencial para todos.

Regra:

> Exportação não é Premium. É confiança.

### 86.16. Skill `beta-feedback`

Função:

> Preparar e revisar fluxo de feedback beta.

Checar:

- contas individuais;
- feedback com ideias/sugestões/críticas;
- tom humano;
- agradecimento;
- usuário por nome, não e-mail;
- painel/admin futuro.

### 86.17. Skill `release-checklist`

Função:

> Validar tarefa antes de considerar pronta.

Checar:

```bash
pnpm lint
pnpm typecheck
pnpm build
git status
git diff
```

E também:

- não quebrou UX;
- não poluiu interface;
- não mexeu em banco sem permissão;
- documentação atualizada;
- commit claro.

### 86.18. Skill `startup-enxuta-check`

Função:

> Verificar se a tarefa ajuda a validar o ciclo mínimo ou se é vaidade/complexidade cedo demais.

Perguntas:

- isso ajuda o usuário a cadastrar livro, ler, anotar, revisar e voltar?
- isso deve entrar no MVP?
- isso é aprendizado validável ou polimento prematuro?
- dá para testar com beta?

### 86.19. Skill `privacy-copyright-check`

Função:

> Revisar riscos de privacidade e direitos autorais em PDF, EPUB, OCR, Kindle/importações e IA.

Regras:

- uploads privados;
- sem compartilhamento de livros;
- sem quebrar DRM;
- sem usar conteúdo do usuário sem consentimento;
- exclusão respeitada;
- dados por usuário.

### 86.20. Skill `docs-to-architecture`

Função:

> Transformar documentação de produto em arquitetura técnica simples, sem implementar ainda.

Quando usar:

- depois de PRD;
- antes de criar feature complexa;
- antes de Supabase;
- antes de PDF/EPUB.

Saída:

- rotas;
- componentes;
- entidades;
- estados;
- riscos;
- validações;
- ordem de implementação.

---

## 87. Subagentes consolidados e adaptados para Claude Code

Esta seção consolida os subagentes. Nomes antigos como `serene-ux-auditor`, `serene-code-reviewer` e `serene-supabase-guardian` devem ser tratados como histórico e convertidos para agentes Claude Code em `.claude/agents/`.

### 87.1. Subagentes mínimos para começar

Não criar todos os subagentes de uma vez. Começar com poucos e úteis.

Primeiros subagentes recomendados:

```text
.claude/agents/product-guardian.md
.claude/agents/frontend-nextjs-architect.md
.claude/agents/docs-context-curator.md
.claude/agents/qa-regression-tester.md
```

### 87.2. product-guardian

Função:

> Proteger a essência do aplicativo.

Responsável por:

- calma;
- clareza;
- foco em leitura;
- não poluir;
- evitar produtividade pesada;
- decidir se algo entra no MVP ou fica para depois;
- proteger monetização justa;
- manter “o coração do app para todos”.

Usar quando:

- surgir feature nova;
- mudar fluxo principal;
- mexer em premium;
- mudar Home, Mente, Mural ou Modo Leitura;
- houver risco de app virar dashboard.

### 87.3. frontend-nextjs-architect

Função:

> Manter frontend limpo, consistente e sustentável.

Responsável por:

- Next.js App Router;
- TypeScript;
- Tailwind;
- estrutura de componentes;
- acessibilidade;
- estado client/server;
- design system mínimo;
- evitar gambiarra visual.

Usar quando:

- criar rotas;
- criar layout;
- criar componentes base;
- mexer em UI;
- organizar `apps/web`.

### 87.4. docs-context-curator

Função:

> Manter documentação viva e sem contradição.

Responsável por:

- `docs/APP_CONTEXT.md`;
- `docs/ACTIVE_DECISIONS.md`;
- `docs/KANBAN.md`;
- `docs/ROADMAP.md`;
- `docs/VISUAL_DECISIONS.md`;
- registrar decisões novas;
- evitar duplicação e conflito.

Usar quando:

- decisão nova surgir;
- feature mudar escopo;
- feedback beta gerar aprendizado;
- vídeo/blog/fonte externa for aproveitado.

### 87.5. qa-regression-tester

Função:

> Impedir que uma mudança quebre outra parte do app.

Responsável por:

- `pnpm lint`;
- `pnpm typecheck`;
- `pnpm build`;
- fluxo leitura → anotação → finalizar → revisar;
- regressões visuais;
- rotas quebradas;
- checklist antes de commit.

Usar:

- no final de toda tarefa;
- antes de commit;
- depois de refatoração;
- antes de deploy/beta.

### 87.6. ux-cleanliness-reviewer

Função:

> Auditar a experiência visual com foco em calma e simplicidade.

Responsável por:

- excesso de cards;
- excesso de botões;
- UI fria/corporativa;
- hierarquia ruim;
- espaços invisíveis clicáveis;
- post-its e marca-textos sem identidade;
- Home sem foco em livros em leitura.

Usar:

- ao criar Home;
- Biblioteca;
- Mural;
- Mente;
- Leitura;
- PDF Reader.

### 87.7. backend-supabase-rls

Função:

> Proteger banco, auth, RLS, Storage e dados do usuário.

Responsável por:

- schema;
- migrações;
- tipos TypeScript;
- RLS;
- isolamento por usuário;
- storage privado;
- erros de schema cache;
- beta/admin seguro.

Usar:

- somente quando Supabase entrar;
- antes de qualquer migração;
- antes de auth;
- antes de storage;
- antes de beta/admin.

### 87.8. reading-sources-architect

Função:

> Modelar fontes de leitura.

Responsável por:

- livro físico;
- PDF;
- EPUB;
- Kindle/importações;
- OCR;
- histórico já lido;
- tempo real vs tempo estimado;
- Caixa de Entrada Intelectual.

Usar:

- antes de PDF Reader;
- antes de EPUB;
- antes de importações Kindle;
- ao modelar `reading_sources`.

### 87.9. pdf-epub-reader-engineer

Função:

> Planejar e implementar leitor interno quando chegar a fase certa.

Responsável por:

- PDF viewer;
- EPUB viewer sem DRM;
- posição/página;
- anotações ligadas a página/trecho;
- progresso;
- integração com sessão;
- UX sem parecer editor técnico.

Usar:

- fase PDF/EPUB;
- não usar no MVP inicial, exceto planejamento.

### 87.10. privacy-copyright-reviewer

Função:

> Revisar privacidade e direitos autorais.

Responsável por:

- PDFs privados;
- EPUB sem DRM;
- importações Kindle;
- OCR;
- IA sobre conteúdo do usuário;
- exclusão de dados;
- armazenamento seguro.

Usar:

- antes de upload de arquivos;
- antes de PDF/EPUB;
- antes de OCR;
- antes de IA em conteúdo do usuário.

### 87.11. beta-feedback-analyst

Função:

> Transformar feedback beta em aprendizado acionável.

Responsável por:

- agrupar feedback;
- detectar padrões;
- separar gosto pessoal de problema real;
- transformar em hipótese;
- atualizar Kanban/roadmap.

Usar:

- fase beta;
- após rodadas com usuários reais.

### 87.12. ai-workflow-orchestrator

Função:

> Decidir qual skill/subagente chamar para cada tarefa, sem inflar contexto.

Responsável por:

- escolher especialistas;
- manter escopo pequeno;
- evitar chamar todos os agentes sempre;
- garantir método: contexto → especificação → tarefa pequena → validação → documentação → commit.

Usar:

- no início de tarefas médias/grandes;
- quando houver dúvida sobre quem deve revisar.

### 87.13. Subagentes antigos convertidos

| Antigo | Novo em Claude Code | Observação |
|---|---|---|
| `serene-ux-auditor` | `ux-cleanliness-reviewer` | Mantém foco em UI calma e limpa |
| `serene-code-reviewer` | `frontend-nextjs-architect` + `qa-regression-tester` | Separar arquitetura de validação |
| `serene-supabase-guardian` | `backend-supabase-rls` | Usar só quando Supabase entrar |
| `serene-product-rules` skill | `product-guardian` + skill `context-update` | Regras de produto viram agente + skill |

---

## 88. Ordem correta para criar skills e subagentes no projeto

Não criar tudo de uma vez. Ordem recomendada:

### Etapa 1 — Fundacionais

Criar primeiro:

```text
.claude/skills/grill-with-docs/SKILL.md
.claude/skills/task-slicing/SKILL.md
.claude/skills/context-update/SKILL.md
.claude/skills/release-checklist/SKILL.md

.claude/agents/product-guardian.md
.claude/agents/frontend-nextjs-architect.md
.claude/agents/docs-context-curator.md
.claude/agents/qa-regression-tester.md
```

### Etapa 2 — UX e produto

Depois:

```text
.claude/skills/clean-ui-review/SKILL.md
.claude/skills/visual-decision/SKILL.md
.claude/skills/startup-enxuta-check/SKILL.md

.claude/agents/ux-cleanliness-reviewer.md
```

### Etapa 3 — Leitura

Depois:

```text
.claude/skills/reading-session-timer/SKILL.md
.claude/skills/mural-layout/SKILL.md

.claude/agents/reading-sources-architect.md
```

### Etapa 4 — Banco e arquivos

Só quando entrar Supabase/PDF/EPUB:

```text
.claude/skills/supabase-rls-check/SKILL.md
.claude/skills/pdf-reader-plan/SKILL.md
.claude/skills/kindle-import-plan/SKILL.md
.claude/skills/privacy-copyright-check/SKILL.md

.claude/agents/backend-supabase-rls.md
.claude/agents/pdf-epub-reader-engineer.md
.claude/agents/privacy-copyright-reviewer.md
```

### Etapa 5 — Beta

Quando o beta estiver perto:

```text
.claude/skills/beta-feedback/SKILL.md
.claude/agents/beta-feedback-analyst.md
```

Regra final:

> Skills e subagentes existem para reduzir bagunça, não para criar burocracia. Se a ferramenta atrapalhar a construção, simplificar.

---

## 89. Auditoria final de lacunas — atualização pós-monorepo, Dev Container e vídeos de Claude

Esta seção registra uma nova auditoria das conversas e corrige pontos que ainda estavam faltando, contraditórios ou pouco práticos para a construção atual.

### 89.1. Ferramentas de desenvolvimento

Ferramentas atuais:

- **Claude Code dentro do Dev Container**: executor técnico principal;
- **ChatGPT**: apoio estratégico, análise, organização de contexto, revisão de produto e criação de prompts.

### 89.2. Estado técnico real atual do projeto

O projeto é um monorepo.

Estado atual consolidado:

```text
~/Projetos/aplicativo
├── apps/web
├── packages
├── docs
├── .claude/agents
├── .claude/skills
├── .devcontainer
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
└── pnpm-lock.yaml
```

Stack real inicial:

- Linux como ambiente principal;
- Docker Engine;
- VS Code com Dev Containers;
- Dev Container próprio usando `node:24-bookworm`;
- Node 24.16.0;
- pnpm 10.25.0;
- Turborepo;
- Next.js 16;
- React 19;
- TypeScript;
- Tailwind CSS;
- ESLint;
- Claude Code 2.1.173 instalado dentro do container.

Validações já passaram dentro do container:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

Regra atual:

> Em monorepo, os comandos oficiais são `pnpm lint`, `pnpm typecheck` e `pnpm build`.

### 89.3. Dev Container como limite de segurança da IA

Claude Code deve ser usado preferencialmente dentro do Dev Container.

Motivos:

- isolar ambiente de desenvolvimento;
- reproduzir dependências;
- reduzir risco de comandos afetarem o sistema inteiro;
- manter Node/pnpm/Turbo previsíveis;
- permitir que o Claude rode validações no mesmo ambiente do projeto.

Regra:

> Claude Code no host Linux pode existir, mas o Claude principal do projeto deve ser o Claude Code dentro do Dev Container.

Detalhes operacionais aprendidos:

- a imagem `mcr.microsoft.com/devcontainers/typescript-node:1-24-bookworm` falhou por não existir;
- o caminho correto foi criar `.devcontainer/Dockerfile` com `FROM node:24-bookworm`;
- a pasta `~/.claude` dentro do container precisa estar com permissão do usuário `node`;
- o PATH precisa incluir `~/.local/bin`;
- a instalação do Claude dentro do container foi validada com `claude --version`.

### 89.4. Arquivos de configuração que não podem ser esquecidos

Além de `docs/APP_CONTEXT.md`, o projeto precisa preservar:

```text
CLAUDE.md
AGENTS.md
.devcontainer/Dockerfile
.devcontainer/devcontainer.json
.gitignore
.claude/agents/
.claude/skills/
```

Regras:

- `.turbo/` não deve ser commitado;
- `node_modules/` não deve ser commitado;
- `.env` não deve ser commitado;
- cache local nunca deve entrar no Git;
- Git deve existir apenas na raiz do monorepo.

### 89.5. Skills externas/adaptadas que devem ser consideradas

Além das skills próprias do aplicativo, preservar a ideia de skills externas/adaptadas que já foram discutidas:

#### grill-with-docs

Função: confrontar planos contra a documentação existente antes de implementar.

Uso no projeto:

- revisar se uma tarefa contradiz `docs/APP_CONTEXT.md`;
- checar se a nomenclatura bate com decisões já registradas;
- transformar dúvidas em atualização de contexto;
- evitar que a IA implemente algo desalinhado.

#### grill-me

Função: questionar uma ideia com perguntas sucessivas antes de decidir.

Uso no projeto:

- quando a ideia estiver vaga;
- antes de criar função grande;
- antes de mexer em arquitetura;
- antes de decidir monetização, UX crítica ou integração externa.

#### write-a-prd

Função: transformar uma intenção em PRD curto e executável.

Uso no projeto:

- antes de Home;
- antes de Modo Leitura;
- antes de PDF reader;
- antes de importação Kindle;
- antes de beta fechado.

#### prd-to-kanban / prd-to-issues

Função: transformar PRD aprovado em tarefas pequenas.

Uso no projeto:

- criar tarefas em `docs/KANBAN.md`;
- separar MVP, depois e futuro;
- evitar pedidos gigantes para Claude Code.

Regra:

> Skills devem reduzir confusão, não criar burocracia.

### 89.6. Primeira leva real de skills

Não criar todas as skills de uma vez.

Criar primeiro:

```text
.claude/skills/grill-with-docs/SKILL.md
.claude/skills/task-slicing/SKILL.md
.claude/skills/context-update/SKILL.md
.claude/skills/release-checklist/SKILL.md
```

Depois, conforme a área for construída:

```text
.claude/skills/clean-ui-review/SKILL.md
.claude/skills/visual-decision/SKILL.md
.claude/skills/reading-session-timer/SKILL.md
.claude/skills/mural-layout/SKILL.md
.claude/skills/supabase-rls-check/SKILL.md
.claude/skills/pdf-reader-plan/SKILL.md
.claude/skills/kindle-import-plan/SKILL.md
.claude/skills/beta-feedback/SKILL.md
```

### 89.7. Primeira leva real de subagentes

Não criar subagentes demais antes de usar.

Criar primeiro:

```text
.claude/agents/product-guardian.md
.claude/agents/frontend-nextjs-architect.md
.claude/agents/docs-context-curator.md
.claude/agents/qa-regression-tester.md
```

Depois, conforme necessário:

```text
.claude/agents/ux-cleanliness-reviewer.md
.claude/agents/backend-supabase-rls.md
.claude/agents/reading-sources-architect.md
.claude/agents/pdf-epub-reader-engineer.md
.claude/agents/privacy-copyright-reviewer.md
.claude/agents/beta-feedback-analyst.md
.claude/agents/ai-workflow-orchestrator.md
```

Regra:

> Subagente só deve existir se tiver responsabilidade clara e uso real.

### 89.8. Aprendizado dos vídeos recentes sobre Claude

Dos vídeos recentes sobre Claude/Claude Code, aproveitar:

- Claude Code precisa de contexto e regras, não apenas prompt solto;
- `CLAUDE.md` deve ser curto, operacional e apontar para docs maiores;
- documentação viva vale mais que conversa perdida;
- Claude deve ajudar a pensar antes de codar;
- usar Claude para clareza, PRD, revisão, tarefas e validação;
- não automatizar commit, deploy, banco ou produção no começo;
- hooks podem ser úteis, mas devem vir depois;
- MCPs podem ser úteis, mas só depois de estabilizar o workflow;
- skills e subagentes devem ser criados aos poucos.

Regra adicionada:

> **O projeto não precisa de mais velocidade antes de ter mais direção.**

### 89.9. Design lab e protótipos visuais

Para experimentos visuais, preservar a estratégia:

- criar uma área de laboratório visual para testar Home, Biblioteca, Mente e Mural sem banco;
- não misturar variações experimentais na rota principal sem decisão;
- registrar cada variação em `docs/VISUAL_DECISIONS.md`;
- escolher por clareza, calma e utilidade, não por quantidade de efeitos.

Possível rota futura:

```text
/design-lab/home
/design-lab/mente
/design-lab/mural
```

Regra:

> Laboratório visual é para decidir melhor, não para virar produto paralelo bagunçado.

### 89.10. Tipografia e leitura confortável

Faltava reforçar a decisão sobre tipografia.

A tipografia precisa transmitir:

- calma;
- legibilidade;
- conforto;
- leitura longa sem cansaço;
- sensação premium discreta.

Direção:

- usar uma fonte sem serifa limpa para interface;
- considerar uma fonte com mais personalidade para trechos de leitura, citações ou reflexões;
- testar tamanho, espaçamento e altura de linha;
- preparar modo leitura com conforto visual;
- respeitar tema claro, escuro e preferência do sistema.

Regra:

> Tipografia no aplicativo não é decoração; é parte da experiência de leitura.

### 89.11. Acessibilidade e conforto

Adicionar como requisito explícito:

- contraste adequado;
- foco visível por teclado;
- navegação por teclado em ações principais;
- áreas clicáveis sem “espaço invisível” sobrando;
- suporte a `prefers-reduced-motion`;
- tamanhos de fonte confortáveis;
- estados vazios acolhedores;
- mensagens de erro humanas;
- responsividade mobile desde o começo.

Regra:

> Um aplicativo calmo também precisa ser acessível.

### 89.12. Mobile-first, PWA e uso real

O aplicativo será web inicialmente, mas deve nascer pensando em celular.

Motivos:

- o usuário pode ler fora do computador;
- pode querer registrar página rapidamente;
- pode tirar foto da capa/post-it;
- pode capturar pensamento rápido durante leitura física;
- beta testers provavelmente usarão celular.

Direção:

- layout responsivo desde o início;
- botão `+` acessível no mobile;
- fluxo de anotação em poucos toques;
- PWA como possibilidade futura;
- widgets/atalhos rápidos como futuro.

Regra:

> O aplicativo precisa funcionar bem na mão do leitor, não só no monitor do desenvolvedor.

### 89.13. Metadados de livros

O modelo de livro precisa prever mais do que título e autor.

Campos possíveis:

- título;
- subtítulo;
- autor;
- editora;
- edição;
- idioma;
- ISBN;
- total de páginas;
- capa;
- status;
- origem;
- formato: físico, PDF, EPUB, Kindle/importado, histórico;
- data de início;
- data de conclusão;
- página atual;
- avaliação pessoal opcional;
- nota privada opcional.

Regra:

> Metadados ajudam a organizar, mas o cadastro não pode virar formulário cansativo.

### 89.14. Modelo de dados complementar

Além de `books`, `notes` e `reading_sessions`, considerar no planejamento:

```text
reading_sources
uploaded_documents
inbox_items
imports
attachments
trash_items
export_jobs
user_preferences
reading_positions
annotation_positions
```

Essas entidades não precisam nascer todas no MVP, mas devem orientar a arquitetura para não travar PDF/EPUB/Kindle depois.

### 89.15. Caixa de Entrada Intelectual como primeira camada de captura

A Caixa de Entrada Intelectual deve ser tratada como peça estratégica.

Motivo:

- permite capturar sem organizar;
- reduz atrito;
- recebe foto, OCR, Kindle, PDF, EPUB, nota solta, áudio futuro;
- evita que o usuário precise decidir tudo na hora.

Regra:

> Capturar rápido vem antes de organizar bonito.

### 89.16. Testes e qualidade além de lint/build

Adicionar plano de QA:

- teste manual do ciclo principal;
- teste do timer;
- teste de pausar/retomar/finalizar;
- teste de Mural não pausar timer;
- teste de criar/anotar/revisar;
- teste de lixeira/restauração;
- teste de isolamento usuário A/B quando Supabase entrar;
- smoke test de rotas principais;
- Playwright no futuro para fluxos críticos.

Regra:

> Build passando não significa experiência funcionando.

### 89.17. Deploy, ambientes e beta

Planejar desde cedo:

- ambiente local;
- ambiente preview;
- ambiente beta/staging;
- ambiente produção futura;
- variáveis separadas;
- Supabase dev/staging/prod quando possível;
- deploy controlado na Vercel ou alternativa;
- beta fechado antes de público.

Regra:

> Nenhum deploy beta sem checklist anti-desastre.

### 89.18. Privacidade e IA dentro do produto

Quando IA entrar no produto, ela deve ser:

- explícita;
- revisável;
- não invasiva;
- sem salvar resultado automático sem confirmação;
- sem usar dados do usuário de forma obscura;
- com privacidade clara;
- com opção de correção.

Regra:

> IA no produto deve ajudar o leitor a organizar a própria mente, não parecer que o app está tomando posse dela.

### 89.19. Backup, portabilidade e confiança

Além de exportação, registrar:

- usuário deve conseguir levar suas anotações;
- exportação deve existir desde cedo;
- exclusão deve ser clara;
- backup não pode ser promessa vazia;
- cancelamento não pode sequestrar memórias.

Regra:

> O usuário confia mais quando sabe que pode sair sem perder quem ele foi dentro do aplicativo.

### 89.20. Itens explicitamente fora do escopo do aplicativo principal

Não misturar no MVP:

- RD Engenharia;
- DiasStore/DiasTech;
- automação de vídeos TikTok;
- PC/jogos/hardware;
- app profissional de oportunidades;
- rede social pública;
- marketplace;
- comunidade pública;
- audiobooks como player;
- integração Spotify/YouTube como player.

Essas conversas são históricas ou pessoais, mas não devem contaminar o produto principal.

### 89.21. Ajuste final de linguagem operacional

A partir desta auditoria, usar esta hierarquia:

```text
Produto: “o aplicativo”
Ferramenta técnica principal: Claude Code no Dev Container
Apoio estratégico: ChatGPT
Aprendizados históricos: Akita, vídeos
Projeto atual: monorepo
```

Frase final desta auditoria:

> **O aplicativo deve nascer pequeno, mas com arquitetura mental grande o suficiente para não trair a visão.**

---

## 90. Processo de decisão visual por variações

Antes de implementar telas importantes do aplicativo — especialmente Home, Biblioteca, Modo Leitura, Mural e Mente — seguir este processo:

1. Criar 3 variações visuais estáticas da tela.
2. Comparar as variações com base nos princípios do produto: calma, clareza, facilidade de uso, foco na leitura, pouca poluição visual e sensação premium e confortável.
3. Escolher a melhor direção entre as 3.
4. Criar uma quarta variação refinada, combinando o que funcionou melhor nas anteriores.
5. Revisar essa quarta variação com o usuário.
6. Só depois da aprovação, transformar a variação escolhida em tela real do aplicativo.

Regra-objetivo:

> O objetivo das variações não é criar muitas telas. É evitar implementar uma tela ruim cedo demais.

Onde fazer:

- as variações devem ser feitas em ambiente separado: `design-lab`, mock estático ou rota de laboratório visual;
- sem mexer em Supabase, autenticação, banco ou lógica real.

Registro:

- cada decisão visual importante deve ser registrada em `docs/VISUAL_DECISIONS.md`.
