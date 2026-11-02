/**
 * Traçado de capnografia (CO₂ expirado), o monitor que acompanha toda
 * anestesia. Gera o atributo `d` de um <path> SVG com ciclos respiratórios
 * normais, em pixels:
 *
 *   fase I    linha de base (inspiração, CO₂ zero)
 *   fase II   subida rápida em S, com o "ombro" arredondado (ângulo α)
 *   fase III  platô alveolar, subindo de leve até o CO₂ expirado final
 *   descida   quase vertical, com canto vivo (ângulo β), de volta à base
 *
 * A base fica em `height`; o platô, perto do topo. Expiração ≈ 2× a
 * inspiração, como numa relação I:E de 1:2.
 */
export function capnogramPath({
  width,
  height,
  cycle = 176,
  offset = 0,
}: {
  /** Largura total a cobrir. */
  width: number
  /** Altura do traçado (da base ao topo do platô). */
  height: number
  /** Largura de um ciclo respiratório. */
  cycle?: number
  /** Desloca o início (negativo começa no meio de um ciclo). */
  offset?: number
}) {
  const base = height
  const top = height * 0.12
  const rise = height - top
  const at = (x: number, f: number) => (x + f * cycle).toFixed(1)

  const parts = [`M ${offset} ${base}`]
  for (let x = offset; x < width; x += cycle) {
    parts.push(
      // fase I
      `L ${at(x, 0.32)} ${base}`,
      // fase II: S rápido até o ombro do platô
      `C ${at(x, 0.36)} ${base} ${at(x, 0.355)} ${(top + rise * 0.1).toFixed(1)} ${at(x, 0.41)} ${(top + rise * 0.05).toFixed(1)}`,
      // fase III: platô com leve inclinação
      `L ${at(x, 0.92)} ${top.toFixed(1)}`,
      // descida inspiratória
      `L ${at(x, 0.945)} ${base}`,
      `L ${at(x, 1)} ${base}`,
    )
  }
  return parts.join(" ")
}
