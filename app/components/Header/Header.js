"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Container,
  List,
  ListItem,
  Nav,
  StyledLink,
  StyledListLink,
  Button,
  ButtonText,
} from "./Header.style";
import { ThemeProvider } from "styled-components";
import { Colors } from "@/app/Themes/Colors";

const Header = () => {
  return (
    <>
      <Container>
        <ThemeProvider theme={Colors}>
          <Nav>
            <StyledLink href="/" className="logo">
              <Image src="/logo.svg" width={139} height={20} />
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
            <Button>Request an invite</Button>
          </Nav>
        </ThemeProvider>
      </Container>
    </>
  );
};

export default Header;
