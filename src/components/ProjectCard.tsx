import Link from "next/link";

interface ProjectCardProps {
  name: string;
  description: string;
  link: string;
  github: string;
  stack: readonly string[];
  animationDelay?: number;
}

export function ProjectCard({
  name,
  description,
  link,
  github,
  stack,
  animationDelay = 0,
}: ProjectCardProps) {
  return (
    <li
      className="stagger-row"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <article className="group rounded-none border border-accent/45 bg-gradient-to-br from-accent/10 via-surface-strong/85 to-surface/90 p-5 sm:p-6 shadow-[0_8px_30px_var(--shadow-color)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#76c893]/50 hover:shadow-[0_0_40px_rgba(118,200,147,0.15)]">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-200">
            {name}
          </h3>
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent opacity-0 group-hover:opacity-100 transition-all duration-200"
            aria-label={`Open ${name}`}
          >
            ↗
          </Link>
        </div>
        <p className="text-sm sm:text-base text-secondary mt-3 max-w-3xl leading-relaxed">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {stack.map((tag) => (
            <span
              key={tag}
              className="rounded-sm border border-accent/50 px-2.5 py-1 text-xs text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4">
          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-secondary hover:text-accent"
            aria-label={`View ${name} on GitHub`}
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
      </article>
    </li>
  );
}
