import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import styled from "styled-components";

import { updateCalculateSum } from "../store/actions/storageActions";
import FormLimit from "./forms/FormLimit";
import BarStripe from "./panels/BarStripe";
import HidePanel from "./panels/HidePanel";
import TransitionWrapper from "../components/Layout/TransitionWrapper";
import { State, BarData } from "../store/reducers/rootReducer";
import { FoodUnit } from "../types/shared";
import { InputNumbers } from "./forms/FormLimit";
import { calculateCart } from "../utils/BarCalculations";

type Props = {
  showLimit: boolean;
};

const BarBox = (props: Props & StateProps & DispatchProps) => {
  const [barData, setbarData] = useState<BarData>([]);
  const [displayElement, setDisplayElement] = useState(true);
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
    const mapEntriesArray: Array<[string, number]> = calculateCart(props.cart);
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

  const toggleElement = () => {
    setDisplayElement(!displayElement);
  };

  return (
    <BarContainer>
      {displayElement && (
        <>
          <TransitionWrapper inProp={props.showLimit}>
            <FormLimit updateBarValues={updateBarValues} />
          </TransitionWrapper>
          {barData.map((item, index) => (
            <BarStripe item={item} key={index} />
          ))}
        </>
      )}
      <HidePanel
        displayElement={displayElement}
        toggleElement={toggleElement}
      />
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
  min-width: 90vw;
`;
