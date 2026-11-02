import Link from "next/link"
import { Menu } from "lucide-react"
import { navItems, primaryCta, siteConfig } from "@/config/site"
import { ButtonLink } from "@/components/ui/button"
import { Container } from "./container"
import styles from "./site-header.module.scss"

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandName}>{siteConfig.shortName}</span>
          {/* CRM sempre visível (CFM), mas discreto. */}
          {siteConfig.credentials.map((c) => (
            <span key={c.label} className={styles.brandCredential}>
              {c.label} {c.value}
            </span>
          ))}
        </Link>

        <nav aria-label="Principal" className={styles.nav}>
          <ul role="list" className={styles.list}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.link}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <ButtonLink href={primaryCta.href} variant="secondary" icon={null} className={styles.cta}>
            {primaryCta.label}
          </ButtonLink>
          <button
            type="button"
            className={styles.menuButton}
            popoverTarget="menu-mobile"
            aria-label="Abrir menu"
          >
            <Menu size={20} aria-hidden />
          </button>
        </div>
      </Container>

      <div id="menu-mobile" popover="auto" className={styles.menu}>
        <nav aria-label="Menu mobile">
          <ul role="list" className={styles.menuList}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={styles.link}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ButtonLink href={primaryCta.href} className={styles.menuCta}>
          {primaryCta.label}
        </ButtonLink>
      </div>
    </header>
  )
}
