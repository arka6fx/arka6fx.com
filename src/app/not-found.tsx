import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-background text-foreground flex min-h-screen items-center justify-center px-5">
      <div className="text-center">
        <p className="text-accent mb-4 font-mono text-xs">404</p>
        <h1 className="mb-4 text-2xl font-semibold sm:text-3xl">
          Page not found
        </h1>
        <p className="text-secondary mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="text-accent hover:text-hover inline-flex items-center gap-2 transition-colors"
        >
          ← back to home
        </Link>
      </div>
    </div>
  );
}
