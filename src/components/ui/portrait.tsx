import Image from "next/image"
import { cn } from "@/lib/utils"
import styles from "./portrait.module.scss"

type PortraitProps = {
  photo: { src: string; alt: string } | null
  /** Texto do placeholder enquanto não há foto (ex.: iniciais). */
  fallback: string
  /** true no topo da página: a foto vira candidata a LCP e carrega antes. */
  preload?: boolean
  className?: string
}

/** Retrato em arco. Sem foto, mostra as iniciais no mesmo formato. */
export function Portrait({ photo, fallback, preload = false, className }: PortraitProps) {
  return (
    <div className={cn(styles.portrait, className)}>
      {photo ? (
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(min-width: 64rem) 30rem, 80vw"
          className={styles.image}
          preload={preload}
        />
      ) : (
        <span className={styles.placeholder} aria-hidden>
          {fallback}
        </span>
      )}
    </div>
  )
}
