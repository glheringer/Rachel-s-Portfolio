"use client"

import { motion, useReducedMotion } from "motion/react"
import type { ReactNode } from "react"

const tags = { div: motion.div, li: motion.li }

/**
 * Aparece suavemente ao entrar na tela. Respeita "reduzir movimento".
 * O conteúdo continua no HTML do servidor (bom para SEO), mas começa
 * invisível até o JS carregar: use só abaixo da dobra, nunca no topo.
 * Use `as="li"` dentro de listas para manter o HTML válido.
 */
export function Reveal({
  children,
  as = "div",
  delay = 0,
  className,
}: {
  children: ReactNode
  as?: keyof typeof tags
  delay?: number
  className?: string
}) {
  const reduce = useReducedMotion()
  const Tag = tags[as]

  return (
    <Tag
      data-reveal
      className={className}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  )
}
