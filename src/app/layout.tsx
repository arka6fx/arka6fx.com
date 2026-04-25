import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "arka garai — Full-Stack Developer",
  description: "Building scalable web apps and solving real-world problems with clean systems.",
  keywords: ["developer", "full-stack", "web development", "software engineer"],
  authors: [{ name: "arka garai" }],
  icons: {
    icon: "/my_photo.webp",
  },
  openGraph: {
    title: "arka garai — Full-Stack Developer",
    description: "Building scalable web apps and solving real-world problems with clean systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col antialiased bg-background text-foreground">
        <Navigation />
        <main className="flex-1 flex justify-center pt-2 md:pt-3">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}