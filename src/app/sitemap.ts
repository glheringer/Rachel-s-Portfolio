import type { MetadataRoute } from "next"
import { staticRoutes } from "@/config/site"
import { absoluteUrl } from "@/lib/utils"

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map((route) => ({
    url: absoluteUrl(route),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7,
  }))
}
