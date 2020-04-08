import React, { useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import {
  applyFilterReset,
  applyFilterPicked
} from "../../store/actions/storageActions";
import { FoodUnit, State } from "../../store/reducers/rootReducer";
import database from "../../data/db";
import { BasicButton, ControlPanel } from "../../styles/elements";

const FilterPanel: React.FC<StateProps & DispatchProps> = (props) => {
  const [unFiltered, setUnFiltered] = useState(database);

  const resetFilter = (newArray:FoodUnit[]) => {
    setUnFiltered(newArray);
    props.applyFilterReset(unFiltered);
  };
  const filterPicked = (sortBool:boolean) => {
    if (unFiltered < props.foods) setUnFiltered(props.foods);
    props.applyFilterPicked(sortBool);
  };

  return (
    <ControlPanel>
      <BasicButton onClick={() => resetFilter(props.foods)}>Reset</BasicButton>
      <BasicButton onClick={() => filterPicked(true)}>Označené</BasicButton>
      <BasicButton onClick={() => filterPicked(false)}>Ostatní</BasicButton>
    </ControlPanel>
  );
};

interface StateProps {
  cart: FoodUnit[];
  foods: FoodUnit[];
  allItemSum?: null;
}

interface DispatchProps {
  applyFilterReset:(initialArray: FoodUnit[])=>void;
  applyFilterPicked:(sortBool: boolean) =>void;
}

const mapStateToProps = (state: State) => ({
  foods: state.foods,
  cart: state.cart
});

const mapDispatchToProps = (dispatch: Dispatch): any => ({
  applyFilterReset: (initialArray: FoodUnit[]) =>  dispatch(applyFilterReset(initialArray)),
  applyFilterPicked: (sortBool: boolean) =>  dispatch(applyFilterPicked(sortBool))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterPanel);
