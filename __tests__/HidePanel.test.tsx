import React from "react";
import { shallow } from "enzyme";
import HidePanel from "../src/components/panels/HidePanel";
import { SwitchButton, SwitchContainer } from "../src/styles/elements";


const toggleCards = jest.fn();

const props = {
    hideCards: true,
    toggleCards
  };

describe("Renders HidePanel", () => {
  it("renders HidePanel component", () => {
    const wrapper = shallow(<HidePanel {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("renders button text", () => {
    const wrapper = shallow(<HidePanel {...props} />);
    expect(wrapper.find(SwitchContainer).text()).toEqual("↑ Skrýt ↑");
  });

  it("renders false button text", () => {
    const props = {
        hideCards: false,
        toggleCards
      };
    const wrapper = shallow(<HidePanel {...props} />);
    expect(
      wrapper.find(SwitchButton)
    .text()).toEqual("↓ Zobrazit ↓");
  });
});
