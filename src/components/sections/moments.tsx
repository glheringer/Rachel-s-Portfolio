import Image from "next/image"
import { siteConfig } from "@/config/site"
import { moments } from "@/content/home"
import { Section } from "@/components/layout/section"
import { Reveal } from "@/components/motion/reveal"
import { Card } from "@/components/ui/card"
import styles from "./moments.module.scss"

/**
 * Fotos de congressos, residência e formação em cards com legenda sobre a
 * imagem (referência Synora). Trilho com rolagem lateral no celular.
 */
export function Moments() {
  if (siteConfig.moments.length === 0) return null

  return (
    <Section id="momentos" eyebrow={moments.eyebrow} title={moments.title}>
      <ul role="list" className={styles.rail}>
        {siteConfig.moments.map((photo, i) => (
          <Reveal as="li" key={photo.src} delay={i * 0.08} className={styles.slot}>
            <Card as="figure" className={styles.card}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 64rem) 18rem, 75vw"
                className={styles.image}
              />
              <figcaption className={styles.caption}>{photo.caption}</figcaption>
            </Card>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
