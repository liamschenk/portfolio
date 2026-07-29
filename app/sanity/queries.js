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
  "bio": *[_type == "bio"][0]{
    ...,
    picture{
      asset->{
        _id,
        url
      }
    }
  },
  "listening": *[_type == "listening"][0]{
    ...,
    cover{
      asset->{
        _id,
        url
      }
    }
  },
  "profile": *[_type == "profile" && network == "LinkedIn"][0]
}`;
