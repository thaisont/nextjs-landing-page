import React from "react";
import client from "@/sanity.config";
import {
  BannerContainer,
  BannerSubContainer,
  ImageContainer,
  ImageContainers,
  BannerHeading,
  BannerTitle,
  BannerText,
} from "./Banner.style";
import { createClient } from "next-sanity";

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

export default function page() {
  return (
    <>
      <BannerTitle></BannerTitle>
      <BannerText></BannerText>
    </>
  );
}
