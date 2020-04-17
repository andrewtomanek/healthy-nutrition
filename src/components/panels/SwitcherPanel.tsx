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
          <BasicButton onClick={revealFilters && (() => revealFilters())}>Vyfiltrovat</BasicButton>
          <BasicButton onClick={revealInput&& (() => revealInput())}>Přidat</BasicButton>
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
  width: 94%;
  display: grid;
  grid-auto-flow: column;
  justify-items: space-around;
  padding: 0.5rem 0.3rem;
  background: hsla(40, 80%, 70%, 1);
`;
