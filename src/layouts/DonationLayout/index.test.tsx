import React from "react";
import { screen } from "@testing-library/react";
import DonationLayout from ".";
import brandFactory from "../../config/testUtils/factories/brandFactory";
import { renderWithRouter } from "../../config/testUtils";
import { initializeFirebase } from "../../services";

initializeFirebase();

describe("DonationLayout", () => {
  const props = {
    headerProps: { color: "#fff", onClose: () => {} },
    currentStep: 0,
    desktopSidebarProps: { image: "img", brand: brandFactory() },
    footerButtonProps: {
      onPrimaryButtonClick: () => {},
      primaryButtonText: "Doar!",
      onSecondaryButtonClick: () => {},
      secondaryButtonText: "Cancelar",
    },
    timelineSteps: ["Qtd. ribons", "Doação", "Confirmação"],
  };

  beforeEach(() => {
    return renderWithRouter(
      <DonationLayout {...props}>
        <p>Donation Layout</p>
      </DonationLayout>,
    );
  });

  it("renders the children props", () => {
    expect(screen.getByText("Donation Layout")).toBeInTheDocument();
  });

  it("renders the timeline steps", () => {
    expect(screen.getByText("Qtd. ribons")).toBeInTheDocument();
    expect(screen.getByText("Doação")).toBeInTheDocument();
    expect(screen.getByText("Confirmação")).toBeInTheDocument();
  });

  describe("when the layout is desktop", () => {
    it("renders the desktop sidebar", () => {
      expect(screen.getByAltText("mainImage")).toBeInTheDocument();
    });

    it("renders both buttons from the footer", () => {
      expect(screen.getByText("Cancelar")).toBeInTheDocument();
      expect(screen.getByText("Doar!")).toBeInTheDocument();
    });
  });

  describe("when is mobile", () => {
    beforeEach(() => {
      Object.defineProperty(window, "innerWidth", {
        writable: true,
        configurable: true,
        value: 300,
      });
    });

    it("does not show the sidebar", () => {
      expect(screen.queryByAltText("mainImage")).not.toBeVisible();
    });

    it("does no show the secondary button", () => {
      expect(screen.queryByText("Cancelar")).not.toBeVisible();
    });
  });
});
