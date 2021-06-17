import React from "react";
import { screen } from "@testing-library/react";
import FormModal from ".";
import { renderWithTheme } from "../../config/testUtils";

describe("FormModal", () => {
  it("should render the form", () => {
    renderWithTheme(
      <FormModal
        visible
        inputType="textarea"
        inputValue="Ronaldo"
        inputLength={8}
        setInputValue={() => {}}
      />,
    );
    expect(screen.getByText("Ronaldo")).toBeInTheDocument();
  });

  describe("when is not visible", () => {
    it("should not render the form", () => {
      renderWithTheme(
        <FormModal
          visible={false}
          inputType="textarea"
          inputValue="Ronaldo"
          inputLength={8}
          setInputValue={() => {}}
        />,
      );
      expect(screen.queryByText("Ronaldo")).not.toBeInTheDocument();
    });
  });
});
