"use client"

import { useState } from "react"
import { createPortal } from "react-dom"
import Link from "next/link"

type HoverImageLinkProps = {
  href: string
  image: string
  className?: string
  children: React.ReactNode
  target?: string
  rel?: string
}

// Cursor-following image preview, per link. Swap `image` per entry to change
// what shows on hover — nothing else needs touching.
export function HoverImageLink({
  href,
  image,
  className,
  children,
  target,
  rel,
}: HoverImageLinkProps) {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null)

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={className}
      onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
      onMouseLeave={() => setPos(null)}
    >
      {children}
      {pos &&
        createPortal(
          <div
            className="pointer-events-none fixed z-50 h-[100px] w-[140px] overflow-hidden rounded-lg border border-neutral-800 shadow-xl animate-fade-in"
            style={{ left: pos.x + 20, top: pos.y - 60 }}
          >
            <img src={image} alt="" className="h-full w-full object-cover" />
          </div>,
          document.body
        )}
    </Link>
  )
}
