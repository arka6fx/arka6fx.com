"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";

const projects = [
  {
    name: "Flowlist",
    description:
      "A real-time productivity and task management system designed for speed and clarity. Features a dual-column task board, inline editing, and a lightweight completion metrics dashboard. Built and validated as an MVP with active users, focusing on responsive interactions and efficient state handling.",
    link: "https://flow-list.vercel.app",
  },
  {
    name: "Auth Notes App",
    description:
      "A secure notes application with authentication and protected APIs, enabling user-specific data storage and access. Implements token-based authentication and backend validation to ensure safe CRUD operations, making it suitable for rapid backend prototyping and secure data handling.",
    link: "https://github.com/arka6fx/vanilla-auth-notes-app",
  },
];

export default function Home() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>(".scroll-reveal"));
    if (!items.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <Container>
      <section className="py-4 sm:py-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
          <div
            className="shrink-0 group hidden md:block scroll-reveal"
            style={{ transitionDelay: "60ms" }}
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
            className="flex flex-col items-center md:items-start text-center md:text-left scroll-reveal"
            style={{ transitionDelay: "140ms" }}
          >
            <div className="md:hidden mb-4 scroll-reveal" style={{ transitionDelay: "80ms" }}>
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
        className="py-4 sm:py-6 border-t border-divider scroll-reveal"
        style={{ transitionDelay: "240ms" }}
      >
        <h2 className="text-lg font-medium mb-4">About</h2>
        <p className="text-base sm:text-lg text-secondary leading-relaxed max-w-xl">
          I build full-stack applications end-to-end, with a focus on clean
          architecture and performance. I work close to backend systems and
          infrastructure, turning ideas into working products.
        </p>
      </section>

      <section
        className="py-4 sm:py-6 border-t border-divider scroll-reveal"
        style={{ transitionDelay: "320ms" }}
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
            className="w-full h-auto"
            unoptimized
          />
        </div>
      </section>

      <section
        className="py-4 sm:py-6 border-t border-divider scroll-reveal"
        style={{ transitionDelay: "400ms" }}
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
              className="scroll-reveal"
              style={{ transitionDelay: `${420 + index * 100}ms` }}
            >
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-4 rounded-lg transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/[0.02] border border-transparent hover:border-divider"
              >
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-medium text-foreground group-hover:text-accent transition-colors duration-200">
                    {project.name}
                  </h3>
                  <span className="text-accent opacity-0 group-hover:opacity-100 transition-all duration-200">
                    ↗
                  </span>
                </div>
                <p className="text-sm text-secondary mt-2 max-w-lg leading-relaxed">
                  {project.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section
        className="py-4 sm:py-6 border-t border-divider scroll-reveal"
        style={{ transitionDelay: "680ms" }}
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
