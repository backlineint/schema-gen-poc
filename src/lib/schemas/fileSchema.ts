import { z } from 'astro:content';

export const fileSchema = z.object({
  type: z.string(),
  id: z.string(),
  links: z.object({ self: z.object({ href: z.string() }) }),
  attributes: z.object({
    drupal_internal__fid: z.number(),
    langcode: z.string(),
    filename: z.string(),
    uri: z.object({ value: z.string(), url: z.string() }),
    filemime: z.string(),
    filesize: z.number(),
    status: z.boolean(),
    created: z.string(),
    changed: z.string(),
  }),
  relationships: z.object({
    uid: z.object({
      data: z.null(),
      links: z.object({
        related: z.object({ href: z.string() }),
        self: z.object({ href: z.string() }),
      }),
    }),
  }),
});
