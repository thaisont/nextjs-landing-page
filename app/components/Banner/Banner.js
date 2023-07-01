"use client";
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
import { getProjects } from "@/sanity/schemas/sanity-utils";

export default async function Banner() {
  const projects = await getProjects();

  return (
    <BannerContainer>
      <ThemeProvider theme={Colors}>
        <BannerSubContainer>
          <BannerHeading>
            <BannerTitle>{projects[0].title}</BannerTitle>
            <BannerText>{projects[1].subtitle}</BannerText>
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
