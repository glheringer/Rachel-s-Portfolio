import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import styles from "./chip.module.scss"

/** Selo pequeno: registro profissional, status ("Agenda aberta"), tags. */
export function Chip({
  label,
  children,
  dot = false,
  className,
}: {
  label?: string
  children: ReactNode
  dot?: boolean
  className?: string
}) {
  return (
    <span className={cn(styles.chip, className)}>
      {dot && <span className={styles.dot} aria-hidden />}
      {label && <span className={styles.label}>{label}</span>}
      {children}
    </span>
  )
}
