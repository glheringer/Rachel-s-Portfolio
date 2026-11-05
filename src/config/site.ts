/**
 * Fonte única dos dados da Rachel. Metadata, sitemap, OG image, JSON-LD e
 * componentes leem daqui — altere aqui e o resto acompanha.
 *
 * Fontes (out/2026): Lattes via Escavador, perfil público do LinkedIn,
 * Instagram @rachelornelas.md e CRM-MG. Campos vazios não aparecem no site.
 */
type Photo = { src: string; alt: string }

/** Local de atendimento (seção "Onde atendo"). */
type Practice = {
  /** Nome do consultório ou clínica (opcional). */
  name?: string
  /** Rua e número: vira o título da seção. */
  street: string
  district?: string
  city: string
  region: string
  /** CEP: ajuda o mapa a achar o endereço certo. */
  postalCode?: string
  /** Frase curta embaixo do endereço (ex.: "Atendimento com hora marcada."). */
  note?: string
}

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
  /**
   * Onde ela atende. Enquanto for `null`, a seção "Onde atendo" e o link no
   * menu não aparecem. Só preencha com dados confirmados por ela.
   */
  practice: {
    name: "Clínica Dias",
    street: "Rua Cento e Vinte e Oito, 14",
    district: "Santa Maria",
    city: "Timóteo",
    region: "MG",
    postalCode: "35180-002",
  } as Practice | null,
  /** Retrato do topo, recortado com fundo transparente (coloque em /public). Sem foto, o topo fica sem retrato. */
  portrait: {
    src: "/images/rachel-jaleco-bracos-cruzados.webp",
    alt: "Rachel Campos Ornelas de jaleco, de braços cruzados",
  } as Photo | null,
  /*
   * Demais fotos. Todas opcionais: sem foto, o bloco some ou se ajusta.
   * Fotos com paciente: recortar para mostrar só a Rachel (CFM/LGPD) e guardar
   * o original em fotos-originais/ (fora do git e do public/).
   */
  /** Par de fotos desencontradas na seção Sobre. */
  aboutPhotos: [
    {
      src: "/images/rachel-retrato-em-pe.jpg",
      alt: "Rachel Campos Ornelas em retrato de estúdio",
    },
    {
      src: "/images/copa-2025-apresentacao-2.jpg",
      alt: "Rachel Campos Ornelas apresentando trabalho científico no COPA 2025",
    },
  ] as Photo[],
  /** Foto grande ao lado da linha do tempo. */
  workPhoto: {
    src: "/images/residencia-centro-cirurgico-1.jpg",
    alt: "Rachel Campos Ornelas no centro cirúrgico, durante a residência",
  } as Photo | null,
  /** Seção Momentos: congressos, residência e formação. */
  moments: [
    {
      src: "/images/cba-69-boas-vindas.jpg",
      alt: "Rachel Campos Ornelas diante do painel de boas-vindas do 69º Congresso Brasileiro de Anestesiologia",
      caption: "69º Congresso Brasileiro de Anestesiologia (SBA)",
    },
    {
      src: "/images/copa-2025-apresentacao-1.jpg",
      alt: "Rachel Campos Ornelas ao lado de seu e-pôster no COPA 2025",
      caption: "Apresentação de trabalho no COPA 2025 (SAESP)",
    },
    {
      src: "/images/residencia-centro-cirurgico-2.jpg",
      alt: "Rachel Campos Ornelas de touca e máscara, concentrada em um procedimento no centro cirúrgico",
      caption: "Rotina no centro cirúrgico — residência no Hospital Márcio Cunha",
    },
    {
      src: "/images/formatura-ufjf-gv-colacao.jpg",
      alt: "Rachel Campos Ornelas de beca e capelo na colação de grau",
      caption: "Colação de grau em Medicina — UFJF, Campus Governador Valadares",
    },
  ] as (Photo & { caption: string })[],
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

export const navItems: { label: string; href: string }[] = [
  { label: "Sobre", href: "/#sobre" },
  { label: "Interesses", href: "/#interesses" },
  { label: "Trajetória", href: "/#trajetoria" },
  { label: "Publicações", href: "/#publicacoes" },
  ...(siteConfig.practice ? [{ label: "Atendimento", href: "/#atendimento" }] : []),
]

/** CTA principal do site. */
export const primaryCta = { label: "Fale comigo", href: "/#contato" } as const

/** Rotas públicas que entram no sitemap. Adicione aqui as páginas novas. */
export const staticRoutes = ["/"] as const
