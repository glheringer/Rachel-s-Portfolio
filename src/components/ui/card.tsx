import type { ComponentProps, ElementType } from "react"
import { cn } from "@/lib/utils"
import styles from "./card.module.scss"

type CardProps<T extends ElementType> = {
  as?: T
  variant?: "raised" | "tint" | "outline" | "inverse"
  interactive?: boolean
} & Omit<ComponentProps<T>, "as">

/** Superfície base para cartões. Use `as="li"` dentro de listas. */
export function Card<T extends ElementType = "div">({
  as,
  variant = "raised",
  interactive = false,
  className,
  ...props
}: CardProps<T>) {
  const Tag: ElementType = as ?? "div"
  return (
    <Tag
      className={cn(styles.card, styles[variant], interactive && styles.interactive, className)}
      {...props}
    />
  )
}
