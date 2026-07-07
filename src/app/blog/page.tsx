import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { BlogCard } from "@/components/BlogCard";
import { getPublishedPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on full-stack development, AI, TypeScript, and building web apps.",
};

export default function BlogPage() {
  const posts = getPublishedPosts();

  return (
    <Container>
      <section className="py-4 sm:py-6">
        <h1 className="mb-6 text-2xl font-semibold sm:text-3xl">Blogs</h1>
        <ul className="space-y-4">
          {posts.map((post, index) => (
            <BlogCard
              key={post.slug}
              title={post.metadata.title}
              href={`/blog/${post.slug}`}
              date={post.metadata.date}
              animationDelay={index * 100}
            />
          ))}
        </ul>
      </section>
    </Container>
  );
}
