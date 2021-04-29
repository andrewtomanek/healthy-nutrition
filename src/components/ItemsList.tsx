import React from "react";
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import CardBox from "../components/CardBox";
import { FoodUnit } from "../types/shared";

type Props = {
  foods: FoodUnit[];
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

const ItemsList = ({
  foods,
  minusToCart,
  updateNumber,
  plusToCart,
  moveToCart,
  moveToStorage,
  pickItem,
  removeFromStorage,
  removeItem,
  basicButtons,
}: Props) => {
  return (
    <ListContainer>
      <TransitionGroup component={null}>
        {foods.map((item) => (
          <CSSTransition
            key={item.id}
            appear={true}
            timeout={300}
            classNames="item"
          >
            <CardBox
              key={item.id}
              item={item}
              minusToCart={minusToCart}
              updateNumber={updateNumber}
              plusToCart={plusToCart}
              moveToCart={moveToCart}
              moveToStorage={moveToStorage}
              pickItem={pickItem}
              removeFromStorage={removeFromStorage}
              removeItem={removeItem}
              basicButtons={basicButtons}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ListContainer>
  );
};

export default ItemsList;

const ListContainer = styled.section`
  display: grid;
  grid-gap: 2rem 2rem;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  align-content: space-between;
  justify-content: space-between;
  background-color: hsla(24, 90%, 90%, 1);
  border-radius: 0.5rem;
  padding: 2rem;
  max-width: 90vw;
  @media all and (max-width: 2380px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media all and (max-width: 1980px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media all and (max-width: 1680px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media all and (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media all and (max-width: 736px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media all and (max-width: 480px) {
    display: grid;
    grid-template-columns: 100%;
  }
`;
