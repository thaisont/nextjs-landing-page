"use client";
import React from "react";
import Image from "next/image";
import {
  Container,
  LogoContainer,
  Logo,
  ListContainer,
  ListItem,
  FooterContainer,
  ButtonContainer,
  Copyright,
} from "./Footer.style";
import { ThemeProvider } from "styled-components";
import { StyledButtonLink } from "../Header/Header.style";
import { Colors } from "@/app/Themes/Colors";

export const Footer = () => {
  return (
    <ThemeProvider theme={Colors}>
      <Container>
        <FooterContainer>
          <LogoContainer>
            <Image src="/logo-footer.svg" width={139} height={20} />
            <Logo>
              <Image src="/icon-facebook.svg" width={20} height={20} />
              <Image src="/icon-youtube.svg" width={20} height={20} />
              <Image src="/icon-twitter.svg" width={20} height={20} />
              <Image src="/icon-pinterest.svg" width={20} height={20} />
              <Image src="/icon-instagram.svg" width={20} height={20} />
            </Logo>
          </LogoContainer>
          <ListContainer>
            <ListItem>About us</ListItem>
            <ListItem>Contact</ListItem>
            <ListItem>Blog</ListItem>
            <ListItem>Careers</ListItem>
            <ListItem>Support</ListItem>
            <ListItem>Privacy Policy</ListItem>
          </ListContainer>
          <ButtonContainer>
            <StyledButtonLink href="/">Request Invite</StyledButtonLink>
            <Copyright> &copy; Eastbank. All Rights reserved</Copyright>
          </ButtonContainer>
        </FooterContainer>
      </Container>
    </ThemeProvider>
  );
};
