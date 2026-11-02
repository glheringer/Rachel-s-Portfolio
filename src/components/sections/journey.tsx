import Image from "next/image"
import { siteConfig } from "@/config/site"
import { awards, certifications, journey } from "@/content/home"
import { cn } from "@/lib/utils"
import { Section } from "@/components/layout/section"
import { Card } from "@/components/ui/card"
import { Chip } from "@/components/ui/chip"
import { IconTile } from "@/components/ui/icon-tile"
import styles from "./journey.module.scss"

export function Journey() {
  const { workPhoto } = siteConfig

  return (
    <Section
      id="trajetoria"
      tone="surface"
      layout="split"
      eyebrow="Trajetória"
      title="Formação e experiência"
      description="Da graduação em Governador Valadares à residência no Vale do Aço, passando pela pesquisa na USP."
    >
      <div className={cn(styles.grid, workPhoto && styles.withPhoto)}>
        {/* Linha do tempo: período à esquerda, cargo à direita (referência Dr. Jilly's). */}
        <ol role="list" className={styles.timeline}>
          {journey.map(({ icon, period, title, place }) => {
            const isCurrent = period.toLowerCase().includes("atual")
            return (
              <li
                key={`${title}-${place}`}
                className={cn(styles.item, isCurrent && styles.current)}
              >
                <span className={styles.marker} aria-hidden />
                <p className={styles.period}>{period}</p>
                <div className={styles.entry}>
                  <IconTile icon={icon} tone={isCurrent ? "accent" : "tint"} />
                  <div className={styles.text}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.place}>{place}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>

        {workPhoto && (
          <div className={styles.photo}>
            <Image
              src={workPhoto.src}
              alt={workPhoto.alt}
              fill
              sizes="(min-width: 64rem) 24rem, 100vw"
              className={styles.image}
            />
          </div>
        )}
      </div>

      <div className={styles.extras}>
        <div>
          <h3 className={styles.subheading}>Prêmios</h3>
          <ul role="list" className={styles.awards}>
            {awards.map(({ icon, year, title, place }) => (
              <Card as="li" key={title} className={styles.award}>
                <IconTile icon={icon} tone="tint" />
                <div className={styles.text}>
                  <p className={styles.title}>{title}</p>
                  <p className={styles.place}>
                    {place} · {year}
                  </p>
                </div>
              </Card>
            ))}
          </ul>
        </div>
        <div>
          <h3 className={styles.subheading}>Certificações</h3>
          <ul role="list" className={styles.chips}>
            {certifications.map((c) => (
              <li key={c}>
                <Chip>{c}</Chip>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
