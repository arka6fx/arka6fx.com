import { AvatarSwap } from "./avatar-swap"
import { ScrambleText } from "./scramble-text"
import { AudioPlayButton } from "./audio-play-button"

export function Header() {
  return (
    <header className="mb-16 space-y-3">
      <div className="mb-2 flex items-center gap-3 sm:gap-4">
        <AvatarSwap />
        <h1 className="font-caveat text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white text-balance animate-fade-in">
          <ScrambleText
            text="arka garai"
            className="inline-block"
          />
        </h1>
        <AudioPlayButton />
      </div>
      <p className="text-accent animate-fade-in">
        ai engineer and product builder
      </p>
      <p className="text-gray-500 animate-fade-in">
        building cool apps that actually make people happy :)
      </p>
      <blockquote className="text-pretty max-w-[52ch] animate-fade-in-up border-l-2 border-neutral-800 pl-4 font-semibold text-white">
        i&apos;m a developer who loves building full-stack web apps with AI
        features. clean architecture, performance, and scalable backend systems.
        next.js, typescript, node.js, and whatever else gets the job done.
      </blockquote>
    </header>
  )
}
