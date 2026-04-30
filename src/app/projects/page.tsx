import Link from "next/link";
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

export default function ProjectsPage() {
  return (
    <Container>
      <section className="py-4 sm:py-6">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-6">Projects</h1>

        <div className="space-y-4">
          {projects.map((project) => (
            <Link
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-4 rounded-lg transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/[0.02] border border-transparent hover:border-divider"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg sm:text-xl font-medium text-foreground group-hover:text-accent transition-colors duration-200">
                      {project.name}
                    </h2>
                    <span className="text-accent opacity-0 group-hover:opacity-100 transition-all duration-200">
                      ↗
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-secondary mt-2 max-w-xl leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Container>
  );
}
