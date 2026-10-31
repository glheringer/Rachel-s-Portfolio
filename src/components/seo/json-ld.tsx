import type { Person, Thing, WebSite, WithContext } from "schema-dts"
import { siteConfig } from "@/config/site"
import { absoluteUrl } from "@/lib/utils"

/** Renderiza dados estruturados (schema.org) com escape contra XSS. */
export function JsonLd<T extends Thing>({ data }: { data: WithContext<T> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  )
}

export const personJsonLd: WithContext<Person> = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": absoluteUrl("/#person"),
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  url: siteConfig.url,
  image: absoluteUrl("/opengraph-image"),
  jobTitle: siteConfig.jobTitle,
  description: siteConfig.description,
  ...(siteConfig.email ? { email: `mailto:${siteConfig.email}` } : {}),
  ...(siteConfig.location.city
    ? {
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.location.city,
          addressRegion: siteConfig.location.region,
          addressCountry: siteConfig.location.country,
        },
      }
    : {}),
  alumniOf: { "@type": "CollegeOrUniversity", name: siteConfig.alumniOf },
  affiliation: { "@type": "Hospital", name: siteConfig.affiliation },
  knowsAbout: [...siteConfig.knowsAbout],
  knowsLanguage: [...siteConfig.languages],
  hasCredential: siteConfig.credentials.map((c) => ({
    "@type": "EducationalOccupationalCredential" as const,
    credentialCategory: "Registro profissional",
    name: `${c.label} ${c.value}`,
  })),
  sameAs: siteConfig.socials.map((s) => s.href),
}

export const websiteJsonLd: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": absoluteUrl("/#website"),
  name: siteConfig.name,
  url: siteConfig.url,
  inLanguage: siteConfig.language,
  author: { "@id": absoluteUrl("/#person") },
}
