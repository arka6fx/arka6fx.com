import Link from "next/link";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";

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

export default function ProjectsPage() {
  return (
    <Container>
      <section className="py-4 sm:py-6">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-6">Projects</h1>

        <div className="space-y-4">
          {projects.map((project) => (
            <Card
              key={project.name}
              title={project.name}
              description={project.description}
              href={project.link}
              target="_blank"
            >
              <div className="flex flex-wrap gap-2">
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
            </Card>
          ))}
        </div>
      </section>
    </Container>
  );
}
