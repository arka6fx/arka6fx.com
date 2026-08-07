import { Header } from "@/components/header"
import { ProjectsSection } from "@/components/projects-section"
import { GithubActivity } from "@/components/github-activity"
import { BlogSection } from "@/components/blog-section"
import { LinksSection } from "@/components/links-section"

export default function HomePage() {
  return (
    <>
      <Header />
      <ProjectsSection />
      <GithubActivity />
      <BlogSection />
      <LinksSection />
    </>
  )
}
