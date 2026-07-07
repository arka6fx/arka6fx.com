import { z } from "zod"
import { postsData } from "./posts-data"

const metadataSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(),
  externalUrl: z.string().optional(),
})

export interface MDXFileData {
  metadata: z.infer<typeof metadataSchema>
  slug: string
  content: string
}

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/
  const match = fileContent.match(frontmatterRegex)

  if (!match) {
    throw new Error("File is missing frontmatter")
  }

  const frontmatterBlock = match[1]
  const content = match[2]

  const metadataLines = frontmatterBlock.split("\n")
  const metadata: Record<string, string> = {}

  for (const line of metadataLines) {
    const [key, ...valueParts] = line.split(":")
    if (key && valueParts.length > 0) {
      metadata[key.trim()] = valueParts.join(":").trim().replace(/^"|"$/g, "")
    }
  }

  return { metadata: metadataSchema.parse(metadata), content }
}

function parseMDXFile(raw: { slug: string; content: string }) {
  const { metadata, content } = parseFrontmatter(raw.content)
  return { metadata, slug: raw.slug, content }
}

function getMDXData() {
  return postsData.map(parseMDXFile)
}

export function getPosts() {
  return getMDXData()
}

export function getPublishedPosts() {
  return getPosts()
}

export function getPostBySlug(slug: string) {
  const posts = getPublishedPosts()
  return posts.find((post) => post.slug === slug) ?? null
}
