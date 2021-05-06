import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const BasicButton = styled.button`
  padding: 0.2rem 1rem;
  border-radius: 1rem;
  font-size: 1rem;
  font-weight: 900;
  background-color: var(--green);
  color: #fff;
  cursor: pointer;
  z-index: 4;
  transition: all 200ms cubic-bezier(0.215, 0.61, 0.355, 1);
  &:hover {
    color: var(--green);
    background-color: white;
  }
  @media all and (max-width: 1680px) {
    font-size: 1.1rem;
  }
  @media all and (max-width: 980px) {
    font-size: 1.2rem;
  }
  @media all and (max-width: 736px) {
    font-size: 1.3rem;
  }
  @media all and (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

export const NavigationLi = styled.li`
  margin: 0 0.3rem;
  text-decoration: none;
  @media all and (max-width: 480px) {
    margin: 2rem 0.3rem;
  }
`;

export const NavigationLink = styled(NavLink)`
  padding: 0.3rem 0.6rem;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 900;
  color: white;
  background: var(--green);
  border-radius: 0.5rem;
  border: 0.1rem solid white;
  &:hover {
    color: var(--green);
    background-color: white;
  }
  &.is-active {
    color: white;
    background: hsla(0, 80%, 80%, 1);
  }
  @media all and (max-width: 480px) {
    font-size: 3rem;
  }
`;

export const SwitchButton = styled(BasicButton)`
  border-radius: 1rem;
  padding: 0.5rem; 1rem;
`;

export const ControlPanel = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const SelectField = styled.select`
  font-family: "Alegreya Sans", monospace;
  height: 100%;
  width: 100%;
  padding: 0.2rem 0.3rem;
  border-radius: 1rem;
  font-size: 1rem;
  font-weight: 900;
  background-color: var(--green);
  color: #fff;
  cursor: pointer;
`;

export const SelectOption = styled.option`
  height: 100%;
  width: 100%;
  padding: 0.3rem 1rem;
  font-size: 1rem;
  font-weight: 900;
  color: var(--green);
  background-color: #fff;
  cursor: pointer;
`;

export const InputContainer = styled.div`
  display: grid;
  align-items: center;
  padding: 0.4rem 0.3rem;
  background: hsla(40, 80%, 70%, 1);
  border-radius: 0.5rem;
`;

export const SwitchContainer = styled(InputContainer)`
  background-color: transparent;
`;

export const InputBox = styled.form`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, auto);
  grid-auto-flow: row;
  align-items: center;
  align-content: space-around;
  justify-content: center;
  padding: 1rem 2rem;
  gap: 0.5rem 0.3rem;
`;

export const InputField = styled.input`
  padding: 0.1rem 0.3rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  color: hsla(70, 30%, 30%, 1);
  background-color: #fff;
  border-radius: 1rem;
  width: 100%;
`;

export const InputTextField = styled.input`
  grid-column-start: 2;
  grid-column-end: 4;
  padding: 0.1rem 0.3rem;
  font-size: 1rem;
  font-weight: 600;
  color: hsla(70, 30%, 30%, 1);
  background-color: #fff;
  border-radius: 1rem;
  width: 50%;
`;

export const InputCheckBox = styled.input`
  padding: 0.1rem 0.3rem;
  font-size: 1rem;
  font-weight: 600;
  color: hsla(70, 30%, 30%, 1);
  background-color: #fff;
  border-radius: 1rem;
  width: 50%;
`;

export const InputLabel = styled.label`
  margin: 0;
  padding: 0.1rem 0.3rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: right;
  color: #fff;
`;

export const SubmitButton = styled.button`
  grid-column-start: 4;
  grid-column-end: 5;
  padding: 0.3rem 1rem;
  font-size: 1rem;
  font-weight: 900;
  border-radius: 1rem;
  background-color: var(--green);
  color: #fff;
  cursor: pointer;
`;

export const AuthButton = styled.button`
  padding: 0.2rem 0.5rem;
  font-size: 1rem;
  font-weight: 800;
  color: white;
  background: var(--green);
  border-radius: 0.5rem;
  border: 0.1rem solid white;
  cursor: pointer;
  transition: all 200ms cubic-bezier(0.215, 0.61, 0.355, 1);
  &:hover {
    color: var(--green);
    background-color: white;
  }
  @media all and (max-width: 480px) {
    padding: 0rem 0.5rem;
    font-size: 3rem;
  }
`;

export const StyledLink = styled(NavLink)`
  background: hsla(24, 90%, 60%, 1);
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 0.1rem 0.5rem;
  margin: 0rem;
  text-align: left;
  text-decoration: none;
  border-radius: 1rem;
`;

export const PageLayout = styled.div`
  display: grid;
  grid-auto-flow: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 0;
  padding: 0 2rem 1rem;
  overflow: hidden;
  @media all and (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

export const ControlsLayout = styled.div`
  display: grid;
  grid-gap: 0.1rem 0.3rem;
  grid-auto-flow: column;
  justify-items: space-between;
  padding: 1rem 2rem;
  background-color: hsla(40, 80%, 70%, 1);
  border-radius: 1rem;

  @media all and (max-width: 736px) {
    grid-auto-flow: row;
  }
  @media all and (max-width: 480px) {
    grid-auto-flow: row;
  }
`;
