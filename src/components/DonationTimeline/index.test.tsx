import React from "react";
import { screen } from "@testing-library/react";
import DonationTimeline from ".";
import { renderWithRouter } from "../../../config/testUtils";
import { DONATION_TIMELINE_STEPS } from "../../../config/constants";

describe("DonationTimeline", () => {
  it("should render without error", () => {
    renderWithRouter(<DonationTimeline steps={DONATION_TIMELINE_STEPS} />);
    DONATION_TIMELINE_STEPS.forEach((step) => {
      expect(screen.getByText(step)).toBeInTheDocument();
    });
  });
});
