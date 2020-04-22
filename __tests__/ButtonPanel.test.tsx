import React from "react";
import { shallow } from "enzyme";
import ButtonPanel from "../src/components/panels/ButtonPanel";

const minusToCart = jest.fn();
const updateNumber = jest.fn();
const plusToCart = jest.fn();
const moveToCart = jest.fn();
const moveToStorage = jest.fn();
const pickItem = jest.fn();
const removeFromStorage = jest.fn();
const removeItem = jest.fn();

const props = {
  item: {
    bílkoviny: 1,
    cena: 6,
    id: 1,
    image: "rajčata",
    kalorie: 19,
    množství: 1,
    picked: false,
    sacharidy: 2.9,
    tuky: 0.2,
    vláknina: 1,
  },
  basicButtons: true,
  minusToCart,
  updateNumber,
  plusToCart,
  moveToCart,
  moveToStorage,
  pickItem,
  removeFromStorage,
  removeItem,
};

describe("Renders ButtonPanel", () => {
  it("renders ButtonPanel component", () => {
    const wrapper = shallow(<ButtonPanel {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("renders icons", () => {
    const wrapper = shallow(<ButtonPanel {...props} />);
    expect(wrapper.text()).toContain("✔❌-+");
  });

  it("renders children", () => {
    const wrapper = shallow(<ButtonPanel {...props} />);
    expect(wrapper.children()).toHaveLength(6);
  });
});
