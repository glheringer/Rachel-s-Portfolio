import Image from "next/image"
import type { LucideIcon } from "lucide-react"
import { IconTile } from "./icon-tile"
import styles from "./portrait.module.scss"

type PortraitProps = {
  photo: { src: string; alt: string } | null
  /** Texto do placeholder enquanto não há foto (ex.: iniciais). */
  fallback: string
  badge?: { icon: LucideIcon; title: string; description: string }
  /** true no topo da página: a foto vira candidata a LCP e carrega antes. */
  preload?: boolean
}

export function Portrait({ photo, fallback, badge, preload = false }: PortraitProps) {
  return (
    <figure className={styles.portrait}>
      <span className={styles.orbit} aria-hidden />
      <div className={styles.frame}>
        {photo ? (
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(min-width: 1024px) 26rem, 90vw"
            className={styles.image}
            preload={preload}
          />
        ) : (
          <span className={styles.placeholder} aria-hidden>
            {fallback}
          </span>
        )}
      </div>
      {badge && (
        <figcaption className={styles.badge}>
          <IconTile icon={badge.icon} tone="tint" />
          <span>
            <span className={styles.badgeTitle}>{badge.title}</span>
            <br />
            <span className={styles.badgeText}>{badge.description}</span>
          </span>
        </figcaption>
      )}
    </figure>
  )
}
