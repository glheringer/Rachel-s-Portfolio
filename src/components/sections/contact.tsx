import { AtSign, Mail, MapPin, Phone, type LucideIcon } from "lucide-react"
import { siteConfig } from "@/config/site"
import { Container } from "@/components/layout/container"
import { ButtonLink } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Eyebrow } from "@/components/ui/eyebrow"
import { IconTile } from "@/components/ui/icon-tile"
import styles from "./contact.module.scss"

type Channel = { icon: LucideIcon; label: string; value: string; href?: string }

const { email, phone, location, socials } = siteConfig
const place = [location.city, location.region].filter(Boolean).join(" — ")

const channels: Channel[] = [
  ...(email ? [{ icon: Mail, label: "E-mail", value: email, href: `mailto:${email}` }] : []),
  ...(phone
    ? [{ icon: Phone, label: "Telefone", value: phone, href: `tel:${phone.replace(/\D/g, "")}` }]
    : []),
  ...socials.map((s) => ({ icon: AtSign, label: s.label, value: s.handle, href: s.href })),
  ...(place ? [{ icon: MapPin, label: "Localização", value: place }] : []),
]

const mainChannel = socials[0]

export function Contact() {
  return (
    <section id="contato" aria-labelledby="contato-titulo" className={styles.section}>
      <Container>
        <div className={styles.panel}>
          <div className={styles.intro}>
            <Eyebrow tone="inverse">Contato</Eyebrow>
            <h2 id="contato-titulo" className={styles.title}>
              Vamos conversar?
            </h2>
            <p className={styles.text}>
              Para colaborações em pesquisa, eventos acadêmicos ou contato profissional.
            </p>
            {mainChannel && (
              <ButtonLink href={mainChannel.href} variant="inverse" size="lg">
                Mensagem no {mainChannel.label}
              </ButtonLink>
            )}
          </div>

          <ul role="list" className={styles.channels}>
            {channels.map(({ icon, label, value, href }) => (
              <Card as="li" key={label} variant="inverse" className={styles.channel}>
                <IconTile icon={icon} tone="inverse" />
                <div>
                  <p className={styles.label}>{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className={styles.value}
                      {...(href.startsWith("http") && {
                        target: "_blank",
                        rel: "noopener noreferrer me",
                      })}
                    >
                      {value}
                    </a>
                  ) : (
                    <p className={styles.value}>{value}</p>
                  )}
                </div>
              </Card>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
