import { Manrope } from "next/font/google"

/**
 * Fontes self-hosted pelo next/font (sem requisição ao Google em runtime,
 * sem layout shift). Os tokens font.family.* (tokens/primitives/typography.json)
 * apontam para estas variáveis.
 *
 * Manrope: geométrica, legível e calorosa — a mesma linha da referência D.Janat.
 */
export const fontSans = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans-family",
  display: "swap",
})

export const fontVariables = fontSans.variable
