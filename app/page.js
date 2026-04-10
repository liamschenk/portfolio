import { client } from "../sanity/client";

import { projectsQuery, aboutQuery } from "../sanity/queries";

import Router from "./router";

export default async function Portfolio() {
  const { projects } = await client.fetch(
    projectsQuery,
    {},
    { next: { revalidate: 3600 } },
  );

  const aboutPromise = client.fetch(
    aboutQuery,
    {},
    { next: { revalidate: 3600 } },
  );

  return <Router projects={projects} aboutPromise={aboutPromise} />;
}
