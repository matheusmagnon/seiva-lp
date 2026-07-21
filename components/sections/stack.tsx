import type { LucideIcon } from "lucide-react"
import { Eyebrow } from "./eyebrow"

interface StackItem {
  icon: LucideIcon
  title: string
  description: string
}

interface StackProps {
  eyebrow: string
  title: string
  intro: string
  itens: StackItem[]
}

export function Stack({ eyebrow, title, intro, itens }: StackProps) {
  return (
    <section
      id="stack"
      className="max-w-6xl mx-auto px-4 py-20 md:py-28"
    >
      <div className="text-center mb-14">
        <div className="flex justify-center">
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        <h2 className="text-h2 font-bold mb-4 text-ink">{title}</h2>
        <p className="text-lead text-ink-2 max-w-2xl mx-auto">{intro}</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {itens.map((item, index) => {
          const Icon = item.icon
          return (
            <div
              key={item.title}
              className="text-center p-6 rounded-3xl bg-white border border-[#E6EAF0] shadow-[0_1px_2px_rgba(30,40,60,0.05)]"
            >
              <span className="text-4xl font-extrabold text-brand-ink mb-4 block">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="w-12 h-12 rounded-2xl bg-brand-soft flex items-center justify-center text-brand mx-auto mb-3">
                <Icon className="w-6 h-6" aria-hidden="true" />
              </span>
              <h3 className="text-small font-semibold text-ink mb-1">
                {item.title}
              </h3>
              <p className="text-caption text-ink-2">{item.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
