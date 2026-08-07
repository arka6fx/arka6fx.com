import Link from "next/link"

const projects = [
  {
    name: "yomi",
    description:
      "an ai productivity assistant that lives on telegram. connects to gmail, calendar, drive, github, slack, notion, and more — text, voice, or a photo, and it acts across your apps for you.",
    href: "https://getyomi.in",
  },
]

export function ProjectsSection() {
  return (
    <section className="animate-fade-in-up mt-4 pt-10 pb-16 border-t border-neutral-800">
      <h2 className="text-2xl font-semibold mb-6 flex items-center text-white">
        <span className="text-accent accent-glow mr-2">*</span> projects
      </h2>
      <div className="space-y-6">
        {projects.map((project) => (
          <div key={project.name}>
            <Link
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-white hover:text-accent transition-colors duration-200"
            >
              {project.name} &rarr;
            </Link>
            <p className="text-pretty max-w-[60ch] text-gray-500">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
