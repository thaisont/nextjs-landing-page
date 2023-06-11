import styled from "styled-components";
import Link from "next/link";

export const BannerContainer = styled.div`
  margin-top: 93px;
  position: relative;
  overflow-x: clip;
  margin-bottom: 9rem;
`;

export const BannerSubContainer = styled.div`
  margin: 0rem 3rem;
  position: relative;
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  top: -13rem;
  right: -28rem;
`;

export const ImageContainers = styled.div`
  position: absolute;
  right: -12rem;
  top: -5rem;
`;

export const BannerTitle = styled.h2`
  font-weight: 300;
  color: hsl(233, 26%, 24%);
  font-size: clamp(2rem, 3.2vw + 0.2rem, 3rem);
`;

export const BannerText = styled.p`
  color: ${(props) => props.theme.secondary.greyBlue};
  margin: 2rem 0;
`;

export const BannerHeading = styled.div`
  display: inline-block;
  width: 38%;
  margin-top: 5rem;
`;
