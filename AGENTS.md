<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Projeto

- Dados da pessoa e rotas do sitemap: `src/config/site.ts`; textos da home: `src/content/home.ts` — não espalhe textos/links pelo código. Não invente fatos sobre ela: o conteúdo vem do Lattes, LinkedIn e Instagram profissional (fontes no topo de `site.ts`). Ela é **residente** — não a chame de "anestesiologista"/especialista (regra do CFM) e sempre exiba o CRM.
- Identidade visual e catálogo de componentes: `docs/identidade-visual.md`. Reutilize `src/components/ui/` antes de criar algo novo.
- Estilos: SCSS Modules (`*.module.scss`) com `@use "abstracts" as *;`. Valores só via tokens (`space()`, `color()`, `text()`...). Nada de cores/medidas cruas; nada de Tailwind.
- Tokens: edite `tokens/*.json` e rode `pnpm tokens`. Nunca edite `src/styles/tokens/` (gerado). Para TS, importe de `@/styles/tokens/tokens`.
- Cache Components está ativo: evite `new Date()`/`Math.random()` em Server Components sem `"use cache"`.
- Antes de concluir: `pnpm check && pnpm build`.
