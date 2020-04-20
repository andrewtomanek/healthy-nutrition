import React from "react";
import { SwitchButton, SwitchContainer } from "../../styles/elements";

type Props = {
  hideCards: boolean;
  toggleCards: () => void;
};

const HidePanel = ({ hideCards, toggleCards }: Props) => {
  return (
    <SwitchContainer>
      <SwitchButton onClick={toggleCards}>
        {hideCards
          ? "\u{02191} Skrýt \u{02191}"
          : "\u{02193} Zobrazit \u{02193}"}
      </SwitchButton>
    </SwitchContainer>
  );
};

export default HidePanel;
