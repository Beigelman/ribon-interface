import React from "react";
import { render } from "@testing-library/react";
import ArrowLeft from ".";

describe("ArrowLeft", () => {
  const props = {
    disabled: true,
    onClick: jest.fn(),
  };

  it("should render without error", () => {
    const expected = render(<ArrowLeft {...props} />);
    expect(expected.container.querySelector("#arrow-left")).toBeInTheDocument();
  });
});
