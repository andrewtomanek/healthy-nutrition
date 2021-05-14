import React, { useState, useEffect } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import SwitcherPanel from "../components/panels/SwitcherPanel";
import ItemsList from "../components/ItemsList";
import BarBox from "../components/BarBox";
import EmptyCart from "../components/EmptyCart";
import PageWrapper from "../components/Layout/PageWrapper";
import TransitionWrapper from "../components/Layout/TransitionWrapper";
import HidePanel from "../components/panels/HidePanel";
import {
  addToStorage,
  toggleCartComplete,
  deleteCartAction,
  deleteStorageAction,
  applyFilterReset,
  applyCartRefresh,
} from "../store/actions/storageActions";
import { State } from "../store/reducers/rootReducer";
import { FoodUnit } from "../types/shared";
import database from "../data/db";

const Cart = (props: StateProps & DispatchProps) => {
  const [showLimit, setShowLimit] = useState(false);
  const [displayElement, setDisplayElement] = useState(true);

  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    let inventory = localStorage.getItem("inventory");
    let cartSession = localStorage.getItem("cart");
    let initialArray: FoodUnit[] = [];
    for (let i = 0; i < 5; i++) {
      initialArray.push(database[i]);
    }
    if (
      JSON.stringify(props.foods) === JSON.stringify(initialArray) &&
      inventory
    ) {
      props.applyFilterReset(JSON.parse(inventory));
      if (cartSession) props.applyCartRefresh(JSON.parse(cartSession));
    }
    setInProp(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("inventory", JSON.stringify(props.foods));
    localStorage.setItem("cart", JSON.stringify(props.cart));
  });

  const revealLimit = () => {
    setShowLimit(!showLimit);
  };

  const moveToStorage = (item: FoodUnit) => {
    props.addToStorage(item);
    props.deleteStorageAction(item.id);
  };

  const pickItem = (id: number) => {
    props.toggleCartComplete(id);
  };

  const removeItem = (id: number) => {
    props.deleteCartAction(id);
  };

  const toggleElement = () => {
    setDisplayElement(!displayElement);
  };

  return (
    <PageWrapper inProp={inProp} animationName={"anim-left"}>
      <>
        <SwitcherPanel revealLimit={revealLimit} cartControls />
        <BarBox showLimit={showLimit} />
        <TransitionWrapper inProp={displayElement}>
          <>
            {props.cart.length > 0 ? (
              <ItemsList
                foods={props.cart}
                moveToStorage={moveToStorage}
                removeItem={removeItem}
                pickItem={pickItem}
                basicButtons={false}
              />
            ) : (
              <EmptyCart showResetButton={false} />
            )}
          </>
        </TransitionWrapper>
        <HidePanel
          displayElement={displayElement}
          toggleElement={toggleElement}
        />
      </>
    </PageWrapper>
  );
};

interface StateProps {
  cart: FoodUnit[];
  foods: FoodUnit[];
  allItemSum?: null;
}

interface DispatchProps {
  addToStorage: (item: FoodUnit) => void;
  toggleCartComplete: (id: number) => void;
  deleteCartAction: (id: number) => void;
  deleteStorageAction: (id: number) => void;
  applyFilterReset: (initialArray: FoodUnit[]) => void;
  applyCartRefresh: (cartSession: string) => void;
}

const mapStateToProps = (state: State) => ({
  foods: state.foods,
  cart: state.cart,
  allItemSum: state.allItemSum,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addToStorage: (item: FoodUnit) => dispatch(addToStorage(item)),
  toggleCartComplete: (id: number) => dispatch(toggleCartComplete(id)),
  deleteCartAction: (id: number) => dispatch(deleteCartAction(id)),
  deleteStorageAction: (id: number) => dispatch(deleteStorageAction(id)),
  applyFilterReset: (initialArray: FoodUnit[]) =>
    dispatch(applyFilterReset(initialArray)),
  applyCartRefresh: (cartSession: string) =>
    dispatch(applyCartRefresh(cartSession)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
