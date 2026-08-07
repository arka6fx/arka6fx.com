import { ProjectsList } from "@/components/projects-list"
import { ScrambleText } from "@/components/scramble-text"
import { projectsData } from "@/lib/projects-data"
import { Metadata } from "next"

export default function ProjectsPage() {
  return (
    <main className="animate-fade-in-up">
      <h1 className="mb-8 text-2xl font-semibold text-white">
        <span className="text-accent accent-glow mr-2">*</span>
        <ScrambleText text="projects" className="inline-block" />
      </h1>
      <ProjectsList projects={projectsData} label="all projects" variant="full" />
    </main>
  )
}

export const metadata: Metadata = {
  title: "Projects",
  description: "Things arka garai has built.",
}
