"use client"

import { useRef, useState } from "react"
import { Play, Pause } from "lucide-react"

export function AudioPlayButton() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
    } else {
      audio.play()
    }
  }

  return (
    <div className="flex flex-col items-center gap-1">
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause audio" : "Play audio"}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-800 text-accent transition-colors duration-200 hover:border-accent"
      >
        {playing ? (
          <Pause className="h-4 w-4" fill="currentColor" />
        ) : (
          <Play className="h-4 w-4 translate-x-0.5" fill="currentColor" />
        )}
      </button>
      <audio
        ref={audioRef}
        src="/audio/reel-audio.mp3"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />
    </div>
  )
}
