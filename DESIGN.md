---
version: alpha
name: rachel-ornelas-bloco-cirurgico
description: Portfólio de uma médica residente em Anestesiologia. Direção "bloco cirúrgico" — branco-gelo e menta (frios, sem amarelo) se alternando, azul ardósia (um marinho suavizado) como cor de confiança e verde cirúrgico usado em só três pontos. Títulos em Manrope negrito com espaçamento negativo; Cormorant itálica só no nome do header e nas frases de destaque. Fotos reais dela, retrato em retângulo arredondado e um traçado de capnografia que se desenha como num monitor de anestesia.

colors:
  # Superfícies (calma): branco-gelo e menta, frios
  bg: "#fafcfc" # mint 50 — seções em branco-gelo
  field: "#fafcfc" # mint 50 — hero e header no topo
  surface: "#f1f6f5" # mint 100 — seções em menta
  surface-raised: "#ffffff" # cards brancos sobre a menta
  tint: "#e3edeb" # mint 200 — cards de número, ícones, botão secundário
  tint-strong: "#cddcd9" # mint 300 — hover do secundário; detalhes sobre o ardósia
  border: "#cddcd9" # mint 300
  border-strong: "#b1c6c2" # mint 400 — linha do tempo
  # Marca (calma): azul ardósia
  heading: "#26344a" # ink 900
  accent: "#26344a" # ink 900 — blocos de marca, setas dos botões
  accent-hover: "#33435c" # ink 800
  action: "#44587a" # ink 700 — links, ícones, eyebrows, marcadores, foco
  action-hover: "#33435c" # ink 800
  # Texto
  fg: "#121722" # neutral 900
  fg-muted: "#4b5466" # neutral 600
  fg-subtle: "#6b7587" # neutral 500
  on-accent: "#ffffff"
  # Contraste (forte): verde cirúrgico (jade), usado pouco
  highlight: "#1f7058" # jade 600 — só o botão principal
  highlight-hover: "#185a47" # jade 700
  on-highlight: "#ffffff"
  highlight-line: "#2b8a6c" # jade 500 — traços e marcadores, nunca texto
  # Seções escuras
  inverse-bg: "#1c2738" # ink 950 — Interesses, bloco de contato, rodapé
  inverse-surface: "#26344a" # ink 900 — cards sobre o escuro
  inverse-fg: "#ffffff"
  inverse-muted: "#c9d2e1" # ink 200
  inverse-border: "#33435c" # ink 800
  # Estado
  positive: "#16a34a" # ponto "disponível"

typography:
  display:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: 76px
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: -0.04em
  h1:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: 60px
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: -0.025em
  h2:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: 44px
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: -0.025em
  h3:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.025em
  lead:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0
  body:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0
  small:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  eyebrow:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0
  nav-link:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0.2em
    textTransform: uppercase
  button:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0
  stat:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: 44px
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: -0.025em
  quote:
    fontFamily: "Cormorant, Georgia, serif"
    fontSize: 60px
    fontWeight: 500
    fontStyle: italic
    lineHeight: 1.2
    letterSpacing: 0
  brand-name:
    fontFamily: "Cormorant, Georgia, serif"
    fontSize: 24px
    fontWeight: 500
    fontStyle: italic
    lineHeight: 1.2
    letterSpacing: 0
  wordmark:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: 13.5cqi
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: -0.04em

rounded:
  sm: 8px
  md: 16px # ícones, campos
  lg: 24px # cards
  xl: 32px # painéis, fotos
  full: 9999px # botões, selos, chips

spacing:
  "1": 4px
  "2": 8px
  "3": 12px
  "4": 16px
  "5": 20px
  "6": 24px
  "8": 32px
  "10": 40px
  "12": 48px
  "16": 64px
  "20": 80px
  "24": 96px
  "32": 128px
  container-max: 1152px
  container-narrow: 672px
  gutter: clamp(16px, 0.5rem + 2.5vw, 32px)
  header-height: 72px
  section-mobile: 80px
  section-desktop: 128px

shadows:
  sm: "0 1px 2px rgb(38 52 74 / 0.06)"
  md: "0 12px 32px -12px rgb(38 52 74 / 0.18)"
  lg: "0 24px 60px -20px rgb(38 52 74 / 0.28)"

