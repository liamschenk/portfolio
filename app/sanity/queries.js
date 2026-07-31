export const sanityQuery = `{
  "projects": *[_type == "project"] | order(_createdAt desc) {
    ...,
    picture{
      asset->{
        _id,
        url
      }
    },
    media[] {
      asset-> {
        _id,
        url
      }
    }
  },
  "about": *[_type == "about"][0]{
    ...,
    portrait{
      asset->{
        _id,
        url
      }
    }
  }
}`;
