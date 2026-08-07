import Link from "next/link"

const projects = [
  {
    name: "yomi",
    description:
      "ai productivity assistant on telegram — gmail, calendar, drive, github, slack, notion, and more.",
    href: "https://getyomi.in",
    status: "live",
  },
]

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="animate-fade-in-up mt-4 pt-10 pb-16 border-t border-neutral-800 scroll-mt-8"
    >
      <h2 className="text-2xl font-semibold mb-6 flex items-center text-white">
        <span className="text-accent accent-glow mr-2">*</span> projects
      </h2>
      <div className="overflow-hidden rounded border border-neutral-800">
        <div className="border-b border-neutral-800 bg-black/20 px-4 py-2 text-xs tracking-wider text-gray-500 uppercase">
          recent projects
        </div>
        <div className="divide-y divide-neutral-800">
          {projects.map((project, index) => (
            <Link
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-4 py-3 transition-colors duration-200 hover:bg-white/5"
            >
              <span className="w-6 shrink-0 text-xs tabular-nums text-gray-600">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span className="shrink-0 text-sm font-semibold text-white transition-colors duration-200 group-hover:text-accent">
                {project.name}
              </span>
              <span className="hidden shrink-0 text-gray-600 sm:inline">|</span>
              <span className="hidden truncate text-sm text-gray-500 sm:inline">
                {project.description}
              </span>
              <span className="ml-auto shrink-0 rounded border border-neutral-700 px-2 py-0.5 text-[10px] tracking-wide text-gray-400 uppercase">
                {project.status}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
