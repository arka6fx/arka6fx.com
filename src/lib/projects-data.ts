export interface Project {
  name: string
  description: string
  href: string
  status: string
}

export const projectsData: Project[] = [
  {
    name: "yomi",
    description:
      "a personal ai agent that lives on telegram — connects to gmail, calendar, drive, github, slack, notion, and more, and acts across your apps for you.",
    href: "https://getyomi.in",
    status: "live",
  },
]
