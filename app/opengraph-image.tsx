import { renderOgImage, ogSize, ogContentType } from "@/lib/og-image"

export const runtime = "nodejs"
export const alt = "SEIVA — Sistema de Gestão do SUAS"
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return renderOgImage({
    eyebrow: "Sistema de Gestão do SUAS",
    title: "Prontuário, atendimento e agenda em um só lugar",
    description:
      "Gestão de pessoas, atendimentos e agenda para prefeituras (SUAS) e clínicas — multi-tenant, com sigilo LGPD.",
  })
}
