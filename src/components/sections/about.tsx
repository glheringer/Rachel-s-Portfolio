import { about } from "@/content/home"
import { Section } from "@/components/layout/section"
import { ButtonLink } from "@/components/ui/button"
import { Stat } from "@/components/ui/stat"
import styles from "./about.module.scss"

export function About() {
  return (
    <Section id="sobre" eyebrow="Sobre mim" title="Cuidado guiado por evidência">
      <div className={styles.grid}>
        <div className={styles.stats}>
          {about.stats.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
        </div>
        <div className={styles.body}>
          <p className={styles.statement}>{about.statement}</p>
          <div className={styles.paragraphs}>
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <ButtonLink href="/#trajetoria" variant="secondary">
            Ver trajetória
          </ButtonLink>
        </div>
      </div>
    </Section>
  )
}
