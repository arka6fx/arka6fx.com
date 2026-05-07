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
      <section className="py-4 sm:py-6 content-reveal">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
          <div
            className="shrink-0 group hidden md:block content-item"
            style={{ animationDelay: "60ms" }}
          >
            <ProfileImage
              src="/my_photo.webp"
              alt="arka garai"
              className="group-hover:scale-[1.02]"
            />
          </div>

          <div
            className="flex flex-col items-center md:items-start text-center md:text-left content-item"
            style={{ animationDelay: "140ms" }}
          >
            <div
              className="md:hidden mb-4 content-item"
              style={{ animationDelay: "80ms" }}
            >
              <ProfileImage
                src="/my_photo.webp"
                alt="arka garai"
              />
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-signature italic tracking-tight text-accent leading-[0.95]">
              arka garai
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-secondary mt-2">
              building cool apps that actually make people happy :)
            </p>
          </div>
        </div>
      </section>

      <section
        className="py-4 sm:py-6 border-t border-divider content-item"
        style={{ animationDelay: "240ms" }}
      >
        <h2 className="text-lg font-medium mb-4">About</h2>
        <p className="text-base sm:text-lg text-secondary leading-relaxed max-w-xl">
          I build full-stack apps end-to-end with AI features. I focus on clean
          architecture, performance, and scalable backend systems.
        </p>
      </section>

      <section
        className="py-4 sm:py-6 border-t border-divider content-item"
        style={{ animationDelay: "320ms" }}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
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

        <div className="rounded-lg border border-divider bg-surface-strong/50 p-2 sm:p-4 overflow-hidden">
          <Image
            src="https://ghchart.rshah.org/ff6b35/arka6fx"
            alt="GitHub contribution graph for arka6fx"
            width={1024}
            height={160}
            className="w-full h-auto [filter:brightness(0.85)_contrast(1.35)_saturate(1.3)]"
            unoptimized
          />
        </div>
      </section>

      <section
        className="py-4 sm:py-6 border-t border-divider content-item"
        style={{ animationDelay: "400ms" }}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-2">
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
        className="py-4 sm:py-6 border-t border-divider content-item"
        style={{ animationDelay: "540ms" }}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-2">
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
        className="py-4 sm:py-6 border-t border-divider content-item"
        style={{ animationDelay: "720ms" }}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-2">
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
