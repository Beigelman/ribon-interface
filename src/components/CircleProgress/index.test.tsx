import React from "react";
import { screen } from "@testing-library/react";
import CircleProgress from ".";
import { renderWithRouter } from "../../config/testUtils";

describe("CircleProgress", () => {
  it("renders the correct percentage and image", () => {
    renderWithRouter(<CircleProgress value={70} image="https://google.com" />);

    expect(screen.getByAltText("circle-progress-img")).toBeInTheDocument();
  });
});
