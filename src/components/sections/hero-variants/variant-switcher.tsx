import Link from "next/link"
import { cn } from "@/lib/utils"
import { heroVariants } from "."
import styles from "./variant-switcher.module.scss"

export function VariantSwitcher({ current }: { current: string }) {
  return (
    <nav aria-label="Versões do topo" className={styles.switcher}>
      <Link href="/hero" className={styles.label}>
        Versões
      </Link>
      <Link href="/" className={styles.item}>
        Atual
      </Link>
      {heroVariants.map((v) => (
        <Link
          key={v.slug}
          href={`/hero/${v.slug}`}
          aria-current={v.slug === current ? "page" : undefined}
          className={cn(styles.item, v.slug === current && styles.active)}
          title={v.title}
        >
          {v.slug}
        </Link>
      ))}
    </nav>
  )
}
