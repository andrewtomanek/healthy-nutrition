import React from "react";
import { shallow } from "enzyme";
import Footer from "../src/components/Footer";

describe("Renders Footer", () => {
  it("renders Footer component", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
  it("renders homepage link", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find({ to: "/" }).text()).toEqual("Zdravá strava");
  });

  it("renders Email link", () => {
    const wrapper = shallow(<Footer />);
    expect(
      wrapper.find({ href: "mailto:andrewtomanek@gmail.com" }).text()
    ).toEqual("Kontakt");
  });
});
