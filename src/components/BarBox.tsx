import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from 'redux'
import { updateCalculateSum } from "../store/actions/storageActions";
import FormLimit from "./forms/FormLimit";
import BarStripe from "./panels/BarStripe";
import { CSSTransition } from "react-transition-group";
import { FoodUnit,State } from "../store/reducers/rootReducer";
import styled from "styled-components";

const BarContainer = styled.div`
  margin: 0;
  padding: 0.2rem 0rem;
  width: 95%;
  background-color: hsla(54, 60%, 70%, 1);
  border-radius: 0rem 0rem 0.3rem 0.3rem;
`;

type AppProps = {
showLimit:  boolean;
updateItemSum:FoodUnit[];
}

const BarBox : React.FC<AppProps& StateProps & DispatchProps> = (props) => {
  const [barData, setbarData] = useState<FoodUnit[]>([]);
  const [barInitValues, setBarInitValues] = useState({
    množství: 10,
    cena: 200,
    bílkoviny: 56,
    kalorie: 2000,
    sacharidy: 130,
    tuky: 70,
    vláknina: 38,
  });

  useEffect(() => {
    let oldValue = 0;
    let initCart = [
      {
        id: 0,
        image: "",
        picked: false,
        množství: 0,
        cena: 0,
        bílkoviny: 0,
        kalorie: 0,
        sacharidy: 0,
        tuky: 0,
        vláknina: 0,
      },
    ];
    let map = new Map();
    let set = new Set();
    if (props.cart.length > 0) {
      initCart = props.cart;
    }
    for (let item of initCart) {
      for (let itemEntry of Object.entries(item)) {
        if (
          typeof itemEntry[1] === "number" &&
          typeof itemEntry[1] !== "boolean" &&
          itemEntry[0] !== "id"
        ) {
          set.add(itemEntry[0]);
          for (let key of set.keys()) {
            oldValue = map.get(key) || 0;
            if (key === itemEntry[0]) {
              map.set(key, itemEntry[1] + oldValue);
            }
          }
        }
      }
    }
    let mapEntriesArray: Array<[string, number]> = [];
    for (let entry of map.entries()) {
      mapEntriesArray.push(entry);
    }
    props.updateCalculateSum(mapEntriesArray);
  }, [props.cart, barInitValues]);

  useEffect(() => {
    let oldArray:FoodUnit[] = props.updateItemSum;
    let objectArray = Object.values(barInitValues);
    if (oldArray) {
      for (var i = 0; i < oldArray.length; i++) {
        oldArray[i].push(objectArray[i]);
      }
      setbarData(oldArray);
    }
  }, [props.updateItemSum, barInitValues]);

  const updateBarValues = (initObject) => {
    setBarInitValues(initObject);
  };

  return (
    <BarContainer>
      <CSSTransition
        in={props.showLimit}
        timeout={300}
        classNames="alert"
        unmountOnExit
      >
        <FormLimit updateBarValues={updateBarValues} />
      </CSSTransition>

      {barData.map((item, index) => (
        <BarStripe item={item} key={index} />
      ))}
    </BarContainer>
  );
};

interface StateProps {
  cart: FoodUnit[];
foods: FoodUnit[];
}

interface DispatchProps {
  updateCalculateSum: (mapEntriesArray:[string, number][])=> [string, number][];

}

const mapStateToProps = (state: State) => ({
  foods: state.foods,
  cart: state.cart,
  updateItemSum: state.updateItemSum,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateCalculateSum: (mapEntriesArray:[string, number][])=> dispatch(updateCalculateSum(mapEntriesArray)),
})

export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(BarBox);
