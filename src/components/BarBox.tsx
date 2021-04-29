import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import styled from "styled-components";

import { updateCalculateSum } from "../store/actions/storageActions";
import FormLimit from "./forms/FormLimit";
import BarStripe from "./panels/BarStripe";
import TransitionWrapper from "../components/Layout/TransitionWrapper";
import { State, BarData } from "../store/reducers/rootReducer";
import { FoodUnit } from "../types/shared";
import { InputNumbers } from "./forms/FormLimit";

type Props = {
  showLimit: boolean;
};

const BarBox = (props: Props & StateProps & DispatchProps) => {
  const [barData, setbarData] = useState<BarData>([]);
  const [barInitValues, setBarInitValues] = useState({
    bílkoviny: 56,
    cena: 200,
    kalorie: 2000,
    množství: 10,
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
        bílkoviny: 0,
        cena: 0,
        kalorie: 0,
        množství: 0,
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
    let oldArray: BarData = props.updateItemSum;
    let objectArray = Object.values(barInitValues);
    if (oldArray) {
      for (var i = 0; i < oldArray.length; i++) {
        oldArray[i].push(objectArray[i]);
      }
      setbarData(oldArray);
    }
  }, [props.updateItemSum, barInitValues]);

  const updateBarValues = (initObject: InputNumbers) => {
    setBarInitValues(initObject);
  };

  return (
    <BarContainer>
      <TransitionWrapper inProp={props.showLimit}>
        <FormLimit updateBarValues={updateBarValues} />
      </TransitionWrapper>
      {barData.map((item, index) => (
        <BarStripe item={item} key={index} />
      ))}
    </BarContainer>
  );
};

interface StateProps {
  cart: FoodUnit[];
  foods: FoodUnit[];
  updateItemSum: BarData;
}

interface DispatchProps {
  updateCalculateSum: (sum: [string, number][]) => [string, number][];
}

const mapStateToProps = (state: State) => ({
  foods: state.foods,
  cart: state.cart,
  updateItemSum: state.updateItemSum,
});

const mapDispatchToProps = (dispatch: Dispatch): any => ({
  updateCalculateSum: (sum: [string, number][]) =>
    dispatch(updateCalculateSum(sum)),
});

export default connect<StateProps, DispatchProps, Props, State>(
  mapStateToProps,
  mapDispatchToProps
)(BarBox);

const BarContainer = styled.div`
  display: grid;
  align-items: center;
  padding: 1rem;
  border-radius: 1rem;
  gap: 0.5rem;
  background-color: hsla(54, 60%, 70%, 1);
`;
