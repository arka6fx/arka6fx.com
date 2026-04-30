export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-divider py-4">
      <p className="text-sm text-secondary text-center">
        © {year} arka garai
      </p>
    </footer>
  );
}