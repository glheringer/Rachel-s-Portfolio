# Identidade visual

Direção: **"cuidado claro"** — confiança clínica (azul-marinho), acolhimento (linho quente), ação nítida (azul vivo, só nos detalhes). Branco e linho se alternando, cantos arredondados, sombras suaves.

## Referências

| Shot                                                                                                                   | O que veio dele                                                                                                                                                                                                     |
| ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Medical Portfolio Website UI (D.Janat)](https://dribbble.com/shots/27386643-Medical-Portfolio-Website-UI)             | hero em painel azul-céu com linhas verticais, botão pílula com seta no círculo, seção escura de contraste, cards numerados 01/02/03, cards de números em azul claro, assinatura gigante no rodapé, fonte geométrica |
| [Onepage Medical Portfolio (ProCares)](https://dribbble.com/shots/26104481-Onepage-Medical-Portfolio-Website-Template) | azul-marinho `#092862` como cor de confiança, trio de diferenciais sob o título, órbita tracejada ao redor da foto                                                                                                  |
| [Medical Dashboard (MediSync)](https://dribbble.com/shots/26788320-Medical-Dashboard)                                  | azul de ação `#0078F8`, ícones em quadrados arredondados, listas em cards com raio grande, cartão flutuante sobre a imagem                                                                                          |
| [Charles Lawrie, MD](https://contra.com/p/OZeRFsvo-charles-lawrie-md-premium-personal-brand-website-concept)           | tom quente ao lado do marinho, para tirar a frieza "clínica"                                                                                                                                                        |
| [Rosemary Vidal](https://www.rosemaryvidal.com.br) (indicado pelo cliente)                                             | header limpo (links espaçados com fio fino, sem borda), tons de linho (`linen`) e serifada itálica (Cormorant) só nas frases de destaque — sem o rosé, que puxa para estética                                       |
| [Dr. Jilly's](https://dr-jillys-portfolio.framer.website/)                                                             | linha do tempo período → cargo; frase de filosofia em largura total                                                                                                                                                 |
| [Doctor Portfolio (FreeCodeLibraries)](https://dribbble.com/shots/27349375-Doctor-Portfolio-Web-Template-Design)       | linha do tempo ao lado de foto grande no centro cirúrgico; duas fotos desencontradas no "Sobre"                                                                                                                     |
| Pinterest — Synora                                                                                                     | cards de foto com legenda sobre degradê                                                                                                                                                                             |

## Cores

Paleta bruta em `tokens/primitives/color.json`; componentes usam **só** os papéis abaixo (`color(<papel>)`).

O site é **sempre claro**, como as referências. A coluna "Escuro" só vale se o tema escuro for ativado (`<html data-theme="dark">`).

Três famílias, cada uma com um papel:

- **Superfícies:** branco (`bg`, `field`) e linho (`surface`) se alternando entre as seções; cards e ícones em linho mais escuro (`tint`).
- **Marca e profundidade:** marinho nos títulos, no botão primário e nas seções escuras (Interesses, Contato, rodapé). Sobre o marinho, os detalhes usam o linho (`tint-strong`).
- **Acento:** azul vivo (`action`) só em links, eyebrows, ícones, marcadores da linha do tempo e no traçado da capnografia. Nada de fundos azul-claros.

Ritmo da home: Hero (branco, separado do Sobre pelo traçado da capnografia) → Sobre (branco) → Interesses (marinho) → Trajetória (linho) → Momentos (branco) → Publicações (linho) → Contato (branco, bloco marinho) → rodapé (marinho).

| Papel                      | Claro             | Escuro            | Uso                                               |
| -------------------------- | ----------------- | ----------------- | ------------------------------------------------- |
| `heading`                  | navy 900          | branco            | títulos                                           |
| `fg` / `fg-muted`          | neutral 900 / 600 | neutral 100 / 400 | texto                                             |
| `accent`                   | navy 900          | sky 300           | botão primário, blocos de marca                   |
| `action` / `focus`         | blue 500          | blue 400          | links, ícones, eyebrows, traçado, foco            |
| `bg`                       | branco            | neutral 950       | seções brancas                                    |
| `surface`                  | linen 100         | neutral 900       | seções em linho (`Section tone="surface"`)        |
| `field`                    | branco            | neutral 900       | hero e header no topo da página                   |
| `tint` / `tint-strong`     | linen 200 / 300   | navy 950 / 800    | cards de número, ícones, detalhes sobre o marinho |
| `border` / `border-strong` | linen 300 / 400   | neutral 800 / 700 | contornos, linha do tempo                         |
| `inverse-*`                | navy 950 / 900    | —                 | seções escuras, bloco de contato, rodapé          |
| `positive`                 | green 500         | green 400         | ponto "disponível"                                |

## Tipografia

**Manrope** (next/font) em tudo, exceto **Cormorant itálica** no nome do header e nas frases de destaque (`PullQuote`). Estilos prontos via `@include text(...)`:
`display` (nome no hero) · `h1` · `h2` · `h3` · `lead` · `body` · `small` · `eyebrow` · `stat` · `quote` · `wordmark`.
Títulos em negrito com espaçamento negativo; tamanhos fluidos (`clamp`).

## Forma e profundidade

- Raio: `md` 1rem (ícones, campos), `lg` 1.5rem (cards), `xl` 2rem (painéis), `full` (botões, selos).
- Sombras azuladas e discretas: `sm` (repouso), `md` (hover), `lg` (elementos flutuantes).
- Movimento: só CSS no topo da página; `Reveal` (Motion) abaixo da dobra; tudo respeita "reduzir movimento". Tema: **traço que se desenha**, como num monitor.
  - Topo: nome, texto e botões sobem em sequência; o retrato "assenta" (leve aproximação); a capnografia se desenha. O nome e o retrato nunca começam invisíveis (são o LCP).
  - Header: vidro claro ao rolar e fio dos links que recolhe no hover (`ease(draw)`).
  - Seções: o cabeçalho de toda `Section` aparece ao entrar na tela; listas de cards entram em sequência (`Reveal as="li"` com `delay`).
  - Trajetória: a linha do tempo se desenha com a rolagem (scroll-driven animation) e o marcador "atual" pulsa devagar.
  - Números (`Stat`): contam a partir do zero com `CountUp` quando aparecem.

## Componentes

`src/components/ui/` — peças reutilizáveis, sem conteúdo:

| Componente      | Variações                                                                              |
| --------------- | -------------------------------------------------------------------------------------- |
| `ButtonLink`    | `primary` · `secondary` · `inverse`; `md` · `lg`; ícone no círculo ou `icon={null}`    |
| `Eyebrow`       | `default` · `inverse`                                                                  |
| `Card`          | `raised` · `tint` · `outline` · `inverse`; `interactive` (levanta no hover); `as="li"` |
| `IconTile`      | `tint` · `accent` · `raised` · `inverse`                                               |
| `Stat`          | número + rótulo + ícone                                                                |
| `Chip`          | com `dot` (status) e `label` (ex.: CRM)                                                |
| `SectionHeader` | `stack` · `split` · `center`; `default` · `inverse`                                    |
| `Portrait`      | foto ou placeholder, órbita, cartão flutuante, `preload`                               |
| `PullQuote`     | frase serifada itálica com assinatura (autor, descrição e foto opcional)               |

`src/components/layout/` — `Container`, `Section` (tons `default` (branco) · `surface` (linho) · `inverse` (marinho) + cabeçalho), `SiteHeader` (sem borda; no topo assume a cor do hero e, ao rolar, vira vidro claro — scroll-driven animation; links em caixa alta espaçada com fio que recolhe no hover; nome em Cormorant itálica e CRM discreto ao lado; menu mobile com Popover API, sem JS), `SiteFooter`, `SkipLink`.

`src/components/sections/` — a home, em ordem: `Hero` → `About` (2 fotos, frase de destaque — aforismo de William Osler) → `Interests` (escura) → `Journey` (linha do tempo + foto fixa, prêmios e certificações) → `Moments` (fotos com legenda) → `Publications` → `Faq` (só aparece se houver perguntas; gera JSON-LD FAQPage) → `Contact`.

Conteúdo fica fora dos componentes: `src/config/site.ts` (dados dela) e `src/content/home.ts` (textos da home).

## Pendências

- `public/images/rachel-ornelas.jpg` (foto antiga do LinkedIn) não é mais usada.

## Fotos

- Ficam em `public/images/` com nomes descritivos (`copa-2025-apresentacao-1.jpg`, `residencia-centro-cirurgico-1.jpg`...) e são registradas em `src/config/site.ts` (`portrait`, `aboutPhotos`, `quotePhoto`, `workPhoto`, `moments`).
- Legendas só com o que aparece na foto ou foi confirmado — não inventar local/data.
- **Fotos com paciente:** recortar para mostrar só a Rachel (CFM/LGPD). O original vai para `fotos-originais/` (fora do git e do `public/`, que é todo publicado). O mesmo vale para fotos com terceiros identificáveis.
- Evitar fotos com textos que a chamem de especialista (ex.: painel "Orgulho de ser anestesiologista" do 69º CBA ficou de fora).
- Revisar os textos com ela: tudo veio do Lattes (coletado em 05/2025), do LinkedIn e do Instagram profissional.
- Links que faltam: Lattes, Google Scholar e um e-mail profissional.
