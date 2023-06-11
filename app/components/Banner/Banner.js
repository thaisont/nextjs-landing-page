"use client";
import React from "react";
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

const Banner = () => {
  return (
    <BannerContainer>
      <ThemeProvider theme={Colors}>
        <BannerSubContainer>
          <BannerHeading>
            <BannerTitle>
              Next generation <br></br> digital banking
            </BannerTitle>
            <BannerText>
              Take your financial life online. your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </BannerText>
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
};

export default Banner;
