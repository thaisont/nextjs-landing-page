import { createClient, groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "1nvfv4i8",
  dataset: "production",
  apiVersion: "2023-06-09",
  useCdn: false,
});

export async function getProjects() {
  return client.fetch(groq`*[_type == "banner"]{
    title,
    subtitle,
    image
  }`);
}

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
