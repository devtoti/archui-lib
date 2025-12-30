import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import netlify from "@astrojs/netlify";
import tailwindcss from "@tailwindcss/vite";
// https://astro.build/config
export default defineConfig({
  site: "https://archui.devtoti.com/",
  base: "",
  trailingSlash: "always",
  adapter: netlify(),
  integrations: [react(), svelte()],
  vite: {
    plugins: [tailwindcss()],
  },
});
