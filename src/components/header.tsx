import Image from "next/image"
import { ScrambleText } from "./scramble-text"

export function Header() {
  return (
    <header className="mb-16 space-y-4">
      <div className="mb-4 flex items-center gap-4">
        <Image
          src="/my_photo.webp"
          alt="arka garai"
          width={64}
          height={64}
          className="rounded-full border border-neutral-800 object-cover animate-fade-in"
          priority
        />
        <h1 className="text-5xl font-semibold tracking-tight text-white text-balance animate-fade-in">
          <ScrambleText
            text="arka garai"
            className="inline-block"
          />
        </h1>
      </div>
      <p className="text-gray-500 animate-fade-in">
        ai engineer and product builder
      </p>
      <p className="text-gray-500 animate-fade-in">
        building cool apps that actually make people happy :)
      </p>
      <p className="text-pretty max-w-[52ch] animate-fade-in-up">
        i&apos;m a developer who loves building full-stack web apps with AI
        features. clean architecture, performance, and scalable backend systems.
        next.js, typescript, node.js, and whatever else gets the job done.
      </p>
    </header>
  )
}
