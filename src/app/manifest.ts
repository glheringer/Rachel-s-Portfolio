import type { MetadataRoute } from "next"
import { siteConfig } from "@/config/site"
import { tokens } from "@/styles/tokens/tokens"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    lang: siteConfig.language,
    start_url: "/",
    display: "standalone",
    background_color: tokens.color.bg,
    theme_color: tokens.color.bg,
    icons: [
      { src: "/icon", sizes: "64x64", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  }
}
