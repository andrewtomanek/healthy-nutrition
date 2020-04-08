import React, { useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import {
  applyFilterWord,
  displayInformation,
} from "../../store/actions/storageActions";
import { FoodUnit, State } from "../../store/reducers/rootReducer";
import {
  BasicButton,
  ControlPanel,
  SelectField,
  SelectOption,
} from "../../styles/elements";

const SortPanel: React.FC<StateProps & DispatchProps> = (props) => {
  const [sortTypes] = useState([
    "bílkoviny",
    "cena",
    "kalorie",
    "množství",
    "sacharidy",
    "tuky",
    "vláknina",
  ]);
  const [sortDirection] = useState(["Nejnižší", "Nejvyšší"]);
  const [selectedSortType, setSortString] = useState("kalorie");
  const [selectedSortBy, setSortBy] = useState("Nejvyšší");

  const selectFilter = () => {
    let foodArray: FoodUnit[] = [];
    let cartArray: FoodUnit[] = [];
    if (selectedSortBy === "Nejnižší") {
      foodArray = props.foods.sort((a: FoodUnit, b: FoodUnit) =>
        a[selectedSortType] > b[selectedSortType] ? 1 : -1
      );
      cartArray = props.cart.sort((a: FoodUnit, b: FoodUnit) =>
        a[selectedSortType] > b[selectedSortType] ? 1 : -1
      );
    } else if (selectedSortBy === "Nejvyšší") {
      foodArray = props.foods.sort((a: FoodUnit, b: FoodUnit) =>
        a[selectedSortType] < b[selectedSortType] ? 1 : -1
      );
      cartArray = props.cart.sort((a: FoodUnit, b: FoodUnit) =>
        a[selectedSortType] < b[selectedSortType] ? 1 : -1
      );
    }
    props.applyFilterWord([foodArray, cartArray]);
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

const mapDispatchToProps = (dispatch: Dispatch): any => ({
  applyFilterWord: (filteredData: [FoodUnit[], FoodUnit[]]) =>
    dispatch(applyFilterWord(filteredData)),
  displayInformation: () => dispatch(displayInformation()),
});
export default connect(mapStateToProps, mapDispatchToProps)(SortPanel);
