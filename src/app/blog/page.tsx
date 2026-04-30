import { Container } from "@/components/Container";
import { CalendarDate } from "@/components/CalendarDate";

export default function BlogPage() {
  return (
    <Container>
      <section className="py-4 sm:py-6">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Blogs</h1>

        <div className="space-y-4">
          <article className="rounded-lg border border-divider/70 bg-surface/60 p-4 sm:p-5">
            <CalendarDate date="2026-03-06" />
            <h2 className="mt-2 text-lg sm:text-xl font-medium tracking-tight">
              <a
                href="https://smooth-barracuda-637.notion.site/Day-I-Switched-to-Omarchy-LazyVim-352561d525128099bf21e1fdfc18cd91"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                Day I Switched to Omarchy + LazyVim
              </a>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-secondary leading-relaxed">
              My minimal coding workflow using Omarchy, LazyVim, and tmux.
            </p>
          </article>
        </div>
      </section>
    </Container>
  );
}
