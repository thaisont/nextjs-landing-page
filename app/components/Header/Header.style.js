import styled from "styled-components";
import Link from "next/link";

export const Container = styled.nav`
  position: fixed;
  width: 100%;
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
`;

export const ListItem = styled.li`
  margin-right: 10px;
`;
