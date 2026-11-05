import type { ComponentType } from "react"
import { Hero3 } from "./hero-3"
import { Hero4 } from "./hero-4"

export type HeroVariant = {
  slug: string
  title: string
  description: string
  Component: ComponentType
}

/** Versões de reserva do topo (a escolhida está em sections/hero.tsx). */
export const heroVariants: HeroVariant[] = [
  {
    slug: "3",
    title: "Apresentação",
    description: "Foto num círculo com cartões de destaque e texto de apresentação ao lado.",
    Component: Hero3,
  },
  {
    slug: "4",
    title: "Boas-vindas",
    description: "“Olá, eu sou”, nome em caixa de seleção e foto sobre formas de cor.",
    Component: Hero4,
  },
]
