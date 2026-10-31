import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { navItems, siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Container } from "./container"
import styles from "./site-footer.module.scss"

export function SiteFooter() {
  const credentials = siteConfig.credentials.map((c) => `${c.label} ${c.value}`).join(" · ")

  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <div className={styles.top}>
          <nav aria-label="Rodapé">
            <ul role="list" className={styles.nav}>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {siteConfig.socials.length > 0 && (
            <ul role="list" className={styles.socials}>
              {siteConfig.socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer me"
                    className={cn(styles.link, styles.socialLink)}
                  >
                    {s.label}
                    <ArrowUpRight size={14} aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <p className={styles.legal}>
          {siteConfig.name}
          {credentials && ` · ${credentials}`}
        </p>

        <p className={styles.wordmark} aria-hidden>
          {siteConfig.shortName}
        </p>
      </Container>
    </footer>
  )
}
