import type { LucideIcon } from "lucide-react"
import { Card } from "./card"
import { IconTile } from "./icon-tile"
import styles from "./stat.module.scss"

/** Número de destaque (ex.: "10+ anos de experiência"). */
export function Stat({ icon, value, label }: { icon: LucideIcon; value: string; label: string }) {
  return (
    <Card as="div" variant="tint" className={styles.stat}>
      <IconTile icon={icon} tone="raised" />
      <p className={styles.value}>{value}</p>
      <p className={styles.label}>{label}</p>
    </Card>
  )
}
