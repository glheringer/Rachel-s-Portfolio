import { ImageResponse } from "next/og"
import { siteConfig } from "@/config/site"
import { tokens } from "@/styles/tokens/tokens"

// Ícone provisório com as iniciais. Troque por um icon.svg/png quando houver logo.
export const size = { width: 64, height: 64 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: tokens.color.accent,
        color: tokens.color["on-accent"],
        fontSize: 30,
        fontWeight: 800,
        borderRadius: 14,
        letterSpacing: -1,
      }}
    >
      {siteConfig.initials}
    </div>,
    size,
  )
}
