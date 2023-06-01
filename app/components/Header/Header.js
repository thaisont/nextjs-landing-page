"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, List, ListItem, Nav, StyledLink } from "./Header.style";

const Header = () => {
  return (
    <>
      <Container>
        <Nav>
          <StyledLink href="/" className="logo">
            <Image src="/logo.svg" width={139} height={20} />
          </StyledLink>
          <List>
            <ListItem>
              <Link href="/">Home</Link>
            </ListItem>
            <ListItem>
              <Link href="/about">About</Link>
            </ListItem>
            <ListItem>
              <Link href="/contact">Contact</Link>
            </ListItem>
            <ListItem>
              <Link href="/blog">Blog</Link>
            </ListItem>
            <ListItem>
              <Link href="/careers">Careers</Link>
            </ListItem>
          </List>
          <button>request an invite</button>
        </Nav>
      </Container>
    </>
  );
};

export default Header;
