"use client"

import { ReactLenis } from "lenis/react"

/**
 * Rolagem suave em todo o site (Lenis — https://lenis.dev).
 * A rolagem continua nativa por baixo: scroll-driven animations, o
 * IntersectionObserver do Reveal e o `scroll-margin-top` dos links âncora
 * seguem funcionando. Com "reduzir movimento", o Lenis desliga a suavização.
 */
export function SmoothScroll() {
  return (
    <ReactLenis
      root
      options={{
        // Links #âncora também rolam suave (o header é descontado pelo scroll-margin-top).
        anchors: true,
        stopInertiaOnNavigate: true,
        lerp: 0.1,
      }}
    />
  )
}
