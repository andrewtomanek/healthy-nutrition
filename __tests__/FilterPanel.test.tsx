import React from "react";
import { shallow } from "enzyme";
import { FilterPanel } from "../src/components/panels/FilterPanel";

const applyFilterPicked = jest.fn();
const applyFilterReset = jest.fn();

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
  applyFilterReset,
  applyFilterPicked,
};

describe("Renders FilterPanel", () => {
  it("renders FilterPanel component", () => {
    const wrapper = shallow(<FilterPanel {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("renders buttons", () => {
    const wrapper = shallow(<FilterPanel {...props} />);
    expect(wrapper.children()).toHaveLength(3);
  });
});
