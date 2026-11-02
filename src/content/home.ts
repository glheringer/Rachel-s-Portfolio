/**
 * Conteúdo da home, a partir do currículo Lattes (via Escavador, coletado
 * em 05/2025), LinkedIn e Instagram profissional. Revisar com a Rachel.
 */
import {
  Activity,
  Award,
  BookOpen,
  ChartLine,
  FileText,
  GraduationCap,
  Hospital,
  Microscope,
  Syringe,
  type LucideIcon,
} from "lucide-react"

export const hero = {
  lead: "Médica pela UFJF-GV, residente (R3) em Anestesiologia no Hospital Márcio Cunha, em Ipatinga — MG. Pesquisa em epidemiologia e medicina baseada em evidências.",
  highlights: [
    { icon: Syringe, title: "Anestesiologia" },
    { icon: BookOpen, title: "Medicina baseada em evidências" },
    { icon: ChartLine, title: "Pesquisa em epidemiologia" },
  ],
  floatingCard: { title: "Residência — R3", description: "Anestesiologia · Hospital Márcio Cunha" },
}

export const about = {
  /** Frase de destaque: aforismo de William Osler (domínio público). */
  quote: {
    text: "A medicina é a ciência da incerteza e a arte da probabilidade.",
    author: "Sir William Osler",
    role: "Médico canadense (1849–1919)",
  },
  paragraphs: [
    "Sou médica pela Universidade Federal de Juiz de Fora, Campus Governador Valadares (UFJF-GV), e hoje faço residência em Anestesiologia no Hospital Márcio Cunha, em Ipatinga.",
    "Na graduação, fui aluna de iniciação científica na Faculdade de Saúde Pública da USP, no Laboratório de Inferência Causal em Epidemiologia (LINCE-USP), e integrei o Grupo de Pesquisa em Escorpionismo do CNPq. Tenho interesse especial por epidemiologia, pesquisa clínica e medicina baseada em evidências.",
  ],
  stats: [
    { icon: FileText, value: "7", label: "artigos publicados em periódicos" },
    { icon: Microscope, value: "4", label: "projetos de pesquisa" },
  ],
  facts: [
    { label: "Residência", value: "Anestesiologia (R3)", detail: "Hospital Márcio Cunha" },
    { label: "Graduação", value: "Medicina", detail: "UFJF, Campus Governador Valadares" },
    { label: "Iniciação científica", value: "LINCE-USP", detail: "Faculdade de Saúde Pública" },
    { label: "Registro", value: "CRM-MG 98749", detail: "Conselho Regional de Medicina de MG" },
    { label: "Idiomas", value: "Português e inglês", detail: "Comunicação científica e clínica" },
  ],
}

export const interests: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Syringe,
    title: "Anestesiologia",
    description:
      "Residência em andamento no Hospital Márcio Cunha, com formação complementar em monitorização da profundidade anestésica (SBA) e suporte avançado de vida.",
  },
  {
    icon: BookOpen,
    title: "Medicina baseada em evidências",
    description:
      "Revisões sistemáticas e meta-pesquisa — como o mapa de evidências sobre colchicina na COVID-19, desenvolvido na FSP-USP.",
  },
  {
    icon: ChartLine,
    title: "Epidemiologia",
    description:
      "Estudos sobre escorpionismo, leishmaniose visceral e anomalias congênitas em Minas Gerais e no Brasil.",
  },
]

export const journey: { icon: LucideIcon; period: string; title: string; place: string }[] = [
  {
    icon: Hospital,
    period: "2024 — atual",
    title: "Residência em Anestesiologia",
    place: "Hospital Márcio Cunha · Ipatinga, MG",
  },
  {
    icon: Microscope,
    period: "2022 — 2023",
    title: "Iniciação científica — LINCE",
    place: "Faculdade de Saúde Pública da USP",
  },
  {
    icon: Activity,
    period: "2022 — 2023",
    title: "Estágio em Medicina Intensiva",
    place: "Hospital Bom Samaritano · 180 h",
  },
  {
    icon: GraduationCap,
    period: "2017 — 2023",
    title: "Graduação em Medicina",
    place: "UFJF — Campus Governador Valadares",
  },
]

export const moments = {
  eyebrow: "Na prática",
  title: "Congressos, residência e formação",
}

export const awards: { icon: LucideIcon; year: string; title: string; place: string }[] = [
  {
    icon: Award,
    year: "2022",
    title: "Menção honrosa — ação de extensão “Educação em saúde”",
    place: "VI Mostra de Ações de Extensão da UFJF-GV",
  },
  {
    icon: Award,
    year: "2021",
    title: "2º lugar em Clínica Médica — apresentação oral",
    place: "X Braincoms · Escola Paulista de Medicina (Unifesp)",
  },
]

export const certifications = [
  "ACLS — Suporte Avançado de Vida em Cardiologia",
  "PALS — Suporte Avançado de Vida em Pediatria",
  "SAVIC — Insuficiência Cardíaca (SBC-MG)",
  "SAVICO — Insuficiência Coronariana (SBC-MG)",
  "Emergências Clínicas (ABRAMEDE-MG)",
  "Monitorização da Profundidade Anestésica (SBA)",
]

/** Seleção de artigos em periódicos (Lattes). `lead`: primeira autora. */
export const publications: { year: string; title: string; journal: string; lead?: boolean }[] = [
  {
    year: "2024",
    title:
      "Conclusions of clinical trials assessing monoclonal antibodies and sponsored by pharmaceutical industry: a meta-research study",
    journal: "Revista da Associação Médica Brasileira",
    lead: true,
  },
  {
    year: "2023",
    title:
      "Scorpion Stings in Minas Gerais (Brazil): A Monocentric Retrospective Study Evaluating All Envenoming Cases of Local Scorpionism",
    journal: "Wilderness & Environmental Medicine",
    lead: true,
  },
  {
    year: "2024",
    title:
      "Perfil epidemiológico dos acidentes por material biológico em médicos da atenção primária em Minas Gerais, de 2012 a 2021",
    journal: "Revista Brasileira de Medicina de Família e Comunidade",
  },
  {
    year: "2024",
    title:
      "Anormalidades congênitas em Minas Gerais, Brasil: análises de morbimortalidade de 2010 a 2020",
    journal: "Revista de Medicina da UFC",
  },
  {
    year: "2024",
    title: "Health education: information to prevent accidents with scorpions",
    journal: "Arquivos do MUDI",
  },
  {
    year: "2024",
    title:
      "Converging pathways: bringing community, student initiatives, and a systematic review project in COVID-19 pandemic",
    journal: "Revista de la Universidad Industrial de Santander. Salud",
  },
]

/** Perguntas frequentes. Vazio = a seção não aparece. */
export const faq: { question: string; answer: string }[] = []
