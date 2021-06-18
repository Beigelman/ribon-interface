import { fireEvent, screen } from "@testing-library/react";
import React from "react";
import "../../../../../__mocks__/match-media";
import CausesContent from ".";
import { renderWithIntegration } from "../../../../config/testUtils";
import donationPackageFactory from "../../../../config/testUtils/factories/donationPackageFactory";
import { logEvent } from "../../../../services/analytics";

jest.mock("../../../../services/analytics", () => {
  return {
    logEvent: jest.fn(),
  };
});

describe("CausesContent", () => {
  const donationPackages = [donationPackageFactory()];
  const logParams = {
    authenticated: "false",
    companyId: undefined,
    companyName: undefined,
    email: undefined,
    from: "integration",
    ngoId: undefined,
    ngoName: undefined,
    packageId: undefined,
  };

  describe("when the user can donate", () => {
    it("shows the DOAR button text", () => {
      renderWithIntegration(
        <CausesContent donationPackages={donationPackages} />,
      );
      expect(screen.getByText("DOAR")).toBeInTheDocument();
    });

    describe("when clicking on 'donate' button", () => {
      beforeEach(() => {
        renderWithIntegration(
          <CausesContent donationPackages={donationPackages} />,
        );
        fireEvent.click(screen.getByText("DOAR"));
      });

      fit("expects log an integrationDonationStart event", () => {
        expect(logEvent).toHaveBeenCalledWith(
          "integrationDonationStart_click",
          {
            ...logParams,
            ngoId: donationPackages[0].ngo.id.toString(),
            ngoName: donationPackages[0].ngo.name,
          },
        );
      });
    });
  });

  describe("when the user has donated", () => {
    beforeEach(() => {
      renderWithIntegration(
        <CausesContent donationPackages={donationPackages} hasDonated />,
      );
    });

    it("shows the Você ja fez uma doação button text", () => {
      expect(screen.getByText("Doação já feita")).toBeInTheDocument();
    });

    describe("when clicking on 'ja fez uma doação' button", () => {
      beforeEach(() => {
        fireEvent.click(screen.getByText("Doação já feita"));
      });

      it("shows the hasDonatedModal", () => {
        expect(
          screen.getByText(
            "Faça sua conta Ribon para continuar doando de graça",
          ),
        ).toBeInTheDocument();
      });

      it("logs an integrationDisabledDonate_click event ", () => {
        expect(logEvent).toHaveBeenCalledWith(
          "integrationDisabledDonate_click",
          logParams,
        );
      });

      describe("when clicking on Vamos La button", () => {
        it("log an integrationRedirectToApp_click event", () => {
          fireEvent.click(screen.getByText("Vamos lá!"));
          expect(logEvent).toHaveBeenCalledWith(
            "integrationRedirectToApp_click",
            logParams,
          );
        });
      });
    });
  });
});
