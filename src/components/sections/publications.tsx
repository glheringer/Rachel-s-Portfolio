import { publications } from "@/content/home"
import { Section } from "@/components/layout/section"
import { Reveal } from "@/components/motion/reveal"
import { Card } from "@/components/ui/card"
import { Chip } from "@/components/ui/chip"
import styles from "./publications.module.scss"

export function Publications() {
  return (
    <Section
      id="publicacoes"
      tone="surface"
      layout="split"
      eyebrow="Publicações"
      title="Artigos selecionados"
      description="Seleção de artigos em periódicos, com destaque para os trabalhos como primeira autora."
    >
      <ul role="list" className={styles.list}>
        {publications.map(({ year, title, journal, lead }, i) => (
          <Reveal as="li" key={title} delay={(i % 2) * 0.08}>
            <Card variant="outline" interactive className={styles.card}>
              <div className={styles.meta}>
                <span className={styles.year}>{year}</span>
                {lead && <Chip>Primeira autora</Chip>}
              </div>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.journal}>{journal}</p>
            </Card>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
