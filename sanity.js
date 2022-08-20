import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import envs from "./config/env";

const client = sanityClient({
  projectId: envs,
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
