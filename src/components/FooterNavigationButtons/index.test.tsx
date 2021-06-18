import React from "react";
import { screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";
import FooterNavigationButtons from ".";
import { renderWithRouter } from "../../config/testUtils";

describe("FooterNavigationButtons", () => {
  const functionsObj = {
    onCancel() {},
    onContinue() {},
  };
  jest.spyOn(functionsObj, "onCancel");
  jest.spyOn(functionsObj, "onContinue");

  describe("with cancel button displayed", () => {
    beforeEach(() => {
      renderWithRouter(
        <FooterNavigationButtons
          onCancel={functionsObj.onCancel}
          onContinue={functionsObj.onContinue}
        />,
      );
    });

    it("should render without error", () => {
      expect(screen.getByText("Continuar")).toBeInTheDocument();
      expect(screen.getByText("Cancelar")).toBeInTheDocument();
    });

    it("calls the onCancel function on cancel button click", () => {
      fireEvent.click(screen.getByText("Cancelar"));
      expect(functionsObj.onCancel).toHaveBeenCalled();
    });

    it("calls the onContinue function on continue button click", () => {
      fireEvent.click(screen.getByText("Continuar"));
      expect(functionsObj.onContinue).toHaveBeenCalled();
    });
  });

  describe("with cancel button hidden", () => {
    it("should not render cancel button", () => {
      renderWithRouter(
        <FooterNavigationButtons
          onCancel={functionsObj.onCancel}
          onContinue={functionsObj.onContinue}
          hideOnCancel
        />,
      );
      expect(screen.queryByText("Cancelar")).not.toBeInTheDocument();
    });
  });
});
