import React from "react";
import { screen } from "@testing-library/react";
import DonationInProgress, { Props } from ".";
import { renderWithRedux } from "../../config/testUtils";

describe("DonationInProgress", () => {
  describe("when is not visible", () => {
    const props: Props = {
      visible: false,
      backgroundImage:
        "https://ribon-ngos.s3.amazonaws.com/wfp/logo-url-wfp.png",
    };

    it("should render without error", () => {
      renderWithRedux(<DonationInProgress {...props} />);
      expect(screen.queryByText("Doando...")).toBe(null);
    });
  });

  describe("when is visible", () => {
    const props: Props = {
      visible: true,
      backgroundImage:
        "https://ribon-ngos.s3.amazonaws.com/wfp/logo-url-wfp.png",
    };

    it("should render without error", () => {
      renderWithRedux(<DonationInProgress {...props} />);
      expect(screen.getByText("Doando...")).toBeInTheDocument();
    });
  });
});
