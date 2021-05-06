import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FoodUnit } from "../../types/shared";
import { BasicButton } from "../../styles/elements";

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
};

const ButtonPanel = ({
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
  const [itemQuantity, setQuantity] = useState(1);
  const [oldItem, setOldItem] = useState(item);

  useEffect(() => {
    setOldItem(item);
  }, [item]);

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    let currentValue = +e.currentTarget.value;
    setQuantity(currentValue);
    let newItem = {
      ...item,
      picked: true,
      cena: +((oldItem.cena / oldItem.množství) * currentValue),
      kalorie: +((oldItem.kalorie / oldItem.množství) * currentValue),
      tuky: +((oldItem.tuky / oldItem.množství) * currentValue),
      sacharidy: +((oldItem.sacharidy / oldItem.množství) * currentValue),
      vláknina: +((oldItem.vláknina / oldItem.množství) * currentValue),
      bílkoviny: +((oldItem.bílkoviny / oldItem.množství) * currentValue),
      množství: +currentValue,
    };
    if (updateNumber) updateNumber(newItem, item.id);
  };

  return (
    <ControlsContainer
      style={{ gridTemplateRows: basicButtons ? "1fr 1fr" : "1fr" }}
    >
      {basicButtons ? (
        <SquareButton onClick={moveToCart && (() => moveToCart(item))}>
          {"\u{1F6D2}"}
        </SquareButton>
      ) : (
        <SquareButton onClick={moveToStorage && (() => moveToStorage(item))}>
          {"\u{1F5D1}"}
        </SquareButton>
      )}
      <SquareButton onClick={pickItem && (() => pickItem(item.id))}>
        {"\u{2714}"}
      </SquareButton>
      {basicButtons ? (
        <SquareButton
          onClick={removeFromStorage && (() => removeFromStorage(item.id))}
        >
          {"\u{274C}"}
        </SquareButton>
      ) : (
        <SquareButton onClick={removeItem && (() => removeItem(item.id))}>
          {"\u{274C}"}
        </SquareButton>
      )}
      {basicButtons && (
        <>
          <RedButton onClick={minusToCart && (() => minusToCart(item.id))}>
            -
          </RedButton>
          <UnitInput
            type="number"
            min="1"
            value={itemQuantity}
            onChange={(e) => handleInput(e)}
          />
          <GreenButton onClick={plusToCart && (() => plusToCart(item))}>
            +
          </GreenButton>
        </>
      )}
    </ControlsContainer>
  );
};

export default ButtonPanel;

const SquareButton = styled(BasicButton)`
  border-radius: 0;
`;

const GreenButton = styled(BasicButton)`
  background-color: var(--green);
  color: hsla(24, 70%, 50%, 1);
  border-radius: 0;
  &:hover {
    color: var(--green);
    background-color: hsla(24, 70%, 50%, 1);
  }
`;

const RedButton = styled(BasicButton)`
  background-color: var(--green);
  color: red;
  border-radius: 0;
  &:hover {
    background-color: red;
    color: var(--green);
  }
`;

const ControlsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  justify-content: center;
  grid-area: 2 / 1 / 3 / 1;
  z-index: 4;
  font-size: 1rem;
  font-weight: 900;
  padding: 0.5rem;
  gap: 1rem 0.5rem;
  color: #fff;
`;

const UnitInput = styled.input`
  width: 80%;
  padding: 0.1rem 0.3rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  background-color: var(--green);
  color: #fff;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
