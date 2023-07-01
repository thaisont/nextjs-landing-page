"use client";
import { useEffect, useState } from "react";
import { createClient } from "next-sanity";
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

export default function Section() {
  const [sections, setSections] = useState([]);

  const client = createClient({
    projectId: "1nvfv4i8",
    dataset: "production",
    apiVersion: "2023-06-09",
    useCdn: false,
  });

  useEffect(() => {
    async function fetchSections() {
      const sectionInfo = await client.fetch(`*[_type == "banner"]`);
      setSections(sectionInfo);
    }
    fetchSections();
  }, []);

  const secondTitle = sections.length > 1 ? sections[0].title : "";
  const secondSub = sections.length > 1 ? sections[0].subtitle : "";

  return (
    <ThemeProvider theme={Colors}>
      <Container>
        <SubContainer>
          <Heading></Heading>
          <SectionText></SectionText>
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
