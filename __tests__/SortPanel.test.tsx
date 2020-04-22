import React from "react";
import { shallow } from "enzyme";
import { SortPanel } from "../src/components/panels/SortPanel";

const applyFilterWord = jest.fn();
const displayInformation = jest.fn();

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
  applyFilterWord,
  displayInformation,
};

describe("Renders SortPanel", () => {
  it("renders SortPanel component", () => {
    const wrapper = shallow(<SortPanel {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("renders buttons and selects", () => {
    const wrapper = shallow(<SortPanel {...props} />);
    expect(wrapper.children()).toHaveLength(4);
  });

  it("renders option low", () => {
    const wrapper = shallow(<SortPanel {...props} />);
    expect(wrapper.find({ value: "Nejnižší" }).text()).toEqual("Nejnižší");
  });

  it("renders all options", () => {
    const wrapper = shallow(<SortPanel {...props} />);
    expect(wrapper.find({ value: "kalorie" }).at(0).children().length).toBe(7);
  });
});
