import { Plus } from "lucide-react"
import type { FAQPage, WithContext } from "schema-dts"
import { faq } from "@/content/home"
import { Section } from "@/components/layout/section"
import { JsonLd } from "@/components/seo/json-ld"
import styles from "./faq.module.scss"

const faqJsonLd: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
}

/** Acordeão nativo (<details>): acessível, sem JS e com o texto no HTML para o Google. */
export function Faq() {
  if (faq.length === 0) return null

  return (
    <Section id="duvidas" layout="center" eyebrow="Dúvidas frequentes" title="Perguntas comuns">
      <div className={styles.list}>
        {faq.map(({ question, answer }) => (
          <details key={question} className={styles.item} name="faq">
            <summary className={styles.question}>
              {question}
              <span className={styles.icon} aria-hidden>
                <Plus size={16} />
              </span>
            </summary>
            <p className={styles.answer}>{answer}</p>
          </details>
        ))}
      </div>
      <JsonLd data={faqJsonLd} />
    </Section>
  )
}
