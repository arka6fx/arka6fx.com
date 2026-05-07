import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { CalendarDate } from "@/components/CalendarDate";

const blogs = [
  {
    title: "day i switched to omarchy + lazyvim",
    href: "https://smooth-barracuda-637.notion.site/Day-I-Switched-to-Omarchy-LazyVim-352561d525128099bf21e1fdfc18cd91",
    date: "2026-03-06",
  },
];

export default function BlogPage() {
  return (
    <Container>
      <section className="py-4 sm:py-6">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-6">Blogs</h1>
        <div className="space-y-4">
          {blogs.map((blog) => (
            <Card
              key={blog.title}
              title={blog.title}
              href={blog.href}
              target="_blank"
            >
              <CalendarDate date={blog.date} />
            </Card>
          ))}
        </div>
      </section>
    </Container>
  );
}