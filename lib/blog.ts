import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import remarkGfm from "remark-gfm"
import remarkHtml from "remark-html"
import readingTime from "reading-time"

export type Category = "cras-paif" | "registros" | "gestao-suas" | "operacao"

export const CATEGORY_LABELS: Record<Category, string> = {
  "cras-paif": "CRAS e PAIF",
  registros: "Registros e prontuário",
  "gestao-suas": "Gestão do SUAS",
  operacao: "Operação e produtividade",
}

export type Post = {
  slug: string
  title: string
  description: string
  date: string
  keywords: string[]
  readingTime: string
  category: Category
  icon?: string
  contentHtml: string
}

export type PostMeta = Omit<Post, "contentHtml">

const POSTS_DIR = path.join(process.cwd(), "content/blog")

function readFrontmatter(filename: string) {
  const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf8")
  return matter(raw)
}

function formatReadingTime(content: string): string {
  const stats = readingTime(content)
  const minutes = Math.max(1, Math.ceil(stats.minutes))
  return `${minutes} min`
}

export function getPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return []

  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((filename) => {
      const { data, content } = readFrontmatter(filename)
      return {
        slug: (data.slug as string) ?? filename.replace(/\.mdx?$/, ""),
        title: data.title as string,
        description: data.description as string,
        date: data.date as string,
        keywords: (data.keywords as string[]) ?? [],
        readingTime: formatReadingTime(content),
        category: (data.category as Category) ?? "gestao-suas",
        icon: data.icon as string | undefined,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

function findPostFile(slug: string): string | null {
  if (!fs.existsSync(POSTS_DIR)) return null
  const candidates = [`${slug}.md`, `${slug}.mdx`]
  for (const filename of candidates) {
    if (fs.existsSync(path.join(POSTS_DIR, filename))) return filename
  }
  return null
}

export async function getPost(slug: string): Promise<Post | null> {
  const filename = findPostFile(slug)
  if (!filename) return null

  const { data, content } = readFrontmatter(filename)

  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(content)

  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    date: data.date as string,
    keywords: (data.keywords as string[]) ?? [],
    readingTime: formatReadingTime(content),
    category: (data.category as Category) ?? "gestao-suas",
    icon: data.icon as string | undefined,
    contentHtml: processed.toString(),
  }
}
