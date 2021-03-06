import React from "react";
import CalculatePanel from "./CalculatePanel";
import { BasicButton } from "../../styles/elements";
import styled from "styled-components";

type Props = {
  cartControls: boolean;
  revealFilters?: () => void;
  revealInput?: () => void;
  revealLimit: () => void;
};

const SwitcherPanel = ({
  cartControls,
  revealFilters,
  revealInput,
  revealLimit,
}: Props) => {
  return (
    <SwitchPanel>
      {!cartControls ? (
        <>
          <BasicButton onClick={revealFilters && (() => revealFilters())}>
            Vyfiltrovat
          </BasicButton>
          <BasicButton onClick={revealInput && (() => revealInput())}>
            Přidat
          </BasicButton>
          <BasicButton onClick={() => revealLimit()}>Limit</BasicButton>
        </>
      ) : (
        <>
          <CalculatePanel />
          <BasicButton onClick={() => revealLimit()}>Limit</BasicButton>
        </>
      )}
    </SwitchPanel>
  );
};

export default SwitcherPanel;

const SwitchPanel = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 1rem 0 0;
  @media all and (max-width: 480px) {
    gap: 1rem;
  }
`;
