import { Container } from "@/components/Container";
import { BlogCard } from "@/components/BlogCard";
import { blogs } from "@/data/blogs";

export default function BlogPage() {
  return (
    <Container>
      <section className="py-4 sm:py-6">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-6">Blogs</h1>
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