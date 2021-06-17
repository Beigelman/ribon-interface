import React from "react";
import { screen } from "@testing-library/react";
import WelcomeTextContainer from ".";
import { renderWithRouter } from "../../config/testUtils";

describe("WelcomeTextContainer", () => {
  it("should render without error", () => {
    renderWithRouter(
      <WelcomeTextContainer
        title="Bem vinda(o) à Ribon!"
        description="Doe de graça"
      />
    );
    expect(screen.getByText("Bem vinda(o) à Ribon!")).toBeInTheDocument();
    expect(screen.getByText("Doe de graça")).toBeInTheDocument();
  });
});
