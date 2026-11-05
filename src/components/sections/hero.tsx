import Image from "next/image"
import { Activity, FileText, Hospital } from "lucide-react"
import { primaryCta, siteConfig } from "@/config/site"
import { about, hero } from "@/content/home"
import { Container } from "@/components/layout/container"
import { ButtonLink } from "@/components/ui/button"
import { Capnogram } from "@/components/ui/capnogram"
import { IconTile } from "@/components/ui/icon-tile"
import styles from "./hero.module.scss"

const [articles] = about.stats
const congress = siteConfig.aboutPhotos[1]
const surgery = siteConfig.moments[2]
const [w1, w2, w3] = hero.slogan

/**
 * Topo em cartaz: faixa escura com nome, atuação e CRM; a frase em letras
 * grandes ao redor do retrato recortado, com fotos e números nos cantos.
 * A marca do header fica escondida até o quadro sair da tela.
 */
export function Hero() {
  const photo = siteConfig.portrait

  return (
    <section className={styles.hero} aria-labelledby="inicio-titulo">
      <Container className={styles.stage}>
        <div className={styles.board}>
          <div className={styles.band}>
            <Capnogram className={styles.bandTrace} />
            {/* Único h1, com nome e atuação: ajuda a ranquear pelos dois. */}
            <h1 id="inicio-titulo" className={styles.title}>
              <span className={styles.name}>{siteConfig.name}</span>
              <span className={styles.srOnly}>, </span>
              <span className={styles.role}>{hero.role}</span>
            </h1>
            <p className={styles.place}>
              <Hospital size={16} aria-hidden />
              {hero.floatingCard.title} · {siteConfig.affiliation}
            </p>
            {/* CRM sempre visível (CFM): no topo, a marca do header ainda não aparece. */}
            {siteConfig.credentials.map((c) => (
              <p key={c.label} className={styles.credential}>
                {c.label} {c.value}
              </p>
            ))}
          </div>

          <p className={styles.slogan}>
            <span className={styles.w1}>{w1}</span> <span className={styles.w2}>{w2}</span>{" "}
            <span className={styles.w3}>{w3}</span>
          </p>

          <p className={styles.note}>
            <Activity size={18} aria-hidden className={styles.noteIcon} />
            {hero.note}
          </p>

          <span className={styles.rule1} aria-hidden />
          <span className={styles.rule2} aria-hidden />

          <div className={styles.thumbLeft}>
            <Image
              src={congress.src}
              alt={congress.alt}
              fill
              sizes="12rem"
              className={styles.thumbImage}
            />
          </div>
          <div className={styles.thumbRight}>
            <Image
              src={surgery.src}
              alt={surgery.alt}
              fill
              sizes="12rem"
              className={styles.thumbImage}
            />
          </div>

          <div className={styles.stat}>
            <IconTile icon={FileText} tone="accent" />
            <p className={styles.statValue}>{articles.value}</p>
            <p className={styles.statLabel}>{articles.label}</p>
          </div>

          <ButtonLink href={primaryCta.href} size="lg" className={styles.cta}>
            {primaryCta.label}
          </ButtonLink>

          {photo && (
            <div className={styles.photo}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 64rem) 18rem, 70vw"
                preload
                className={styles.photoImage}
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
