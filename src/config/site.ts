/**
 * Fonte única dos dados da Rachel. Metadata, sitemap, OG image, JSON-LD e
 * componentes leem daqui — altere aqui e o resto acompanha.
 *
 * Fontes (out/2026): Lattes via Escavador, perfil público do LinkedIn,
 * Instagram @rachelornelas.md e CRM-MG. Campos vazios não aparecem no site.
 */
export const siteConfig = {
  name: "Rachel Campos Ornelas",
  shortName: "Rachel Ornelas",
  initials: "RO",
  /** Residente ainda não pode se anunciar como especialista (CFM): manter "residente". */
  jobTitle: "Médica · Residente em Anestesiologia",
  description:
    "Rachel Campos Ornelas, médica (CRM-MG 98749) e residente em Anestesiologia em Ipatinga-MG. Pesquisa em epidemiologia e medicina baseada em evidências.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  locale: "pt_BR",
  language: "pt-BR",
  location: { city: "Ipatinga" as string, region: "MG" as string, country: "BR" },
  /** Registro no conselho — exibição obrigatória na publicidade médica (CFM). */
  credentials: [{ label: "CRM-MG", value: "98749" }] as { label: string; value: string }[],
  email: "" as string,
  phone: "" as string,
  /** Foto principal (coloque em /public). Sem foto, aparece um placeholder. */
  portrait: {
    src: "/images/rachel-ornelas.jpg",
    alt: "Rachel Campos Ornelas, de jaleco, sorrindo",
  } as { src: string; alt: string } | null,
  // Perfis públicos. Entram no JSON-LD (sameAs), no contato e no rodapé.
  socials: [
    {
      label: "Instagram",
      handle: "@rachelornelas.md",
      href: "https://www.instagram.com/rachelornelas.md/",
    },
    {
      label: "LinkedIn",
      handle: "rachel-campos-ornelas",
      href: "https://br.linkedin.com/in/rachel-campos-ornelas",
    },
  ] as { label: string; handle: string; href: string }[],
  alumniOf: "Universidade Federal de Juiz de Fora — Campus Governador Valadares",
  affiliation: "Hospital Márcio Cunha",
  knowsAbout: [
    "Anestesiologia",
    "Medicina baseada em evidências",
    "Epidemiologia",
    "Pesquisa clínica",
    "Metodologia científica",
  ],
  languages: ["Português", "Inglês"],
  keywords: [
    "Rachel Campos Ornelas",
    "Rachel Ornelas",
    "médica",
    "residente em anestesiologia",
    "Hospital Márcio Cunha",
    "Ipatinga",
    "medicina baseada em evidências",
  ],
} as const

export const navItems = [
  { label: "Sobre", href: "/#sobre" },
  { label: "Interesses", href: "/#interesses" },
  { label: "Trajetória", href: "/#trajetoria" },
  { label: "Publicações", href: "/#publicacoes" },
] as const

/** CTA principal do site. */
export const primaryCta = { label: "Fale comigo", href: "/#contato" } as const

/** Rotas públicas que entram no sitemap. Adicione aqui as páginas novas. */
export const staticRoutes = ["/"] as const
