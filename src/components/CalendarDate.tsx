interface CalendarDateProps {
  date: string;
}

function formatDate(date: string) {
  const value = new Date(date);

  if (Number.isNaN(value.getTime())) {
    return date;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(value);
}

export function CalendarDate({ date }: CalendarDateProps) {
  const formattedDate = formatDate(date);

  return (
    <span className="border-accent/40 bg-accent/10 text-foreground inline-flex items-center gap-2 rounded-md border px-2.5 py-1 text-xs sm:text-sm">
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="text-accent h-3.5 w-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
      </svg>
      <span>{formattedDate}</span>
    </span>
  );
}
