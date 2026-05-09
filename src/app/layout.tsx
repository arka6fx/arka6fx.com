import type { Metadata } from "next";
import {
  Fraunces,
  JetBrains_Mono,
  Manrope,
  Style_Script,
} from "next/font/google";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import "./globals.css";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans-ui",
});

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display-ui",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-ui",
});

const signature = Style_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-signature-ui",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arka6fx.com"),
  title: {
    default: "Arka Garai - Full-Stack Developer",
    template: "%s | Arka Garai",
  },
  description:
    "I build full-stack apps end-to-end with AI features. Clean architecture, performance, and scalable backend systems. Next.js, TypeScript, Node.js.",
  keywords: [
    "full-stack developer",
    "Next.js",
    "TypeScript",
    "React",
    "Node.js",
    "AI features",
    "web development",
    "software engineer",
  ],
  authors: [{ name: "Arka Garai" }],
  icons: {
    icon: [
      { url: "/cat logo.jpg", sizes: "48x48" },
      { url: "/cat logo.jpg", sizes: "64x64" },
      { url: "/cat logo.jpg", sizes: "96x96" },
      { url: "/cat logo.jpg", sizes: "128x128" },
      { url: "/cat logo.jpg", sizes: "256x256" },
      { url: "/cat logo.jpg", sizes: "512x512" },
    ],
    apple: "/cat logo.jpg",
  },
  openGraph: {
    title: "Arka Garai - Full-Stack Developer",
    description:
      "I build full-stack apps end-to-end with AI features. Clean architecture, performance, and scalable backend systems.",
    url: "https://arka6fx.com",
    siteName: "Arka Garai",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} ${display.variable} ${mono.variable} ${signature.variable} bg-background text-foreground flex min-h-screen flex-col antialiased`}
      >
        <Navigation />
        <main className="flex flex-1 justify-center pt-2 md:pt-3">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
