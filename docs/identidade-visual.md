# Identidade visual

Direção: **"bloco cirúrgico"**: duas cores calmas que combinam, que são a limpeza (branco-gelo esverdeado, `mint`) e a confiança (azul ardósia, um marinho suavizado), e uma cor forte usada pouco (verde cirúrgico, `jade`), o verde dos campos e roupas do centro cirúrgico. Branco-gelo e menta se alternando, cantos arredondados, sombras suaves.

Histórico: até 11/2026 a paleta era linho + terracota ("cuidado aconchegante"); a cliente preferiu verde e azul, que remetem à medicina e ao bloco cirúrgico. O tom das superfícies é frio de propósito (matiz ~170°): a sálvia (~95°) deixava o site amarelado.

## Referências

| Shot                                                                                                                   | O que veio dele                                                                                                                                                                                                     |
| ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Medical Portfolio Website UI (D.Janat)](https://dribbble.com/shots/27386643-Medical-Portfolio-Website-UI)             | hero em painel azul-céu com linhas verticais, botão pílula com seta no círculo, seção escura de contraste, cards numerados 01/02/03, cards de números em azul claro, assinatura gigante no rodapé, fonte geométrica |
| [Onepage Medical Portfolio (ProCares)](https://dribbble.com/shots/26104481-Onepage-Medical-Portfolio-Website-Template) | azul-marinho `#092862` como cor de confiança, trio de diferenciais sob o título, órbita tracejada ao redor da foto                                                                                                  |
| [Medical Dashboard (MediSync)](https://dribbble.com/shots/26788320-Medical-Dashboard)                                  | azul de ação `#0078F8`, ícones em quadrados arredondados, listas em cards com raio grande, cartão flutuante sobre a imagem                                                                                          |
| [Charles Lawrie, MD](https://contra.com/p/OZeRFsvo-charles-lawrie-md-premium-personal-brand-website-concept)           | tom quente ao lado do marinho, para tirar a frieza "clínica" (usado até 11/2026; hoje a paleta é fria, a pedido da cliente)                                                                                         |
| [Rosemary Vidal](https://www.rosemaryvidal.com.br) (indicado pelo cliente)                                             | header limpo (links espaçados com fio fino, sem borda), serifada itálica (Cormorant) só nas frases de destaque, seção "Onde atendo" com endereço como título, "Como chegar" e mapa                                  |
| [Dr. Jilly's](https://dr-jillys-portfolio.framer.website/)                                                             | linha do tempo período → cargo; frase de filosofia em largura total                                                                                                                                                 |
| [Doctor Portfolio (FreeCodeLibraries)](https://dribbble.com/shots/27349375-Doctor-Portfolio-Web-Template-Design)       | linha do tempo ao lado de foto grande no centro cirúrgico; duas fotos desencontradas no "Sobre"                                                                                                                     |
| Pinterest — Synora                                                                                                     | cards de foto com legenda sobre degradê                                                                                                                                                                             |
| [Reel @nunesouushi](https://www.instagram.com/p/DfSqyjVKmp8/)                                                          | regra das 3 cores: duas calmas que combinam e uma forte que "faz o trabalho", em poucos pontos (botão, um detalhe)                                                                                                  |
| [Reel @marcelodesignxh](https://www.instagram.com/p/DeM4Xlhhkgu/)                                                      | hero menos "chapado": forma grande de fundo atrás do assunto e cartão pequeno com miniatura sobreposto à imagem principal                                                                                           |

## Cores

Paleta bruta em `tokens/primitives/color.json`; componentes usam **só** os papéis abaixo (`color(<papel>)`).

O site é **sempre claro**, como as referências. A coluna "Escuro" só vale se o tema escuro for ativado (`<html data-theme="dark">`).

Três famílias: duas calmas e uma forte.

- **Superfícies (calma):** branco-gelo (`bg`, `field`, mint 50) e menta (`surface`, mint 100) se alternando entre as seções; cards e ícones em menta mais escuro (`tint`).
- **Marca e detalhes (calma):** azul ardósia (`ink`) nos títulos, nas seções escuras (Interesses, Contato, rodapé), nos links, eyebrows, ícones e marcadores da linha do tempo (`action`). Sobre o ardósia, os detalhes usam a menta (`tint-strong`).
- **Contraste (forte):** verde cirúrgico (`highlight*`) **só em 3 pontos**: o botão principal (`ButtonLink` padrão: topo e menu mobile), o traçado da capnografia e o marcador "atual" da linha do tempo. Não espalhe: se ela aparecer em todo lugar, deixa de chamar atenção. Para texto, só `highlight` (jade 600); `highlight-line` (500) é para traços e marcadores.

Ritmo da home: Hero (branco-gelo, separado do Sobre pelo traçado da capnografia) → Sobre (branco-gelo) → Interesses (ardósia) → Trajetória (menta) → Momentos (branco-gelo) → Publicações (menta) → Onde atendo (branco-gelo) → Contato (branco-gelo, bloco ardósia) → rodapé (ardósia).

| Papel                           | Claro             | Escuro            | Uso                                                  |
| ------------------------------- | ----------------- | ----------------- | ---------------------------------------------------- |
| `heading`                       | ink 900           | branco            | títulos                                              |
| `fg` / `fg-muted`               | neutral 900 / 600 | neutral 100 / 400 | texto                                                |
| `accent`                        | ink 900           | ink 300           | blocos de marca, ícone do site, setas dos botões     |
| `action` / `focus`              | ink 700           | ink 300           | links, ícones, eyebrows, marcadores, foco            |
| `highlight` / `highlight-hover` | jade 600 / 700    | jade 400 / 200    | botão principal                                      |
| `highlight-line`                | jade 500          | jade 400          | traçado da capnografia, marcador atual (nunca texto) |
| `bg`                            | mint 50           | neutral 950       | seções em branco-gelo                                |
| `surface`                       | mint 100          | neutral 900       | seções em menta (`Section tone="surface"`)           |
| `field`                         | mint 50           | neutral 900       | hero e header no topo da página                      |
| `tint` / `tint-strong`          | mint 200 / 300    | ink 950 / 800     | cards de número, ícones, detalhes sobre o ardósia    |
| `border` / `border-strong`      | mint 300 / 400    | neutral 800 / 700 | contornos, linha do tempo                            |
| `inverse-*`                     | ink 950 / 900     | —                 | seções escuras, bloco de contato, rodapé             |
| `positive`                      | green 500         | green 400         | ponto "disponível"                                   |

## Tipografia

**Manrope** (next/font) em tudo, exceto **Cormorant itálica** no nome do header e nas frases de destaque (`PullQuote`). Estilos prontos via `@include text(...)`:
`display` (atuação no hero) · `h1` · `h2` · `h3` · `lead` · `body` · `small` · `eyebrow` · `stat` · `quote` · `wordmark`.
Títulos em negrito com espaçamento negativo; tamanhos fluidos (`clamp`).

## Forma e profundidade

- Raio: `md` 1rem (ícones, campos), `lg` 1.5rem (cards), `xl` 2rem (painéis), `full` (botões, selos).
- Sombras discretas no tom do ardósia: `sm` (repouso), `md` (hover), `lg` (elementos flutuantes).
- Movimento: só CSS no topo da página; `Reveal` (Motion) abaixo da dobra; tudo respeita "reduzir movimento". Tema: **traço que se desenha**, como num monitor.
  - Topo: título, texto e botões sobem em sequência; o retrato "assenta" (leve aproximação); a capnografia se desenha. O título e o retrato nunca começam invisíveis (são o LCP).
  - Header: vidro claro ao rolar e fio dos links que recolhe no hover (`ease(draw)`).
  - Seções: o cabeçalho de toda `Section` aparece ao entrar na tela; listas de cards entram em sequência (`Reveal as="li"` com `delay`).
  - Trajetória: a linha do tempo se desenha com a rolagem (scroll-driven animation) e o marcador "atual" pulsa devagar.
  - Números (`Stat`): contam a partir do zero com `CountUp` quando aparecem.
  - Rolagem suave em todo o site com [Lenis](https://lenis.dev) (`SmoothScroll` no layout), inclusive nos links âncora. A rolagem segue nativa por baixo, então scroll-driven animations e `Reveal` continuam funcionando; com "reduzir movimento", a suavização desliga.

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
| `Portrait`      | retrato 4:5 com cantos `xl`; foto ou placeholder (iniciais), `preload`                 |
| `PullQuote`     | frase serifada itálica com assinatura (autor, descrição e foto opcional)               |

`src/components/layout/` — `Container`, `Section` (tons `default` (branco-gelo) · `surface` (menta) · `inverse` (ardósia) + cabeçalho), `SiteHeader` (sem borda; no topo assume a cor do hero e, ao rolar, vira vidro claro — scroll-driven animation; links em caixa alta espaçada com fio que recolhe no hover; nome em Cormorant itálica e CRM discreto ao lado; menu mobile com Popover API, sem JS), `SiteFooter`, `SkipLink`.

`src/components/sections/` — a home, em ordem: `Hero` (destaque na atuação — "Médica residente em Anestesiologia" em `display` — com o nome menor acima, em Cormorant itálica; texto, botões e CRM à esquerda, retrato à direita (embaixo, no celular); capnografia na base. No desktop o topo cabe na altura da tela — título em `font-size(hero)` (limitado por `svh`) e foto limitada pela altura da janela — para a capnografia se desenhar à vista no carregamento. A marca do header fica escondida no topo e surge quando o título sai da tela. Quando ela tiver RQE, troque `hero.role` em `home.ts` e cadastre o RQE em `credentials`) · `BackToTop` (botão flutuante de voltar ao topo, aparece após rolar meia tela) → `About` (2 fotos, frase de destaque — aforismo de William Osler) → `Interests` (escura) → `Journey` (linha do tempo + foto fixa, prêmios e certificações) → `Moments` (fotos com legenda) → `Publications` → `Practice` ("Onde atendo": endereço como título, "Como chegar" no Google Maps, link do Waze e mapa do Google embutido; dados em `siteConfig.practice` — com `null`, a seção e o link "Atendimento" do menu somem; entra no JSON-LD como `workLocation`) → `Faq` (só aparece se houver perguntas; gera JSON-LD FAQPage) → `Contact`.

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
