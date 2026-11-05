import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/layout/container"
import { heroVariants } from "@/components/sections/hero-variants"
import styles from "./page.module.scss"

export const metadata: Metadata = {
  title: "Versões do topo",
  robots: { index: false, follow: false },
}

export default function HeroVariantsPage() {
  return (
    <Container className={styles.wrapper}>
      <h1 className={styles.title}>Versões do topo</h1>
      <p className={styles.lead}>
        Escolha uma versão para ver a página inteira com ela. Dentro de cada uma, a barra no pé da
        tela troca de versão.
      </p>

      <ul role="list" className={styles.list}>
        <li>
          <Link href="/" className={styles.card}>
            <span className={styles.number}>Atual</span>
            <span className={styles.cardTitle}>Versão no ar</span>
            <span className={styles.cardText}>
              Cartaz: frase em letras grandes ao redor da foto.
            </span>
            <ArrowRight size={20} aria-hidden className={styles.arrow} />
          </Link>
        </li>
        {heroVariants.map((v) => (
          <li key={v.slug}>
            <Link href={`/hero/${v.slug}`} className={styles.card}>
              <span className={styles.number}>{v.slug}</span>
              <span className={styles.cardTitle}>{v.title}</span>
              <span className={styles.cardText}>{v.description}</span>
              <ArrowRight size={20} aria-hidden className={styles.arrow} />
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  )
}
