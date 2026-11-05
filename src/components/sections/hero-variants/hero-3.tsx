import Image from "next/image"
import { Hospital, Syringe } from "lucide-react"
import { primaryCta, siteConfig } from "@/config/site"
import { about, hero } from "@/content/home"
import { Container } from "@/components/layout/container"
import { ButtonLink } from "@/components/ui/button"
import { Capnogram } from "@/components/ui/capnogram"
import { IconTile } from "@/components/ui/icon-tile"
import styles from "./hero-3.module.scss"

const [articles] = about.stats
const rays = Array.from({ length: 11 }, (_, i) => 18 + i * 14.4)

export function Hero3() {
  return (
    <section className={styles.hero} aria-labelledby="inicio-titulo">
      <svg className={styles.burst} viewBox="-60 -10 120 70" aria-hidden focusable="false">
        {rays.map((deg) => {
          const rad = (deg * Math.PI) / 180
          return (
            <line
              key={deg}
              x1={Math.cos(rad) * 14}
              y1={Math.sin(rad) * 14}
              x2={Math.cos(rad) * 40}
              y2={Math.sin(rad) * 40}
              stroke="currentColor"
              strokeWidth={5}
              strokeLinecap="round"
            />
          )
        })}
      </svg>

      <Container className={styles.stage}>
        <div className={styles.figure}>
          <span className={styles.disc} aria-hidden />
          <Image
            src="/images/rachel-jaleco-sorrindo.webp"
            alt="Rachel Campos Ornelas de jaleco, sorrindo"
            width={1100}
            height={1406}
            sizes="(min-width: 64rem) 26rem, 80vw"
            preload
            className={styles.photo}
          />

          <div className={styles.cardLeft}>
            <IconTile icon={Hospital} tone="tint" />
            <div>
              <p className={styles.cardTitle}>{hero.floatingCard.title}</p>
              <p className={styles.cardText}>{hero.floatingCard.description}</p>
            </div>
          </div>

          <div className={styles.cardRight}>
            <p className={styles.cardValue}>{articles.value}</p>
            <p className={styles.cardText}>{articles.label}</p>
          </div>
        </div>

        <div className={styles.copy}>
          <h1 id="inicio-titulo" className={styles.title}>
            <span className={styles.name}>
              {siteConfig.name}
              <IconTile icon={Syringe} tone="tint" className={styles.nameIcon} />
            </span>
            <span className={styles.srOnly}>, </span>
            <span className={styles.role}>{hero.role}</span>
          </h1>

          <p className={styles.text}>{hero.lead}</p>
          <p className={styles.text}>{about.paragraphs[1]}</p>

          <div className={styles.actions}>
            <ButtonLink href={primaryCta.href} size="lg">
              {primaryCta.label}
            </ButtonLink>
            {siteConfig.credentials.map((c) => (
              <p key={c.label} className={styles.credential}>
                {c.label} {c.value}
              </p>
            ))}
          </div>
        </div>
      </Container>

      <Capnogram className={styles.trace} />
    </section>
  )
}
