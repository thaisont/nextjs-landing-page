import React from "react";

export default function page() {
  return <div>page</div>;
}

const client = createClient({
  projectId: "1nvfv4i8",
  dataset: "production",
  apiVersion: "2023-06-09",
  useCdn: true,
});

export async function getStaticProps() {
  const banners = await client.fetch(`*[_type == "banners"]`);

  return {
    props: {
      banners: bannerInfo,
    },
  };
}
