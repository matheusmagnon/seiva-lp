import { renderOgImage, ogSize, ogContentType } from "@/lib/og-image"
import { getPost, getPosts, CATEGORY_LABELS } from "@/lib/blog"

export const runtime = "nodejs"
export const alt = "SEIVA — Blog"
export const size = ogSize
export const contentType = ogContentType

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }))
}

export default async function Image({ params }: Props) {
  const { slug } = await params
  const post = await getPost(slug)

  return renderOgImage({
    eyebrow: post ? CATEGORY_LABELS[post.category] : "Blog SEIVA",
    title: post ? post.title : "Blog SEIVA",
    description: post ? post.description : "Gestão do SUAS para prefeituras.",
  })
}
