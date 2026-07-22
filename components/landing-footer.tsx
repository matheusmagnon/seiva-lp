import Link from "next/link"
import Image from "next/image"

export function LandingFooter() {
  return (
    <footer className="py-12 md:py-16 border-t border-[#E6EAF0] bg-[#F3F5F9]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-10">
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2.5 mb-4"
            >
              <Image src="/symbol.svg" alt="SEIVA" width={32} height={32} className="w-8 h-8" />
              <span className="font-bold text-lg text-[#33427C]">SEIVA</span>
            </Link>
            <p className="text-caption text-ink-2">
              SaaS de gestão de pessoas, atendimentos e agenda para prefeituras
              (SUAS). Multi-tenant com banco isolado, offline-ready e
              sigilo LGPD.
            </p>
          </div>

          <nav aria-label="Produto">
            <h2 className="text-caption font-semibold uppercase tracking-[0.18em] text-ink mb-3">
              Produto
            </h2>
            <ul className="space-y-2 text-small">
              <li>
                <a href="/#funcionalidades" className="text-ink-2 hover:text-brand transition-colors">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="/#para-quem" className="text-ink-2 hover:text-brand transition-colors">
                  Para quem
                </a>
              </li>
              <li>
                <a href="/#diferenciais" className="text-ink-2 hover:text-brand transition-colors">
                  Diferenciais
                </a>
              </li>
              <li>
                <Link href="/blog" className="text-ink-2 hover:text-brand transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Empresa">
            <h2 className="text-caption font-semibold uppercase tracking-[0.18em] text-ink mb-3">
              Empresa
            </h2>
            <ul className="space-y-2 text-small">
              <li>
                <a href="/#faq" className="text-ink-2 hover:text-brand transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/#contato" className="text-ink-2 hover:text-brand transition-colors">
                  Fale com a gente
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Legal">
            <h2 className="text-caption font-semibold uppercase tracking-[0.18em] text-ink mb-3">
              Legal
            </h2>
            <ul className="space-y-2 text-small">
              <li>
                <Link href="/termos" className="text-ink-2 hover:text-brand transition-colors">
                  Termos de uso
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="text-ink-2 hover:text-brand transition-colors">
                  Politica de privacidade
                </Link>
              </li>
              <li>
                <Link href="/lgpd" className="text-ink-2 hover:text-brand transition-colors">
                  LGPD
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-caption font-semibold uppercase tracking-[0.18em] text-ink mb-3">
              Contato
            </h2>
            <ul className="space-y-2 text-small">
              <li>
                <a href="mailto:contato@seiva.app" className="text-ink-2 hover:text-brand transition-colors break-all">
                  contato@seiva.app
                </a>
              </li>
              <li>
                <a href="tel:+5563984365295" className="text-ink-2 hover:text-brand transition-colors">
                  +55 (63) 9 8436-5295
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5563984365295"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-2 hover:text-brand transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#E6EAF0] flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-caption text-ink-2">
            SEIVA &copy; {new Date().getFullYear()}. Todos os direitos reservados.
          </p>
          <p className="text-caption text-ink-2">
            LGPD-ready. Infraestrutura em nuvem com banco de dados isolado por municipio.
          </p>
        </div>
      </div>
    </footer>
  )
}
