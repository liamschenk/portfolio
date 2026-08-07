export function getTimespan(projects) {
  const years = projects
    .map((project) => project.date)
    .filter(Boolean)
    .map((date) => new Date(date).getUTCFullYear());

  if (years.length === 0) return "Unbekannt";

  const earliest = Math.min(...years);
  const latest = Math.max(...years);

  return earliest === latest ? `${earliest}` : `${earliest} – ${latest}`;
}
