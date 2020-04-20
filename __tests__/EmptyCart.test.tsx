import React from "react";
import { shallow } from "enzyme";
import EmptyCart from "../src/components/EmptyCart";

const props = {
  showResetButton: true,
};

describe("Renders EmptyCart", () => {
  it("renders EmptyCart component", () => {
    const wrapper = shallow(<EmptyCart {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("renders text", () => {
    const wrapper = shallow(<EmptyCart {...props} />);
    expect(wrapper.text()).toEqual("Žádné položky");
  });
});
