import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/work" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      image: z.object({
        src: image(),
        alt: z.string(),
        rawUrl: z.string(),
      }),
      tags: z.array(z.string()),
      url: z.url(),
    }),
});

export const collections = { projects };
