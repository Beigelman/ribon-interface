import React from "react";
import { screen } from "@testing-library/react";
import ImpactSection from ".";
import { renderWithTheme } from "../../../../config/testUtils";

describe("ImpactSection", () => {
  const TIME_TO_COMPLETE_ANIMATION = 6000;
  it("should render without error", async () => {
    jest.setTimeout(TIME_TO_COMPLETE_ANIMATION);
    renderWithTheme(
      <ImpactSection
        image="image"
        impactPercentage={200}
        impactDescription="Você doou 0 dias de água potável"
        nextGoalMessage="Continue doando para atingir um impacto"
      />,
    );
    await new Promise((r) => setTimeout(r, TIME_TO_COMPLETE_ANIMATION));

    expect(
      screen.getByText("Você doou 2 dias de água potável"),
    ).toBeInTheDocument();
  });
});
