import React from "react";
import { SwitchButton, SwitchContainer } from "../../styles/elements";

type Props = {
  displayElement: boolean;
  toggleElement: () => void;
};

const HidePanel = ({ displayElement, toggleElement }: Props) => {
  return (
    <SwitchContainer>
      <SwitchButton onClick={toggleElement}>
        {displayElement
          ? "\u{02191} Skrýt \u{02191}"
          : "\u{02193} Zobrazit \u{02193}"}
      </SwitchButton>
    </SwitchContainer>
  );
};

export default HidePanel;
