"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/Container";

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
    value: "x.com/arka6fx",
    href: "https://x.com/arka6fx",
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
];

export default function ContactPage() {
  const [copied, setCopied] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);
  const clearCopiedTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const clearToastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (clearCopiedTimer.current) {
        clearTimeout(clearCopiedTimer.current);
      }
      if (clearToastTimer.current) {
        clearTimeout(clearToastTimer.current);
      }
    };
  }, []);

  const playCopySound = () => {
    if (typeof window === "undefined") {
      return;
    }

    const AudioContextClass =
      window.AudioContext ||
      (window as Window & { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;

    if (!AudioContextClass) {
      return;
    }

    try {
      const audioContext = new AudioContextClass();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(880, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(
        1174.66,
        audioContext.currentTime + 0.12
      );

      gainNode.gain.setValueAtTime(0.0001, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(
        0.12,
        audioContext.currentTime + 0.02
      );
      gainNode.gain.exponentialRampToValueAtTime(
        0.0001,
        audioContext.currentTime + 0.15
      );

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      if (audioContext.state === "suspended") {
        void audioContext.resume();
      }

      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.16);
      oscillator.onended = () => {
        void audioContext.close();
      };
    } catch {
      return;
    }
  };

  const markCopied = (value: string) => {
    setCopied(value);
    setShowToast(true);
    playCopySound();
    if (clearCopiedTimer.current) {
      clearTimeout(clearCopiedTimer.current);
    }
    if (clearToastTimer.current) {
      clearTimeout(clearToastTimer.current);
    }
    clearCopiedTimer.current = setTimeout(() => setCopied(null), 1800);
    clearToastTimer.current = setTimeout(() => setShowToast(false), 1600);
  };

  const handleCopy = async (value: string) => {
    const cleanValue = value.replace(/^mailto:/i, "").trim();
    try {
      await navigator.clipboard.writeText(cleanValue);
      markCopied(value);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = cleanValue;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      markCopied(value);
    }
  };

  return (
    <Container>
      <section className="content-reveal py-4 sm:py-6">
        <h1
          className="content-item mb-4 text-2xl font-semibold sm:text-3xl"
          style={{ animationDelay: "40ms" }}
        >
          Contact
        </h1>

        <div
          className="bg-accent/10 border-accent/20 content-item mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1.5"
          style={{ animationDelay: "120ms" }}
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
          <span className="text-secondary text-sm">open to opportunities</span>
        </div>

        <div
          className="content-item max-w-lg space-y-4"
          style={{ animationDelay: "200ms" }}
        >
          {contacts.map((contact, index) => (
            <div
              key={contact.label}
              className="stagger-row flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4"
              style={{ animationDelay: `${280 + index * 70}ms` }}
            >
              <span className="text-secondary w-28 shrink-0">
                {contact.label}:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <Link
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors duration-150"
                >
                  {contact.value} ↗
                </Link>
                {contact.copyable && (
                  <button
                    type="button"
                    onClick={() => handleCopy(contact.href)}
                    className="bg-divider hover:bg-accent/20 relative min-h-[36px] overflow-hidden rounded px-2 py-1 font-mono text-xs transition-all duration-200 active:scale-95"
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
                    {copied === contact.href && (
                      <span className="bg-accent/20 pointer-events-none absolute inset-0 animate-ping rounded" />
                    )}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div
          className="border-divider content-item mt-8 border-t pt-6"
          style={{ animationDelay: "760ms" }}
        >
          <p className="text-secondary">
            Prefer direct email? Reach out at{" "}
            <Link
              href="mailto:contact.arkagarai@gmail.com"
              className="text-foreground hover:text-accent transition-colors duration-150"
            >
              contact.arkagarai@gmail.com ↗
            </Link>
          </p>
        </div>
      </section>

      <div
        className={`border-accent/25 bg-surface-strong/90 text-foreground fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full border px-4 py-2 text-sm shadow-[0_10px_30px_var(--shadow-color)] backdrop-blur-sm transition-all duration-250 ${
          showToast
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
        aria-live="polite"
      >
        Copied to clipboard
      </div>
    </Container>
  );
}
