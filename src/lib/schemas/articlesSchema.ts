import { z } from 'astro:content';

export const articlesSchema = z.object({
  jsonapi: z.object({
    version: z.string(),
    meta: z.object({
      links: z.object({ self: z.object({ href: z.string() }) }),
    }),
  }),
  data: z.array(
    z.union([
      z.object({
        type: z.string(),
        id: z.string(),
        links: z.object({ self: z.object({ href: z.string() }) }),
        attributes: z.object({
          drupal_internal__nid: z.number(),
          drupal_internal__vid: z.number(),
          langcode: z.string(),
          revision_timestamp: z.string(),
          revision_log: z.null(),
          status: z.boolean(),
          title: z.string(),
          created: z.string(),
          changed: z.string(),
          promote: z.boolean(),
          sticky: z.boolean(),
          default_langcode: z.boolean(),
          revision_translation_affected: z.null(),
          moderation_state: z.string(),
          path: z.object({
            alias: z.string(),
            pid: z.number(),
            langcode: z.string(),
          }),
          content_translation_source: z.string(),
          content_translation_outdated: z.boolean(),
          body: z.object({
            value: z.string(),
            format: z.string(),
            processed: z.string(),
            summary: z.null(),
          }),
        }),
        relationships: z.object({
          node_type: z.object({
            data: z.object({
              type: z.string(),
              id: z.string(),
              meta: z.object({ drupal_internal__target_id: z.string() }),
            }),
            links: z.object({
              related: z.object({ href: z.string() }),
              self: z.object({ href: z.string() }),
            }),
          }),
          revision_uid: z.object({
            data: z.object({
              type: z.string(),
              id: z.string(),
              meta: z.object({ drupal_internal__target_id: z.number() }),
            }),
            links: z.object({
              related: z.object({ href: z.string() }),
              self: z.object({ href: z.string() }),
            }),
          }),
          uid: z.object({
            data: z.object({
              type: z.string(),
              id: z.string(),
              meta: z.object({ drupal_internal__target_id: z.number() }),
            }),
            links: z.object({
              related: z.object({ href: z.string() }),
              self: z.object({ href: z.string() }),
            }),
          }),
          field_media_image: z.object({
            data: z.object({
              type: z.string(),
              id: z.string(),
              meta: z.object({ drupal_internal__target_id: z.number() }),
            }),
            links: z.object({
              related: z.object({ href: z.string() }),
              self: z.object({ href: z.string() }),
            }),
          }),
          field_tags: z.object({
            data: z.array(
              z.object({
                type: z.string(),
                id: z.string(),
                meta: z.object({ drupal_internal__target_id: z.number() }),
              })
            ),
            links: z.object({
              related: z.object({ href: z.string() }),
              self: z.object({ href: z.string() }),
            }),
          }),
        }),
      }),
      z.object({
        type: z.string(),
        id: z.string(),
        links: z.object({ self: z.object({ href: z.string() }) }),
        attributes: z.object({
          drupal_internal__nid: z.number(),
          drupal_internal__vid: z.number(),
          langcode: z.string(),
          revision_timestamp: z.string(),
          revision_log: z.null(),
          status: z.boolean(),
          title: z.string(),
          created: z.string(),
          changed: z.string(),
          promote: z.boolean(),
          sticky: z.boolean(),
          default_langcode: z.boolean(),
          revision_translation_affected: z.boolean(),
          moderation_state: z.string(),
          path: z.object({
            alias: z.string(),
            pid: z.number(),
            langcode: z.string(),
          }),
          content_translation_source: z.string(),
          content_translation_outdated: z.boolean(),
          body: z.object({
            value: z.string(),
            format: z.string(),
            processed: z.string(),
            summary: z.string(),
          }),
        }),
        relationships: z.object({
          node_type: z.object({
            data: z.object({
              type: z.string(),
              id: z.string(),
              meta: z.object({ drupal_internal__target_id: z.string() }),
            }),
            links: z.object({
              related: z.object({ href: z.string() }),
              self: z.object({ href: z.string() }),
            }),
          }),
          revision_uid: z.object({
            data: z.object({
              type: z.string(),
              id: z.string(),
              meta: z.object({ drupal_internal__target_id: z.number() }),
            }),
            links: z.object({
              related: z.object({ href: z.string() }),
              self: z.object({ href: z.string() }),
            }),
          }),
          uid: z.object({
            data: z.object({
              type: z.string(),
              id: z.string(),
              meta: z.object({ drupal_internal__target_id: z.number() }),
            }),
            links: z.object({
              related: z.object({ href: z.string() }),
              self: z.object({ href: z.string() }),
            }),
          }),
          field_media_image: z.object({
            data: z.object({
              type: z.string(),
              id: z.string(),
              meta: z.object({ drupal_internal__target_id: z.number() }),
            }),
            links: z.object({
              related: z.object({ href: z.string() }),
              self: z.object({ href: z.string() }),
            }),
          }),
          field_tags: z.object({
            data: z.array(
              z.object({
                type: z.string(),
                id: z.string(),
                meta: z.object({ drupal_internal__target_id: z.number() }),
              })
            ),
            links: z.object({
              related: z.object({ href: z.string() }),
              self: z.object({ href: z.string() }),
            }),
          }),
        }),
      }),
    ])
  ),
  included: z.array(
    z.union([
      z.object({
        type: z.string(),
        id: z.string(),
        links: z.object({ self: z.object({ href: z.string() }) }),
        attributes: z.object({
          drupal_internal__mid: z.number(),
          drupal_internal__vid: z.number(),
          langcode: z.string(),
          revision_created: z.string(),
          revision_log_message: z.null(),
          status: z.boolean(),
          name: z.string(),
          created: z.string(),
          changed: z.string(),
          default_langcode: z.boolean(),
          revision_translation_affected: z.boolean(),
          path: z.object({
            alias: z.null(),
            pid: z.null(),
            langcode: z.string(),
          }),
          content_translation_source: z.string(),
          content_translation_outdated: z.boolean(),
        }),
        relationships: z.object({
          bundle: z.object({
            data: z.object({
              type: z.string(),
              id: z.string(),
              meta: z.object({ drupal_internal__target_id: z.string() }),
            }),
            links: z.object({
              related: z.object({ href: z.string() }),
              self: z.object({ href: z.string() }),
            }),
          }),
          revision_user: z.object({
            data: z.null(),
            links: z.object({
              related: z.object({ href: z.string() }),
              self: z.object({ href: z.string() }),
            }),
          }),
          uid: z.object({
            data: z.object({
              type: z.string(),
              id: z.string(),
              meta: z.object({ drupal_internal__target_id: z.number() }),
            }),
            links: z.object({
              related: z.object({ href: z.string() }),
              self: z.object({ href: z.string() }),
            }),
          }),
          thumbnail: z.object({
            data: z.object({
              type: z.string(),
              id: z.string(),
              meta: z.object({
                alt: z.string(),
                title: z.null(),
                width: z.number(),
                height: z.number(),
                drupal_internal__target_id: z.number(),
              }),
            }),
            links: z.object({
              related: z.object({ href: z.string() }),
              self: z.object({ href: z.string() }),
            }),
          }),
          field_media_image: z.object({
            data: z.object({
              type: z.string(),
              id: z.string(),
              meta: z.object({
                alt: z.string(),
                title: z.null(),
                width: z.number(),
                height: z.number(),
                drupal_internal__target_id: z.number(),
              }),
            }),
            links: z.object({
              related: z.object({ href: z.string() }),
              self: z.object({ href: z.string() }),
            }),
          }),
        }),
      }),
      z.object({
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
      }),
    ])
  ),
  links: z.object({ self: z.object({ href: z.string() }) }),
});
