import { HoverImageLink } from "./hover-image-link"

const links = [
  {
    title: "email",
    href: "mailto:contact.arkagarai@gmail.com",
    image: "/my_photo.webp",
  },
  { title: "github", href: "https://github.com/arka6fx", image: "/my_photo.webp" },
  {
    title: "linkedin",
    href: "https://linkedin.com/in/arka-garai",
    image: "/my_photo.webp",
  },
  { title: "x.com", href: "https://x.com/arka7sc", image: "/my_photo.webp" },
  { title: "youtube", href: "https://youtube.com/@arka6fx", image: "/my_photo.webp" },
]

export function LinksSection() {
  return (
    <section className="animate-fade-in-up mt-4 pt-10 pb-16 border-t border-neutral-800">
      <h2 className="text-2xl font-semibold mb-6 flex items-center text-white">
        <span className="text-accent accent-glow mr-2">*</span> elsewhere
      </h2>
      <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
        {links.map((link, index) => (
          <HoverImageLink
            key={index}
            href={link.href}
            image={link.image}
            className="text-gray-500 hover:text-accent transition-colors duration-200"
          >
            {link.title}
          </HoverImageLink>
        ))}
      </div>
    </section>
  )
}
