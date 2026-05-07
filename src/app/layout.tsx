import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono, Manrope, Style_Script } from "next/font/google";
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
  title: "arka garai",
  description:
    "Building scalable web apps and solving real-world problems with clean systems.",
  keywords: ["developer", "full-stack", "web development", "software engineer"],
  authors: [{ name: "arka garai" }],
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
    title: "arka garai",
    description:
      "Building scalable web apps and solving real-world problems with clean systems.",
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
        className={`${sans.variable} ${display.variable} ${mono.variable} ${signature.variable} min-h-screen flex flex-col antialiased bg-background text-foreground`}
      >
        <Navigation />
        <main className="flex-1 flex justify-center pt-2 md:pt-3">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
