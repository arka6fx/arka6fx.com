import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { ProfileImage } from "@/components/ProfileImage";
import { ProjectCard } from "@/components/ProjectCard";
import { BlogCard } from "@/components/BlogCard";
import { blogs } from "@/data/blogs";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <Container>
      <section className="content-reveal py-4 sm:py-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-8">
          <div
            className="group content-item hidden shrink-0 md:block"
            style={{ animationDelay: "60ms" }}
          >
            <ProfileImage
              src="/my_photo.webp"
              alt="arka garai"
              className="group-hover:scale-[1.02]"
            />
          </div>

          <div
            className="content-item flex flex-col items-center text-center md:items-start md:text-left"
            style={{ animationDelay: "140ms" }}
          >
            <div
              className="content-item mb-4 md:hidden"
              style={{ animationDelay: "80ms" }}
            >
              <ProfileImage src="/my_photo.webp" alt="arka garai" />
            </div>

            <h1 className="font-signature text-accent text-4xl leading-[0.95] tracking-tight italic sm:text-6xl md:text-7xl lg:text-8xl">
              arka garai
            </h1>
            <p className="text-secondary mt-2 text-base sm:text-lg md:text-xl">
              building cool apps that actually make people happy :)
            </p>
          </div>
        </div>
      </section>

      <section
        className="border-divider content-item border-t py-4 sm:py-6"
        style={{ animationDelay: "240ms" }}
      >
        <h2 className="mb-4 text-lg font-medium">About</h2>
        <p className="text-secondary max-w-xl text-base leading-relaxed sm:text-lg">
          I build full-stack apps end-to-end with AI features. I focus on clean
          architecture, performance, and scalable backend systems.
        </p>
      </section>

      <section
        className="border-divider content-item border-t py-4 sm:py-6"
        style={{ animationDelay: "320ms" }}
      >
        <div className="mb-4 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
          <h2 className="text-lg font-medium">GitHub Activity</h2>
          <a
            href="https://github.com/arka6fx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-accent transition-colors duration-150"
          >
            profile ↗
          </a>
        </div>

        <div className="border-divider bg-surface-strong/50 overflow-hidden rounded-lg border p-2 sm:p-4">
          <Image
            src="https://ghchart.rshah.org/ff6b35/arka6fx"
            alt="GitHub contribution graph for arka6fx"
            width={1024}
            height={160}
            className="h-auto w-full [filter:brightness(0.85)_contrast(1.35)_saturate(1.3)]"
            unoptimized
          />
        </div>
      </section>

      <section
        className="border-divider content-item border-t py-4 sm:py-6"
        style={{ animationDelay: "400ms" }}
      >
        <div className="mb-6 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
          <h2 className="text-lg font-medium">Projects</h2>
          <Link
            href="/projects"
            className="text-foreground hover:text-accent transition-colors duration-150"
          >
            view all ↗
          </Link>
        </div>
        <ul className="space-y-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              description={project.description}
              link={project.link}
              github={project.github}
              stack={project.stack}
              animationDelay={420 + index * 100}
            />
          ))}
        </ul>
      </section>

      <section
        className="border-divider content-item border-t py-4 sm:py-6"
        style={{ animationDelay: "540ms" }}
      >
        <div className="mb-6 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
          <h2 className="text-lg font-medium">Blogs</h2>
          <Link
            href="/blog"
            className="text-foreground hover:text-accent transition-colors duration-150"
          >
            view all ↗
          </Link>
        </div>
        <ul className="space-y-4">
          {blogs.map((blog, index) => (
            <BlogCard
              key={blog.title}
              title={blog.title}
              href={blog.href}
              date={blog.date}
              animationDelay={560 + index * 100}
            />
          ))}
        </ul>
      </section>

      <section
        className="border-divider content-item border-t py-4 sm:py-6"
        style={{ animationDelay: "720ms" }}
      >
        <div className="mb-6 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
          <h2 className="text-lg font-medium">Contact</h2>
          <Link
            href="/contact"
            className="text-foreground hover:text-accent transition-colors duration-150"
          >
            view all ↗
          </Link>
        </div>
        <div className="space-y-2">
          <p>
            <span className="text-secondary">email:</span>{" "}
            <a
              href="mailto:contact.arkagarai@gmail.com"
              className="text-foreground hover:text-accent transition-colors duration-150"
            >
              contact.arkagarai@gmail.com
            </a>
          </p>
          <p>
            <span className="text-secondary">github:</span>{" "}
            <a
              href="https://github.com/arka6fx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors duration-150"
            >
              @arka6fx ↗
            </a>
          </p>
        </div>
      </section>
    </Container>
  );
}
