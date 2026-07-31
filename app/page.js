import { client } from "./sanity/client";
import { sanityQuery } from "./sanity/queries";

import Homepage from "./pages/homepage";

export default async function Page() {
  const fetchOptions = { next: { revalidate: 0 } };

  const { about, projects } = await client.fetch(sanityQuery, {}, fetchOptions);

  return <Homepage about={about} projects={projects} />;
}
