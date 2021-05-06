import React from "react";
import styled from "styled-components";

import { FoodUnit } from "../types/shared";

type Props = {
  item: FoodUnit;
  pickItem?: (id: number) => void;
};

const DataCard = ({ item, pickItem }: Props) => {
  return (
    <TextBox onClick={pickItem && (() => pickItem(item.id))}>
      <TextField>Název: {item.image}</TextField>
      <TextField>Cena: {item.cena.toFixed(0)}</TextField>
      <TextField>Kalorie: {item.kalorie.toFixed(0)}</TextField>
      <TextField>Tuky: {item.tuky.toFixed(0)}</TextField>
      <TextField>Sacharidy: {item.sacharidy.toFixed(0)}</TextField>
      <TextField>Vláknina: {item.vláknina.toFixed(0)}</TextField>
      <TextField>Bílkoviny: {item.bílkoviny.toFixed(0)}</TextField>
      <TextField>Množství: {item.množství.toFixed(0)}</TextField>
    </TextBox>
  );
};

export default DataCard;

const TextBox = styled.div`
  place-self: start center;
  display: grid;
  grid-auto-flow: row;
  align-items: center;
  justify-content: center;
  grid-area: 1 / 1 / 3 / 1;
  margin: 1rem;
  z-index: 2;
`;

const TextField = styled.p`
  margin: 0;
  padding: 0.1rem 0.5rem;
  font-size: 1rem;
  font-weight: 900;
  color: #fff;
  background-color: var(--orange);
  @media all and (max-width: 980px) {
    font-size: 1.3rem;
  }
  @media all and (max-width: 736px) {
    font-size: 1.5rem;
  }
  @media all and (max-width: 480px) {
    font-size: 2rem;
  }
`;
