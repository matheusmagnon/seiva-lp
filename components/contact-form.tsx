"use client"

import type React from "react"
import { CheckCircle, MessageCircle } from "lucide-react"
import { useEffect, useId, useState } from "react"

type Fields = { name: string; email: string; phone: string; message: string }
type FieldErrors = Partial<Record<keyof Fields, string>>

const WHATSAPP_NUMBER = "5563984365295"
const PENDING_KEY = "seiva-pending-contact-request"

function validate(data: Fields): FieldErrors {
  const errors: FieldErrors = {}
  if (!data.name.trim()) errors.name = "Informe seu nome completo."
  if (!data.email.trim()) {
    errors.email = "Informe seu e-mail."
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "E-mail invalido. Ex: nome@organizacao.org.br"
  }
  if (!data.message.trim()) errors.message = "Escreva uma mensagem."
  return errors
}

async function postLead(payload: Fields): Promise<void> {
  const maxAttempts = 2
  let lastError: unknown
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 12000)
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      })
      if (!response.ok) {
        if (response.status >= 500 && attempt < maxAttempts) {
          lastError = new Error(`server-${response.status}`)
          continue
        }
        throw new Error("Falha no envio do formulario")
      }
      return
    } catch (err) {
      lastError = err
      if (attempt < maxAttempts) {
        await new Promise((r) => setTimeout(r, 1000))
        continue
      }
      throw err
    } finally {
      clearTimeout(timeout)
    }
  }
  throw lastError
}

