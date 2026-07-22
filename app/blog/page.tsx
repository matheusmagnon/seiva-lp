import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react"
import { LandingHeader } from "@/components/landing-header"
import { LandingFooter } from "@/components/landing-footer"
import { getPosts, CATEGORY_LABELS, type Category } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Blog — Gestão do SUAS, CRAS e PAIF",
  description:
    "Artigos e guias práticos sobre CRAS, PAIF, registros do SUAS, gestão socioassistencial e operação de equipe para prefeituras.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog SEIVA — Gestão do SUAS, CRAS e PAIF",
    description:
      "Artigos e guias práticos sobre CRAS, PAIF, registros do SUAS e gestão socioassistencial para prefeituras.",
    url: "/blog",
    type: "website",
  },
}

const PAGE_SIZE = 9

const CATEGORIES = [
  { key: "todos", label: "Todos" },
  { key: "cras-paif", label: CATEGORY_LABELS["cras-paif"] },
  { key: "registros", label: CATEGORY_LABELS["registros"] },
  { key: "gestao-suas", label: CATEGORY_LABELS["gestao-suas"] },
  { key: "operacao", label: CATEGORY_LABELS["operacao"] },
] as const

type CategoryFilter = "todos" | Category

type Props = {
  searchParams: Promise<{ categoria?: string; page?: string }>
}

function buildHref(categoria: CategoryFilter, page: number) {
  const params = new URLSearchParams()
  if (categoria !== "todos") params.set("categoria", categoria)
  if (page > 1) params.set("page", String(page))
  const qs = params.toString()
  return qs ? `/blog?${qs}` : "/blog"
}

function isCategory(value: string | undefined): value is Category {
  return (
    value === "cras-paif" ||
    value === "registros" ||
    value === "gestao-suas" ||
    value === "operacao"
  )
}

export default async function BlogPage({ searchParams }: Props) {
  const sp = await searchParams

  const activeCategoria: CategoryFilter = isCategory(sp.categoria) ? sp.categoria : "todos"

  const allPosts = getPosts()
  const counts: Record<CategoryFilter, number> = {
    todos: allPosts.length,
    "cras-paif": allPosts.filter((p) => p.category === "cras-paif").length,
    registros: allPosts.filter((p) => p.category === "registros").length,
    "gestao-suas": allPosts.filter((p) => p.category === "gestao-suas").length,
    operacao: allPosts.filter((p) => p.category === "operacao").length,
  }

  const filtered =
    activeCategoria === "todos"
      ? allPosts
      : allPosts.filter((p) => p.category === activeCategoria)

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const requestedPage = Number.parseInt(sp.page ?? "1", 10) || 1
  const currentPage = Math.min(Math.max(1, requestedPage), totalPages)
  const start = (currentPage - 1) * PAGE_SIZE
  const pagePosts = filtered.slice(start, start + PAGE_SIZE)
  const rangeStart = filtered.length === 0 ? 0 : start + 1
  const rangeEnd = start + pagePosts.length

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <LandingHeader />

      <main id="main" className="flex-grow">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-small text-ink-2 hover:text-brand transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Voltar ao site
          </Link>

          <h1 className="text-h1 font-bold text-ink mb-3">Blog</h1>
          <p className="text-ink-2 text-body mb-8 max-w-2xl">
            Guias práticos sobre CRAS, PAIF, registros do SUAS e gestão
            socioassistencial — para técnicos, coordenadores e gestores de
            prefeitura.
          </p>

          <nav aria-label="Filtrar por categoria" className="mb-8">
            <ul className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => {
                const isActive = cat.key === activeCategoria
                return (
                  <li key={cat.key}>
                    <Link
                      href={buildHref(cat.key, 1)}
                      aria-current={isActive ? "page" : undefined}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[10px] text-small font-medium border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                        isActive
                          ? "bg-brand text-white border-brand"
                          : "bg-white text-ink-2 border-[#E6EAF0] hover:border-brand/40 hover:text-ink"
                      }`}
                    >
                      {cat.label}
                      <span
                        className={`text-caption ${
                          isActive ? "text-white/80" : "text-ink-3"
                        }`}
                      >
                        {counts[cat.key]}
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {filtered.length === 0 ? (
            <p className="text-ink-2 text-small">Nenhum post nesta categoria ainda.</p>
          ) : (
            <>
              <p className="text-caption text-ink-2 mb-4" aria-live="polite">
                Mostrando {rangeStart}–{rangeEnd} de {filtered.length} artigos
              </p>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {pagePosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col rounded-[10px] border border-[#E6EAF0] bg-white overflow-hidden hover:border-brand/40 hover:shadow-[0_1px_2px_rgba(30,40,60,0.05)] transition-all"
                  >
                    <div className="p-5 flex flex-col flex-grow">
                      <span className="inline-flex w-fit items-center px-2.5 py-1 rounded-[10px] bg-brand-soft text-brand text-caption font-semibold mb-3">
                        {CATEGORY_LABELS[post.category]}
                      </span>
                      <h2 className="font-semibold text-body leading-snug mb-2 text-ink group-hover:text-brand transition-colors line-clamp-3">
                        {post.title}
                      </h2>
                      <p className="text-small text-ink-2 line-clamp-3 flex-grow mb-4">
                        {post.description}
                      </p>
                      <div className="flex items-center gap-3 text-caption text-ink-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                          {new Date(post.date).toLocaleDateString("pt-BR", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                          {post.readingTime}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {totalPages > 1 && (
                <nav
                  aria-label="Paginação"
                  className="mt-10 flex items-center justify-between gap-4"
                >
                  {currentPage > 1 ? (
                    <Link
                      href={buildHref(activeCategoria, currentPage - 1)}
                      rel="prev"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-[10px] text-small font-medium border border-[#E6EAF0] hover:border-brand/40 hover:text-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                      Anterior
                    </Link>
                  ) : (
                    <span
                      aria-hidden="true"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-[10px] text-small font-medium border border-[#E6EAF0] text-ink-3"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Anterior
                    </span>
                  )}

                  <ul className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => {
                      const isCurrent = n === currentPage
                      return (
                        <li key={n}>
                          <Link
                            href={buildHref(activeCategoria, n)}
                            aria-current={isCurrent ? "page" : undefined}
                            aria-label={`Página ${n}`}
                            className={`inline-flex items-center justify-center w-9 h-9 rounded-[10px] text-small font-medium border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                              isCurrent
                                ? "bg-brand text-white border-brand"
                                : "bg-white text-ink-2 border-[#E6EAF0] hover:border-brand/40 hover:text-ink"
                            }`}
                          >
                            {n}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>

                  {currentPage < totalPages ? (
                    <Link
                      href={buildHref(activeCategoria, currentPage + 1)}
                      rel="next"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-[10px] text-small font-medium border border-[#E6EAF0] hover:border-brand/40 hover:text-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      Próximo
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  ) : (
                    <span
                      aria-hidden="true"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-[10px] text-small font-medium border border-[#E6EAF0] text-ink-3"
                    >
                      Próximo
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </nav>
              )}
            </>
          )}
        </div>
      </main>

      <LandingFooter />
    </div>
  )
}
