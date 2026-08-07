"use client"

import Image from "next/image"
import { useState } from "react"

// Hover the avatar, get a cat. That's the whole feature.
// Real hover-capable pointers use mouseenter/leave. Touch has no "leave" —
// a tap fires mouseenter with no matching mouseleave, so touch instead gets
// an explicit tap-to-toggle via onClick (tap again to revert).
export function AvatarSwap() {
  const [hovered, setHovered] = useState(false)

  const canHover = () =>
    typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches

  return (
    <div
      className="relative h-16 w-16 shrink-0 cursor-pointer animate-fade-in sm:h-24 sm:w-24 md:h-28 md:w-28"
      onMouseEnter={() => {
        if (canHover()) setHovered(true)
      }}
      onMouseLeave={() => setHovered(false)}
      onClick={() => {
        if (!canHover()) setHovered((prev) => !prev)
      }}
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
