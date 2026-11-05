import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { heroVariants } from "@/components/sections/hero-variants"
import { VariantSwitcher } from "@/components/sections/hero-variants/variant-switcher"
import { About } from "@/components/sections/about"
import { Interests } from "@/components/sections/interests"
import { Journey } from "@/components/sections/journey"
import { Moments } from "@/components/sections/moments"
import { Publications } from "@/components/sections/publications"
import { Practice } from "@/components/sections/practice"
import { Faq } from "@/components/sections/faq"
import { Contact } from "@/components/sections/contact"

export function generateStaticParams() {
  return heroVariants.map((v) => ({ versao: v.slug }))
}

export async function generateMetadata({ params }: PageProps<"/hero/[versao]">): Promise<Metadata> {
  const { versao } = await params
  const variant = heroVariants.find((v) => v.slug === versao)
  return {
    title: variant ? `Topo ${variant.slug} — ${variant.title}` : "Topo",
    robots: { index: false, follow: false },
  }
}

export default async function HeroVariantPage({ params }: PageProps<"/hero/[versao]">) {
  const { versao } = await params
  const variant = heroVariants.find((v) => v.slug === versao)
  if (!variant) notFound()
  const { Component } = variant

  return (
    <>
      <Component />
      <About />
      <Interests />
      <Journey />
      <Moments />
      <Publications />
      <Practice />
      <Faq />
      <Contact />
      <VariantSwitcher current={variant.slug} />
    </>
  )
}
