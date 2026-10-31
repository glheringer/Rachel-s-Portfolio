import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Eyebrow } from "./eyebrow"
import styles from "./section-header.module.scss"

export type SectionHeaderProps = {
  eyebrow?: ReactNode
  title: ReactNode
  description?: ReactNode
  action?: ReactNode
  /** split: título à esquerda e descrição à direita (referência D.Janat). */
  layout?: "stack" | "split" | "center"
  tone?: "default" | "inverse"
  headingId?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  layout = "stack",
  tone = "default",
  headingId,
}: SectionHeaderProps) {
  const hasAside = Boolean(description || action)

  return (
    <header
      className={cn(
        styles.header,
        layout === "split" && styles.split,
        layout === "center" && styles.center,
        tone === "inverse" && styles.inverse,
      )}
    >
      <div className={styles.titleGroup}>
        {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
        <h2 id={headingId} className={styles.title}>
          {title}
        </h2>
      </div>
      {hasAside && (
        <div className={styles.aside}>
          {description && <p className={styles.description}>{description}</p>}
          {action}
        </div>
      )}
    </header>
  )
}
