import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { getAllPostMeta, getPostBySlug } from "@/lib/blog";
import { CalendarDate } from "@/components/CalendarDate";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPostMeta();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <Container>
      <article className="py-4 sm:py-6 content-reveal">
        <Link
          href="/blog"
          className="content-item inline-flex items-center text-sm text-secondary hover:text-accent transition-colors duration-150"
          style={{ animationDelay: "40ms" }}
        >
          ← Back to blog
        </Link>

        <header className="content-item mt-4" style={{ animationDelay: "90ms" }}>
          <CalendarDate date={post.date} />
          <h1 className="mt-2 text-2xl sm:text-4xl font-semibold tracking-tight max-w-4xl leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-sm sm:text-base text-secondary leading-relaxed max-w-3xl">
            {post.excerpt}
          </p>
        </header>

        <section
          className="content-item mt-8 text-sm sm:text-base leading-relaxed prose max-w-3xl"
          style={{ animationDelay: "150ms" }}
        >
          {post.content}
        </section>
      </article>
    </Container>
  );
}
