import React, { useContext, useState } from "react";
import styled, { css } from "styled-components";

import DatabaseControl from "./DatabaseControl";
import AuthControl from "./AuthControl";
import { AuthContext } from "../../auth/Auth";
import { NavigationLi, NavigationLink } from "../../styles/elements";

interface IProps {
  isOpen?: boolean;
}

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
  }

  return (
    <MainNavigation isOpen={isOpen}>
      <Burger onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "\u{274C}" : "\u{2630}"}
      </Burger>
      <NavigationList isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <NavigationLi>
          <NavigationLink to="/" activeClassName="is-active" exact={true}>
            Domů
          </NavigationLink>
        </NavigationLi>{" "}
        <NavigationLi>
          <NavigationLink to="/cart" activeClassName="is-active">
            Košík
          </NavigationLink>
        </NavigationLi>{" "}
        <DatabaseControl />
        <AuthControl />
      </NavigationList>
    </MainNavigation>
  );
};

export default Navigation;

const MainNavigation = styled.nav<IProps>`
  display: grid;
  gap: 2rem;
  grid-auto-flow: column;
  justify-content: space-around;
  align-items: center;
  background: hsla(24, 90%, 60%, 1);
  padding: 0rem 1rem;
  @media all and (max-width: 980px) {
    grid-auto-flow: row;
    padding: 0.1rem 0.5rem;
  }
  @media all and (max-width: 736px) {
    grid-auto-flow: row;
    padding: 0.1rem 0.5rem;
  }
  @media all and (max-width: 480px) {
    padding: 1rem 0.5rem;
    background: none;
  }
`;

export const NavigationList = styled.ul<IProps>`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;
  grid-gap: 0.1rem 0.5rem;
  list-style: none;

  @media all and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    padding: 0;
    margin: 0;
    left: -100%;
    opacity: 1;
    transition: all 0.5s ease;

    ${({ isOpen }) =>
      isOpen &&
      css`
        left: 0;
        opacity: 1;
        transition: all 0.5s ease;
        z-index: 9;
        background-color: hsla(80, 100%, 30%, 1);
      `}
  }
`;

export const Burger = styled.button`
  display: none;
  padding: 0.1rem 0.5rem;
  font-size: 1.5rem;
  font-weight: 900;
  color: white;
  background: var(--green);
  border-radius: 0.5rem;
  border: 0.1rem solid white;

  @media all and (max-width: 480px) {
    display: block;
    z-index: 19;
    position: absolute;
    top: 1%;
    right: 1%;
  }
`;
