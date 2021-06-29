import React from "react";
import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../../../config/testUtils";
import UserImpactListItem from ".";

describe("UserImpactListItem", () => {
  it("should render the correct Cause", () => {
    const props = {
      donatedRibons: 100,
      name: "WFP",
      backgroundColor: "#1976D2",
      cause: "WFP",
      logo: "https://ribon-ngos.s3.amazonaws.com/wfp/logo-white.png",
      circleImage: "https://ribon-ngos.s3.amazonaws.com/wfp/logo-white.png",
      impactText: "27 dias de medicamentos",
      progress: 50,
      nextGoalMessage: "100 ribons pra mais um medicamento",
    };

    renderWithTheme(<UserImpactListItem {...props} />);
    expect(screen.getByText("27 dias de medicamentos")).toBeInTheDocument();
  });
});
