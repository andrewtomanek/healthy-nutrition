import React, { useState, useEffect } from "react";
import SwitcherPanel from "../components/panels/SwitcherPanel";
import ItemsList from "../components/ItemsList";
import BarBox from "../components/BarBox";
import EmptyCart from "../components/EmptyCart";
import Footer from "../components/Footer";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import {
  addToStorage,
  toggleCartComplete,
  deleteCartAction,
  deleteStorageAction,
  applyFilterReset,
  applyCartRefresh,
} from "../store/actions/storageActions";
import { FoodUnit, State } from "../store/reducers/rootReducer";
import database from "../data/db";
import { CSSTransition } from "react-transition-group";
import { PageLayout } from "../styles/elements";

const Cart : React.FC<StateProps & DispatchProps> = (props) => {
  const [showLimit, setShowLimit] = useState(false);
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

  return (
    <CSSTransition
      component={null}
      in={inProp}
      timeout={500}
      classNames="anim-left"
      mountOnEnter
      unmountOnExit
    >
      <PageLayout>
        <SwitcherPanel revealLimit={revealLimit} cartControls />
        <BarBox showLimit={showLimit} />
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
        <Footer />
      </PageLayout>
    </CSSTransition>
  );
};

interface StateProps {
  cart: FoodUnit[];
  foods: FoodUnit[];
  allItemSum?: null;
}

interface DispatchProps {
  addToStorage:(item: FoodUnit)=>void;
  toggleCartComplete:(id: number)=>void;
  deleteCartAction:(id: number)=>void;
  deleteStorageAction:(id: number)=>void;
  applyFilterReset:(initialArray: FoodUnit[])=>void;
  applyCartRefresh:(cartSession:string)=>void;
}

const mapStateToProps = (state: State) => ({
  foods: state.foods,
  cart: state.cart,
  allItemSum: state.allItemSum
});

const mapDispatchToProps = (dispatch: Dispatch): any => ({
  addToStorage: (item: FoodUnit) =>  dispatch(addToStorage(item)),
  toggleCartComplete: (id: number) =>  dispatch(toggleCartComplete(id)),
  deleteCartAction: (id: number) =>  dispatch(deleteCartAction(id)),
  deleteStorageAction: (id: number) =>  dispatch(deleteStorageAction(id)),
  applyFilterReset: (initialArray: FoodUnit[]) =>  dispatch(applyFilterReset(initialArray)),
  applyCartRefresh: (cartSession:string) =>  dispatch(applyCartRefresh(cartSession))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
