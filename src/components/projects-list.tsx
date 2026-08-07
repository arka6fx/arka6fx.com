import Link from "next/link"
import type { Project } from "@/lib/projects-data"

type ProjectsListProps = {
  projects: Project[]
  label: string
  variant?: "compact" | "full"
}

export function ProjectsList({
  projects,
  label,
  variant = "compact",
}: ProjectsListProps) {
  return (
    <div className="overflow-hidden rounded border border-neutral-800">
      <div className="border-b border-neutral-800 bg-black/20 px-4 py-2 text-xs tracking-wider text-gray-500 uppercase">
        {label}
      </div>
      <div className="divide-y divide-neutral-800">
        {projects.map((project, index) => (
          <Link
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group block px-4 py-3 transition-colors duration-200 hover:bg-white/5 ${
              variant === "full" ? "space-y-1.5" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="w-6 shrink-0 text-xs tabular-nums text-gray-600">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span className="shrink-0 text-sm font-semibold text-white transition-colors duration-200 group-hover:text-accent">
                {project.name}
              </span>
              {variant === "compact" && (
                <>
                  <span className="hidden shrink-0 text-gray-600 sm:inline">|</span>
                  <span className="hidden truncate text-sm text-gray-500 sm:inline">
                    {project.description}
                  </span>
                </>
              )}
              <span className="ml-auto shrink-0 rounded border border-neutral-700 px-2 py-0.5 text-[10px] tracking-wide text-gray-400 uppercase">
                {project.status}
              </span>
            </div>
            {variant === "full" && (
              <p className="text-pretty pl-9 text-sm text-gray-500">
                {project.description}
              </p>
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}
