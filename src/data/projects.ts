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
  {
    name: "Auth Notes App",
    description:
      "Secure notes app with token-based auth and protected CRUD APIs.",
    link: "https://github.com/arka6fx/vanilla-auth-notes-app",
    github: "https://github.com/arka6fx/vanilla-auth-notes-app",
    stack: ["Node.js", "Express", "JWT", "REST API", "Vanilla JS"],
  },
] satisfies Project[];
