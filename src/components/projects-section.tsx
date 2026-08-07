import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { projectsData } from "@/lib/projects-data"
import { ProjectsList } from "./projects-list"

export function ProjectsSection() {
  return (
    <section className="animate-fade-in-up mt-4 pt-10 pb-16 border-t border-neutral-800">
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="text-2xl font-semibold flex items-center text-white">
          <span className="text-accent accent-glow mr-2">*</span> projects
        </h2>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-sm text-accent hover:underline group"
        >
          all projects{" "}
          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
      <ProjectsList projects={projectsData.slice(0, 4)} label="recent projects" />
    </section>
  )
}
