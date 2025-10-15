// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  image: {
    responsiveStyles: true,
    layout: "constrained",
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.fontshare(),
        name: "JetBrains Mono",
        cssVariable: "--jetbrains-mono",
        // Download only font files for characters used on the page
        subsets: ["latin"],
        // Use a fallback font family matching the intended appearance
        fallbacks: ["monospace"],
      },
    ],
  },
});
