// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  image: {
    responsiveStyles: true,
    layout: "constrained",
    objectFit: "cover",
  },

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

  integrations: [mdx()],
});