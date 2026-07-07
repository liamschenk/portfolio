export const projectQuery = `{
  "projects": *[_type == "project"] | order(_createdAt desc) {
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
  "bio": *[_type == "bio"][0],
  "work": *[_type == "work"] | order(_createdAt desc),
  "education": *[_type == "education"] | order(_createdAt desc),
  "profiles": *[_type == "profile"] | order(_createdAt desc)
}`;
