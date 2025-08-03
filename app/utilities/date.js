export function formatDate(
  startDate,
  endDate,
  ongoing = false,
  locale = "de-DE"
) {
  if (!startDate) return "?";

  const format = (dateStr) => {
    const date = new Date(dateStr);
    if (!isFinite(date)) return "?";

    // Always return 3-letter month without trailing dot
    const month = date.toLocaleString("de-DE", { month: "short" }).slice(0, 3);
    const year = date.getFullYear();
    return `${month} ${year}`;
  };

  const formattedStart = format(startDate);
  const formattedEnd = ongoing ? "Jetzt" : endDate ? format(endDate) : "?";

  return `${formattedStart} – ${formattedEnd}`;
}
