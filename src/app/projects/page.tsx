import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Full-stack and AI projects built with Next.js, TypeScript, Node.js, and more.",
};

export default function ProjectsPage() {
  return (
    <Container>
      <section className="py-4 sm:py-6">
        <h1 className="mb-6 text-2xl font-semibold sm:text-3xl">Projects</h1>

        <ul className="space-y-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              description={project.description}
              link={project.link}
              github={project.github}
              stack={project.stack}
              animationDelay={index * 100}
            />
          ))}
        </ul>
      </section>
    </Container>
  );
}
