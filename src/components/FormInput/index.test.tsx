import React from "react";
import { screen } from "@testing-library/react";
import FormInput from ".";
import { renderWithTheme } from "../../config/testUtils";

describe("FormInput", () => {
  it("should render without error", () => {
    renderWithTheme(
      <FormInput
        name="teste"
        label="teste input"
        type="text"
        value="Ronaldo"
        setValue={() => {}}
        inputLength={5}
      />,
    );
    expect(screen.getByText("teste input")).toBeInTheDocument();
  });

  it("should render the length validation", () => {
    renderWithTheme(
      <FormInput
        name="teste"
        label="teste"
        type="text"
        value="Ronaldo"
        setValue={() => {}}
        inputLength={5}
      />,
    );
    expect(screen.getByText("5/140")).toBeInTheDocument();
  });
});
