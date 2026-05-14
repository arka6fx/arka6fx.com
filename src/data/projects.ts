import type { Project } from "@/types";

export const projects = [
  {
    name: "Flowlist",
    description:
      "A task management app with a dual-column board and inline editing. Built as an MVP with active users.",
    link: "https://flowlist.arka6fx.com/",
    github: "https://github.com/arka6fx/FlowList",
    stack: [
      "Next.js",
      "TypeScript",
      "Neon DB",
      "Drizzle",
      "Better Auth",
      "Tailwind",
    ],
  },
] satisfies Project[];
