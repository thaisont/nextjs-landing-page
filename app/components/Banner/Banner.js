"use client";
import { createClient } from "next-sanity";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  BannerContainer,
  BannerSubContainer,
  ImageContainer,
  ImageContainers,
  BannerHeading,
  BannerTitle,
  BannerText,
} from "./Banner.style";
import { StyledButtonLink } from "../Header/Header.style";
import { ThemeProvider } from "styled-components";
import { Colors } from "@/app/Themes/Colors";

// Initialize the Sanity client
const client = createClient({
  projectId: "1nvfv4i8",
  dataset: "production",
  apiVersion: "2023-06-20",
  useCdn: false,
});

export default function Banner() {
  useEffect(() => {
    async function fetchBanners() {
      const bannerInfo = await client.fetch(`*[_type == "banner"]`);
      console.log(bannerInfo);
    }
    fetchBanners();
  }, []);

  return (
    <BannerContainer>
      <ThemeProvider theme={Colors}>
        <BannerSubContainer>
          <BannerHeading>
            <BannerTitle></BannerTitle>
            <BannerText></BannerText>
            <StyledButtonLink href="/">Request an invite</StyledButtonLink>
          </BannerHeading>
          <ImageContainer>
            <Image
              src="/bg-banner.svg"
              width={1271}
              height={900}
              alt="backgrounds"
            />
          </ImageContainer>
          <ImageContainers>
            <Image
              src="/image-mockups.png"
              width={640}
              height={784}
              alt="phones"
            />
          </ImageContainers>
        </BannerSubContainer>
      </ThemeProvider>
    </BannerContainer>
  );
}
