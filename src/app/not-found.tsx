import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-5">
      <div className="text-center">
        <p className="font-mono text-xs text-accent mb-4">404</p>
        <h1 className="text-2xl sm:text-3xl font-semibold mb-4">Page not found</h1>
        <p className="text-secondary mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-accent hover:text-hover transition-colors"
        >
          ← back to home
        </Link>
      </div>
    </div>
  );
}