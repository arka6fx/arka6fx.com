import { formatDateLong } from "@/lib/utils"

export function CalendarDate({ date }: { date: string }) {
  return (
    <span className="tabular-nums text-sm text-gray-500">
      {formatDateLong(date)}
    </span>
  )
}
