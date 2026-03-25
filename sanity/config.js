import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { media } from "sanity-plugin-media";
import { schemas } from "./schemas";

import { theme } from "./theme";

const icon = () => (
  <div
    style={{
      width: "auto",
      height: "auto",
    }}
  >
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src="/favicon.ico"
      style={{ width: "100%", height: "100%", objectFit: "contain" }}
      alt="Icon"
    />
  </div>
);

export default defineConfig({
  name: "default",
  title: "portfolio",
  projectId: "l5e3bb3j",
  dataset: "production",
  plugins: [structureTool(), media()],
  schema: {
    types: schemas,
  },
  theme: theme,
  icon: icon,
});
