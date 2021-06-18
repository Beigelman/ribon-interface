import React from "react";
import { render } from "@testing-library/react";
import ArrowRight from ".";

describe("ArrowRight", () => {
  const props = {
    disabled: true,
    onClick: jest.fn(),
  };

  it("should render without error", () => {
    const expected = render(<ArrowRight {...props} />);
    expect(
      expected.container.querySelector("#arrow-right"),
    ).toBeInTheDocument();
  });
});
