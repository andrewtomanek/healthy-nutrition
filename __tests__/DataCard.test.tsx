import React from "react";
import { shallow } from "enzyme";
import DataCard from "../src/components/DataCard";

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
};

describe("Renders DataCard", () => {
  it("renders DataCard component", () => {
    const wrapper = shallow(<DataCard {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("renders list nodes", () => {
    const wrapper = shallow(<DataCard {...props} />);
    expect(wrapper.children()).toHaveLength(8);
  });
});
