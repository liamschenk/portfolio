import { client } from "./sanity/client";

import { projectQuery, aboutQuery } from "./sanity/queries";

import Router from "./router";

export default async function Portfolio() {
  const fetchOptions = { next: { revalidate: 3600 } };

  const { projects } = await client.fetch(projectQuery, {}, fetchOptions);
  const about = client.fetch(aboutQuery, {}, fetchOptions);

  return <Router projects={projects} about={about} />;
}
