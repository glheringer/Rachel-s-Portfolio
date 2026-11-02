import { capnogramPath } from "@/lib/capnogram"
import { cn } from "@/lib/utils"
import styles from "./capnogram.module.scss"

const HEIGHT = 56
const STROKE = 1.5
// Largo o bastante para telas grandes; o SVG corta o que sobra.
const path = capnogramPath({ width: 2800, height: HEIGHT - STROKE, offset: -64 })

/**
 * Traçado de capnografia que corre na base do topo da página — a assinatura
 * visual do site. Decorativo: fica fora da árvore de acessibilidade.
 * Desenha uma vez, da esquerda para a direita, como a varredura do monitor.
 */
export function Capnogram({ className }: { className?: string }) {
  return (
    <svg
      className={cn(styles.trace, className)}
      width="100%"
      height={HEIGHT}
      aria-hidden
      focusable="false"
    >
      <path
        d={path}
        transform={`translate(0 ${STROKE / 2})`}
        fill="none"
        stroke="currentColor"
        strokeWidth={STROKE}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  )
}
