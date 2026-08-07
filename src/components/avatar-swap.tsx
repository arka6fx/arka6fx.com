"use client"

import Image from "next/image"
import { useState } from "react"

// Hover the avatar, get a cat. That's the whole feature.
export function AvatarSwap() {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="relative h-24 w-24 shrink-0 animate-fade-in sm:h-28 sm:w-28"
      onMouseEnter={() => setHovered(true)}
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
