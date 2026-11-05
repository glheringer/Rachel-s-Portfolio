import { ArrowUp } from "lucide-react"
import styles from "./back-to-top.module.scss"

/**
 * Botão flutuante de voltar ao topo. Aparece depois de rolar uma tela
 * (scroll-driven animation, sem JS). O alvo é o <body id="topo">; o Lenis
 * suaviza a rolagem dos links âncora.
 */
export function BackToTop() {
  return (
    <a href="#topo" className={styles.button} aria-label="Voltar ao topo">
      <ArrowUp size={20} aria-hidden />
    </a>
  )
}
