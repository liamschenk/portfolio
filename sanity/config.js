import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { media } from "sanity-plugin-media";
import { schemas } from "./schemas";

export default defineConfig({
  name: "default",
  title: "portfolio",
  projectId: "l5e3bb3j",
  dataset: "production",
  plugins: [structureTool(), media()],
  schema: {
    types: schemas,
  },
});
