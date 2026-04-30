import { Container } from "@/components/Container";
import Link from "next/link";
import { getAllPostMeta } from "@/lib/blog";
import { CalendarDate } from "@/components/CalendarDate";

export default function BlogPage() {
  const posts = getAllPostMeta();

  return (
    <Container>
      <section className="py-4 sm:py-6">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-6">Blog</h1>

        <div className="space-y-4">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-lg border border-divider/70 bg-surface/60 p-4 sm:p-5 transition-colors hover:border-accent/40"
            >
              <CalendarDate date={post.date} />
              <h2 className="mt-2 text-lg sm:text-xl font-medium tracking-tight">
                <Link href={`/blog/${post.slug}`} className="hover:text-accent">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 text-sm sm:text-base text-secondary leading-relaxed">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </Container>
  );
}
