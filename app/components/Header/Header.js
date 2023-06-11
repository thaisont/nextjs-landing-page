"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Container,
  List,
  ListItem,
  Nav,
  StyledLink,
  StyledListLink,
  StyledButtonLink,
  HamburgerContainer,
} from "./Header.style";
import { ThemeProvider } from "styled-components";
import { Colors } from "@/app/Themes/Colors";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Container>
        <ThemeProvider theme={Colors}>
          <Nav>
            <StyledLink href="/" className="logo">
              <Image src="/logo.svg" width={139} height={20} alt="logo" />
            </StyledLink>
            <List>
              <ListItem>
                <StyledListLink href="/">Home</StyledListLink>
              </ListItem>
              <ListItem>
                <StyledListLink href="/about">About</StyledListLink>
              </ListItem>
              <ListItem>
                <StyledListLink href="/contact">Contact</StyledListLink>
              </ListItem>
              <ListItem>
                <StyledListLink href="/blog">Blog</StyledListLink>
              </ListItem>
              <ListItem>
                <StyledListLink href="/careers">Careers</StyledListLink>
              </ListItem>
            </List>
            <StyledButtonLink displayonmaxwidth={"true"} href="/">
              Request an invite
            </StyledButtonLink>
            <HamburgerContainer onClick={handleClick} tabIndex={0}>
              <Image
                src={isOpen ? "/close.svg" : "/hamburger.svg"}
                alt={isOpen ? "Close" : "Hamburger"}
                width={isOpen ? 18 : 24}
                height={isOpen ? 19 : 11}
              />
            </HamburgerContainer>
          </Nav>
        </ThemeProvider>
      </Container>
    </>
  );
};

export default Header;
