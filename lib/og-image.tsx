import { ImageResponse } from "next/og"
import { readFileSync } from "fs"
import { join } from "path"

// Direção F na OG image: fundo claro (Cinza-Nuvem), uma cor de destaque só
// (#4763B8), zero gradiente/glow, cantos generosos, sem emoji.
export const ogSize = { width: 1200, height: 630 }
export const ogContentType = "image/png"

const BG = "#F3F5F9"
const BRAND = "#4763B8"
const BRAND_INK = "#33427C"
const BRAND_SOFT = "#E9EDF8"
const INK = "#26303B"
const INK_2 = "#5F6B78"
const LINE = "#E6EAF0"

type OgImageProps = {
  /** Rótulo curto acima do título (ex.: nome da categoria do post). */
  eyebrow?: string
  title: string
  description: string
}

/**
 * Monta a OG image compartilhada (global + posts do blog).
 *
 * GOTCHA CRÍTICO: o fs.readFileSync do logo fica DENTRO desta função, que só
 * roda quando uma rota de imagem é de fato requisitada/renderizada. Se essa
 * leitura fosse feita no top-level do módulo, ela rodaria também ao resolver
 * metadata de QUALQUER outra rota que importe este arquivo (inclusive rotas
 * dinâmicas como /blog em tempo de request) — e o arquivo não é rastreado
 * para dentro do bundle serverless dessas outras rotas, gerando ENOENT e
 * quebrando páginas que não têm nada a ver com a OG image.
 */
export function renderOgImage({ eyebrow, title, description }: OgImageProps) {
  const logo = readFileSync(join(process.cwd(), "public/og-logo.png"))
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: BG,
          fontFamily: "sans-serif",
        }}
      >
        {/* Header: marca */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <img
            src={logoSrc}
            width={56}
            height={56}
            style={{ width: 56, height: 56 }}
          />
          <div
            style={{
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: -0.5,
              color: BRAND_INK,
            }}
          >
            SEIVA
          </div>
        </div>

        {/* Corpo: eyebrow + título + descrição */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            maxWidth: 980,
          }}
        >
          {eyebrow && (
            <div
              style={{
                display: "flex",
                alignSelf: "flex-start",
                padding: "8px 20px",
                borderRadius: 10,
                background: BRAND_SOFT,
                color: BRAND,
                fontSize: 22,
                fontWeight: 600,
              }}
            >
              {eyebrow}
            </div>
          )}
          <div
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
              overflow: "hidden",
              fontSize: 56,
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: -1,
              color: INK,
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              overflow: "hidden",
              fontSize: 26,
              fontWeight: 400,
              lineHeight: 1.4,
              color: INK_2,
            }}
          >
            {description}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 32,
            borderTop: `1px solid ${LINE}`,
            fontSize: 20,
            color: INK_2,
          }}
        >
          <div style={{ display: "flex", fontWeight: 600, color: BRAND_INK }}>
            seiva.app
          </div>
          <div style={{ display: "flex" }}>
            Gestão de pessoas, atendimentos e agenda para prefeituras (SUAS)
          </div>
        </div>
      </div>
    ),
    { ...ogSize }
  )
}
