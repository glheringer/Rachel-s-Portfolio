import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Interests } from "@/components/sections/interests"
import { Journey } from "@/components/sections/journey"
import { Publications } from "@/components/sections/publications"
import { Faq } from "@/components/sections/faq"
import { Contact } from "@/components/sections/contact"

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Interests />
      <Journey />
      <Publications />
      <Faq />
      <Contact />
    </>
  )
}
