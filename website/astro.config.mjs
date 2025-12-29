import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
// https://astro.build/config
export default defineConfig({
  site: "https://archui.devtoti.com/",
  base: "",
  trailingSlash: "always",
  integrations: [react(), svelte()],
  vite: {
    plugins: [tailwindcss()],
  },
});
