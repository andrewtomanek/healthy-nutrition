import React from "react";
import { SwitchButton, SwitchContainer } from "../../styles/elements";

type Props = {
  displayMore: () => void;
};

const MorePanel = ({ displayMore }: Props) => {
  return (
    <SwitchContainer>
      <SwitchButton onClick={() => displayMore()}>
        &#8595; Více&#8595;
      </SwitchButton>
    </SwitchContainer>
  );
};
export default MorePanel;
