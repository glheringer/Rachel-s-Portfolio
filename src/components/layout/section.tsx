import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/motion/reveal"
import { SectionHeader, type SectionHeaderProps } from "@/components/ui/section-header"
import { Container } from "./container"
import styles from "./section.module.scss"

type SectionProps = Omit<ComponentProps<"section">, "title"> &
  Partial<Pick<SectionHeaderProps, "eyebrow" | "title" | "description" | "action" | "layout">> & {
    tone?: "default" | "surface" | "inverse"
  }

/**
 * Bloco de página: espaçamento vertical, fundo (tom) e cabeçalho padrão.
 * Com `id` + `title`, o h2 vira o rótulo acessível da seção.
 */
export function Section({
  id,
  eyebrow,
  title,
  description,
  action,
  layout,
  tone = "default",
  className,
  children,
  ...props
}: SectionProps) {
  const headingId = id && title ? `${id}-titulo` : undefined

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn(styles.section, tone !== "default" && styles[tone], className)}
      {...props}
    >
      <Container>
        {/* Seções ficam abaixo da dobra: o cabeçalho aparece ao entrar na tela. */}
        {title && (
          <Reveal>
            <SectionHeader
              eyebrow={eyebrow}
              title={title}
              description={description}
              action={action}
              layout={layout}
              tone={tone === "inverse" ? "inverse" : "default"}
              headingId={headingId}
            />
          </Reveal>
        )}
        {children}
      </Container>
    </section>
  )
}
