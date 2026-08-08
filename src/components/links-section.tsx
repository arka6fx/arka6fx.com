import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const links = [
  { title: "email", href: "mailto:contact.arkagarai@gmail.com" },
  { title: "github", href: "https://github.com/arka6fx" },
  { title: "linkedin", href: "https://linkedin.com/in/arka-garai" },
  { title: "x.com", href: "https://x.com/arka7sc" },
  { title: "youtube", href: "https://youtube.com/@arka6fx" },
]

export function LinksSection() {
  return (
    <section className="animate-fade-in-up mt-4 pt-10 pb-16 border-t border-neutral-800">
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="text-2xl font-semibold flex items-center text-white">
          <span className="text-accent accent-glow mr-2">*</span> contact
        </h2>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1 text-sm text-accent hover:underline group"
        >
          all contacts{" "}
          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-gray-500 hover:text-accent transition-colors duration-200"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </section>
  )
}
