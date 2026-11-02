import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { siteConfig } from "@/config/site"
import { fontVariables } from "@/lib/fonts"
import { tokens } from "@/styles/tokens/tokens"
import { JsonLd, personJsonLd, websiteJsonLd } from "@/components/seo/json-ld"
import { SkipLink } from "@/components/layout/skip-link"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { SmoothScroll } from "@/components/motion/smooth-scroll"
import styles from "./layout.module.scss"
import "lenis/dist/lenis.css"
import "./globals.scss"

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Portfólio`,
    template: `%s · ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  keywords: [...siteConfig.keywords],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  formatDetection: { telephone: false },
}

export const viewport: Viewport = {
  // Site sempre claro (as referências visuais são claras).
  themeColor: tokens.color.bg,
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang={siteConfig.language} className={fontVariables}>
      <body>
        <SmoothScroll />
        <SkipLink />
        <SiteHeader />
        <main id="conteudo" className={styles.main}>
          {children}
        </main>
        <SiteFooter />
        <JsonLd data={personJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
