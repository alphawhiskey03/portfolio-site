// @ts-check
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import sanity from "@sanity/astro";

const env = loadEnv(process.env.NODE_ENV ?? "development", process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  site: "https://therealvig.netlify.app",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    sanity({
      projectId: env.PUBLIC_SANITY_PROJECT_ID,
      dataset: env.PUBLIC_SANITY_DATASET ?? "production",
    }),
  ],
});
