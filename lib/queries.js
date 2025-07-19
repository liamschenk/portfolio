export const query = `{
  "basics": *[_type == "basics"][0],
  "profiles": *[_type == "profile"] | order(_createdAt desc),
  "work": *[_type == "work"] | order(_createdAt desc),
  "education": *[_type == "education"] | order(_createdAt desc),
  "projects": *[_type == "projects"] | order(_createdAt desc) {
    name,
    description,
    date,
    media[] {
      _type,
      asset-> {
        _id,
        url
      }
    }
  }
}`;
