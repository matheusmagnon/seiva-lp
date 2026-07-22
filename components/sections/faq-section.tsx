import { HelpCircle } from "lucide-react"
import type { FaqItem } from "@/lib/faq"
import { Eyebrow } from "./eyebrow"

export function FaqSection({
  id = "faq",
  eyebrow = "Perguntas frequentes",
  title,
  intro,
  items,
}: {
  id?: string
  eyebrow?: string
  title: React.ReactNode
  intro: React.ReactNode
  items: FaqItem[]
}) {
  return (
    <section className="max-w-6xl mx-auto my-10 md:my-14 px-6 md:px-10 py-16 md:py-20 bg-[#F3F5F9] rounded-[2rem]">
      <div className="flex flex-col md:flex-row gap-10 md:gap-16">
        <div id={id} className="md:w-1/3 md:sticky md:top-24 md:self-start">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="text-h2 font-bold mb-4 text-ink">{title}</h2>
          <p className="text-body text-ink-2">{intro}</p>
        </div>

        <div className="md:w-2/3 space-y-4">
          {items.map((item) => (
            <div
              key={item.q}
              className="bg-white p-6 rounded-2xl border border-[#E6EAF0] shadow-[0_1px_2px_rgba(30,40,60,0.05)]"
            >
              <h3 className="text-h4 font-semibold mb-3 flex items-start gap-3 text-ink">
                <span className="w-8 h-8 rounded-xl bg-brand-soft flex items-center justify-center text-brand shrink-0 mt-0.5">
                  <HelpCircle className="h-4 w-4" aria-hidden="true" />
                </span>
                <span>{item.q}</span>
              </h3>
              <p className="text-body text-ink-2 ml-11">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
