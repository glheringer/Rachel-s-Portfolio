/**
 * Gera os estilos a partir dos design tokens (tokens/**.json, formato W3C DTCG).
 *
 *   tokens/primitives/*  → valores brutos (paleta, espaçamento, tipografia...)
 *   tokens/semantic/*    → cores com significado, uma versão por tema
 *
 * Saída em src/styles/tokens/ (não editar à mão):
 *   _root.scss        variáveis CSS em :root (tema claro + escalas)
 *   _dark.scss        tema escuro, só quando ativado com <html data-theme="dark">
 *                     (o site é claro por padrão, como as referências)
 *   _maps.scss        mapas SCSS para validar nomes em tempo de compilação
 *   tokens.ts         valores resolvidos para TS (imagem OG, ícones, theme-color)
 */
import { writeFile } from "node:fs/promises"
import StyleDictionary from "style-dictionary"

const buildPath = "src/styles/tokens/"
const header = "Gerado por scripts/build-tokens.mjs a partir de tokens/. Não edite à mão."

const isPalette = (t) => t.path[0] === "palette"
const isBreakpoint = (t) => t.path[0] === "breakpoint"
const isThemeColor = (t) => t.path[0] === "color"

StyleDictionary.registerFileHeader({ name: "project", fileHeader: () => [header] })

/** Mapas SCSS ({ space: (4: ...), color: (fg: ...) }) com os nomes existentes. */
StyleDictionary.registerFormat({
  name: "scss/token-maps",
  format: ({ dictionary }) => {
    const groups = new Map()
    for (const token of dictionary.allTokens) {
      const [group, ...rest] = token.path
      if (!groups.has(group)) groups.set(group, [])
      groups.get(group).push([rest.join("-"), token.$value])
    }
    const quote = (v) => `"${String(v).replace(/"/g, '\\"')}"`
    const body = [...groups]
      .map(([group, entries]) => {
        const items = entries.map(([k, v]) => `    ${quote(k)}: ${quote(v)},`).join("\n")
        return `  ${quote(group)}: (\n${items}\n  ),`
      })
      .join("\n")
    const breakpoints = groups
      .get("breakpoint")
      .map(([k, v]) => `  ${quote(k)}: ${v},`)
      .join("\n")
    return `// ${header}\n\n$tokens: (\n${body}\n);\n\n$breakpoints: (\n${breakpoints}\n);\n`
  },
})

const shared = {
  usesDtcg: true,
  log: { warnings: "error", verbosity: "default" },
}

const light = new StyleDictionary({
  ...shared,
  source: ["tokens/primitives/**/*.json", "tokens/semantic/light.json"],
  platforms: {
    scss: {
      transforms: ["name/kebab"],
      buildPath,
      options: { fileHeader: "project" },
      files: [
        {
          destination: "_root.scss",
          format: "css/variables",
          filter: (t) => !isPalette(t) && !isBreakpoint(t),
          options: { selector: ":root" },
        },
        {
          destination: "_maps.scss",
          format: "scss/token-maps",
          filter: (t) => !isPalette(t),
        },
      ],
    },
  },
})

const dark = new StyleDictionary({
  ...shared,
  source: ["tokens/primitives/**/*.json", "tokens/semantic/dark.json"],
  platforms: {
    scss: {
      transforms: ["name/kebab"],
      buildPath,
      options: { fileHeader: "project" },
      files: [
        {
          destination: "_dark.scss",
          format: "css/variables",
          filter: isThemeColor,
          options: { selector: ':root[data-theme="dark"]' },
        },
      ],
    },
  },
})

await light.buildAllPlatforms()
await dark.buildAllPlatforms()

// tokens.ts — valores já resolvidos, para lugares onde CSS não chega.
const toValues = (node) =>
  node && typeof node === "object" && "$value" in node
    ? node.$value
    : Object.fromEntries(
        Object.entries(node)
          .filter(([k]) => !k.startsWith("$"))
          .map(([k, v]) => [k, toValues(v)]),
      )

const lightTree = toValues(await light.exportPlatform("scss"))
const darkTree = toValues(await dark.exportPlatform("scss"))

const ts = `// ${header}

export const tokens = ${JSON.stringify(lightTree, null, 2)} as const

export const darkColor = ${JSON.stringify(darkTree.color, null, 2)} as const
`
await writeFile(`${buildPath}tokens.ts`, ts)
console.log(`✔ tokens gerados em ${buildPath}`)
