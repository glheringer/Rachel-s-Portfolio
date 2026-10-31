import type { Metadata } from "next"
import Link from "next/link"
import { Container } from "@/components/layout/container"
import styles from "./not-found.module.scss"

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false },
}

export default function NotFound() {
  return (
    <Container className={styles.wrapper}>
      <p className={styles.code}>404</p>
      <h1 className={styles.title}>Página não encontrada</h1>
      <Link href="/" className={styles.link}>
        Voltar para o início
      </Link>
    </Container>
  )
}
