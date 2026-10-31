import path from "node:path"
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  sassOptions: {
    // Permite `@use "abstracts" as *;` em qualquer .scss, sem caminhos relativos.
    loadPaths: [path.join(process.cwd(), "src/styles")],
  },
}

export default nextConfig
