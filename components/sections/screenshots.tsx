"use client"

import { useState, useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Eyebrow } from "./eyebrow"

interface ScreenshotItem {
  src: string
  alt: string
  label: string
}

interface ScreenshotsProps {
  eyebrow: string
  title: string
  intro: string
  screenshots: ScreenshotItem[]
}

const PLACEHOLDER_GRADIENTS = [
  "from-brand-soft via-brand-soft/60 to-surface-bg",
  "from-brand-soft/80 via-brand-soft/40 to-white",
  "from-[#E9EDF8] via-[#F0F3FA] to-surface-bg",
  "from-brand-soft/70 via-white to-surface-bg",
]

const PLACEHOLDER_LABELS = [
  "Dashboard SEIVA",
  "Prontuario Familiar",
  "Registro de Atendimento",
  "Agenda da Equipe",
]

export function Screenshots({
  eyebrow,
  title,
  intro,
  screenshots,
}: ScreenshotsProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "center" })
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section
      id="screenshots"
      className="max-w-6xl mx-auto px-4 py-20 md:py-28"
    >
      <div className="text-center mb-14">
        <div className="flex justify-center">
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        <h2 className="text-h2 font-bold mb-4 text-ink">{title}</h2>
        <p className="text-lead text-ink-2 max-w-2xl mx-auto">{intro}</p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
          <div className="flex">
            {screenshots.map((screenshot, index) => (
              <div
                key={screenshot.alt}
                className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_85%] px-2"
              >
                <div className="rounded-2xl border border-[#E6EAF0] bg-white shadow-[0_1px_2px_rgba(30,40,60,0.05)] overflow-hidden">
                  <div
                    className={`w-full aspect-[16/10] bg-gradient-to-br ${
                      PLACEHOLDER_GRADIENTS[index % PLACEHOLDER_GRADIENTS.length]
                    } flex items-center justify-center`}
                  >
                    <div className="text-center px-8">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-brand/10 flex items-center justify-center">
                        <span className="text-3xl font-extrabold text-brand">
                          {index + 1}
                        </span>
                      </div>
                      <p className="text-h4 font-semibold text-brand-ink mb-1">
                        {PLACEHOLDER_LABELS[index % PLACEHOLDER_LABELS.length]}
                      </p>
                      <p className="text-body text-ink-2">{screenshot.label}</p>
                    </div>
                  </div>
                  <div className="px-6 py-4 border-t border-[#E6EAF0]">
                    <p className="text-small font-medium text-ink">
                      {screenshot.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canScrollPrev}
          aria-label="Tela anterior"
          className="absolute top-1/2 -translate-y-1/2 -left-3 w-10 h-10 rounded-full bg-white border border-[#E6EAF0] shadow-[0_1px_2px_rgba(30,40,60,0.05)] flex items-center justify-center text-ink-2 hover:text-ink hover:bg-[#EBEEF4] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-5 h-5" aria-hidden="true" />
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canScrollNext}
          aria-label="Proxima tela"
          className="absolute top-1/2 -translate-y-1/2 -right-3 w-10 h-10 rounded-full bg-white border border-[#E6EAF0] shadow-[0_1px_2px_rgba(30,40,60,0.05)] flex items-center justify-center text-ink-2 hover:text-ink hover:bg-[#EBEEF4] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}
