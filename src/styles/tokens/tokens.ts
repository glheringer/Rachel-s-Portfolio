// Gerado por scripts/build-tokens.mjs a partir de tokens/. Não edite à mão.

export const tokens = {
  "palette": {
    "navy": {
      "50": "#eef3fb",
      "100": "#d9e4f5",
      "200": "#b3c8ea",
      "300": "#7f9fd6",
      "400": "#4c76bf",
      "500": "#2654a3",
      "600": "#163f87",
      "700": "#123a80",
      "800": "#0e3170",
      "900": "#092862",
      "950": "#061a40"
    },
    "sky": {
      "50": "#f3faff",
      "100": "#e1f3fe",
      "200": "#ccecff",
      "300": "#b3e2fd",
      "400": "#a0dafd",
      "500": "#6cc4fa",
      "600": "#2fa6ee"
    },
    "blue": {
      "400": "#3d95fa",
      "500": "#0078f8",
      "600": "#0062cc",
      "700": "#004fa6"
    },
    "neutral": {
      "0": "#ffffff",
      "25": "#fafbfc",
      "50": "#f6f7f9",
      "100": "#eef0f3",
      "200": "#e2e5ea",
      "300": "#cdd2da",
      "400": "#9aa3b2",
      "500": "#6b7587",
      "600": "#4b5466",
      "700": "#343b4a",
      "800": "#1f2532",
      "900": "#121722",
      "950": "#0a0e17"
    },
    "green": {
      "400": "#4ade80",
      "500": "#16a34a"
    }
  },
  "space": {
    "0": "0",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
    "12": "3rem",
    "16": "4rem",
    "20": "5rem",
    "24": "6rem",
    "32": "8rem",
    "40": "10rem"
  },
  "radius": {
    "none": "0",
    "sm": "0.5rem",
    "md": "1rem",
    "lg": "1.5rem",
    "xl": "2rem",
    "full": "9999px"
  },
  "border": {
    "width": {
      "thin": "1px",
      "thick": "2px"
    }
  },
  "container": {
    "max": "72rem",
    "narrow": "42rem",
    "gutter": "clamp(1rem, 0.5rem + 2.5vw, 2rem)"
  },
  "header": {
    "height": "4.5rem"
  },
  "breakpoint": {
    "sm": "40rem",
    "md": "48rem",
    "lg": "64rem",
    "xl": "80rem"
  },
  "z": {
    "base": 0,
    "raised": 10,
    "header": 40,
    "overlay": 50
  },
  "duration": {
    "fast": "150ms",
    "base": "250ms",
    "slow": "600ms"
  },
  "ease": {
    "standard": "cubic-bezier(0.2, 0, 0, 1)",
    "out": "cubic-bezier(0.22, 1, 0.36, 1)"
  },
  "shadow": {
    "sm": "0 1px 2px rgb(9 40 98 / 0.06)",
    "md": "0 12px 32px -12px rgb(9 40 98 / 0.18)",
    "lg": "0 24px 60px -20px rgb(9 40 98 / 0.28)"
  },
  "font": {
    "family": {
      "sans": "var(--font-sans-family), ui-sans-serif, system-ui, sans-serif",
      "display": "var(--font-sans-family), ui-sans-serif, system-ui, sans-serif",
      "mono": "ui-monospace, SFMono-Regular, Menlo, monospace"
    },
    "size": {
      "xs": "0.75rem",
      "sm": "0.875rem",
      "md": "1rem",
      "lg": "clamp(1.125rem, 1.05rem + 0.3vw, 1.25rem)",
      "xl": "clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem)",
      "2xl": "clamp(1.5rem, 1.25rem + 1vw, 2rem)",
      "3xl": "clamp(1.875rem, 1.45rem + 1.8vw, 2.75rem)",
      "4xl": "clamp(2.25rem, 1.6rem + 2.8vw, 3.75rem)",
      "5xl": "clamp(2.5rem, 1.4rem + 4.6vw, 4.75rem)",
      "wordmark": "13.5cqi"
    },
    "weight": {
      "regular": 400,
      "medium": 500,
      "semibold": 600,
      "bold": 700,
      "extrabold": 800
    },
    "leading": {
      "tight": 1.08,
      "snug": 1.2,
      "normal": 1.5,
      "relaxed": 1.7
    },
    "tracking": {
      "tight": "-0.025em",
      "normal": "0",
      "wide": "0.08em",
      "tighter": "-0.04em"
    }
  },
  "color": {
    "bg": "#ffffff",
    "surface": "#f6f7f9",
    "surface-raised": "#ffffff",
    "tint": "#e1f3fe",
    "tint-strong": "#b3e2fd",
    "hero-from": "#a0dafd",
    "hero-to": "#f3faff",
    "hero-line": "#ffffff",
    "heading": "#092862",
    "fg": "#121722",
    "fg-muted": "#4b5466",
    "fg-subtle": "#6b7587",
    "border": "#e2e5ea",
    "border-strong": "#cdd2da",
    "accent": "#092862",
    "accent-hover": "#123a80",
    "on-accent": "#ffffff",
    "action": "#0078f8",
    "action-hover": "#0062cc",
    "focus": "#0078f8",
    "positive": "#16a34a",
    "inverse-bg": "#061a40",
    "inverse-surface": "#092862",
    "inverse-fg": "#ffffff",
    "inverse-muted": "#b3c8ea",
    "inverse-border": "#0e3170"
  }
} as const

export const darkColor = {
  "bg": "#0a0e17",
  "surface": "#121722",
  "surface-raised": "#1f2532",
  "tint": "#061a40",
  "tint-strong": "#0e3170",
  "hero-from": "#0e3170",
  "hero-to": "#0a0e17",
  "hero-line": "#123a80",
  "heading": "#ffffff",
  "fg": "#eef0f3",
  "fg-muted": "#9aa3b2",
  "fg-subtle": "#6b7587",
  "border": "#1f2532",
  "border-strong": "#343b4a",
  "accent": "#b3e2fd",
  "accent-hover": "#ccecff",
  "on-accent": "#061a40",
  "action": "#3d95fa",
  "action-hover": "#6cc4fa",
  "focus": "#3d95fa",
  "positive": "#4ade80",
  "inverse-bg": "#061a40",
  "inverse-surface": "#092862",
  "inverse-fg": "#ffffff",
  "inverse-muted": "#b3c8ea",
  "inverse-border": "#0e3170"
} as const
