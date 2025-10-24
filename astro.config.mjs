// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://felixbahr.com",
  image: {
    responsiveStyles: true,
    layout: "constrained",
    objectFit: "cover",
  },

  trailingSlash: "always",

  experimental: {
    fonts: [
      {
        provider: fontProviders.fontshare(),
        name: "JetBrains Mono",
        cssVariable: "--jetbrains-mono",
        weights: ["100 900"],
        // Download only font files for characters used on the page
        subsets: ["latin"],
        // Use a fallback font family matching the intended appearance
        fallbacks: ["monospace"],
      },
    ],
  },

  integrations: [mdx(), sitemap()],
});
