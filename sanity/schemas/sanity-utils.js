import { createClient, groq } from "next-sanity";

export async function getProjects() {
  const client = createClient({
    projectId: "1nvfv4i8",
    dataset: "production",
    apiVersion: "2023-06-09",
    useCdn: false,
  });

  return client.fetch(groq`*[_type == "banner"]{ title, subtitle }`);
}
