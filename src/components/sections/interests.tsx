import { interests } from "@/content/home"
import { Section } from "@/components/layout/section"
import { Reveal } from "@/components/motion/reveal"
import { Card } from "@/components/ui/card"
import { IconTile } from "@/components/ui/icon-tile"
import styles from "./interests.module.scss"

export function Interests() {
  return (
    <Section
      id="interesses"
      tone="inverse"
      layout="split"
      eyebrow="Áreas de interesse"
      title="Prática clínica e pesquisa, lado a lado"
      description="A anestesiologia é o foco da residência; a pesquisa em epidemiologia e evidências acompanha desde a graduação."
    >
      <ul role="list" className={styles.grid}>
        {interests.map(({ icon, title, description }, i) => (
          <Reveal as="li" key={title} delay={i * 0.08}>
            <Card variant="inverse" interactive className={styles.card}>
              <div className={styles.top}>
                <IconTile icon={icon} tone="inverse" />
                <span className={styles.index}>{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.description}>{description}</p>
            </Card>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
