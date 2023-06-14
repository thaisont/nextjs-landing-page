import styled from "styled-components";

export const Container = styled.section`
  background: ${(props) => props.theme.secondary.lightBlue};
  padding: 1rem 3rem;
`;

export const SubContainer = styled.div`
  width: 50%;
  margin-bottom: 2rem;
`;

export const Heading = styled.h2`
  color: ${(props) => props.theme.primary.darkBlue};
  font-weight: 400;
  font-size: clamp(1.5rem, 2.703vw + -0.203rem, 2.5rem);
`;

export const SectionText = styled.p``;

export const ListContainer = styled.div`
  display: grid;
  margin-right: 4rem;
`;

export const ListParent = styled.ul`
  list-style: none;
  grid-template-columns: repeat(4, 1fr);
  display: grid;
  padding-left: 0;
  column-gap: 4rem;
`;

export const ListItems = styled.li`
  text-decoration: none;
  background: ${(props) => (props.$primary ? "hsl(0, 0%, 100%)" : "")};
  /* white-space: nowrap; */
  overflow: hidden;
  /* text-overflow: ellipsis; */
`;

export const ListHeading = styled.h3`
  font-weight: 400;
  color: ${(props) => props.theme.primary.darkBlue};
`;

export const ListText = styled.p`
  color: ${(props) => props.theme.secondary.greyBlue};
  font-size: ${(props) => (props.$primary ? "14px" : "")};
`;
