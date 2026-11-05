import Image from "next/image"
import { primaryCta, siteConfig } from "@/config/site"
import { hero } from "@/content/home"
import { Container } from "@/components/layout/container"
import { ButtonLink } from "@/components/ui/button"
import { Capnogram } from "@/components/ui/capnogram"
import styles from "./hero-4.module.scss"

export function Hero4() {
  return (
    <section className={styles.hero} aria-labelledby="inicio-titulo">
      <Container className={styles.stage}>
        <div className={styles.copy}>
          <h1 id="inicio-titulo" className={styles.title}>
            <span className={styles.greet}>
              Olá, eu sou
              <svg className={styles.sparks} viewBox="0 0 32 32" aria-hidden focusable="false">
                <path d="M6 26 13 19M12 9l4 7M24 6l-2 9" />
              </svg>
            </span>
            <span className={styles.nameBox}>
              <span className={styles.name}>{siteConfig.shortName}</span>
              <span className={styles.handle} aria-hidden />
              <span className={styles.handle} aria-hidden />
              <span className={styles.handle} aria-hidden />
              <span className={styles.handle} aria-hidden />
            </span>
            <span className={styles.srOnly}>, </span>
            <span className={styles.role}>residente em Anestesiologia</span>
          </h1>

          <p className={styles.lead}>{hero.lead}</p>

          <div className={styles.actions}>
            <svg className={styles.arrow} viewBox="0 0 48 40" aria-hidden focusable="false">
              <path d="M4 6c4 10 2 18-2 16s2-10 10-6 14 14 30 12" />
              <path d="M36 22l7 6-8 4" />
            </svg>
            <ButtonLink href={primaryCta.href} size="lg">
              {primaryCta.label}
            </ButtonLink>
            <ButtonLink href="/#publicacoes" variant="secondary" size="lg" icon={null}>
              Ver publicações
            </ButtonLink>
          </div>

          {siteConfig.credentials.map((c) => (
            <p key={c.label} className={styles.credential}>
              {c.label} {c.value}
            </p>
          ))}
        </div>

        <div className={styles.figure}>
          <span className={styles.blobA} aria-hidden />
          <span className={styles.blobB} aria-hidden />
          <span className={styles.hello} aria-hidden>
            Oi!
          </span>
          <span className={styles.diamondA} aria-hidden />
          <span className={styles.diamondB} aria-hidden />
          <Image
            src="/images/rachel-jaleco-maos-na-cintura.webp"
            alt="Rachel Campos Ornelas de jaleco, com as mãos na cintura"
            width={1022}
            height={1600}
            sizes="(min-width: 64rem) 20rem, 60vw"
            preload
            className={styles.photo}
          />
        </div>
      </Container>

      <Capnogram className={styles.trace} />
    </section>
  )
}
