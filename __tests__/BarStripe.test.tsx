import React from "react";
import { shallow } from "enzyme";
import BarStripe from "../src/components/panels/BarStripe";

describe("Renders BarStripe", () => {
  it("renders BarStripe component", () => {
    const wrapper = shallow(<BarStripe item={["cukry", 20, 500]} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("renders stripe text", () => {
    const wrapper = shallow(<BarStripe item={["cukry", 20, 500]} />);
    expect(wrapper.text()).toEqual("cukry20 5004%");
  });

  it("renders children", () => {
    const wrapper = shallow(<BarStripe item={["cukry", 20, 500]} />);
    expect(wrapper.children()).toHaveLength(2);
  });
});
