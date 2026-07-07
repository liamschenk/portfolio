export const projectsQuery = `{
  "projects": *[_type == "projects"] | order(_createdAt desc) {
  ...,
    media[] {
      asset-> {
        _id,
        url
      }
    }
  }
}`;

export const aboutQuery = `{
  "basics": *[_type == "basics"][0],
  "work": *[_type == "work"] | order(_createdAt desc),
  "education": *[_type == "education"] | order(_createdAt desc),
  "profiles": *[_type == "profile"] | order(_createdAt desc)
}`;
