import Image from "next/image"
import { siteConfig } from "@/config/site"
import { about } from "@/content/home"
import { Section } from "@/components/layout/section"
import { Reveal } from "@/components/motion/reveal"
import { ButtonLink } from "@/components/ui/button"
import { PullQuote } from "@/components/ui/pull-quote"
import { Stat } from "@/components/ui/stat"
import styles from "./about.module.scss"

export function About() {
  return (
    <Section id="sobre" eyebrow="Sobre mim" title="Cuidado guiado por evidência">
      <div className={styles.grid}>
        <div className={styles.mediaColumn}>
          {siteConfig.aboutPhotos.length > 0 && (
            <div className={styles.photos}>
              {siteConfig.aboutPhotos.map((photo) => (
                <div key={photo.src} className={styles.photo}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 64rem) 16rem, 45vw"
                    className={styles.image}
                  />
                </div>
              ))}
            </div>
          )}

          <div className={styles.stats}>
            {about.stats.map((stat) => (
              <Stat key={stat.label} {...stat} />
            ))}
          </div>
        </div>

        <div className={styles.body}>
          <div className={styles.paragraphs}>
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <dl className={styles.facts}>
            {about.facts.map(({ label, value, detail }) => (
              <div key={label} className={styles.fact}>
                <dt className={styles.factLabel}>{label}</dt>
                <dd className={styles.factValue}>{value}</dd>
                {detail && <dd className={styles.factDetail}>{detail}</dd>}
              </div>
            ))}
          </dl>

          <ButtonLink href="/#trajetoria" variant="secondary">
            Ver trajetória completa
          </ButtonLink>
        </div>
      </div>

      {/* Frase de filosofia em largura total (referência Dr. Jilly's). */}
      <Reveal className={styles.quote}>
        <PullQuote author={{ name: about.quote.author, role: about.quote.role }}>
          {about.quote.text}
        </PullQuote>
      </Reveal>
    </Section>
  )
}
