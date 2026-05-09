import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { BlogCard } from "@/components/BlogCard";
import { blogs } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on full-stack development, AI, TypeScript, and building web apps.",
};

export default function BlogPage() {
  return (
    <Container>
      <section className="py-4 sm:py-6">
        <h1 className="mb-6 text-2xl font-semibold sm:text-3xl">Blogs</h1>
        <ul className="space-y-4">
          {blogs.map((blog, index) => (
            <BlogCard
              key={blog.title}
              title={blog.title}
              href={blog.href}
              date={blog.date}
              animationDelay={index * 100}
            />
          ))}
        </ul>
      </section>
    </Container>
  );
}
