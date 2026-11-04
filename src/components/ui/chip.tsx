import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import styles from "./chip.module.scss"

/** Selo pequeno: registro profissional, status ("Agenda aberta"), tags. */
export function Chip({
  label,
  children,
  dot = false,
  tone = "tint",
  className,
}: {
  label?: string
  children: ReactNode
  dot?: boolean
  /** tint sobre fundo branco; raised (branco) sobre o linho. */
  tone?: "tint" | "raised"
  className?: string
}) {
  return (
    <span className={cn(styles.chip, styles[tone], className)}>
      {dot && <span className={styles.dot} aria-hidden />}
      {label && <span className={styles.label}>{label}</span>}
      {children}
    </span>
  )
}
