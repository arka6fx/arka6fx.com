import { Posts } from "@/components/posts"
import { getPublishedPosts } from "@/lib/blog"
import { Metadata } from "next"

const posts = getPublishedPosts().sort(
  (a, b) =>
    new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
)

export default async function BlogPage() {
  return (
    <main className="animate-fade-in-up relative">
      <h1 className="text-4xl font-bold mb-8 text-white">
        <span className="text-accent accent-glow mr-2">*</span>
        blog
      </h1>
      <p className="hidden sm:block text-sm text-gray-400 mb-8">
        press{" "}
        <kbd className="px-1 py-0.5 text-xs border border-gray-700 rounded">/</kbd>{" "}
        to search &bull; use{" "}
        <kbd className="px-1 py-0.5 text-xs border border-gray-700 rounded">ctrl / ⌘ j</kbd>{" "}
        and{" "}
        <kbd className="px-1 py-0.5 text-xs border border-gray-700 rounded">ctrl / ⌘ k</kbd>{" "}
        or{" "}
        <kbd className="px-1 py-0.5 text-xs border border-gray-700 rounded">↑</kbd>{" "}
        and{" "}
        <kbd className="px-1 py-0.5 text-xs border border-gray-700 rounded">↓</kbd>{" "}
        to navigate
      </p>
      <Posts posts={posts} />
    </main>
  )
}

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on full-stack development, AI, TypeScript, and building web apps.",
}
