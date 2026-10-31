# Identidade visual

Direção: **"cuidado claro"** — confiança clínica (azul-marinho), leveza e acolhimento (azul-céu), ação nítida (azul vivo). Muito branco, cantos arredondados, sombras suaves.

## Referências (Dribbble)

| Shot                                                                                                                   | O que veio dele                                                                                                                                                                                                     |
| ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Medical Portfolio Website UI (D.Janat)](https://dribbble.com/shots/27386643-Medical-Portfolio-Website-UI)             | hero em painel azul-céu com linhas verticais, botão pílula com seta no círculo, seção escura de contraste, cards numerados 01/02/03, cards de números em azul claro, assinatura gigante no rodapé, fonte geométrica |
| [Onepage Medical Portfolio (ProCares)](https://dribbble.com/shots/26104481-Onepage-Medical-Portfolio-Website-Template) | azul-marinho `#092862` como cor de confiança, trio de diferenciais sob o título, órbita tracejada ao redor da foto                                                                                                  |
| [Medical Dashboard (MediSync)](https://dribbble.com/shots/26788320-Medical-Dashboard)                                  | azul de ação `#0078F8`, ícones em quadrados arredondados, listas em cards com raio grande, cartão flutuante sobre a imagem                                                                                          |

## Cores

Paleta bruta em `tokens/primitives/color.json`; componentes usam **só** os papéis abaixo (`color(<papel>)`).

O site é **sempre claro**, como as referências. A coluna "Escuro" só vale se o tema escuro for ativado (`<html data-theme="dark">`).

| Papel                   | Claro             | Escuro                 | Uso                                       |
| ----------------------- | ----------------- | ---------------------- | ----------------------------------------- |
| `heading`               | navy 900          | branco                 | títulos                                   |
| `fg` / `fg-muted`       | neutral 900 / 600 | neutral 100 / 400      | texto                                     |
| `accent`                | navy 900          | sky 300                | botão primário, blocos de marca           |
| `action` / `focus`      | blue 500          | blue 400               | links, ícones, eyebrows, foco             |
| `tint` / `tint-strong`  | sky 100 / 300     | navy 950 / 800         | cards de número, selos, fundos leves      |
| `hero-from` → `hero-to` | sky 400 → sky 50  | navy 800 → neutral 950 | gradiente do hero e do rodapé             |
| `inverse-*`             | navy 950 / 900    | —                      | seção escura (Atuação) e bloco de contato |
| `positive`              | green 500         | green 400              | ponto "disponível"                        |

## Tipografia

**Manrope** (next/font) em tudo. Estilos prontos via `@include text(...)`:
`display` (nome no hero) · `h1` · `h2` · `h3` · `lead` · `body` · `small` · `eyebrow` · `stat` · `wordmark`.
Títulos em negrito com espaçamento negativo; tamanhos fluidos (`clamp`).

## Forma e profundidade

- Raio: `md` 1rem (ícones, campos), `lg` 1.5rem (cards), `xl` 2rem (painéis), `full` (botões, selos).
- Sombras azuladas e discretas: `sm` (repouso), `md` (hover), `lg` (elementos flutuantes).
- Movimento: só CSS no topo da página; `Reveal` (Motion) abaixo da dobra; tudo respeita "reduzir movimento".

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

`src/components/layout/` — `Container`, `Section` (tons `default` · `surface` · `inverse` + cabeçalho), `SiteHeader` (menu mobile com Popover API, sem JS), `SiteFooter`, `SkipLink`.

`src/components/sections/` — a home, em ordem: `Hero` → `About` → `Interests` (escura) → `Journey` (com prêmios e certificações) → `Publications` → `Faq` (só aparece se houver perguntas; gera JSON-LD FAQPage) → `Contact`.

Conteúdo fica fora dos componentes: `src/config/site.ts` (dados dela) e `src/content/home.ts` (textos da home).

## Pendências

- A foto atual é a do LinkedIn (800×800, aparentemente de 2020). Uma foto mais recente e em alta resolução, em formato retrato, melhoraria o topo.
- Revisar os textos com ela: tudo veio do Lattes (coletado em 05/2025), do LinkedIn e do Instagram profissional.
- Links que faltam: Lattes, Google Scholar e um e-mail profissional.
