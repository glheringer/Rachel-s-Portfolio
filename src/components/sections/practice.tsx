import { MapPin, Navigation } from "lucide-react"
import { siteConfig } from "@/config/site"
import { Container } from "@/components/layout/container"
import { Reveal } from "@/components/motion/reveal"
import { ButtonLink } from "@/components/ui/button"
import { Eyebrow } from "@/components/ui/eyebrow"
import styles from "./practice.module.scss"

/**
 * "Onde atendo": endereço em destaque, botões de rota e o mapa ao lado.
 * Só aparece quando siteConfig.practice estiver preenchido.
 */
export function Practice() {
  const practice = siteConfig.practice
  if (!practice) return null

  const { name, street, district, city, region, postalCode, note } = practice
  const place = [district, `${city}/${region}`].filter(Boolean).join(" · ")
  // Sem o nome da clínica: o mapa acha o endereço com mais precisão.
  const query = encodeURIComponent(
    [street, district, `${city} - ${region}`, postalCode, "Brasil"].filter(Boolean).join(", "),
  )

  return (
    <section id="atendimento" aria-labelledby="atendimento-titulo" className={styles.section}>
      <Container className={styles.layout}>
        <Reveal className={styles.info}>
          <Eyebrow>Onde atendo</Eyebrow>
          {name && <p className={styles.name}>{name}</p>}
          <h2 id="atendimento-titulo" className={styles.street}>
            {street}
          </h2>
          <p className={styles.place}>
            <MapPin aria-hidden className={styles.pin} />
            {place}
          </p>
          {note && <p className={styles.note}>{note}</p>}

          <div className={styles.actions}>
            <ButtonLink
              href={`https://www.google.com/maps/dir/?api=1&destination=${query}`}
              variant="secondary"
              size="lg"
              icon={Navigation}
            >
              Como chegar
            </ButtonLink>
            <a
              href={`https://waze.com/ul?q=${query}&navigate=yes`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Abrir no Waze
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08} className={styles.map}>
          {/* Mapa do Google sem chave de API; carrega só perto da tela. */}
          <iframe
            title={`Mapa: ${street}, ${place}`}
            src={`https://www.google.com/maps?q=${query}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={styles.frame}
          />
        </Reveal>
      </Container>
    </section>
  )
}
