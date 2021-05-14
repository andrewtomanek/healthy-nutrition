import React, { useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { applyCalculateSum } from "../../store/actions/storageActions";
import { State } from "../../store/reducers/rootReducer";
import { FoodUnit, ValueNames } from "../../types/shared";
import {
  BasicButton,
  ControlPanel,
  SelectField,
  SelectOption,
} from "../../styles/elements";

export const CalculatePanel = (props: StateProps & DispatchProps) => {
  const sumTypes = Object.values(ValueNames);
  const [selectedSumType, setSelectedSumType] = useState("bílkoviny");
  const [sumResult, setSumResult] = useState(0);

  const calculateSum = () => {
    let sum = 0;

    for (let item of props.cart) {
      sum += item[selectedSumType];
    }

    setSumResult(sum);
    props.applyCalculateSum(sum);
  };

  return (
    <ControlPanel>
      <BasicButton onClick={() => calculateSum()}>
        {sumResult !== 0 ? sumResult.toFixed(0) : "Spočítat"}
      </BasicButton>
      <SelectField
        value={selectedSumType}
        onChange={(e) => setSelectedSumType(e.target.value)}
      >
        {sumTypes.map((item, index) => (
          <SelectOption key={index} value={item}>
            {item}
          </SelectOption>
        ))}
      </SelectField>
    </ControlPanel>
  );
};

interface StateProps {
  cart: FoodUnit[];
  foods: FoodUnit[];
  allItemSum?: null;
}

interface DispatchProps {
  applyCalculateSum: (sum: number) => void;
}

const mapStateToProps = (state: State) => ({
  foods: state.foods,
  cart: state.cart,
  allItemSum: state.allItemSum,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  applyCalculateSum: (sum: number) => dispatch(applyCalculateSum(sum)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CalculatePanel);
