import { clsx, type ClassValue } from "clsx"
import { siteConfig } from "@/config/site"

/** Junta classes condicionais (útil com CSS Modules). */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

/** URL absoluta a partir de um caminho, usando a URL pública do site. */
export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString()
}
