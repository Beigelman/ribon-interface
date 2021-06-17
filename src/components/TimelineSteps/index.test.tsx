import React from "react";
import { screen } from "@testing-library/react";
import TimelineSteps from ".";
import theme from "../../styles/theme";
import { renderWithRouter } from "../../config/testUtils";

describe("TimelineSteps", () => {
  const steps = ["primeiro", "segundo", "terceiro"];

  it("renders all steps", () => {
    renderWithRouter(<TimelineSteps steps={steps} />);
    steps.forEach((step) => {
      expect(screen.getByText(step)).toBeInTheDocument();
    });
  });

  it("color all previous and current steps with ribonBlue", () => {
    renderWithRouter(<TimelineSteps steps={steps} currentStep={1} />);

    expect(screen.getByText(steps[0])).toHaveAttribute(
      "color",
      theme.colors.ribonBlue,
    );
    expect(screen.getByText(steps[1])).toHaveAttribute(
      "color",
      theme.colors.ribonBlue,
    );
    expect(screen.getByText(steps[2])).not.toHaveAttribute(
      "color",
      theme.colors.ribonBlue,
    );
  });
});