motion:
  duration-fast: 150ms
  duration-base: 250ms
  duration-slow: 600ms
  ease-standard: cubic-bezier(0.2, 0, 0, 1)
  ease-out: cubic-bezier(0.22, 1, 0.36, 1)
  ease-draw: cubic-bezier(0.6, 0, 0.2, 1)

components:
  button-primary:
    backgroundColor: "{colors.highlight}"
    textColor: "{colors.on-highlight}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: 4px 4px 4px 20px
    height: 48px
  button-primary-icon:
    backgroundColor: "{colors.on-highlight}"
    textColor: "{colors.highlight}"
    rounded: "{rounded.full}"
    size: 40px
  button-primary-hover:
    backgroundColor: "{colors.highlight-hover}"
    textColor: "{colors.on-highlight}"
  button-secondary:
    backgroundColor: "{colors.tint}"
    textColor: "{colors.heading}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: 4px 4px 4px 20px
    height: 48px
  button-secondary-icon:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.full}"
    size: 40px
  button-secondary-hover:
    backgroundColor: "{colors.tint-strong}"
  button-inverse:
    backgroundColor: "{colors.inverse-fg}"
    textColor: "{colors.accent}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    height: 48px
  button-lg:
    height: 56px
    fontSize: 16px
    iconSize: 48px
  eyebrow:
    textColor: "{colors.action}"
    typography: "{typography.eyebrow}"
    marker: 20px x 2px bar before the text, currentColor, rounded full
  eyebrow-inverse:
    textColor: "{colors.tint-strong}"
  card-raised:
    backgroundColor: "{colors.surface-raised}"
    rounded: "{rounded.lg}"
    padding: 24px
    gap: 16px
  card-tint:
    backgroundColor: "{colors.tint}"
    rounded: "{rounded.lg}"
    padding: 24px
  card-outline:
    backgroundColor: transparent
    borderColor: "{colors.border}"
    rounded: "{rounded.lg}"
    padding: 24px
  card-inverse:
    backgroundColor: "{colors.inverse-surface}"
    textColor: "{colors.inverse-fg}"
    rounded: "{rounded.lg}"
    padding: 24px
  card-interactive-hover:
    shadow: "{shadows.md}"
    translateY: -2px
  icon-tile:
    backgroundColor: "{colors.tint}"
    textColor: "{colors.action}"
    rounded: "{rounded.md}"
    size: 44px
  chip:
    backgroundColor: "{colors.tint}"
    textColor: "{colors.heading}"
    typography: "{typography.small}"
    rounded: "{rounded.full}"
    padding: 4px 12px
  chip-dot:
    backgroundColor: "{colors.positive}"
    size: 8px
    ring: 3px positive at 20%
  stat:
    valueTypography: "{typography.stat}"
    valueColor: "{colors.heading}"
    labelTypography: "{typography.small}"
    labelColor: "{colors.fg-muted}"
  pull-quote:
    typography: "{typography.quote}"
    textColor: "{colors.heading}"
    quoteMarkColor: "{colors.action}"
    maxWidth: 832px
  portrait:
    backgroundColor: "{colors.tint-strong}"
    aspectRatio: 4 / 5
    rounded: "{rounded.xl}"
  site-header:
    backgroundColor: "{colors.field}"
    scrolledBackground: bg at 90% + blur(12px)
    height: 72px
    brandTypography: "{typography.brand-name}"
    linkTypography: "{typography.nav-link}"
    linkColor: "{colors.fg-muted}"
  section-default:
    backgroundColor: "{colors.bg}"
    padding: 80px 0 (128px from md)
  section-surface:
    backgroundColor: "{colors.surface}"
  section-inverse:
    backgroundColor: "{colors.inverse-bg}"
    textColor: "{colors.inverse-fg}"
  timeline-marker:
    backgroundColor: "{colors.bg}"
    borderColor: "{colors.border-strong}"
    borderWidth: 2px
  timeline-marker-current:
    backgroundColor: "{colors.highlight-line}"
    ring: 4px highlight-line at 20%, pulsing slowly
  capnogram:
    strokeColor: "{colors.highlight-line}"
  footer:
    backgroundColor: "{colors.inverse-bg}"
    textColor: "{colors.inverse-muted}"
    wordmarkTypography: "{typography.wordmark}"
  hero:
    backgroundColor: "{colors.field}"
    nameTypography: "{typography.brand-name}"
    nameColor: "{colors.fg-muted}"
    roleTypography: "{typography.display}"
    roleColor: "{colors.heading}"
    layout: text 1.2fr | portrait 1fr (stacked on mobile), capnogram at the bottom
  practice-section:
    backgroundColor: "{colors.bg}"
    streetTypography: "{typography.h2}"
    placeTypography: "{typography.lead}"
    pinColor: "{colors.action}"
    primaryAction: "{components.button-secondary}"
    mapRounded: "{rounded.xl}"
    mapAspectRatio: 4 / 3
