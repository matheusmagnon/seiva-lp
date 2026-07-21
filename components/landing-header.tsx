"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"

type NavItem = { href: string; label: string }

const NAV_LINKS: NavItem[] = [
  { href: "#funcionalidades", label: "Funcionalidades" },
  { href: "#para-quem", label: "Para quem" },
  { href: "#diferenciais", label: "Diferenciais" },
]

export function LandingHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const close = () => setMobileMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E6EAF0]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0"
          >
            <Image src="/symbol.svg" alt="SEIVA" width={32} height={32} className="w-8 h-8" />
            <span className="font-bold text-lg text-[#33427C]">SEIVA</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Principal">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center min-h-[40px] px-3.5 rounded-[10px] text-sm font-medium text-ink-2 hover:text-ink hover:bg-[#EBEEF4] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contato"
              className="ml-2 inline-flex items-center min-h-[44px] px-5 rounded-[10px] bg-brand text-white text-sm font-semibold hover:bg-brand-dark transition-colors shadow-[0_1px_2px_rgba(30,40,60,0.05)]"
            >
              Solicitar demonstração
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="inline-flex items-center justify-center w-10 h-10 rounded-[10px] md:hidden text-ink-2 hover:text-ink hover:bg-[#EBEEF4] transition-colors"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav
            className="md:hidden pb-4 border-t border-[#E6EAF0] pt-3 space-y-1"
            aria-label="Móvel"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className="flex items-center min-h-[44px] px-4 rounded-[10px] text-sm font-medium text-ink-2 hover:text-ink hover:bg-[#EBEEF4] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contato"
              onClick={close}
              className="flex items-center justify-center min-h-[48px] bg-brand text-white px-4 rounded-[10px] text-sm font-semibold hover:bg-brand-dark transition-colors w-full mt-2"
            >
              Solicitar demonstração
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
