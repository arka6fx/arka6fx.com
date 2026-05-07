import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <Container>
      <section className="py-4 sm:py-6">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-6">Projects</h1>

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
