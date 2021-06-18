import React from "react";
import { screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";
import CausesTitle from ".";
import { renderWithRouter } from "../../../../config/testUtils";
import { logEvent } from "../../../../services/analytics";

jest.mock("../../../../services/analytics", () => {
  return {
    logEvent: jest.fn(),
  };
});

describe("CausesPage", () => {
  it("should render without error", () => {
    renderWithRouter(<CausesTitle />);
    expect(
      screen.getByText("Que tal ajudar pessoas com uma doação gratuita?"),
    ).toBeInTheDocument();
  });

  describe("when user clicks on doadora Ribon", () => {
    it("logs an integrationRibonDonator_click event", () => {
      renderWithRouter(<CausesTitle canDonate={false} />);
      fireEvent.click(screen.getByText("doadora Ribon"));
      expect(logEvent).toHaveBeenCalledWith("integrationRibonDonator_click");
    });
  });
});
