import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "l5e3bb3j",
  dataset: "production",
  apiVersion: "2026-02-10",
  useCdn: true,
});
