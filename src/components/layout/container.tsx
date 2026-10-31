import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"
import styles from "./container.module.scss"

type ContainerProps = ComponentProps<"div"> & { size?: "default" | "narrow" }

/** Largura máxima e respiro lateral padrão do site. */
export function Container({ size = "default", className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(size === "narrow" ? styles.narrow : styles.container, className)}
      {...props}
    />
  )
}
