import React from "react";
import styled from "styled-components";

import DataCard from "./DataCard";
import ImageCard from "./ImageCard";
import ButtonPanel from "./panels/ButtonPanel";
import { FoodUnit } from "../types/shared";

const CardContainer = styled.div`
  display: grid;
  grid: 2fr 1fr / 1fr;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.15);
  background: var(--yellow);
  border-radius: 0.3rem;
  overflow: hidden;
`;

type Props = {
  item: FoodUnit;
  basicButtons: boolean;
  minusToCart?: (id: number) => void;
  updateNumber?: (item: FoodUnit, id: number) => void;
  plusToCart?: (item: FoodUnit) => void;
  moveToCart?: (item: FoodUnit) => void;
  moveToStorage?: (item: FoodUnit) => void;
  pickItem?: (id: number) => void;
  removeFromStorage?: (id: number) => void;
  removeItem?: (id: number) => void;
  children?: React.ReactNode;
};

const CardBox = ({
  item,
  basicButtons,
  pickItem,
  moveToCart,
  moveToStorage,
  removeFromStorage,
  removeItem,
  minusToCart,
  plusToCart,
  updateNumber,
}: Props) => {
  return (
    <CardContainer>
      <DataCard item={item} pickItem={pickItem} />
      <ImageCard item={item} />
      <ButtonPanel
        item={item}
        basicButtons={basicButtons}
        pickItem={pickItem}
        moveToCart={moveToCart}
        moveToStorage={moveToStorage}
        removeFromStorage={removeFromStorage}
        removeItem={removeItem}
        minusToCart={minusToCart}
        plusToCart={plusToCart}
        updateNumber={updateNumber}
      />
    </CardContainer>
  );
};

export default CardBox;
