import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";

const projects = [
  {
    name: "Flowlist",
    description:
      "A real-time productivity and task management system designed for speed and clarity. Features a dual-column task board, inline editing, and a lightweight completion metrics dashboard. Built and validated as an MVP with active users, focusing on responsive interactions and efficient state handling.",
    link: "https://flow-list.vercel.app",
    github: "https://github.com/arka6fx/FlowList",
    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Tailwind",
      "Vercel",
    ],
  },
  {
    name: "Auth Notes App",
    description:
      "A secure notes application with authentication and protected APIs, enabling user-specific data storage and access. Implements token-based authentication and backend validation to ensure safe CRUD operations, making it suitable for rapid backend prototyping and secure data handling.",
    link: "https://github.com/arka6fx/vanilla-auth-notes-app",
    github: "https://github.com/arka6fx/vanilla-auth-notes-app",
    stack: ["Node.js", "Express", "JWT", "REST API", "Vanilla JS"],
  },
];

export default function Home() {
  return (
    <Container>
      <section className="py-4 sm:py-6 content-reveal">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
          <div
            className="shrink-0 group hidden md:block content-item"
            style={{ animationDelay: "60ms" }}
          >
            <Image
              src="/my_photo.webp"
              alt="arka garai"
              width={120}
              height={120}
              className="w-[96px] h-[96px] lg:w-[120px] lg:h-[120px] rounded-xl object-cover border border-divider shadow-[0_8px_20px_rgba(0,0,0,0.4)] transition-transform duration-200 group-hover:scale-[1.02]"
              priority
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
              <Image
                src="/my_photo.webp"
                alt="arka garai"
                width={100}
                height={100}
                className="w-[80px] h-[80px] rounded-xl object-cover border border-divider shadow-[0_8px_20px_rgba(0,0,0,0.4)]"
                priority
              />
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-signature italic tracking-tight text-accent leading-[0.95]">
              arka garai
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-secondary mt-1">
              Full-Stack Developer
            </p>
            <p className="text-sm sm:text-base md:text-lg text-secondary mt-3 max-w-xl leading-relaxed">
              building scalable web apps and solving real-world problems with
              clean systems
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
          I build full-stack applications end-to-end, with a focus on clean
          architecture and performance. I work close to backend systems and
          infrastructure, turning ideas into working products.
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
            src="https://ghchart.rshah.org/4e86ff/arka6fx"
            alt="GitHub contribution graph for arka6fx"
            width={1024}
            height={160}
            className="w-full h-auto [filter:brightness(0.78)_contrast(1.2)_saturate(1.18)]"
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
            <li
              key={project.name}
              className="stagger-row"
              style={{ animationDelay: `${420 + index * 100}ms` }}
            >
              <article className="group rounded-2xl border border-accent/45 bg-gradient-to-br from-accent/10 via-surface-strong/85 to-surface/90 p-5 sm:p-6 shadow-[0_8px_30px_var(--shadow-color)] transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/75">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-200">
                    {project.name}
                  </h3>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent opacity-0 group-hover:opacity-100 transition-all duration-200"
                    aria-label={`Open ${project.name}`}
                  >
                    ↗
                  </Link>
                </div>
                <p className="text-sm sm:text-base text-secondary mt-3 max-w-3xl leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-background/55 border border-divider px-2.5 py-1 text-xs text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-secondary hover:text-accent"
                    aria-label={`View ${project.name} on GitHub`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10Z" />
                    </svg>
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <section
        className="py-4 sm:py-6 border-t border-divider content-item"
        style={{ animationDelay: "680ms" }}
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
