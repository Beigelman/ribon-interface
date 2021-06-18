import { screen } from "@testing-library/react";
import React from "react";
import { createMemoryHistory } from "history";
import WillDonateContent from ".";
import { renderWithIntegration } from "../../../../config/testUtils";
import donationPackageFactory from "../../../../config/testUtils/factories/donationPackageFactory";

describe("WillDonateContent", () => {
  const donationPackage = donationPackageFactory();

  const props = {
    donationPackage,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onDonateHandler: () => {},
  };

  it("should render the impact description", () => {
    renderWithIntegration(<WillDonateContent {...props} />);
    expect(
      screen.getByText(donationPackage.impactDescription),
    ).toBeInTheDocument();
  });

  describe("when the user is authenticated", () => {
    beforeEach(() => {
      const history = createMemoryHistory();

      renderWithIntegration(<WillDonateContent {...props} />, history, {
        initialState: {
          user: {
            accessToken: "valid_token",
          },
        },
      });
    });

    it("shows the Doar! button", () => {
      expect(screen.getByText("Doar!")).toBeInTheDocument();
    });
  });

  describe("when the user is not authenticated", () => {
    beforeEach(() => {
      const history = createMemoryHistory();
      renderWithIntegration(<WillDonateContent {...props} />, history);
    });

    it("shows the Continuar button", () => {
      expect(screen.getByText("Continuar")).toBeInTheDocument();
    });
  });
});
