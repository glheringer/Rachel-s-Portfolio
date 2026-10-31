import { awards, certifications, journey } from "@/content/home"
import { Section } from "@/components/layout/section"
import { Card } from "@/components/ui/card"
import { Chip } from "@/components/ui/chip"
import { IconTile } from "@/components/ui/icon-tile"
import styles from "./journey.module.scss"

export function Journey() {
  return (
    <Section
      id="trajetoria"
      tone="surface"
      layout="split"
      eyebrow="Trajetória"
      title="Formação e experiência"
      description="Da graduação em Governador Valadares à residência no Vale do Aço, passando pela pesquisa na USP."
    >
      <ol role="list" className={styles.list}>
        {journey.map(({ icon, period, title, place }) => (
          <Card as="li" key={`${title}-${place}`} interactive className={styles.item}>
            <IconTile icon={icon} />
            <div className={styles.text}>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.place}>{place}</p>
            </div>
            <span className={styles.period}>{period}</span>
          </Card>
        ))}
      </ol>

      <div className={styles.extras}>
        <div>
          <h3 className={styles.subheading}>Prêmios</h3>
          <ul role="list" className={styles.awards}>
            {awards.map(({ icon, year, title, place }) => (
              <Card as="li" key={title} variant="tint" className={styles.award}>
                <IconTile icon={icon} tone="raised" />
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
