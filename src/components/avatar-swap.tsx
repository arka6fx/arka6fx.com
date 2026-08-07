"use client"

import Image from "next/image"
import { useState } from "react"

// Hover the avatar, get a cat. That's the whole feature.
// Gated to real hover-capable pointers — on touch, a tap fires mouseenter
// with no matching mouseleave, so the cat would get stuck showing forever.
export function AvatarSwap() {
  const [hovered, setHovered] = useState(false)

  const handleEnter = () => {
    if (!window.matchMedia("(hover: hover)").matches) return
    setHovered(true)
  }

  return (
    <div
      className="relative h-16 w-16 shrink-0 animate-fade-in sm:h-24 sm:w-24 md:h-28 md:w-28"
      onMouseEnter={handleEnter}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src="/my_photo.webp"
        alt="arka garai"
        width={112}
        height={112}
        className={`absolute inset-0 rounded-full border border-neutral-800 object-cover transition-opacity duration-200 ${
          hovered ? "opacity-0" : "opacity-100"
        }`}
        priority
      />
      <Image
        src="/meow.jpg"
        alt="a cat"
        width={112}
        height={112}
        className={`absolute inset-0 rounded-full border border-neutral-800 object-cover transition-opacity duration-200 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  )
}
