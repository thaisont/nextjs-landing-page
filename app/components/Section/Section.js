"use client";
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
import { getProjects } from "@/sanity/schemas/sanity-utils";

export default async function Section() {
  const projects = await getProjects();
  // console.log(projects);
  return (
    <ThemeProvider theme={Colors}>
      <Container>
        <SubContainer>
          <Heading>{projects[0].title}</Heading>
          <SectionText>{projects[0].subtitle}</SectionText>
        </SubContainer>
        <ListContainer>
          <ListParent>
            <ListItems>
              <Image
                src="/icon-online.svg"
                width={72}
                height={72}
                loading="lazy"
              ></Image>
              <ListHeading>Online Banking</ListHeading>
              <ListText>
                Our mordern web and mobile applications allow you to keep track
                of your fianances whereever you are in the world.
              </ListText>
            </ListItems>
            <ListItems>
              <Image
                src="/icon-budgeting.svg"
                width={72}
                height={72}
                loading="lazy"
              ></Image>
              <ListHeading>Simple budgeting</ListHeading>
              <ListText>
                Our mordern web and mobile applications allow you to keep track
                of your fianances whereever you are in the world.
              </ListText>
            </ListItems>
            <ListItems>
              <Image
                src="/icon-onboarding.svg"
                width={72}
                height={72}
                loading="lazy"
              ></Image>
              <ListHeading>Fast Onboarding</ListHeading>
              <ListText>
                Our mordern web and mobile applications allow you to keep track
                of your fianances whereever you are in the world.
              </ListText>
            </ListItems>
            <ListItems>
              <Image
                src="/icon-api.svg"
                width={72}
                height={72}
                loading="lazy"
              ></Image>
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
}
