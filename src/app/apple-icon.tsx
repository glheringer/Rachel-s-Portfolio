import { ImageResponse } from "next/og"
import { siteConfig } from "@/config/site"
import { tokens } from "@/styles/tokens/tokens"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
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
        fontSize: 84,
        fontWeight: 800,
        letterSpacing: -3,
      }}
    >
      {siteConfig.initials}
    </div>,
    size,
  )
}
