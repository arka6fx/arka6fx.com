"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { key: "h", label: "home", href: "/" },
  { key: "b", label: "blog", href: "/blog" },
  { key: "w", label: "work", href: "/work" },
  { key: "p", label: "projects", href: "/projects" },
  { key: "c", label: "contact", href: "/contact" },
  { key: "r", label: "resume", href: "/resume" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/arka6fx", icon: "M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" },
  { label: "LinkedIn", href: "https://linkedin.com/in/arka-garai", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
  { label: "X", href: "https://x.com/arka6fx", icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.258 5.633 5.906-5.633zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
  { label: "YouTube", href: "https://youtube.com/@arka6fx", icon: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
];

const keyToPath: Record<string, string> = {
  h: "/",
  b: "/blog",
  w: "/work",
  p: "/projects",
  c: "/contact",
  r: "/resume",
};

function isInputTarget(e: KeyboardEvent): boolean {
  const target = e.target as HTMLElement;
  return (
    target.tagName === "INPUT" ||
    target.tagName === "TEXTAREA" ||
    target.isContentEditable
  );
}

function getKeyFromHref(href: string): string | null {
  return navItems.find((item) => item.href === href)?.key ?? null;
}

function getHrefFromKey(key: string): string | null {
  const href = keyToPath[key.toLowerCase()];
  return href ?? null;
}

export function Navigation() {
  const router = useRouter();
  const pathname = usePathname();
  const [flashKey, setFlashKey] = useState<string | null>(null);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (isInputTarget(e)) return;
      if (e.repeat) return;
      if (window.innerWidth < 768) return;

      const path = getHrefFromKey(e.key.toLowerCase());
      if (path) {
        e.preventDefault();
        const key = getKeyFromHref(path);
        if (key) {
          setFlashKey(key);
          setTimeout(() => setFlashKey(null), 250);
        }
        router.push(path);
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [router]);

  const handleClick = (href: string) => {
    const key = getKeyFromHref(href);
    if (key) {
      setFlashKey(key);
      setTimeout(() => setFlashKey(null), 250);
    }
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-center h-14 px-4 sm:px-5 bg-[rgba(11,15,25,0.85)] backdrop-blur-md border-b border-divider">
      <Link
        href="/"
        onClick={() => handleClick("/")}
        className="absolute left-4 sm:left-5 font-mono text-xs sm:text-sm text-[#94A3B8] hover:!text-[#00BFFF] transition-colors duration-[180ms] hidden sm:block"
      >
        ~/arka
      </Link>

      <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-6 lg:gap-7">
        {navItems.map(({ key, label, href }) => {
          const isFlashing = flashKey === key;
          return (
            <Link
              key={key}
              href={href}
              onClick={() => handleClick(href)}
              className={`
                px-2 py-2 text-sm transition-colors duration-[180ms]
                ${isFlashing ? "!text-[#00BFFF]" : "text-[#E6EDF3] hover:!text-[#00BFFF]"}
              `}
            >
              <span className="font-mono text-xs">[{key}]</span> {label}
            </Link>
          );
        })}
      </nav>

      <div className="absolute right-4 sm:right-5 hidden md:flex items-center gap-3 lg:gap-4">
        {socialLinks.map(({ label, href, icon }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-[#94A3B8] hover:!text-[#00BFFF] transition-colors duration-[180ms] p-2"
          >
            <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d={icon} />
            </svg>
          </Link>
        ))}
      </div>

      <nav className="absolute left-1/2 -translate-x-1/2 md:hidden flex items-center gap-4 sm:gap-5 py-2 overflow-x-auto max-w-full">
        {navItems.map(({ key, label, href }) => {
          const isFlashing = flashKey === key;
          return (
            <Link
              key={key}
              href={href}
              onClick={() => handleClick(href)}
              className={`
                px-2 py-3 text-xs sm:text-sm transition-colors duration-[180ms] whitespace-nowrap min-h-[44px] flex items-center
                ${isFlashing ? "!text-[#00BFFF]" : "text-[#E6EDF3] hover:!text-[#00BFFF]"}
              `}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}