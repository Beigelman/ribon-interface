import React from "react";
import { screen } from "@testing-library/react";
import routeData from "react-router";
import DonationConfirm from ".";
import { renderWithIntegration } from "../../../config/testUtils";
import donationPackageFactory from "../../../config/testUtils/factories/donationPackageFactory";

describe("DonationConfirm", () => {
  const donationPackage = donationPackageFactory();
  const locationState = {
    donationPackage,
    donation: {
      donationStats: { donationImpactPercentage: 50 },
      donationImpactMessage: "Você ajudou",
    },
  };

  const mockLocation = {
    pathname: `/integrations/donation-confirm/${donationPackage.id}`,
    hash: "",
    search: "",
    state: locationState,
  };
  beforeEach(() => {
    jest.spyOn(routeData, "useLocation").mockReturnValue(mockLocation);
  });

  it("should render without error", () => {
    renderWithIntegration(<DonationConfirm />);
    expect(screen.getByText("Obrigada pela doação!")).toBeInTheDocument();
  });
});
