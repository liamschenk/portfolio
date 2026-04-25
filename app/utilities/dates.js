export const monthNames = [
  "Jan.",
  "Feb.",
  "März",
  "Apr.",
  "Mai",
  "Juni",
  "Juli",
  "Aug.",
  "Sep.",
  "Okt.",
  "Nov.",
  "Dez.",
];

export function formatYear(dateStr) {
  if (!dateStr) return "Unbekannt";

  return new Date(dateStr).getUTCFullYear();
}

export function formatDateRange(startDate, endDate, ongoing = false) {
  if (!startDate) return "Unbekannt";

  const format = (d) => {
    const date = new Date(d);
    return `${monthNames[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
  };

  const end = ongoing ? "Jetzt" : endDate ? format(endDate) : "Unbekannt";
  return `${format(startDate)} – ${end}`;
}
