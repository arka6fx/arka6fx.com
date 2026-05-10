import Link from "next/link";
import { CalendarDate } from "@/components/CalendarDate";

interface BlogCardProps {
  title: string;
  href: string;
  date: string;
  animationDelay?: number;
}

export function BlogCard({
  title,
  href,
  date,
  animationDelay = 0,
}: BlogCardProps) {
  return (
    <li
      className="stagger-row"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <article className="group border-accent/45 from-accent/10 via-surface-strong/85 to-surface/90 w-full rounded-none border bg-gradient-to-br p-5 shadow-[0_8px_30px_var(--shadow-color)] transition-all duration-200 active:-translate-y-0.5 hover:-translate-y-0.5 hover:border-[#76c893]/50 hover:shadow-[0_0_40px_rgba(118,200,147,0.15)] active:border-[#76c893]/50 active:shadow-[0_0_40px_rgba(118,200,147,0.15)] sm:p-6">
        <div className="flex items-center gap-2">
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-2"
          >
            <span className="text-foreground group-hover:text-accent text-lg font-semibold transition-colors duration-200 sm:text-xl">
              {title}
            </span>
            <span className="text-accent opacity-100 transition-all duration-200 sm:opacity-0 sm:group-hover:opacity-100 sm:group-hover/link:opacity-100">
              ↗
            </span>
          </Link>
        </div>
        <div className="mt-3">
          <CalendarDate date={date} />
        </div>
      </article>
    </li>
  );
}
