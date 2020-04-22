import React from "react";
import { shallow } from "enzyme";
import MorePanel from "../src/components/panels/MorePanel";

const displayMore = jest.fn();

const props = {
    displayMore
};

describe("Renders MorePanel", () => {
  it("renders MorePanel component", () => {
    const wrapper = shallow(<MorePanel {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("renders text", () => {
    const wrapper = shallow(<MorePanel {...props} />);
    expect(wrapper.text()).toEqual("↓ Více↓");
  });
});
