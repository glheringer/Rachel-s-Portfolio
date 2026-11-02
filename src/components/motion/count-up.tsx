"use client"

import { animate, useInView, useReducedMotion } from "motion/react"
import { useEffect, useLayoutEffect, useRef } from "react"

const NUMBER = /^(\D*)(\d+)(.*)$/

/**
 * Número que conta a partir do zero ao entrar na tela ("7" → 0, 1, 2… 7).
 * O HTML do servidor já traz o valor final (SEO, sem JS). Só anima se o
 * número ainda estiver fora da tela ao carregar; respeita "reduzir movimento".
 */
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const armed = useRef(false)
  const inView = useInView(ref, { once: true, margin: "-10% 0px" })
  const reduce = useReducedMotion()

  // Antes da primeira pintura: zera o número se ele ainda não está visível.
  useLayoutEffect(() => {
    const el = ref.current
    const match = value.match(NUMBER)
    if (!el || !match || reduce) return
    if (el.getBoundingClientRect().top < window.innerHeight) return
    el.textContent = `${match[1]}0${match[3]}`
    armed.current = true
  }, [value, reduce])

  useEffect(() => {
    const el = ref.current
    const match = value.match(NUMBER)
    if (!el || !match || !inView || !armed.current) return
    const [, prefix, target, suffix] = match
    const controls = animate(0, Number(target), {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        el.textContent = `${prefix}${Math.round(v)}${suffix}`
      },
    })
    return () => controls.stop()
  }, [value, inView])

  return <span ref={ref}>{value}</span>
}
