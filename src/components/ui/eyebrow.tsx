import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import styles from "./eyebrow.module.scss"

export function Eyebrow({
  children,
  tone = "default",
  className,
}: {
  children: ReactNode
  tone?: "default" | "inverse"
  className?: string
}) {
  return (
    <p className={cn(styles.eyebrow, tone === "inverse" && styles.inverse, className)}>
      {children}
    </p>
  )
}
