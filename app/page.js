import { client } from "./sanity/client";

import { projectsQuery, aboutQuery } from "./sanity/queries";

import Router from "./router";

export default async function Portfolio() {
  const fetchOptions = { next: { revalidate: 3600 } };

  const { projects } = await client.fetch(projectsQuery, {}, fetchOptions);
  const aboutPromise = client.fetch(aboutQuery, {}, fetchOptions);

  return <Router projects={projects} aboutPromise={aboutPromise} />;
}
