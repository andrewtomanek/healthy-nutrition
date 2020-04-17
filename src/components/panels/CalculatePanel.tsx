import React, { useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { applycalculateSum } from "../../store/actions/storageActions";
import { FoodUnit, State } from "../../store/reducers/rootReducer";
import {
  BasicButton,
  ControlPanel,
  SelectField,
  SelectOption,
} from "../../styles/elements";

const CalculatePanel = (props: StateProps & DispatchProps) => {
  const [sumTypes] = useState([
    "bílkoviny",
    "cena",
    "kalorie",
    "množství",
    "sacharidy",
    "tuky",
    "vláknina",
  ]);
  const [selectedSumType, setSelectedSumType] = useState("bílkoviny");
  const [sumResult, setSumResult] = useState(0);

  const calculateSum = () => {
    let sum = 0;

    for (let item of props.cart) {
      sum += item[selectedSumType];
    }

    setSumResult(sum);
    props.applycalculateSum(sum);
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
  applycalculateSum: (sum: number) => void;
}

const mapStateToProps = (state: State) => ({
  foods: state.foods,
  cart: state.cart,
  allItemSum: state.allItemSum,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  applycalculateSum: (sum: number) => dispatch(applycalculateSum(sum)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CalculatePanel);
