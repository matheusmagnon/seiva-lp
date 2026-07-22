import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react"
import { LandingHeader } from "@/components/landing-header"
import { LandingFooter } from "@/components/landing-footer"
import { PostCover } from "@/components/post-cover"
import { getPosts, getPost } from "@/lib/blog"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://seiva.app"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  const allPosts = getPosts()
  const currentIndex = allPosts.findIndex((p) => p.slug === slug)
  const prevPost = allPosts[currentIndex + 1] ?? null
  const nextPost = allPosts[currentIndex - 1] ?? null

  const sameCategory = allPosts.filter(
    (p) => p.slug !== slug && p.category === post.category
  )
  const others = allPosts.filter((p) => p.slug !== slug && p.category !== post.category)
  const relatedPosts = [...sameCategory, ...others].slice(0, 3)

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "SEIVA",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "SEIVA",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.svg`,
      },
    },
    url: `${SITE_URL}/blog/${post.slug}`,
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    keywords: post.keywords.join(", "),
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <LandingHeader />

      <main id="main" className="flex-grow">
        <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
          <nav
            aria-label="Trilha de navegação"
            className="flex items-center gap-1.5 text-caption text-ink-2 mb-8"
          >
            <Link href="/" className="hover:text-brand transition-colors">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog" className="hover:text-brand transition-colors">
              Blog
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-ink line-clamp-1">{post.title}</span>
          </nav>

          <PostCover
            variant="hero"
            category={post.category}
            icon={post.icon}
            className="mb-8"
          />

          <div className="mb-8">
            {/*
              O badge de categoria que existia aqui foi removido: a capa
              acima já exibe o rótulo da categoria, então mantê-lo repetiria
              a mesma informação a poucos pixels de distância.
            */}
            <h1 className="text-h1 font-bold text-ink leading-tight mb-3">{post.title}</h1>
            <p className="text-ink-2 text-body mb-4">{post.description}</p>
            <div className="flex items-center gap-4 text-caption text-ink-2">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                {new Date(post.date).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                {post.readingTime} de leitura
              </span>
            </div>
          </div>

          <article
            className="prose prose-sm max-w-none prose-headings:font-sans prose-headings:font-semibold prose-headings:text-ink prose-p:text-ink prose-li:text-ink prose-strong:text-ink prose-a:text-brand prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l prose-blockquote:border-brand prose-blockquote:bg-brand-soft prose-blockquote:py-1 prose-blockquote:pl-4 prose-blockquote:rounded-r-[10px] prose-table:text-small"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          <div className="mt-12 p-6 rounded-[10px] bg-brand-soft border border-brand/10 text-center">
            <h2 className="font-bold text-h4 text-ink mb-2">
              Sua equipe ainda organiza o atendimento em planilha?
            </h2>
            <p className="text-small text-ink-2 mb-4">
              O SEIVA centraliza prontuário, atendimento e RMA automatizado
              para prefeituras. Agende uma demonstração gratuita e veja como
              funciona no seu município.
            </p>
            <Link
              href="/#contato"
              className="inline-block bg-brand text-white px-6 py-2.5 rounded-[10px] text-small font-semibold hover:bg-brand-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 shadow-[0_1px_2px_rgba(30,40,60,0.05)]"
            >
              Agende uma demonstração
            </Link>
            <p className="text-caption text-ink-2 mt-2">
              Resposta em até 24 horas úteis — sem compromisso
            </p>
          </div>

          {relatedPosts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-body font-semibold mb-4 text-ink">Leia também</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group flex flex-col p-4 rounded-[10px] border border-[#E6EAF0] bg-white hover:border-brand/40 hover:shadow-[0_1px_2px_rgba(30,40,60,0.05)] transition-all"
                  >
                    <h3 className="text-small font-medium leading-snug text-ink group-hover:text-brand transition-colors line-clamp-3 mb-2">
                      {related.title}
                    </h3>
                    <p className="text-caption text-ink-2 mt-auto flex items-center gap-1">
                      <Clock className="w-3 h-3" aria-hidden="true" />
                      {related.readingTime}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {(prevPost || nextPost) && (
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-between">
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="flex items-start gap-2 p-4 rounded-[10px] border border-[#E6EAF0] hover:border-brand/40 transition-colors flex-1"
                >
                  <ArrowLeft className="w-4 h-4 mt-0.5 shrink-0 text-ink-2" aria-hidden="true" />
                  <div>
                    <p className="text-caption text-ink-2 mb-0.5">Post anterior</p>
                    <p className="text-small font-medium text-ink line-clamp-2">{prevPost.title}</p>
                  </div>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
              {nextPost && (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="flex items-start gap-2 p-4 rounded-[10px] border border-[#E6EAF0] hover:border-brand/40 transition-colors flex-1 sm:flex-row-reverse text-right"
                >
                  <ArrowRight className="w-4 h-4 mt-0.5 shrink-0 text-ink-2" aria-hidden="true" />
                  <div>
                    <p className="text-caption text-ink-2 mb-0.5">Próximo post</p>
                    <p className="text-small font-medium text-ink line-clamp-2">{nextPost.title}</p>
                  </div>
                </Link>
              )}
            </div>
          )}

          <div className="mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-small text-ink-2 hover:text-brand transition-colors"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Ver todos os posts
            </Link>
          </div>
        </div>
      </main>

      <LandingFooter />
    </div>
  )
}
