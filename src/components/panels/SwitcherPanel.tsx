import React from "react";
import CalculatePanel from "./CalculatePanel";
import {BasicButton} from '../../styles/elements'
import styled from "styled-components";

const SwitchPanel = styled.div`
    width: 94%;
  display: grid;
  grid-auto-flow: column;
  justify-items: space-around;
  padding: 0.5rem 0.3rem;
  background: hsla(40,80%,70%,1);
`;

type AppProps = {
  cartControls:boolean;
  revealFilters: () => void;
  revealInput: () => void;
  revealLimit: () => void;
};

const SwitcherPanel: React.FC<AppProps> = ({cartControls,revealFilters,revealInput,revealLimit,}) =>{
  return (
    <SwitchPanel>
      {!cartControls ? (
        <>
          <BasicButton
            onClick={() => revealFilters()}
          >
            Vyfiltrovat
          </BasicButton>
          <BasicButton onClick={() => revealInput()}>
            Přidat
          </BasicButton>
          <BasicButton onClick={() => revealLimit()}>
            Limit
          </BasicButton>
        </>
      ) : (
        <>
          <CalculatePanel />
          <BasicButton onClick={() => revealLimit()}>
            Limit
          </BasicButton>
        </>
      )}
    </SwitchPanel>
  );
}

export default SwitcherPanel
