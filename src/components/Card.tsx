import Link from "next/link";
import { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  href?: string;
  target?: "_blank";
  children?: ReactNode;
  className?: string;
}

export function Card({ title, description, href, target, children, className }: CardProps) {
  return (
    <article className={`group rounded-none border border-accent/45 bg-gradient-to-br from-accent/10 via-surface-strong/85 to-surface/90 p-5 sm:p-6 shadow-[0_8px_30px_var(--shadow-color)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#76c893]/50 hover:shadow-[0_0_40px_rgba(118,200,147,0.15)] ${className || ""}`}>
      <div className="flex items-center gap-2">
        {href ? (
          <Link
            href={href}
            target={target}
            rel={target === "_blank" ? "noopener noreferrer" : undefined}
            className="text-xl sm:text-2xl font-semibold text-foreground hover:text-accent transition-colors duration-200"
          >
            {title}
          </Link>
        ) : (
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
            {title}
          </h2>
        )}
        {href && (
          <span className="text-accent opacity-0 group-hover:opacity-100 transition-all duration-200">
            ↗
          </span>
        )}
      </div>

      <p className="text-sm sm:text-base text-secondary mt-3 max-w-3xl leading-relaxed">
        {description}
      </p>

      {children && <div className="mt-4">{children}</div>}
    </article>
  );
}