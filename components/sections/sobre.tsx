import { Eyebrow } from "./eyebrow"

interface SobrePalavra {
  texto: string
  destaque: boolean
}

interface SobreProps {
  eyebrow: string
  title: string
  palavras: SobrePalavra[]
  paragrafos: string[]
}

export function Sobre({ eyebrow, title, palavras, paragrafos }: SobreProps) {
  return (
    <section id="sobre" className="max-w-6xl mx-auto px-4 py-20 md:py-28">
      <div className="text-center mb-10">
        <div className="flex justify-center">
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        <h2 className="text-h2 font-bold text-ink">{title}</h2>
      </div>

      <div className="max-w-2xl mx-auto text-center">
        <p className="text-h3 font-semibold text-ink mb-10 leading-snug">
          {palavras.map((palavra, i) => (
            <span key={i}>
              {palavra.destaque ? (
                <>
                  <span className="text-brand">{palavra.texto.charAt(0)}</span>
                  {palavra.texto.slice(1)}
                </>
              ) : (
                <span className="text-ink-3">{palavra.texto}</span>
              )}
              {i < palavras.length - 1 ? " " : ""}
            </span>
          ))}
        </p>

        <div className="space-y-4">
          {paragrafos.map((paragrafo, i) => (
            <p key={i} className="max-w-none text-body text-ink-2 leading-relaxed">
              {paragrafo}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