---

<!--
Fonte da verdade: tokens/*.json (gerados com `pnpm tokens`), src/styles/abstracts/_typography.scss
e docs/identidade-visual.md. Este arquivo é um resumo para agentes de design (Claude Design, Stitch);
se mudar um token, atualize aqui também.
-->

## 1. Visão geral

Site pessoal de **Rachel Campos Ornelas**, médica (CRM-MG 98749) e **residente** em Anestesiologia no Hospital Márcio Cunha, em Ipatinga-MG, com pesquisa em epidemiologia e medicina baseada em evidências. Público: colegas, preceptores, pacientes e organizadores de congressos. O tom é de **bloco cirúrgico**: limpo e sereno, com o verde e o azul que remetem à medicina, sem cair no frio de hospital (cantos arredondados, fotos reais, Cormorant em poucos pontos).

A página é sempre clara. O fundo alterna entre **branco-gelo** (`{colors.bg}`) e **menta** (`{colors.surface}`), com algumas seções em **azul ardósia** escuro (`{colors.inverse-bg}`) para dar contraste. O **verde cirúrgico** aparece em só três lugares, e é isso que o faz chamar atenção.

Regra das 3 cores:

1. **Branco-gelo / menta** (calma) — a limpeza. Frios de propósito: tons puxados para o amarelo (sálvia, linho) deixam o site amarelado.
2. **Azul ardósia** (calma) — a confiança. Um marinho suavizado, nunca azul vivo.
3. **Verde cirúrgico** (forte) — o ponto de ação, o verde dos campos e roupas do centro cirúrgico. Usado pouco.

**Marcas da identidade:**

- Topo com a **atuação** em destaque ("Médica residente em Anestesiologia"), o nome menor acima em Cormorant itálica e o retrato em retângulo arredondado ao lado, com a capnografia na base.
- Capnografia (curva de CO₂ expirado) como assinatura gráfica — o "monitor" da anestesia. Traço em verde cirúrgico que se desenha.
- Botão em pílula com a seta dentro de um círculo.
- Eyebrows com um traço curto à esquerda.
- Cormorant itálica em poucos lugares (nome no header, frase de destaque). O resto é Manrope.
- Profundidade por **degrau de tom** (branco sobre menta), quase sem contornos e sombras.
- Assinatura gigante com o nome no rodapé.

## 2. Cores

Componentes usam só os papéis abaixo, nunca a paleta bruta.

### Superfícies

| Papel                      | Hex                   | Uso                                                           |
| -------------------------- | --------------------- | ------------------------------------------------------------- |
| `bg`                       | `#fafcfc`             | Seções em branco-gelo (Sobre, Momentos, Onde atendo, Contato) |
| `field`                    | `#fafcfc`             | Hero e header no topo da página                               |
| `surface`                  | `#f1f6f5`             | Seções em menta (Trajetória, Publicações)                     |
| `surface-raised`           | `#ffffff`             | Cards brancos sobre a menta                                   |
| `tint` / `tint-strong`     | `#e3edeb` / `#cddcd9` | Cards de número, ícones, botão secundário e seu hover         |
| `border` / `border-strong` | `#cddcd9` / `#b1c6c2` | Contornos raros, linha do tempo                               |

### Marca e texto

| Papel                | Hex       | Uso                                                      |
| -------------------- | --------- | -------------------------------------------------------- |
| `heading` / `accent` | `#26344a` | Títulos, blocos de marca, setas dos botões               |
| `action`             | `#44587a` | Links, ícones, eyebrows, marcadores, anel de foco        |
| `fg`                 | `#121722` | Texto corrido (sempre em cor cheia, nada de cinza claro) |
| `fg-muted`           | `#4b5466` | Rótulos, legendas, CRM, links do header                  |

### Contraste (verde cirúrgico)

| Papel             | Hex       | Uso                                                                    |
| ----------------- | --------- | ---------------------------------------------------------------------- |
| `highlight`       | `#1f7058` | **Só** o botão principal (topo e menu mobile)                          |
| `highlight-hover` | `#185a47` | Hover do botão principal                                               |
| `highlight-line`  | `#2b8a6c` | Traço da capnografia e marcador "atual" da linha do tempo. Nunca texto |

### Escuro (ardósia)

| Papel             | Hex       | Uso                                      |
| ----------------- | --------- | ---------------------------------------- |
| `inverse-bg`      | `#1c2738` | Interesses, bloco de contato, rodapé     |
| `inverse-surface` | `#26344a` | Cards sobre o escuro                     |
| `inverse-fg`      | `#ffffff` | Texto sobre o escuro                     |
| `inverse-muted`   | `#c9d2e1` | Texto secundário sobre o escuro          |
| `tint-strong`     | `#cddcd9` | Eyebrows e ícones sobre o escuro (menta) |

### Contrastes conferidos (WCAG)

- Títulos ardósia no branco-gelo: 12,2:1 · texto corrido: 17,4:1
- Links e eyebrows (`action`) no branco-gelo: 7,0:1 · na menta: 6,6:1
- `fg-muted` na menta: 7,0:1
- Branco no botão verde: 6,0:1
- Traço verde (`highlight-line`) no branco-gelo: 4,1:1 — passa para gráficos (3:1), não para texto
- Texto secundário no escuro: 9,9:1

## 3. Tipografia

- **Manrope** (Google Fonts, via next/font): todo o texto e os títulos. Geométrica, legível e calorosa.
- **Cormorant** itálica (Google Fonts): só o nome no header e as frases de destaque (`PullQuote`).
- Títulos em **negrito com espaçamento negativo**. Tamanhos fluidos com `clamp()`: crescem com a tela.

| Estilo       | Fonte           | Tamanho (mín → máx)            | Peso | Altura | Espaçamento | Uso                                     |
| ------------ | --------------- | ------------------------------ | ---- | ------ | ----------- | --------------------------------------- |
| `display`    | Manrope         | 40 → 76px                      | 700  | 1.08   | -0.04em     | Nome no topo (celular/tablet)           |
| `h1`         | Manrope         | 36 → 60px                      | 700  | 1.08   | -0.025em    | Título de página                        |
| `h2`         | Manrope         | 30 → 44px                      | 700  | 1.08   | -0.025em    | Título de seção                         |
| `h3`         | Manrope         | 20 → 24px                      | 700  | 1.2    | -0.025em    | Título de card, cargo na linha do tempo |
| `lead`       | Manrope         | 18 → 20px                      | 400  | 1.7    | 0           | Texto de abertura                       |
| `body`       | Manrope         | 16px                           | 400  | 1.7    | 0           | Texto corrido                           |
| `small`      | Manrope         | 14px                           | 500  | 1.5    | 0           | Rótulos, chips, legendas                |
| `eyebrow`    | Manrope         | 14px                           | 600  | 1.5    | 0           | Rótulo acima do título, com traço       |
| `nav-link`   | Manrope         | 13px, caixa alta               | 500  | 1.5    | 0.2em       | Links do header                         |
| `stat`       | Manrope         | 30 → 44px                      | 800  | 1.08   | -0.025em    | Números (artigos, prêmios)              |
| `quote`      | Cormorant itál. | 24 → 60px                      | 500  | 1.2    | 0           | Frase de destaque                       |
| `brand-name` | Cormorant itál. | 20 → 24px                      | 500  | 1.2    | 0           | Nome no header                          |
| `wordmark`   | Manrope         | 13.5cqi (largura do contêiner) | 800  | 1.08   | -0.04em     | Assinatura gigante no rodapé            |

**Princípios:** nada legível abaixo de 13px. Eyebrows **não** são em caixa alta (só os links do header). A serifada é tempero: se aparecer em títulos de seção, perde o efeito. Números em `tabular-nums`.

## 4. Componentes

Todos existem em `src/components/ui/` e `src/components/layout/`. Reutilize antes de criar.

### Botões (`ButtonLink`)

Pílula (`rounded.full`), 48px de altura (56px no `lg`), texto à esquerda e **seta dentro de um círculo** à direita (40px; 48px no `lg`). A seta anda 2px no hover. Sem ícone, o padding horizontal fica simétrico (24px).

- **primary** — fundo verde cirúrgico, texto branco, círculo branco com seta verde. Hover escurece para `highlight-hover`. Uso: a ação principal do topo e do menu mobile. Uma por tela.
- **secondary** — fundo menta (`tint`), texto ardósia, círculo ardósia com seta branca. Hover vai para `tint-strong`. Sem borda nem sombra.
- **inverse** — sobre o escuro: fundo branco, texto ardósia, círculo ardósia.

### Eyebrow

Texto em `action` (ardósia médio) com um traço de 20 × 2px antes, em `currentColor`. Versão `inverse` em menta (`tint-strong`) sobre o escuro.

### Card

Raio 24px, padding 24px, gap 16px, **sem contorno e sem sombra**: o degrau de tom separa.

- **raised** — branco sobre a menta.
- **tint** — menta mais escura sobre o branco-gelo.
- **outline** — só contorno `border` (uso raro).
- **inverse** — ardósia 900 sobre ardósia 950.
- **interactive** — no hover sobe 2px e ganha `shadow.md`.

### Outros

- **IconTile** — quadrado arredondado de 44px (raio 16px), ícone Lucide em `action` sobre `tint`. Variações `accent`, `raised`, `inverse`.
- **Chip** — pílula pequena em `tint` ou `raised`; com ponto verde de status (`dot`) ou rótulo (`label`, ex.: CRM).
- **Stat** — número grande em `stat` + rótulo em `small` (`fg-muted`) + ícone. Conta a partir do zero ao aparecer.
- **SectionHeader** — eyebrow + título + texto; layouts `stack`, `split` (título à esquerda, texto à direita) e `center`.
- **Portrait** — retrato 4:5 em **retângulo com cantos `xl`** (32px). O arco foi descartado pela cliente. Sem foto, mostra as iniciais "RO" em ardósia translúcida sobre `tint-strong`.
- **PullQuote** — frase em Cormorant itálica, centralizada, até 832px, com aspas grandes em `action` acima e assinatura (foto redonda + nome + descrição) embaixo.
- **Capnogram** — curva de capnografia em SVG, traço `highlight-line`, de ponta a ponta na base do hero. Separa o hero do Sobre.
- **Hero** — o destaque é a **atuação**: "Médica residente em Anestesiologia" em `display` (ardósia), com o nome menor acima em Cormorant itálica (`fg-muted`). Os dois ficam no mesmo `h1`. Embaixo: texto, botões (`primary` + `secondary`) e o CRM. Retrato à direita (embaixo no celular). Quando ela tiver RQE, o título vira "Médica anestesiologista" e o RQE aparece junto do CRM.
- **Onde atendo** (`Practice`) — endereço como título (`h2`), bairro e cidade com ícone de pino em `action`, nome da clínica acima; botão `secondary` "Como chegar" (Google Maps) e link de texto "Abrir no Waze" com fio embaixo; mapa do Google embutido ao lado, raio `xl`, proporção 4:3. Sem verde cirúrgico: o botão é o secundário.
- **Linha do tempo** (Trajetória) — trilho em `border-strong`; marcadores vazados (fundo `bg`, borda 2px). O marcador atual é cheio em verde cirúrgico com um anel que pulsa devagar. Período em `action`, cargo em `h3`.

### Layout

- **SiteHeader** — sem borda. No topo assume a cor do hero (`field`); ao rolar vira vidro claro (`bg` a 90% + blur 12px) com um fio de 1px embaixo. Nome em Cormorant itálica com o CRM discreto ao lado (separado por fio fino). Links em caixa alta espaçada, com um fio que recolhe no hover. Links só a partir de 1024px; abaixo, menu em popover.
- **Section** — tons `default` (branco-gelo), `surface` (menta), `inverse` (ardósia). Padding vertical 80px, 128px a partir de 768px.
- **SiteFooter** — ardósia 950, texto `inverse-muted`, sem linhas divisórias, nome gigante (`wordmark`) ocupando a largura.

## 5. Layout

- **Base 4px.** Espaços: 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128px.
- **Contêiner:** até 1152px; versão estreita de 672px para texto longo. Margem lateral fluida de 16 a 32px.
- **Header:** 72px.
- **Ritmo da home** (nunca repita o mesmo tom em duas seções seguidas, exceto Hero → Sobre, separados pela capnografia):

  Hero (branco-gelo) → Sobre (branco-gelo) → Interesses (ardósia) → Trajetória (menta) → Momentos (branco-gelo) → Publicações (menta) → Onde atendo (branco-gelo) → FAQ (se houver) → Contato (branco-gelo, bloco ardósia) → Rodapé (ardósia)

- **Hero no desktop:** duas colunas — texto (1.4fr) à esquerda e retrato (1fr) à direita, centralizados na vertical, acima do traçado. **Cabe na altura da tela**, para a capnografia se desenhar à vista já no carregamento: título em duas linhas (`font-size(hero)`: até 56px, limitado a 9svh) e foto com altura limitada pela janela (até 448px de largura).
- **Onde atendo:** duas colunas no desktop — endereço e botões à esquerda, mapa à direita; no celular, mapa embaixo.
- **Sobre:** texto + duas fotos desencontradas; a coluna das fotos é a maior (1 : 1,35 no desktop).
- **Interesses:** lista editorial sem cards nem ícones, alinhada ao cabeçalho da seção.
- **Trajetória:** linha do tempo ao lado de uma foto grande fixa no centro cirúrgico.
- **Momentos:** grade de 2 fotos (4 a partir de 1024px) com legenda embaixo.
- Muito espaço em branco entre seções; o conteúdo respira.

## 6. Profundidade e elevação

Profundidade vem **primeiro do tom**, depois (pouco) da sombra. Sombras sempre no tom do ardósia, nunca preto.

| Nível       | Tratamento                               | Uso                                                |
| ----------- | ---------------------------------------- | -------------------------------------------------- |
| Plano       | sem sombra, sem borda                    | Seções, header no topo, cards em repouso           |
| Degrau      | branco sobre menta / menta sobre branco  | Cards, chips, botão secundário                     |
| `shadow.sm` | `0 1px 2px rgb(38 52 74 / 0.06)`         | Repouso, quando precisa                            |
| `shadow.md` | `0 12px 32px -12px rgb(38 52 74 / 0.18)` | Hover de card, botão de voltar ao topo, FAQ aberto |
| `shadow.lg` | `0 24px 60px -20px rgb(38 52 74 / 0.28)` | Menu mobile (popover)                              |
| Vidro       | `bg` a 90% + `blur(12px)`                | Só o header ao rolar                               |

### Movimento

Tema: **traço que se desenha**, como num monitor. Tudo respeita "reduzir movimento".

- Durações 150 / 250 / 600ms; curvas `standard` `cubic-bezier(0.2, 0, 0, 1)`, `out` `cubic-bezier(0.22, 1, 0.36, 1)`, `draw` `cubic-bezier(0.6, 0, 0.2, 1)`.
- Topo (só CSS): nome, texto e botões sobem em sequência; o retrato "assenta" (de 1.06 para 1); a capnografia se desenha. O nome e o retrato nunca começam invisíveis.
- Seções: cabeçalho aparece ao entrar na tela; listas entram em sequência.
- Linha do tempo se desenha com a rolagem; números contam a partir do zero.
- Rolagem suave (Lenis), desligada com "reduzir movimento".

## 7. Formas e imagens

| Raio   | Valor  | Uso                          |
| ------ | ------ | ---------------------------- |
| `sm`   | 8px    | detalhes pequenos            |
| `md`   | 16px   | ícones, campos               |
| `lg`   | 24px   | cards                        |
| `xl`   | 32px   | painéis, fotos               |
| `full` | 9999px | botões, chips, selos, avatar |

**Fotos:** sempre fotos reais da Rachel (congressos, centro cirúrgico, formatura, estúdio). Nada de banco de imagens, ilustração genérica ou ícones de "saúde" decorativos. Retrato principal em retângulo arredondado; fotos de seção com raio `xl`; avatares redondos. Legendas só com o que aparece na foto ou foi confirmado.

## 8. Faça e não faça

### Faça

- Use só os papéis de cor (`heading`, `action`, `highlight`...), nunca hex solto.
- Alterne branco-gelo, menta e ardósia entre as seções.
- Guarde o verde cirúrgico para o botão principal, a capnografia e o marcador atual.
- Separe por tom antes de pensar em borda ou sombra.
- Mantenha texto corrido em cor cheia (`fg`); cinza fica com cara de rascunho.
- Mostre o **CRM-MG 98749** sempre que o nome dela aparecer como profissional (header, topo, rodapé).
- Chame-a de **médica residente em Anestesiologia**.
- Use fotos reais e legendas factuais.

### Não faça

- **Não** a chame de "anestesiologista", "especialista" ou "Dra. especialista em..." — ela é residente (regra do CFM).
- **Não** mostre pacientes nem terceiros identificáveis nas fotos (CFM/LGPD); recorte para mostrar só ela.
- **Não** invente fatos, números, depoimentos, prêmios ou publicações. Conteúdo vem do Lattes, LinkedIn e Instagram profissional.
- **Não** espalhe o verde cirúrgico (links, ícones, títulos, fundos de seção). Se ele aparecer em todo lugar, deixa de chamar atenção.
- **Não** use `highlight-line` em texto (contraste 4,1:1).
- **Não** use tons quentes ou amarelados nas superfícies (linho, sálvia, creme): o site fica amarelado.
- **Não** volte ao retrato em arco nem ao nome gigante no topo (a cliente não gostou).
- **Não** use azul vivo, gradientes, glassmorphism (fora do header), neon ou cores fora das três famílias.
- **Não** use Cormorant em títulos de seção ou texto corrido.
- **Não** coloque texto abaixo de 13px.
- **Não** use tema escuro: o site é sempre claro.
- **Não** use antes/depois, promessas de resultado ou linguagem de venda (publicidade médica).

## 9. Responsivo

| Nome    | Largura  | O que muda                                                                                             |
| ------- | -------- | ------------------------------------------------------------------------------------------------------ |
| Celular | < 640px  | Tudo em coluna; retrato no fim do hero, de pé sobre o traçado; menu em popover; Momentos em 2 colunas  |
| sm      | ≥ 640px  | Pequenos ajustes no header                                                                             |
| md      | ≥ 768px  | Seções ganham 128px de padding vertical; frase de destaque no tamanho grande; Publicações em 2 colunas |
| lg      | ≥ 1024px | Links do header aparecem; hero em 3 colunas com nome numa linha; Momentos em 4 colunas                 |
| xl      | ≥ 1280px | Mesmo layout, contêiner limitado a 1152px                                                              |

- Alvos de toque de pelo menos 48px (botões têm 48 ou 56px).
- Nada pode rolar de lado em nenhuma largura entre 375 e 1280px.
- Grades reduzem colunas em vez de encolher cards.
- A assinatura do rodapé usa unidades de contêiner (`cqi`) para caber sempre numa linha.

## 10. Guia para o agente

Prompts prontos:

- "Crie uma página de **Publicações** seguindo este DESIGN.md: seção em menta, `SectionHeader` em layout `split`, lista de cards `raised` com título em `h3`, periódico e ano em `small`/`fg-muted` e link em `action`. Sem verde cirúrgico."
- "Crie um bloco de **Contato** sobre `inverse-bg`: eyebrow `inverse`, título em `h2` branco, chips com Instagram e LinkedIn e um `button-inverse`. Mostre o CRM."
- "Crie uma variação da seção **Onde atendo** para dois locais: um bloco por local (nome, endereço em `h3`, 'Como chegar') e um mapa só, do local selecionado."
- "Monte um card de **congresso** com foto real (raio `xl`), legenda factual embaixo em `small` e chip com o ano."
- "Revise esta tela contra o DESIGN.md: verde cirúrgico em mais de 3 pontos, hex solto, texto < 13px, uso de 'anestesiologista' ou falta do CRM."

Regras de iteração:

1. Um componente por vez, citando a chave YAML (`{components.card-raised}`).
2. Sempre `{token}`; nunca hex ou medida crua.
3. Na dúvida sobre ênfase: título maior em Manrope negrito antes de mais cor.
4. Menta + ardósia + verde cirúrgico é o trio. Não crie uma quarta família de cor.

## Lacunas conhecidas

- Existe um tema escuro nos tokens (`tokens/semantic/dark.json`), mas o site não o usa.
- Formulários ainda não existem (o contato é por links); estados de campo e erro não estão definidos.
- Faltam e-mail profissional, Lattes e Google Scholar nos dados — não invente.
- A curva da capnografia é um SVG próprio (`src/components/ui/capnogram.tsx`), não um token.
