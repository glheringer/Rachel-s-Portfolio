import { siteConfig, primaryCta } from "@/config/site"
import { hero } from "@/content/home"
import { Container } from "@/components/layout/container"
import { ButtonLink } from "@/components/ui/button"
import { Chip } from "@/components/ui/chip"
import { IconTile } from "@/components/ui/icon-tile"
import { Portrait } from "@/components/ui/portrait"
import { Activity } from "lucide-react"
import styles from "./hero.module.scss"

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="inicio-titulo">
      <Container>
        <div className={styles.panel}>
          <div className={styles.content}>
            <div className={styles.chips}>
              <Chip dot>{siteConfig.jobTitle}</Chip>
              {siteConfig.credentials.map((c) => (
                <Chip key={c.label} label={c.label}>
                  {c.value}
                </Chip>
              ))}
            </div>

            {/* Único h1: o nome completo ajuda a ranquear por "Rachel Campos Ornelas". */}
            <h1 id="inicio-titulo" className={styles.title}>
              {siteConfig.name}
            </h1>
            <p className={styles.lead}>{hero.lead}</p>

            <div className={styles.actions}>
              <ButtonLink href={primaryCta.href} size="lg">
                {primaryCta.label}
              </ButtonLink>
              <ButtonLink href="/#publicacoes" variant="secondary" size="lg" icon={null}>
                Ver publicações
              </ButtonLink>
            </div>

            <ul role="list" className={styles.highlights}>
              {hero.highlights.map(({ icon, title }) => (
                <li key={title} className={styles.highlight}>
                  <IconTile icon={icon} tone="raised" />
                  {title}
                </li>
              ))}
            </ul>
          </div>

          <Portrait
            photo={siteConfig.portrait}
            fallback={siteConfig.initials}
            badge={{ icon: Activity, ...hero.floatingCard }}
            preload
          />
        </div>
      </Container>
    </section>
  )
}
