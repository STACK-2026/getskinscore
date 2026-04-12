import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    date: z.coerce.date(),
    author: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    draft: z.boolean().default(false),
    keywords: z.string().optional(),
    lang: z.enum(["en", "fr"]).default("en"),
    lastReviewed: z.coerce.date().optional(),
    reviewedBy: z.string().optional(),
  }),
});

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { blog, pages };
