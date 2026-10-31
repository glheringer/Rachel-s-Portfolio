import styles from "./skip-link.module.scss"

export function SkipLink({ href = "#conteudo" }: { href?: string }) {
  return (
    <a href={href} className={styles.skipLink}>
      Pular para o conteúdo
    </a>
  )
}
