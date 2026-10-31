import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import styles from "./icon-tile.module.scss"

export function IconTile({
  icon: Icon,
  tone = "tint",
  className,
}: {
  icon: LucideIcon
  tone?: "tint" | "accent" | "raised" | "inverse"
  className?: string
}) {
  return (
    <span className={cn(styles.tile, styles[tone], className)} aria-hidden>
      <Icon size={20} strokeWidth={1.75} />
    </span>
  )
}