export function ContactForm() {
  const [formData, setFormData] = useState<Fields>({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [success, setSuccess] = useState(false)

  const formId = useId()
  const nameId = `${formId}-name`
  const emailId = `${formId}-email`
  const phoneId = `${formId}-phone`
  const messageId = `${formId}-message`
  const nameErrId = `${formId}-name-err`
  const emailErrId = `${formId}-email-err`
  const messageErrId = `${formId}-message-err`
  const hintId = `${formId}-hint`

  useEffect(() => {
    try {
      const raw = localStorage.getItem(PENDING_KEY)
      if (!raw) return
      const saved = JSON.parse(raw) as Partial<Fields> & { ts?: number }
      if (saved.ts && Date.now() - saved.ts < 24 * 60 * 60 * 1000) {
        setFormData({
          name: saved.name ?? "",
          email: saved.email ?? "",
          phone: saved.phone ?? "",
          message: saved.message ?? "",
        })
      } else {
        localStorage.removeItem(PENDING_KEY)
      }
    } catch {
      /* localStorage indisponivel — ignora */
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (loading) return

    const errors = validate(formData)
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      return
    }

    setFieldErrors({})
    setLoading(true)
    setSubmitError("")
    setSuccess(false)

    try {
      await postLead(formData)
      try {
        localStorage.removeItem(PENDING_KEY)
      } catch {
        /* ignora */
      }
      setFormData({ name: "", email: "", phone: "", message: "" })
      setSuccess(true)
    } catch {
      try {
        localStorage.setItem(
          PENDING_KEY,
          JSON.stringify({ ...formData, ts: Date.now() })
        )
      } catch {
        /* ignora */
      }
      setSubmitError("network")
    } finally {
      setLoading(false)
    }
  }

  const whatsappFallbackHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Ola! Tentei enviar uma mensagem pelo site do SEIVA, mas o envio falhou.\n\n` +
      `Nome: ${formData.name}\n` +
      `E-mail: ${formData.email}\n` +
      (formData.phone ? `Telefone: ${formData.phone}\n` : "") +
      `Mensagem: ${formData.message}`
  )}`

  const inputClasses = (hasError: boolean) =>
    `w-full p-3 rounded-[10px] border text-body bg-white focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 ${
      hasError ? "border-crit" : "border-[#E6EAF0]"
    }`

  return (
    <div className="bg-white p-7 rounded-3xl border border-[#E6EAF0] shadow-[0_1px_2px_rgba(30,40,60,0.05)]">
      <h3 className="text-h4 font-semibold mb-4 text-ink">
        Solicitar demonstracao
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div className="space-y-1.5">
          <label htmlFor={nameId} className="block text-small font-medium text-ink">
            Nome completo
            <span className="text-crit ml-1" aria-hidden="true">*</span>
          </label>
          <input
            id={nameId}
            type="text"
            data-clarity-unmask="true"
            placeholder="Ex. Maria da Silva"
            autoComplete="name"
            className={inputClasses(!!fieldErrors.name)}
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value })
              if (fieldErrors.name) setFieldErrors({ ...fieldErrors, name: undefined })
              setSuccess(false)
            }}
            aria-required="true"
            aria-invalid={!!fieldErrors.name}
            aria-describedby={fieldErrors.name ? nameErrId : undefined}
          />
          {fieldErrors.name && (
            <p id={nameErrId} className="text-caption text-crit">
              {fieldErrors.name}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <label htmlFor={emailId} className="block text-small font-medium text-ink">
            E-mail
            <span className="text-crit ml-1" aria-hidden="true">*</span>
          </label>
          <input
            id={emailId}
            type="email"
            data-clarity-unmask="true"
            placeholder="nome@organizacao.org.br"
            autoComplete="email"
            inputMode="email"
            className={inputClasses(!!fieldErrors.email)}
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value })
              if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: undefined })
            }}
            aria-required="true"
            aria-invalid={!!fieldErrors.email}
            aria-describedby={fieldErrors.email ? emailErrId : undefined}
          />
          {fieldErrors.email && (
            <p id={emailErrId} className="text-caption text-crit">
              {fieldErrors.email}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <label htmlFor={phoneId} className="block text-small font-medium text-ink">
            Telefone
          </label>
          <input
            id={phoneId}
            type="tel"
            data-clarity-unmask="true"
            placeholder="(63) 98436-5295"
            autoComplete="tel"
            inputMode="tel"
            className={inputClasses(false)}
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor={messageId} className="block text-small font-medium text-ink">
            Mensagem
            <span className="text-crit ml-1" aria-hidden="true">*</span>
          </label>
          <textarea
            id={messageId}
            data-clarity-unmask="true"
            placeholder="Conte brevemente sobre sua prefeitura ou clinica e o que voce precisa."
            rows={4}
            className={inputClasses(!!fieldErrors.message)}
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value })
              if (fieldErrors.message) setFieldErrors({ ...fieldErrors, message: undefined })
            }}
            aria-required="true"
            aria-invalid={!!fieldErrors.message}
            aria-describedby={fieldErrors.message ? messageErrId : undefined}
          />
          {fieldErrors.message && (
            <p id={messageErrId} className="text-caption text-crit">
              {fieldErrors.message}
            </p>
          )}
        </div>

        <div role="alert" aria-live="polite" className="empty:hidden">
          {submitError && (
            <div className="text-small p-3 bg-crit-soft rounded-[10px] space-y-2.5">
              <p className="text-crit font-medium">
                Nao conseguimos enviar sua solicitacao agora.
              </p>
              <p className="text-ink-2">
                Pode ser uma instabilidade momentanea de conexao. Tente novamente
                em instantes — ou fale com a gente direto no WhatsApp, que
                respondemos na hora.
              </p>
              <a
                href={whatsappFallbackHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[10px] text-small font-semibold bg-[#25D366] text-white hover:bg-[#1ebe5b] transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                Falar no WhatsApp
              </a>
            </div>
          )}
          {success && (
            <div className="flex items-center gap-2 p-3 rounded-[10px] bg-good-soft text-good text-small">
              <CheckCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
              Solicitacao enviada! Entraremos em contato em breve.
            </div>
          )}
        </div>

        <div className="space-y-1">
          <button
            type="submit"
            className="w-full bg-brand text-white px-7 py-3.5 rounded-[10px] text-body font-semibold hover:bg-brand-dark transition-colors disabled:opacity-50 shadow-[0_1px_2px_rgba(30,40,60,0.05)] focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
            disabled={loading}
            aria-describedby={hintId}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Enviando...</span>
              </span>
            ) : (
              "Enviar"
            )}
          </button>
          <p id={hintId} className="text-caption text-ink-3">
            Respondemos em ate 24 horas uteis
          </p>
        </div>
      </form>
    </div>
  )
}
