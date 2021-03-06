import React from "react";
import styled from "styled-components";

type Props = {
  item: [string, number, number];
};

const BarStripe = ({ item }: Props) => {
  return (
    <BarContainer>
      <ColorBar
        style={{
          width: (item[1] / item[2]) * 100 + "%",
          background: `hsla(${
            Number(((item[1] / item[2]) * 100).toFixed(0)) < 100
              ? 100 - Number(((item[1] / item[2]) * 100).toFixed(0))
              : 0
          },  70%, 50%, 1)`,
        }}
      />
      <BarTextBox>
        <BarLabel>{item[0]}</BarLabel>
        <BarLabel>{item[1].toFixed(0)}</BarLabel> <BarLabel>{item[2]}</BarLabel>
        <BarLabel>{((item[1] / item[2]) * 100).toFixed(0) + "%"}</BarLabel>
      </BarTextBox>
    </BarContainer>
  );
};

export default BarStripe;

const BarContainer = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  grid: 1fr / 1fr;
  height: 4vh;
  z-index: 2;
  border-top: 0.1rem solid white;
  border-bottom: 0.3rem solid white;
  border-radius: 1rem;
  overflow: hidden;
`;

const BarTextBox = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-content: center;
  justify-content: space-between;
  grid-area: 1 / 1 / 1 / 1;

  background-color: transparent;
  z-index: 2;
`;

const ColorBar = styled.span`
  display: grid;
  grid-area: 1 / 1 / 1 / 1;
  height: 100%;
  width: 0%;
  background-color: orange;
  transition: all 2s ease-in-out;
  z-index: 1;
`;

const BarLabel = styled.p`
  margin: 0;
  padding: 0.1rem 1rem;
  font-size: 1rem;
  font-weight: 900;
  color: #fff;
  background-color: transparent;
  width:10vw;
}
`;
