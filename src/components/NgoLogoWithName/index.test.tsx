import React from "react";
import { screen } from "@testing-library/react";
import NgoLogoWithName from ".";
import donationPackageFactory from "../../../config/testUtils/factories/donationPackageFactory";
import { renderWithRouter } from "../../../config/testUtils";

describe("NgoLogoWithName", () => {
  const donationPackage = donationPackageFactory();
  const ngoLogoAlt = `${donationPackage.ngo.name}Logo`;
  const ngoName = "WFP";

  it("renders the package image", () => {
    renderWithRouter(<NgoLogoWithName donationPackage={donationPackage} />);
    expect(screen.getByText(ngoName)).toBeInTheDocument();
  });

  it("renders the NGO logo", () => {
    renderWithRouter(<NgoLogoWithName donationPackage={donationPackage} />);
    expect(screen.getByAltText(ngoLogoAlt)).toBeInTheDocument();
  });
});
