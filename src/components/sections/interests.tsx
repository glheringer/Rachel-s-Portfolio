import { interests } from "@/content/home"
import { Section } from "@/components/layout/section"
import { Reveal } from "@/components/motion/reveal"
import styles from "./interests.module.scss"

/**
 * Lista editorial sobre o marinho: título grande à esquerda e texto à direita,
 * nas mesmas colunas do cabeçalho da seção. Sem cards nem numeração.
 */
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
      <ul role="list" className={styles.list}>
        {interests.map(({ title, description }, i) => (
          <Reveal as="li" key={title} delay={i * 0.08} className={styles.item}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
