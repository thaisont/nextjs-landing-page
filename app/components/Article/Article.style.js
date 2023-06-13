import styled from "styled-components";

export const Container = styled.section`
  padding: 6rem 3rem;
  background: ${(props) => props.theme.secondary.lightGrey};
`;

export const SubContainer = styled.div``;

export const ArticleHeading = styled.h2`
  color: ${(props) => props.theme.primary.darkBlue};
  font-weight: 400;
  font-size: clamp(1.5rem, 2.703vw + -0.203rem, 2.5rem);
  padding-bottom: 2rem;
`;

export const ListAuthor = styled.p`
  color: ${(props) => props.theme.secondary.greyBlue};
  font-size: 14px;
`;

export const ListHeading = styled.p`
  color: ${(props) => props.theme.primary.darkBlue};
`;

export const ListBox = styled.div`
  padding: 0 1rem;
`;

export const StyledImage = styled.img`
  border-radius: 10px 10px 0px 0px;
`;
