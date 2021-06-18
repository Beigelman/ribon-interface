import React from "react";
import { screen } from "@testing-library/react";
import * as reactRedux from "react-redux";
import WillDonatePage from ".";
import { renderWithIntegration } from "../../../config/testUtils";
import donationPackageFactory from "../../../config/testUtils/factories/donationPackageFactory";
import donationPackageApi from "../../../services/api/donationPackageApi";

const dispatchMock = jest.fn();

jest.spyOn(reactRedux, "useDispatch").mockReturnValue(dispatchMock);
jest.spyOn(donationPackageApi, "getDonationPackageById");

describe("WillDonatePage", () => {
  const donationPackage = donationPackageFactory();

  it("should render without error", () => {
    renderWithIntegration(<WillDonatePage />, undefined, undefined, {
      donationPackage,
      canDonate: () => true,
    });

    expect(
      screen.getByText(donationPackage.impactDescription),
    ).toBeInTheDocument();
  });
});
