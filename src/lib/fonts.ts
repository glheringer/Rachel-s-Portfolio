import { Cormorant, Manrope } from "next/font/google"

/**
 * Fontes self-hosted pelo next/font (sem requisição ao Google em runtime,
 * sem layout shift). Os tokens font.family.* (tokens/primitives/typography.json)
 * apontam para estas variáveis.
 *
 * Manrope: geométrica, legível e calorosa — a mesma linha da referência D.Janat.
 * Cormorant itálica: nome no header e frases de destaque (PullQuote), para dar um toque suave.
 */
export const fontSans = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans-family",
  display: "swap",
})

/** Com preload: o nome no header aparece logo no topo. */
export const fontSerif = Cormorant({
  subsets: ["latin", "latin-ext"],
  style: "italic",
  variable: "--font-serif-family",
  display: "swap",
})

export const fontVariables = `${fontSans.variable} ${fontSerif.variable}`
