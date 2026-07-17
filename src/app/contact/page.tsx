"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

const contacts = [
  {
    label: "email",
    value: "contact.arkagarai@gmail.com",
    href: "mailto:contact.arkagarai@gmail.com",
    copyable: true,
  },
  {
    label: "github",
    value: "github.com/arka6fx",
    href: "https://github.com/arka6fx",
  },
  {
    label: "linkedin",
    value: "linkedin.com/in/arka-garai",
    href: "https://linkedin.com/in/arka-garai",
  },
  {
    label: "twitter / x",
    value: "x.com/arka7sc",
    href: "https://x.com/arka7sc",
  },
  {
    label: "instagram",
    value: "instagram.com/arka6fx",
    href: "https://instagram.com/arka6fx",
  },
  {
    label: "youtube",
    value: "youtube.com/@arka6fx",
    href: "https://youtube.com/@arka6fx",
  },
]

export default function ContactPage() {
  const [copied, setCopied] = useState<string | null>(null)
  const [showToast, setShowToast] = useState(false)
  const clearCopiedTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const clearToastTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (clearCopiedTimer.current) clearTimeout(clearCopiedTimer.current)
      if (clearToastTimer.current) clearTimeout(clearToastTimer.current)
    }
  }, [])

  const playCopySound = () => {
    if (typeof window === "undefined") return
    const AudioContextClass =
      window.AudioContext ||
      (window as Window & { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext
    if (!AudioContextClass) return
    try {
      const audioContext = new AudioContextClass()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()
      oscillator.type = "sine"
      oscillator.frequency.setValueAtTime(880, audioContext.currentTime)
      oscillator.frequency.exponentialRampToValueAtTime(
        1174.66,
        audioContext.currentTime + 0.12
      )
      gainNode.gain.setValueAtTime(0.0001, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(
        0.12,
        audioContext.currentTime + 0.02
      )
      gainNode.gain.exponentialRampToValueAtTime(
        0.0001,
        audioContext.currentTime + 0.15
      )
      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)
      if (audioContext.state === "suspended") void audioContext.resume()
      oscillator.start()
      oscillator.stop(audioContext.currentTime + 0.16)
      oscillator.onended = () => void audioContext.close()
    } catch {
      return
    }
  }

  const markCopied = (value: string) => {
    setCopied(value)
    setShowToast(true)
    playCopySound()
    if (clearCopiedTimer.current) clearTimeout(clearCopiedTimer.current)
    if (clearToastTimer.current) clearTimeout(clearToastTimer.current)
    clearCopiedTimer.current = setTimeout(() => setCopied(null), 1800)
    clearToastTimer.current = setTimeout(() => setShowToast(false), 1600)
  }

  const handleCopy = async (value: string) => {
    const cleanValue = value.replace(/^mailto:/i, "").trim()
    try {
      await navigator.clipboard.writeText(cleanValue)
      markCopied(value)
    } catch {
      const textarea = document.createElement("textarea")
      textarea.value = cleanValue
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand("copy")
      document.body.removeChild(textarea)
      markCopied(value)
    }
  }

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
            <div className="flex items-center gap-2">
              <Link
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-200 transition-colors duration-200 hover:text-accent"
              >
                {contact.value} &rarr;
              </Link>
              {contact.copyable && (
                <button
                  type="button"
                  onClick={() => handleCopy(contact.href)}
                  className="relative min-h-[28px] overflow-hidden rounded border border-neutral-800 px-2 py-0.5 text-xs text-gray-500 transition-colors duration-200 hover:border-gray-700 hover:text-gray-300"
                  aria-label={`Copy ${contact.value}`}
                >
                  <span
                    className={`inline-block transition-transform duration-200 ${
                      copied === contact.href
                        ? "-translate-y-4 opacity-0"
                        : "translate-y-0 opacity-100"
                    }`}
                  >
                    copy
                  </span>
                  <span
                    className={`absolute inset-0 grid place-items-center transition-all duration-200 ${
                      copied === contact.href
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                  >
                    copied!
                  </span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div
        className={`fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded border border-neutral-800 bg-[#111] px-4 py-2 text-sm text-gray-200 shadow-lg transition-all duration-200 ${
          showToast
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
        aria-live="polite"
      >
        Copied to clipboard
      </div>
    </main>
  )
}
