import styled from "styled-components";
import Link from "next/link";

export const Container = styled.nav`
  position: fixed;
  width: 100%;
  margin: 1rem 0;
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
`;

export const StyledListLink = styled(Link)`
  color: ${(props) => props.theme.secondary.greyBlue};
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 4rem;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;
  @media only screen and (max-width: 1008px) {
    display: none;
  }
`;

export const HamburgerContainer = styled.div`
  cursor: pointer;
  @media only screen and (min-width: 1008px) {
    display: none;
  }
`;

export const ListItem = styled.li`
  margin-right: 10px;
`;

export const StyledButtonLink = styled(Link)`
  border-radius: 50px;
  background: linear-gradient(
    90deg,
    rgba(49, 211, 92, 1) 0%,
    rgba(43, 183, 218, 1) 67%
  );
  padding: 1rem 2rem;
  color: ${(props) => props.theme.secondary.white};
  @media only screen and (max-width: 1008px) {
    display: none;
  }
`;

export const ButtonText = styled.span``;
