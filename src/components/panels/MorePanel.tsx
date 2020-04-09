import React from "react";
import { SwitchButton, SwitchContainer } from "../../styles/elements";

type AppProps = {
  displayMore: () => void;
};

const MorePanel: React.FC<AppProps> = ({ displayMore }) =>{
  return (
    <SwitchContainer>
      <SwitchButton onClick={() => displayMore()}>
        &#8595; Více&#8595;
      </SwitchButton>
    </SwitchContainer>
  );
}
export default MorePanel