"use client"

import { useState, useEffect } from "react"

const DISMISSED_KEY = "seivaCookieNoticeDismissed"

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(DISMISSED_KEY)) {
      setVisible(true)
    }
  }, [])

  const dismiss = () => {
    localStorage.setItem(DISMISSED_KEY, "1")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="region"
      aria-label="Aviso de cookies"
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E6EAF0] text-ink p-4 z-50 shadow-[0_-2px_8px_rgba(30,40,60,0.05)]"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-small text-ink-2">
          Este site usa cookies e ferramentas de analise para melhorar sua
          experiencia. Saiba mais em nossa{" "}
          <a href="/privacidade" className="underline text-brand hover:text-brand-dark">
            Politica de Privacidade
          </a>
          .
        </p>
        <button
          onClick={dismiss}
          className="shrink-0 min-h-[44px] px-5 rounded-[10px] bg-brand text-white text-small font-semibold hover:bg-brand-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          Entendi
        </button>
      </div>
    </div>
  )
}
