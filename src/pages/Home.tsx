import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import Form from "../components/forms/Form";
import SwitcherPanel from "../components/panels/SwitcherPanel";
import SortPanel from "../components/panels/SortPanel";
import FilterPanel from "../components/panels/FilterPanel";
import MorePanel from "../components/panels/MorePanel";
import HidePanel from "../components/panels/HidePanel";
import BarBox from "../components/BarBox";
import ItemsList from "../components/ItemsList";
import EmptyCart from "../components/EmptyCart";
import Footer from "../components/Footer";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import {
  applyFilterReset,
  applyCartRefresh,
  addToCart,
  fillStorage,
  updateQuantity,
  toggleFoodComplete,
  deleteFoodAction,
  deleteCartAction,
} from "../store/actions/storageActions";
import { FoodUnit, State } from "../store/reducers/rootReducer";
import database from "../data/db";
import { PageLayout, ControlsLayout } from "../styles/elements";


const Home : React.FC<StateProps & DispatchProps> = (props) => {
  const [showFilters, setShowFilters] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [showLimit, setShowLimit] = useState(false);
  const [hideCards, setHideCards] = useState(true);
  const [inProp, setInProp] = useState(false);
  let [dataIndex, setDataIndex] = useState(4);

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

  const displayMore = () => {
    if (!props.foods) return;
    if (database.length < dataIndex) return;
    if (dataIndex <= 4) dataIndex = 8;
    setDataIndex(dataIndex + 4);
    let initialArray = database;
    for (let i = 0; i < dataIndex; i++) {
      props.fillStorage(initialArray[i]);
    }
  };

  const revealFilters = () => {
    setShowFilters(!showFilters);
  };

  const revealInput = () => {
    setShowInput(!showInput);
  };

  const revealLimit = () => {
    setShowLimit(!showLimit);
  };

  const toggleCards = () => {
    setHideCards(!hideCards);
  };

  const minusToCart = (id: number) => {
    props.deleteCartAction(id);
  };

  const plusToCart = (item: FoodUnit) => {
    props.addToCart(item);
  };

  const moveToCart = (item: FoodUnit) => {
    props.addToCart(item);
    props.deleteFoodAction(item.id);
  };

  const pickItem = (id: number) => {
    props.toggleFoodComplete(id);
  };

  const updateNumber = (item: FoodUnit, id: number) => {
    const quantityData:[FoodUnit, number] = [item, id]
    props.updateQuantity(quantityData);
  };

  const removeFromStorage = (id: number) => {
    props.deleteFoodAction(id);
  };

  const resetFilter = () => {
    let initialArray: FoodUnit[] = [];
    for (let i = 0; i < 5; i++) {
      initialArray.push(database[i]);
    }
    localStorage.setItem("inventory", JSON.stringify(initialArray));
    props.applyFilterReset(initialArray);
  };

  return (
    <CSSTransition
      component={null}
      in={inProp}
      timeout={500}
      classNames="anim-right"
      mountOnEnter
      unmountOnExit
    >
      <PageLayout>
        <SwitcherPanel
          cartControls={false}
          revealFilters={revealFilters}
          revealInput={revealInput}
          revealLimit={revealLimit}
        />
        <CSSTransition
          in={showInput}
          timeout={300}
          classNames="alert"
          unmountOnExit
        >
          <Form />
        </CSSTransition>
        <CSSTransition
          in={showFilters}
          timeout={300}
          classNames="alert"
          unmountOnExit
        >
          <ControlsLayout>
            <FilterPanel />
            <SortPanel />
          </ControlsLayout>
        </CSSTransition>
        <BarBox showLimit={showLimit} />
        <HidePanel hideCards={hideCards} toggleCards={toggleCards} />
        <CSSTransition
          in={hideCards}
          timeout={300}
          classNames="alert"
          unmountOnExit
        >
          {props.foods && props.foods.length > 0 ? (
            <>
              <ItemsList
                foods={props.foods}
                minusToCart={minusToCart}
                updateNumber={updateNumber}
                plusToCart={plusToCart}
                moveToCart={moveToCart}
                pickItem={pickItem}
                removeFromStorage={removeFromStorage}
                basicButtons
              />
              <MorePanel displayMore={displayMore} />
            </>
          ) : (
            <EmptyCart resetFilter={resetFilter} showResetButton />
          )}
        </CSSTransition>
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
  applyFilterReset:(initialArray: FoodUnit[])=>void;
  applyCartRefresh:(cartSession:string)=>void;
  addToCart:(item: FoodUnit)=>void;
  toggleFoodComplete:(id: number)=>void;
  updateQuantity:(quantityData:[FoodUnit, number])=>void;
  deleteFoodAction:(id: number)=>void;
  deleteCartAction:(id: number)=>void;
  fillStorage:(item: FoodUnit)=>void;
}

const mapStateToProps = (state: State) => ({
  foods: state.foods,
  cart: state.cart,
  allItemSum: state.allItemSum,
});

const mapDispatchToProps = (dispatch: Dispatch): any => ({
  applyFilterReset: (initialArray: FoodUnit[]) =>  dispatch(applyFilterReset(initialArray)),
  applyCartRefresh: (cartSession:string) =>  dispatch(applyCartRefresh(cartSession)),
  addToCart: (item: FoodUnit) =>  dispatch(addToCart(item)),
  toggleFoodComplete: (id: number) =>  dispatch(toggleFoodComplete(id)),
  updateQuantity: (quantityData:[FoodUnit, number]) =>  dispatch(updateQuantity(quantityData)),
  deleteFoodAction: (id: number) =>  dispatch(deleteFoodAction(id)),
  deleteCartAction: (id: number) =>  dispatch(deleteCartAction(id)),
  fillStorage: (item: FoodUnit) =>  dispatch(fillStorage(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
