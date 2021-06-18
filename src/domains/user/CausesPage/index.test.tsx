import React from "react";
import "../../../../__mocks__/match-media";
import { screen, waitFor } from "@testing-library/react";
import CausesPage from ".";
import { renderWithIntegration } from "../../../config/testUtils";
import * as Analytics from "../../../services/analytics";

describe("CausesPage", () => {
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

  describe("when the user cannot donate", () => {
    const logEventSpy = jest.spyOn(Analytics, "logEvent");
    beforeEach(() => {
      renderWithIntegration(<CausesPage />, undefined, undefined, {
        canDonate: () => false,
      });
    });

    it("should render the cannot donate text", () => {
      expect(
        screen.getByText("Continue doando de graça se tornando uma"),
      ).toBeInTheDocument();
    });

    it("should log an integrationBlockedDonation_view event", async () => {
      await waitFor(() => {
        expect(logEventSpy).toHaveBeenCalledWith(
          "integrationBlockedDonation_view",
          logParams,
        );
      });
    });
  });
});
