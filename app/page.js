import { client } from "../sanity/client";
import { query } from "../sanity/queries";

import View from "./pages/view";

export default async function Portfolio() {
  const data = await client.fetch(query);

  return <View data={data} />;
}
