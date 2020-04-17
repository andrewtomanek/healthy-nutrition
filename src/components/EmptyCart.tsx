import React from "react";
import { BasicButton } from "../styles/elements";
import styled from "styled-components";

type Props = {
  showResetButton: boolean;
  resetFilter?: () => void;
};

const EmptyCart = ({ resetFilter, showResetButton }: Props) => {
  return (
    <EmptyContainer>
      {showResetButton && resetFilter ? (
        <BasicButton onClick={() => resetFilter()}>Znovu</BasicButton>
      ) : (
        <EmptyText>Žádné položky</EmptyText>
      )}
    </EmptyContainer>
  );
};

export default EmptyCart;

const EmptyContainer = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  background-color: var(--orange);
  border-radius: 1rem;
  padding: 1rem;
  min-width: 90vw;
  min-height: 20vh;
`;

const EmptyText = styled.p`
  display: grid;
  align-content: center;
  justify-content: center;
  background-color: var(--orange);
  border-radius: 1rem;
  padding: 1rem;
  min-width: 90vw;
  min-height: 20vh;
`;
