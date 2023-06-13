"use client";
import React from "react";
import {
  Container,
  SubContainer,
  ArticleHeading,
  ListAuthor,
  ListHeading,
  ListBox,
  StyledImage,
} from "./Article.style";
import { ThemeProvider } from "styled-components";
import { Colors } from "@/app/Themes/Colors";
import { ListParent, ListItems, ListText } from "../Section/Section.style";
import Image from "next/image";

const Article = () => {
  return (
    <ThemeProvider theme={Colors}>
      <Container>
        <SubContainer>
          <ArticleHeading>Latest Articles</ArticleHeading>
          <ListParent>
            <ListItems $primary>
              <StyledImage src="/image-currency.jpg" width="256" height="192" />
              <ListBox>
                <ListAuthor>By Claire Robinson</ListAuthor>
                <ListHeading>
                  Recieve money in any currency with no fees
                </ListHeading>
                <ListText $primary>
                  The world is getting smaller and we're becoming moremobile. So
                  why should you be forced to only receive money in a single ...
                </ListText>
              </ListBox>
            </ListItems>
            <ListItems $primary>
              <StyledImage
                src="/image-restaurant.jpg"
                width="256"
                height="192"
              />
              <ListBox>
                <ListAuthor>By Claire Robinson</ListAuthor>
                <ListHeading>
                  Recieve money in any currency with no fees
                </ListHeading>
                <ListText $primary>
                  The world is getting smaller and we're becoming moremobile. So
                  why should you be forced to only receive money in a single ...
                </ListText>
              </ListBox>
            </ListItems>
            <ListItems $primary>
              <StyledImage src="/image-plane.jpg" width="256" height="192" />
              <ListBox>
                <ListAuthor>By Claire Robinson</ListAuthor>
                <ListHeading>
                  Recieve money in any currency with no fees
                </ListHeading>
                <ListText $primary>
                  The world is getting smaller and we're becoming moremobile. So
                  why should you be forced to only receive money in a single ...
                </ListText>
              </ListBox>
            </ListItems>
            <ListItems $primary>
              <StyledImage src="/image-confetti.jpg" width="256" height="192" />
              <ListBox>
                <ListAuthor>By Claire Robinson</ListAuthor>
                <ListHeading>
                  Recieve money in any currency with no fees
                </ListHeading>
                <ListText $primary>
                  The world is getting smaller and we're becoming moremobile. So
                  why should you be forced to only receive money in a single ...
                </ListText>
              </ListBox>
            </ListItems>
          </ListParent>
        </SubContainer>
      </Container>
    </ThemeProvider>
  );
};

export default Article;
