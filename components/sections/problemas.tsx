import { AlertCircle } from "lucide-react"
import { Eyebrow } from "./eyebrow"

interface DorItem {
  dor: string
  categoria?: string
}

interface ProblemasProps {
  eyebrow: string
  title: string
  intro: string
  dores: DorItem[]
}

export function Problemas({ eyebrow, title, intro, dores }: ProblemasProps) {
  return (
    <section
      id="problemas"
      className="max-w-6xl mx-auto px-4 py-20 md:py-28"
    >
      <div className="text-center mb-14">
        <div className="flex justify-center">
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        <h2 className="text-h2 font-bold mb-4 text-ink">{title}</h2>
        <p className="text-lead text-ink-2 max-w-2xl mx-auto">{intro}</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {dores.map((item) => (
          <div
            key={item.dor}
            className="bg-white p-6 rounded-3xl border border-[#E6EAF0] shadow-[0_1px_2px_rgba(30,40,60,0.05)]"
          >
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-xl bg-crit-soft flex items-center justify-center text-crit shrink-0 mt-0.5">
                <AlertCircle className="w-5 h-5" aria-hidden="true" />
              </span>
              <div>
                {item.categoria && (
                  <p className="text-caption font-semibold uppercase tracking-[0.08em] text-crit mb-1">
                    {item.categoria}
                  </p>
                )}
                <p className="text-body text-ink-2 leading-relaxed">{item.dor}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
