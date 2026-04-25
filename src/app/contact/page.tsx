"use client";

import { useState } from "react";
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
    label: "alternate email",
    value: "arkagarai292@gmail.com",
    href: "mailto:arkagarai292@gmail.com",
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

  const handleCopy = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(email);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(email);
      setTimeout(() => setCopied(null), 2000);
    }
  };

  return (
    <Container>
      <section className="py-4 sm:py-6">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-4">Contact</h1>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full mb-6">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm text-secondary">open to opportunities</span>
        </div>

        <div className="space-y-4 max-w-lg">
          {contacts.map((contact) => (
            <div key={contact.label} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <span className="text-[#94A3B8] w-28 shrink-0">{contact.label}:</span>
              <div className="flex items-center gap-2 flex-wrap">
                <Link
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E6EDF3] hover:!text-[#00BFFF] transition-colors duration-150"
                >
                  {contact.value} ↗
                </Link>
                {contact.copyable && (
                  <button
                    type="button"
                    onClick={() => handleCopy(contact.href.replace("mailto:", ""))}
                    className="font-mono text-xs px-2 py-1 bg-divider hover:bg-accent/20 rounded transition-colors min-h-[36px]"
                    aria-label={`Copy ${contact.value}`}
                  >
                    {copied === contact.href ? "copied!" : "copy"}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-divider">
          <p className="text-[#94A3B8]">
            Prefer direct email? Reach out at{" "}
            <Link
              href="mailto:contact.arkagarai@gmail.com"
              className="text-[#E6EDF3] hover:!text-[#00BFFF] transition-colors duration-150"
            >
              contact.arkagarai@gmail.com ↗
            </Link>
          </p>
        </div>
      </section>
    </Container>
  );
}