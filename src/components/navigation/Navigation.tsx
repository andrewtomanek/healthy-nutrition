import React, { useContext } from "react";
import DatabaseControl from "./DatabaseControl";
import AuthControl from "./AuthControl";
import { AuthContext } from "../../auth/Auth";
import {
  NavigationList,
  NavigationLi,
  NavigationLink,
} from "../../styles/elements";

import styled from "styled-components";

const Navigation = () => {
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
  }

  return (
    <MainNavigation>
      <NavigationList>
        <NavigationLi>
          <NavigationLink to="/">Domů</NavigationLink>
        </NavigationLi>{" "}
        <NavigationLi>
          <NavigationLink to="/cart">Košík</NavigationLink>
        </NavigationLi>{" "}
      </NavigationList>
      <DatabaseControl />
      <AuthControl />
    </MainNavigation>
  );
};

export default Navigation;

const MainNavigation = styled.nav`
  display: grid;
  grid-gap: 0.3rem 0.5rem;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: hsla(24, 90%, 60%, 1);
  padding: 0.4rem 0.5rem;
  @media all and (max-width: 980px) {
    grid-auto-flow: row;
    padding: 0.1rem 0.5rem;
  }
  @media all and (max-width: 736px) {
    grid-auto-flow: row;
    padding: 0.1rem 0.5rem;
  }
  @media all and (max-width: 480px) {
    grid-auto-flow: row;
    padding: 0.1rem 0.5rem;
  }
`;
