import React from "react";
import { shallow } from "enzyme";
import { CalculatePanel } from "../src/components/panels/CalculatePanel";

const applycalculateSum = jest.fn();

const props = {
  foods: [
    {
      bílkoviny: 2.5,
      cena: 6,
      id: 2,
      image: "špenát",
      kalorie: 15,
      množství: 1,
      picked: false,
      sacharidy: 0.6,
      tuky: 0.3,
      vláknina: 2,
    },
    {
      bílkoviny: 0.7,
      cena: 15,
      id: 3,
      image: "mandarinky",
      kalorie: 49,
      množství: 1,
      picked: false,
      sacharidy: 10.1,
      tuky: 0.3,
      vláknina: 1.9,
    },
  ],
  cart: [
    {
      bílkoviny: 2.5,
      cena: 6,
      id: 2,
      image: "špenát",
      kalorie: 15,
      množství: 1,
      picked: false,
      sacharidy: 0.6,
      tuky: 0.3,
      vláknina: 2,
    },
    {
      bílkoviny: 0.7,
      cena: 15,
      id: 3,
      image: "mandarinky",
      kalorie: 49,
      množství: 1,
      picked: false,
      sacharidy: 10.1,
      tuky: 0.3,
      vláknina: 1.9,
    },
  ],
  applycalculateSum,
};

describe("Renders CalculatePanel", () => {
  it("renders CalculatePanel component", () => {
    const wrapper = shallow(<CalculatePanel {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("renders list nodes", () => {
    const wrapper = shallow(<CalculatePanel {...props} />);
    expect(wrapper.children()).toHaveLength(2);
  });
});
