import styled from "styled-components";
import Link from "next/link";

export const Container = styled.nav`
  position: fixed;
  width: 100%;
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
  justify-content: space-around;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;
`;

export const ListItem = styled.li`
  margin-right: 10px;
`;

export const Button = styled.a`
  border-radius: 50px;
  background: ${(props) => props.theme.primary.limeBlue};
  padding: 1rem 2rem;
  color: ${(props) => props.theme.secondary.white};
`;

export const ButtonText = styled.span``;
