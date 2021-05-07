import React from "react";

import SortPanel from "../panels/SortPanel";
import FilterPanel from "../panels/FilterPanel";
import BarBox from "../BarBox";
import TransitionWrapper from "./TransitionWrapper";
import Form from "../forms/Form";
import { ControlsLayout } from "../../styles/elements";

type Props = {
  showInput: boolean;
  showFilters: boolean;
  showLimit: boolean;
};

const PanelWrapper = ({ showInput, showFilters, showLimit }: Props) => {
  return (
    <>
      <TransitionWrapper inProp={showInput}>
        <Form />
      </TransitionWrapper>
      <TransitionWrapper inProp={showFilters}>
        <ControlsLayout>
          <FilterPanel />
          <SortPanel />
        </ControlsLayout>
      </TransitionWrapper>
      <BarBox showLimit={showLimit} />
    </>
  );
};

export default PanelWrapper;
