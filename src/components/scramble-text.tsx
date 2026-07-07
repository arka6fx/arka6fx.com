"use client"
import { useState, useEffect, useCallback, useRef } from "react"

const CHARS = "!<>-_\\/[]{}—=+*^?#"

export function ScrambleText({
  text,
  className,
}: {
  text: string
  className?: string
}) {
  const [displayText, setDisplayText] = useState(text)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const doScramble = useCallback(() => {
    let iteration = 0
    const maxIterations = text.length

    if (intervalRef.current) clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) return char
            if (char === " ") return " "
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          })
          .join("")
      )
      iteration++

      if (iteration > maxIterations) {
        if (intervalRef.current) clearInterval(intervalRef.current)
        setDisplayText(text)
      }
    }, 50)
  }, [text])

  useEffect(() => {
    const timer = setTimeout(doScramble, 300)
    return () => {
      clearTimeout(timer)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [doScramble])

  return (
    <span
      className={className}
      onMouseEnter={doScramble}
      role="text"
    >
      {displayText}
    </span>
  )
}
