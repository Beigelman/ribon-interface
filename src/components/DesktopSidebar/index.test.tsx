import React from "react";
import { screen } from "@testing-library/react";
import DesktopSidebar from ".";
import { renderWithRouter } from "../../../config/testUtils";

describe("DesktopSidebar", () => {
  it("should render without error", () => {
    renderWithRouter(<DesktopSidebar mainImage="" />);

    expect(screen.getByAltText("mainImage")).toBeInTheDocument();
  });
});
