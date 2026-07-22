import type { LucideIcon } from "lucide-react"
import { Eyebrow } from "./eyebrow"

interface FeatureItem {
  id: string
  icon: LucideIcon
  title: string
  items: string[]
}

interface FuncionalidadesProps {
  eyebrow: string
  title: string
  intro: string
  features: FeatureItem[]
}

export function Funcionalidades({
  eyebrow,
  title,
  intro,
  features,
}: FuncionalidadesProps) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20 md:py-28">
      <div id="funcionalidades" className="text-center mb-14">
        <div className="flex justify-center">
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        <h2 className="text-h2 font-bold mb-4 text-ink">{title}</h2>
        <p className="text-lead text-ink-2 max-w-2xl mx-auto">{intro}</p>
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <div
              key={feature.id}
              className="bg-white p-7 rounded-3xl border border-[#E6EAF0] shadow-[0_1px_2px_rgba(30,40,60,0.05)]"
            >
              <div className="flex items-center gap-4 mb-5">
                <span className="w-12 h-12 rounded-2xl bg-brand-soft flex items-center justify-center text-brand shrink-0">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </span>
                <h3 className="text-h4 font-semibold text-ink">
                  {feature.title}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {feature.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-body text-ink-2"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 mt-2"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}
