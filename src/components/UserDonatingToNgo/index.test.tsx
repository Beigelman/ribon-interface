import React from "react";
import { screen } from "@testing-library/react";
import UserDonatingToNgo, { Props } from ".";
import { renderWithRedux } from "../../config/testUtils";

describe("UserDonatingToNgo", () => {
  const props: Props = {
    logoUrl: "https://ribon-brands.s3-sa-east-1.amazonaws.com/tetra-pak.png",
  };

  it("should render without error", () => {
    renderWithRedux(<UserDonatingToNgo {...props} />);
    expect(screen.getByAltText("user-image")).toBeInTheDocument();
    expect(screen.getByAltText("heart-image")).toBeInTheDocument();
    expect(screen.getByAltText("ngo-image")).toBeInTheDocument();
  });
});
