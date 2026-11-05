import { primaryCta, siteConfig } from "@/config/site"
import { hero } from "@/content/home"
import { Container } from "@/components/layout/container"
import { ButtonLink } from "@/components/ui/button"
import { Capnogram } from "@/components/ui/capnogram"
import { Portrait } from "@/components/ui/portrait"
import styles from "./hero.module.scss"

/**
 * Topo: o destaque é a atuação ("Médica residente em Anestesiologia"), com o
 * nome menor logo acima, na serifada do header. Texto à esquerda, retrato à
 * direita (embaixo, no celular), e a capnografia correndo na base.
 * A marca do header fica escondida até o título sair da tela.
 */
export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="inicio-titulo">
      <Container className={styles.stage}>
        <div className={styles.copy}>
          {/* Único h1, com nome e atuação: ajuda a ranquear pelos dois. */}
          <h1 id="inicio-titulo" className={styles.title}>
            <span className={styles.name}>
              {siteConfig.name}
              <span className={styles.srOnly}>, </span>
            </span>
            <span className={styles.role}>{hero.role}</span>
          </h1>

          <p className={styles.lead}>{hero.lead}</p>

          <div className={styles.actions}>
            <ButtonLink href={primaryCta.href} size="lg">
              {primaryCta.label}
            </ButtonLink>
            <ButtonLink href="/#publicacoes" variant="secondary" size="lg">
              Ver publicações
            </ButtonLink>
          </div>

          {/* CRM sempre visível (CFM): no topo, a marca do header ainda não aparece. */}
          {siteConfig.credentials.map((c) => (
            <p key={c.label} className={styles.credential}>
              {c.label} {c.value}
            </p>
          ))}
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
