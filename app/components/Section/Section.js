"use client";
import React from "react";
import {
  Container,
  SubContainer,
  Heading,
  SectionText,
  ListItems,
  ListParent,
  ListHeading,
  ListText,
  ListContainer,
} from "./Section.style";
import Image from "next/image";
import { ThemeProvider } from "styled-components";
import { Colors } from "@/app/Themes/Colors";

const Section = () => {
  return (
    <ThemeProvider theme={Colors}>
      <Container>
        <SubContainer>
          <Heading>Why choose EasyBank?</Heading>
          <SectionText>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before
          </SectionText>
        </SubContainer>
        <ListContainer>
          <ListParent>
            <ListItems>
              <Image src="/icon-online.svg" width={72} height={72}></Image>
              <ListHeading>Online Banking</ListHeading>
              <ListText>
                Our mordern web and mobile applications allow you to keep track
                of your fianances whereever you are in the world.
              </ListText>
            </ListItems>
            <ListItems>
              <Image src="/icon-budgeting.svg" width={72} height={72}></Image>
              <ListHeading>Simple budgeting</ListHeading>
              <ListText>
                Our mordern web and mobile applications allow you to keep track
                of your fianances whereever you are in the world.
              </ListText>
            </ListItems>
            <ListItems>
              <Image src="/icon-onboarding.svg" width={72} height={72}></Image>
              <ListHeading>Fast Onboarding</ListHeading>
              <ListText>
                Our mordern web and mobile applications allow you to keep track
                of your fianances whereever you are in the world.
              </ListText>
            </ListItems>
            <ListItems>
              <Image src="/icon-api.svg" width={72} height={72}></Image>
              <ListHeading>Open API</ListHeading>
              <ListText>
                Our mordern web and mobile applications allow you to keep track
                of your fianances whereever you are in the world.
              </ListText>
            </ListItems>
          </ListParent>
        </ListContainer>
      </Container>
    </ThemeProvider>
  );
};

export default Section;
