import Link from "next/link"
import type { ComponentProps } from "react"
import { ArrowRight, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import styles from "./button.module.scss"

type ButtonLinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: "primary" | "secondary" | "inverse"
  size?: "md" | "lg"
  /** Ícone no círculo à direita. `null` remove o círculo. */
  icon?: LucideIcon | null
  className?: string
}

/** Link com cara de botão — todos os CTAs do site levam a algum lugar. */
export function ButtonLink({
  variant = "primary",
  size = "md",
  icon: Icon = ArrowRight,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  const external = typeof props.href === "string" && /^https?:\/\//.test(props.href)

  return (
    <Link
      className={cn(
        styles.button,
        styles[variant],
        size === "lg" && styles.lg,
        !Icon && styles.noIcon,
        className,
      )}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      {...props}
    >
      {children}
      {Icon && (
        <span className={styles.icon} aria-hidden>
          <Icon size={18} strokeWidth={2} />
        </span>
      )}
    </Link>
  )
}
