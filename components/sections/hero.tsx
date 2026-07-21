import { WhatsAppInlineButton } from "@/components/whatsapp-button"
import { heroContent } from "@/content/landing/home"

const content = heroContent.prefeituras

export function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-24 md:py-32 text-center">
      {/* Badge */}
      <div className="flex justify-center mb-6">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-soft text-brand text-caption font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-brand motion-safe:animate-pulse" aria-hidden="true" />
          {content.badge}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-h1 font-extrabold max-w-4xl mx-auto text-ink">
        {content.title}
      </h1>

      {/* Subtitle */}
      <p className="text-lead text-ink-2 mt-5 max-w-2xl mx-auto">
        {content.subtitle}
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
        <a
          href="#contato"
          className="inline-flex items-center justify-center min-h-[52px] px-7 rounded-[10px] bg-brand text-white text-body font-semibold shadow-[0_1px_2px_rgba(30,40,60,0.05)] hover:bg-brand-dark transition-colors"
        >
          Solicitar demonstração
        </a>
        <WhatsAppInlineButton variant="ghost" />
      </div>

      {/* Fineprint */}
      <p className="text-caption text-ink-3 mt-3">
        Resposta em até 24 horas &middot; Sem compromisso
      </p>
    </section>
  )
}
