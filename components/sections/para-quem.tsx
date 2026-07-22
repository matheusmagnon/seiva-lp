import type { LucideIcon } from "lucide-react"
import { Eyebrow } from "./eyebrow"

interface PersonaItem {
  icon: LucideIcon
  title: string
  description: string
}

interface ParaQuemProps {
  eyebrow: string
  title: string
  intro: string
  personas: PersonaItem[]
}

export function ParaQuem({ eyebrow, title, intro, personas }: ParaQuemProps) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20 md:py-28">
      <div id="para-quem" className="text-center mb-14">
        <div className="flex justify-center">
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        <h2 className="text-h2 font-bold mb-4 text-ink">{title}</h2>
        <p className="text-lead text-ink-2 max-w-2xl mx-auto">{intro}</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {personas.map((persona) => {
          const Icon = persona.icon
          return (
            <div
              key={persona.title}
              className="bg-white p-7 rounded-3xl border border-[#E6EAF0] shadow-[0_1px_2px_rgba(30,40,60,0.05)]"
            >
              <span className="w-12 h-12 rounded-2xl bg-brand-soft flex items-center justify-center text-brand mb-5">
                <Icon className="w-6 h-6" aria-hidden="true" />
              </span>
              <h3 className="text-h4 font-semibold mb-2 text-ink">
                {persona.title}
              </h3>
              <p className="text-body text-ink-2 leading-relaxed">
                {persona.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
