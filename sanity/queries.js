export const projectsQuery = `{
  "projects": *[_type == "projects"] | order(_createdAt desc) {
    _id,
    title,
    description,
    date,
    media[] {
      asset-> {
        _id,
        url
      }
    }
  }
}`;

export const aboutQuery = `{
  "basics": *[_type == "basics"][0] {
    ...,
    "statusText": select(
      status == "available" => "Verfügbar für Anfragen",
      status == "partial" => "Teilweise verfügbar",
      status == "unavailable" => "Nicht verfügbar"
    )
  },
  "work": *[_type == "work"] | order(_createdAt desc),
  "education": *[_type == "education"] | order(_createdAt desc),
  "profiles": *[_type == "profile"] | order(_createdAt desc),
}`;
