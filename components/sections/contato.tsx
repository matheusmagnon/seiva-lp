import type { LucideIcon } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { Eyebrow } from "./eyebrow"

interface ContatoBullet {
  icon: LucideIcon
  text: string
}

interface ContatoProps {
  id: string
  eyebrow: string
  title: string
  intro: string
  bullets: ContatoBullet[]
}

export function Contato({
  id,
  eyebrow,
  title,
  intro,
  bullets,
}: ContatoProps) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-4 py-20 md:py-28">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        {/* Left column */}
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="text-h2 font-bold mb-4 text-ink">{title}</h2>
          <p className="text-lead text-ink-2 mb-8">{intro}</p>

          <ul className="space-y-4">
            {bullets.map((bullet, i) => {
              const Icon = bullet.icon
              return (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-brand-soft flex items-center justify-center text-brand shrink-0 mt-0.5">
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <span className="text-body text-ink-2">{bullet.text}</span>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Right column — ContactForm */}
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
