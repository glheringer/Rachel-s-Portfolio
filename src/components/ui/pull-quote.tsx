import Image from "next/image"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import styles from "./pull-quote.module.scss"

type PullQuoteProps = {
  children: ReactNode
  /** Assinatura embaixo da frase: deixa claro de quem é a fala. Foto só se a frase for da própria pessoa retratada. */
  author?: {
    name: string
    role?: string
    photo?: { src: string; alt: string } | null
  }
  className?: string
}

/** Frase de destaque em largura total, em serifada itálica, com assinatura. */
export function PullQuote({ children, author, className }: PullQuoteProps) {
  return (
    <figure className={cn(styles.figure, className)}>
      <blockquote className={styles.quote}>
        <p>{children}</p>
      </blockquote>
      {author && (
        <figcaption className={styles.author}>
          {author.photo && (
            <span className={styles.avatar}>
              <Image
                src={author.photo.src}
                alt={author.photo.alt}
                fill
                sizes="3rem"
                className={styles.image}
              />
            </span>
          )}
          <span className={styles.authorText}>
            <span className={styles.name}>{author.name}</span>
            {author.role && <span className={styles.role}>{author.role}</span>}
          </span>
        </figcaption>
      )}
    </figure>
  )
}
