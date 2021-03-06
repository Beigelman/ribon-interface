import React from "react";
import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../config/testUtils";
import RibonIcon from ".";

describe("<RibonIcon />", () => {
  it("should render with default color", () => {
    renderWithTheme(<RibonIcon />);
    expect(screen.getByLabelText(/Ribon Icon/i).parentElement).toHaveStyle(
      "color: #00CDB4",
    );
  });

  it("should render with red color when color is passed ", () => {
    renderWithTheme(<RibonIcon color="red" />);
    expect(screen.getByLabelText(/Ribon Icon/i).parentElement).toHaveStyle(
      "color: red",
    );
  });
});
