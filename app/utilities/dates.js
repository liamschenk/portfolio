export function formatYear(dateStr) {
  if (!dateStr) return "Unbekannt";
  return new Date(dateStr).getUTCFullYear();
}

export function formatYearRange(startDate, endDate, ongoing) {
  if (!startDate) return "Unbekannt";

  const startYear = new Date(startDate).getUTCFullYear();
  const endYear = ongoing
    ? "Jetzt"
    : endDate
      ? new Date(endDate).getUTCFullYear()
      : "Unbekannt";

  return `${startYear} – ${endYear}`;
}
