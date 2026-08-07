"use client"

import Image from "next/image"
import { useState } from "react"

// Hover the avatar, get a cat. That's the whole feature.
export function AvatarSwap() {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="relative h-16 w-16 shrink-0 animate-fade-in"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src="/my_photo.webp"
        alt="arka garai"
        width={64}
        height={64}
        className={`absolute inset-0 rounded-full border border-neutral-800 object-cover transition-opacity duration-200 ${
          hovered ? "opacity-0" : "opacity-100"
        }`}
        priority
      />
      <Image
        src="/meow.jpg"
        alt="a cat"
        width={64}
        height={64}
        className={`absolute inset-0 rounded-full border border-neutral-800 object-cover transition-opacity duration-200 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  )
}
