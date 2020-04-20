import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FoodUnit } from "../../store/reducers/rootReducer";
import { BasicButton, GreenButton, RedButton } from "../../styles/elements";

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

  const handleInput = (e: any) => {
    let currentValue = e.target.value;
    setQuantity(e.target.value);
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
        <BasicButton onClick={moveToCart && (() => moveToCart(item))}>
          {"\u{1F6D2}"}
        </BasicButton>
      ) : (
        <BasicButton onClick={moveToStorage && (() => moveToStorage(item))}>
          {"\u{1F5D1}"}
        </BasicButton>
      )}
      <BasicButton onClick={pickItem && (() => pickItem(item.id))}>
        {"\u{2714}"}
      </BasicButton>
      {basicButtons ? (
        <BasicButton
          onClick={removeFromStorage && (() => removeFromStorage(item.id))}
        >
          {"\u{274C}"}
        </BasicButton>
      ) : (
        <BasicButton onClick={removeItem && (() => removeItem(item.id))}>
          {"\u{274C}"}
        </BasicButton>
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

const ControlsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-content: end;
  justify-content: center;
  grid-area: 2 / 1 / 3 / 1;
  z-index: 4;
  height: 100%;
  width: 100%;
  font-size: 1rem;
  font-weight: 900;
  color: #fff;
`;

const UnitInput = styled.input`
  width: 80%;
  margin: 0;
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
