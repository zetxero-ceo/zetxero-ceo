import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// บทความบล็อก: ไฟล์ .md ใน src/content/blog/
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

// ผลงาน: ไฟล์ .md ใน src/content/projects/
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    year: z.number(),
    role: z.string(),
    tags: z.array(z.string()).default([]),
    link: z.string().url().optional(),
    // เลขน้อยขึ้นก่อน
    order: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };
