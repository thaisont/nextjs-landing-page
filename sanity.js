import { createClient } from "@sanity/client";

// Initialize the Sanity client
const client = createClient({
  projectId: "1nvfv4i8",
  dataset: "production",
  apiVersion: "2023-06-09",
  useCdn: false,
});

export async function getServerSideProps() {
  const pets = await client.fetch(`*[_type == "pet"] | order(alphabetical)`);
  const banners = await client.fetch(`*[_type == "pet"]{
  }`);

  return {
    props: {
      pets,
      banners,
    },
  };
}

export default client;
