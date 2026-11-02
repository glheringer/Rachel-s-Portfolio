import { primaryCta, siteConfig } from "@/config/site"
import { hero } from "@/content/home"
import { Container } from "@/components/layout/container"
import { ButtonLink } from "@/components/ui/button"
import { Capnogram } from "@/components/ui/capnogram"
import { Chip } from "@/components/ui/chip"
import { Portrait } from "@/components/ui/portrait"
import styles from "./hero.module.scss"

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="inicio-titulo">
      <Container className={styles.inner}>
        <div className={styles.content}>
          {/* Único h1: o nome completo ajuda a ranquear por "Rachel Campos Ornelas". */}
          <h1 id="inicio-titulo" className={styles.title}>
            {siteConfig.name}
          </h1>

          <div className={styles.role}>
            <p>{siteConfig.jobTitle}</p>
            {siteConfig.credentials.map((c) => (
              <Chip key={c.label} label={c.label}>
                {c.value}
              </Chip>
            ))}
          </div>

          <p className={styles.lead}>{hero.lead}</p>

          <div className={styles.actions}>
            <ButtonLink href={primaryCta.href} size="lg">
              {primaryCta.label}
            </ButtonLink>
            <ButtonLink href="/#publicacoes" variant="secondary" size="lg">
              Ver publicações
            </ButtonLink>
          </div>
        </div>

        <Portrait
          photo={siteConfig.portrait}
          fallback={siteConfig.initials}
          preload
          className={styles.portrait}
        />
      </Container>

      <Capnogram className={styles.trace} />
    </section>
  )
}
