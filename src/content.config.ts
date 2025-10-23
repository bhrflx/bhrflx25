import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

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
      url: z.string().url(),
    }),
});

export const collections = { projects };
