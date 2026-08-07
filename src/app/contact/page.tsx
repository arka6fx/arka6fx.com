import Link from "next/link"
import { ScrambleText } from "@/components/scramble-text"

const contacts = [
  {
    label: "email",
    value: "contact.arkagarai@gmail.com",
    href: "mailto:contact.arkagarai@gmail.com",
  },
  {
    label: "github",
    value: "github.com/arka6fx",
    href: "https://github.com/arka6fx",
  },
  {
    label: "linkedin",
    value: "linkedin.com/in/arka-garai",
    href: "https://linkedin.com/in/arka-garai",
  },
  {
    label: "twitter / x",
    value: "x.com/arka7sc",
    href: "https://x.com/arka7sc",
  },
  {
    label: "instagram",
    value: "instagram.com/arka6fx",
    href: "https://instagram.com/arka6fx",
  },
  {
    label: "youtube",
    value: "youtube.com/@arka6fx",
    href: "https://youtube.com/@arka6fx",
  },
]

export default function ContactPage() {
  return (
    <main className="animate-fade-in-up">
      <h1 className="mb-8 text-2xl font-semibold text-white">
        <span className="text-accent accent-glow mr-2">*</span>
        <ScrambleText text="contact" className="inline-block" />
      </h1>

      <div className="mb-6 inline-flex items-center gap-2 text-sm text-gray-500">
        <span className="h-2 w-2 rounded-full bg-accent" />
        open to opportunities
      </div>

      <div className="mb-8 space-y-3">
        {contacts.map((contact) => (
          <div
            key={contact.label}
            className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4"
          >
            <span className="text-sm text-gray-500 sm:w-28 sm:shrink-0">
              {contact.label}:
            </span>
            <Link
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-200 transition-colors duration-200 hover:text-accent break-all"
            >
              {contact.value} &rarr;
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}
