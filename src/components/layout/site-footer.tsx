import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { navItems, siteConfig } from "@/config/site"
import { Container } from "./container"
import styles from "./site-footer.module.scss"

export function SiteFooter() {
  const credentials = siteConfig.credentials.map((c) => `${c.label} ${c.value}`).join(", ")

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.brand}>
            <p className={styles.name}>{siteConfig.shortName}</p>
            <p className={styles.role}>{siteConfig.jobTitle}</p>
          </div>

          <nav aria-label="Rodapé">
            <ul role="list" className={styles.links}>
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
            <ul role="list" className={styles.links}>
              {siteConfig.socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer me"
                    className={styles.link}
                  >
                    {s.label}
                    <ArrowUpRight size={14} aria-hidden />
                    <span className={styles.srOnly}>(abre em nova aba)</span>
                  </a>
                </li>
              ))}
            </ul>
          )}

          <p className={styles.legal}>
            {siteConfig.name}
            {credentials && `, ${credentials}`}
          </p>
        </div>
      </Container>
    </footer>
  )
}
