import React from "react";
import { screen } from "@testing-library/react";
import DonationDone from ".";
import {
  renderWithIntegration,
  renderWithRouter,
} from "../../../config/testUtils";
import companyFactory from "../../../config/testUtils/factories/companyFactory";

describe("DonationDone", () => {
  it("should render without error", () => {
    renderWithRouter(<DonationDone />);

    expect(
      screen.getByText(
        "Conheça o app e continue doando gratuitamente para essa e outras causas",
      ),
    ).toBeInTheDocument();
  });

  describe("when the company has an url", () => {
    const company = companyFactory({
      url: "url",
      urlCopy: "Continue to company",
    });
    it("renders the continue to company button", () => {
      renderWithIntegration(<DonationDone />, undefined, undefined, {
        company,
      });

      expect(screen.getAllByText("Continue to company")).toHaveLength(2);
    });
  });
});
