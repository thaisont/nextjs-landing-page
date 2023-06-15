"use client";
import React from "react";
import Image from "next/image";
import { Container } from "./Footer.style";
import { ThemeProvider } from "styled-components";
import { Colors } from "@/app/Themes/Colors";

export const Footer = () => {
  return (
    <ThemeProvider theme={Colors}>
      <Container>
        <Image src="/logo-footer.svg" width={139} height={20} />
      </Container>
    </ThemeProvider>
  );
};
