import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getPublishedPosts } from "@/lib/blog";
import { Container } from "@/components/Container";
import { MDX } from "./mdx";

export async function generateStaticParams() {
  const posts = getPublishedPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return {};

  return {
    title: post.metadata.title,
    description: post.metadata.description,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <Container>
      <article className="py-4 sm:py-6">
        <header className="mb-8">
          <h1 className="text-2xl font-semibold sm:text-3xl">
            {post.metadata.title}
          </h1>
          <p className="text-secondary mt-2 text-sm">{post.metadata.date}</p>
        </header>
        <div className="prose prose-invert max-w-none text-pretty">
          <MDX source={post.content} />
        </div>
      </article>
    </Container>
  );
}
