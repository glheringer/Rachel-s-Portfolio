import Image from "next/image"
import { siteConfig } from "@/config/site"
import { moments } from "@/content/home"
import { Section } from "@/components/layout/section"
import { Reveal } from "@/components/motion/reveal"
import styles from "./moments.module.scss"

/**
 * Fotos de congressos, residência e formação, com a legenda embaixo de cada
 * uma. Grade de 2 no celular e de 4 no desktop: todas aparecem inteiras.
 */
export function Moments() {
  if (siteConfig.moments.length === 0) return null

  return (
    <Section
      id="momentos"
      layout="split"
      eyebrow={moments.eyebrow}
      title={moments.title}
      description={moments.description}
    >
      <ul role="list" className={styles.grid}>
        {siteConfig.moments.map((photo, i) => (
          <Reveal as="li" key={photo.src} delay={i * 0.08}>
            <figure className={styles.figure}>
              <div className={styles.frame}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 64rem) 17rem, 45vw"
                  className={styles.image}
                />
              </div>
              <figcaption className={styles.caption}>{photo.caption}</figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
