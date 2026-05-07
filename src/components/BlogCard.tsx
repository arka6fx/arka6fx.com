import Link from "next/link";
import { CalendarDate } from "@/components/CalendarDate";

interface BlogCardProps {
  title: string;
  href: string;
  date: string;
  animationDelay?: number;
}

export function BlogCard({ title, href, date, animationDelay = 0 }: BlogCardProps) {
  return (
    <li
      className="stagger-row"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <article className="group rounded-none border border-accent/45 bg-gradient-to-br from-accent/10 via-surface-strong/85 to-surface/90 p-5 sm:p-6 shadow-[0_8px_30px_var(--shadow-color)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#76c893]/50 hover:shadow-[0_0_40px_rgba(118,200,147,0.15)]">
        <div className="flex items-center gap-2">
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-200"
          >
            {title}
          </Link>
          <span className="text-accent opacity-0 group-hover:opacity-100 transition-all duration-200">
            ↗
          </span>
        </div>
        <div className="mt-3">
          <CalendarDate date={date} />
        </div>
      </article>
    </li>
  );
}
