import React, { useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import {
  applyFilterWord,
  displayInformation,
} from "../../store/actions/storageActions";
import {
  BasicButton,
  ControlPanel,
  SelectField,
  SelectOption,
} from "../../styles/elements";
import { State } from "../../store/reducers/rootReducer";
import { FoodUnit, ValueNames } from "../../types/shared";
import { filterItems } from "../../utils/filterSorting";

export const SortPanel = (props: StateProps & DispatchProps) => {
  const sortTypes = Object.values(ValueNames);
  const [sortDirection] = useState(["Nejnižší", "Nejvyšší"]);
  const [selectedSortType, setSortString] = useState("kalorie");
  const [selectedSortBy, setSortBy] = useState("Nejvyšší");

  const selectFilter = () => {
    const filteredData: any = filterItems(
      props.foods,
      props.cart,
      selectedSortType,
      selectedSortBy
    );
    props.applyFilterWord(filteredData);
  };

  return (
    <ControlPanel>
      <BasicButton onClick={() => props.displayInformation()}>Data</BasicButton>
      <SelectField
        value={selectedSortType}
        onChange={(e) => setSortString(e.target.value)}
      >
        {sortTypes.map((item, index) => (
          <SelectOption key={index} value={item}>
            {item}
          </SelectOption>
        ))}
      </SelectField>
      <SelectField
        value={selectedSortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        {sortDirection.map((item, index) => (
          <SelectOption key={index} value={item}>
            {item}
          </SelectOption>
        ))}
      </SelectField>
      <BasicButton onClick={() => selectFilter()}>Seřadit</BasicButton>
    </ControlPanel>
  );
};

interface StateProps {
  cart: FoodUnit[];
  foods: FoodUnit[];
}

interface DispatchProps {
  applyFilterWord: (filteredData: [FoodUnit[], FoodUnit[]]) => void;
  displayInformation: () => void;
}

const mapStateToProps = (state: State) => ({
  foods: state.foods,
  cart: state.cart,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  applyFilterWord: (filteredData: [FoodUnit[], FoodUnit[]]) =>
    dispatch(applyFilterWord(filteredData)),
  displayInformation: () => dispatch(displayInformation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SortPanel);
