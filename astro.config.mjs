import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://cool-medovik-b6fcb5.netlify.app",
  integrations: [preact()]
});