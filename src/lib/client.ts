import { JsonApiClient } from "@drupal-api-client/json-api-client";

export const client = new JsonApiClient(
  "https://dev-drupal-api-client-poc.pantheonsite.io"
);
