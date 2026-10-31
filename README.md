# Portfólio — Rachel Campos Ornelas

Site pessoal em **Next.js 16** (App Router, Cache Components), **React 19** e **TypeScript**. Estilos em **SCSS Modules** alimentados por **design tokens** (formato W3C DTCG, gerados com **Style Dictionary**). Todo estático (SSG), pensado para SEO.

Identidade visual e componentes: **[docs/identidade-visual.md](docs/identidade-visual.md)**.

## Rodando

```bash
cp .env.example .env.local   # ajuste NEXT_PUBLIC_SITE_URL
pnpm install
pnpm dev                     # gera os tokens e sobe http://localhost:3000
```

| Script                           | O que faz                                             |
| -------------------------------- | ----------------------------------------------------- |
| `pnpm dev`                       | gera tokens + servidor de desenvolvimento (Turbopack) |
| `pnpm build` / `pnpm start`      | gera tokens + build de produção / servidor            |
| `pnpm tokens`                    | regenera `src/styles/tokens/` a partir de `tokens/`   |
| `pnpm typecheck`                 | gera tipos de rota e roda `tsc`                       |
| `pnpm lint` / `pnpm lint:styles` | ESLint / Stylelint                                    |
| `pnpm format`                    | Prettier                                              |
| `pnpm check`                     | tudo acima de uma vez                                 |

> Rodando `pnpm dev`, mudanças em `tokens/*.json` precisam de `pnpm tokens` (o servidor recarrega sozinho).

## Design tokens — a fonte única dos estilos

```
tokens/                         ← EDITE AQUI
  primitives/color.json         paleta bruta (neutral, accent)
  primitives/typography.json    famílias, tamanhos fluidos, pesos, entrelinha
  primitives/dimension.json     espaçamento, raio, borda, container, breakpoints, z-index
  primitives/motion.json        durações, curvas, sombras
  semantic/light.json           cores com significado — tema claro
  semantic/dark.json            as mesmas chaves — tema escuro
        │
        ▼  pnpm tokens (scripts/build-tokens.mjs)
src/styles/tokens/              ← GERADO, não editar
  _root.scss                    variáveis CSS em :root
  _dark.scss                    tema escuro (só com data-theme="dark")
  _maps.scss                    mapas SCSS para validar nomes na compilação
  tokens.ts                     valores para TS (imagem OG, ícones, theme-color)
```

Regras:

- **Componentes usam só tokens semânticos** (`color(fg)`, `color(accent)`), nunca a paleta. Trocar a identidade visual = editar `tokens/`.
- **Token com nome errado quebra o build** (`space(7)` → "Token desconhecido: space.7").
- **Stylelint bloqueia cores cruas** (`#fff`, `rgb()`, `oklch()`...) nos `.scss`.
- O site é **sempre claro**. O tema escuro existe nos tokens, mas só ativa com `<html data-theme="dark">`.

## SCSS

```
src/styles/
  abstracts/      funções e mixins — não geram CSS
    _functions.scss   token(), space(), color(), radius(), font-size(), z()...
    _mixins.scss      mq(md), hover, motion-safe, container, focus-ring, visually-hidden
    _typography.scss  text(display | h1 | h2 | h3 | lead | body | small | eyebrow)
  base/           reset e estilos globais de elementos
  tokens/         gerado
src/app/globals.scss   junta tokens + base (importado no layout)
```

Cada componente tem seu `.module.scss` ao lado, começando com:

```scss
@use "abstracts" as *;

.card {
  @include text(h3);

  padding: space(6);
  color: color(fg);
  background: color(surface);
  border-radius: radius(lg);

  @include mq(md) {
    padding: space(10);
  }
}
```

(`abstracts` resolve sem caminho relativo graças ao `sassOptions.loadPaths` no `next.config.ts`.) Classes em camelCase (`styles.minhaClasse`).

## Estrutura

```
src/
  app/
    layout.tsx            metadata global, fonte, header/footer, JSON-LD, analytics
    page.tsx              home (monta as seções)
    sitemap.ts robots.ts manifest.ts
    opengraph-image.tsx twitter-image.tsx icon.tsx apple-icon.tsx   (usam tokens.ts)
    not-found.tsx
  config/site.ts          ← dados da Rachel: nome, profissão, registro, contatos, foto, redes
  content/home.ts         ← textos da home (do Lattes/LinkedIn — revisar com ela)
  lib/fonts.ts            Manrope (next/font)
  components/
    ui/                   ButtonLink, Eyebrow, Card, IconTile, Stat, Chip, SectionHeader, Portrait
    layout/               Container, Section, SiteHeader, SiteFooter, SkipLink
    sections/             Hero, About, Interests, Journey, Publications, Faq, Contact
    motion/reveal.tsx     animação ao rolar (Motion) — só abaixo da dobra
    seo/json-ld.tsx       schema.org Person + WebSite (FAQPage fica em sections/faq.tsx)
docs/identidade-visual.md
```

## SEO já configurado

- `metadataBase`, título com template, description, canonical, Open Graph e Twitter Card
- `sitemap.xml`, `robots.txt`, `manifest.webmanifest`
- Imagem OG 1200×630 e ícones gerados no build
- JSON-LD `Person` e `WebSite` (validar em https://validator.schema.org)
- `lang="pt-BR"`, um único `h1`, seções com `aria-labelledby`, link "pular para o conteúdo"
- Fontes self-hosted via `next/font` (sem layout shift)
- Vercel Analytics + Speed Insights (ativos só no deploy na Vercel)

## Como a identidade visual entra

1. **Cores, espaçamentos, tipografia, raio** → `tokens/` e depois `pnpm tokens` (ver `docs/identidade-visual.md`).
2. **Fonte** → `src/lib/fonts.ts` (Manrope).
3. **Conteúdo** → `src/config/site.ts` e `src/content/home.ts`.
4. **Imagem OG / ícone** → já usam as cores dos tokens; ajuste o layout em `src/app/opengraph-image.tsx` e `icon.tsx`.

Os pontos pendentes estão marcados com `TODO` (`grep -rn TODO src`).

## Informações pendentes da Rachel

> Já preenchido a partir do Lattes, LinkedIn e Instagram. Ainda falta:

- Revisão dos textos por ela
- Foto mais recente em alta resolução (a atual é a do LinkedIn)
- E-mail profissional, links do Lattes e do Google Scholar
- Domínio e se haverá versão em inglês

## Deploy

Pensado para a Vercel: importar o repositório e definir `NEXT_PUBLIC_SITE_URL` com o domínio final.
