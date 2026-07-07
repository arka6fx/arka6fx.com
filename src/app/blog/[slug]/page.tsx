import type { Metadata } from "next"
import { notFound, redirect } from "next/navigation"
import Link from "next/link"
import { getPostBySlug, getPublishedPosts } from "@/lib/blog"
import { MDX } from "./mdx"
import { CalendarDate } from "@/components/CalendarDate"

export async function generateStaticParams() {
  const posts = getPublishedPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) return {}

  return {
    title: post.metadata.title,
    description: post.metadata.description,
  }
}

function getReadingTime(content: string) {
  const wordsPerMinute = 200
  const words = content.split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min read`
}

function getAdjacentPosts(slug: string) {
  const posts = getPublishedPosts().sort(
    (a, b) =>
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
  )
  const index = posts.findIndex((p) => p.slug === slug)
  return {
    prev: index < posts.length - 1 ? posts[index + 1] : null,
    next: index > 0 ? posts[index - 1] : null,
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  if (post.metadata.externalUrl) {
    redirect(post.metadata.externalUrl)
  }

  const readingTime = getReadingTime(post.content)
  const { prev, next } = getAdjacentPosts(slug)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.metadata.title,
    datePublished: post.metadata.date,
    dateModified: post.metadata.date,
    author: {
      "@type": "Person",
      name: "Arka Garai",
    },
  }

  return (
    <article className="animate-fade-in-up">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mb-8">
        <Link
          href="/blog"
          className="text-sm text-gray-500 transition-colors duration-200 hover:text-accent"
        >
          &larr; back
        </Link>
      </div>
      <h1 className="mb-4 text-2xl font-semibold text-white">
        <span className="text-accent accent-glow mr-2">*</span>
        {post.metadata.title}
      </h1>
      <div className="mb-10 text-sm text-gray-500 flex items-center gap-2">
        <CalendarDate date={post.metadata.date} />
        <span className="text-gray-700">/</span>
        <span>{readingTime}</span>
      </div>
      <div className="prose prose-invert max-w-none text-pretty">
        <MDX source={post.content} />
      </div>

      {(prev || next) && (
        <nav className="mt-16 pt-8 border-t border-neutral-800">
          <div className="flex justify-between gap-8">
            <div>
              {prev && (
                <Link
                  href={`/blog/${prev.slug}`}
                  className="group flex flex-col gap-1"
                >
                  <span className="text-xs text-gray-500">&larr; previous</span>
                  <span className="text-sm text-gray-200 group-hover:text-accent transition-colors duration-200">
                    {prev.metadata.title.toLowerCase()}
                  </span>
                </Link>
              )}
            </div>
            <div className="text-right">
              {next && (
                <Link
                  href={`/blog/${next.slug}`}
                  className="group flex flex-col gap-1"
                >
                  <span className="text-xs text-gray-500">next &rarr;</span>
                  <span className="text-sm text-gray-200 group-hover:text-accent transition-colors duration-200">
                    {next.metadata.title.toLowerCase()}
                  </span>
                </Link>
              )}
            </div>
          </div>
        </nav>
      )}
    </article>
  )
}
