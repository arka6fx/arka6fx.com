export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-divider mt-auto border-t py-4">
      <p className="text-secondary text-center text-sm">© {year} arka garai</p>
    </footer>
  );
}
