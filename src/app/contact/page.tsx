import { HoverImageLink } from "@/components/hover-image-link"

const contacts = [
  {
    label: "email",
    value: "contact.arkagarai@gmail.com",
    href: "mailto:contact.arkagarai@gmail.com",
    image: "/my_photo.webp",
  },
  {
    label: "github",
    value: "github.com/arka6fx",
    href: "https://github.com/arka6fx",
    image: "/my_photo.webp",
  },
  {
    label: "linkedin",
    value: "linkedin.com/in/arka-garai",
    href: "https://linkedin.com/in/arka-garai",
    image: "/my_photo.webp",
  },
  {
    label: "twitter / x",
    value: "x.com/arka7sc",
    href: "https://x.com/arka7sc",
    image: "/my_photo.webp",
  },
  {
    label: "instagram",
    value: "instagram.com/arka6fx",
    href: "https://instagram.com/arka6fx",
    image: "/my_photo.webp",
  },
  {
    label: "youtube",
    value: "youtube.com/@arka6fx",
    href: "https://youtube.com/@arka6fx",
    image: "/my_photo.webp",
  },
]

export default function ContactPage() {
  return (
    <main className="animate-fade-in-up">
      <h1 className="mb-8 text-2xl font-semibold text-white">
        <span className="text-accent accent-glow mr-2">*</span>
        contact
      </h1>

      <div className="mb-6 inline-flex items-center gap-2 text-sm text-gray-500">
        <span className="h-2 w-2 rounded-full bg-accent" />
        open to opportunities
      </div>

      <div className="mb-8 space-y-3">
        {contacts.map((contact) => (
          <div key={contact.label} className="flex items-center gap-4">
            <span className="w-28 shrink-0 text-sm text-gray-500">
              {contact.label}:
            </span>
            <HoverImageLink
              href={contact.href}
              image={contact.image}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-200 transition-colors duration-200 hover:text-accent"
            >
              {contact.value} &rarr;
            </HoverImageLink>
          </div>
        ))}
      </div>
    </main>
  )
}
