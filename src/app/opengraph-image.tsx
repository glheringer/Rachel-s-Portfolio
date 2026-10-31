import { ImageResponse } from "next/og"
import { siteConfig } from "@/config/site"
import { tokens } from "@/styles/tokens/tokens"

// Imagem de compartilhamento (WhatsApp, LinkedIn, X...) na identidade do site.
export const alt = `${siteConfig.name} — ${siteConfig.jobTitle}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const { palette, color } = tokens

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 80,
        background: `linear-gradient(180deg, ${color["hero-from"]}, ${color["hero-to"]})`,
        color: color.heading,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          alignSelf: "flex-start",
          padding: "12px 24px",
          borderRadius: 999,
          background: palette.neutral[0],
          fontSize: 26,
          fontWeight: 600,
        }}
      >
        <div style={{ width: 14, height: 14, borderRadius: 999, background: color.positive }} />
        {siteConfig.jobTitle}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ fontSize: 92, fontWeight: 800, letterSpacing: -4, lineHeight: 1 }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 30, color: color["fg-muted"] }}>{new URL(siteConfig.url).host}</div>
      </div>
    </div>,
    size,
  )
}
