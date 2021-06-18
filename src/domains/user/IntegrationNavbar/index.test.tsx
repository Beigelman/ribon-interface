import React from "react";
import { screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import IntegrationNavbar from ".";
import {
  renderWithIntegration,
  renderWithRouter,
} from "../../../config/testUtils";
import userFactory from "../../../config/testUtils/factories/userFactory";

describe("IntegrationNavbar", () => {
  describe("when the user is authenticated", () => {
    beforeEach(() => {
      const history = createMemoryHistory();
      renderWithRouter(<IntegrationNavbar />, history, {
        initialState: {
          user: userFactory({
            accessToken: "valid_token",
          }),
        },
      });
    });

    describe("when breakpoint is mobile", () => {
      Object.defineProperty(window, "innerWidth", {
        writable: true,
        configurable: true,
        value: 300,
      });
    });
  });

  describe("when the user is not authenticated", () => {
    describe("when breakpoint is pad+", () => {
      beforeEach(() => {
        renderWithIntegration(<IntegrationNavbar />);
      });

      it("renders the ribon logo", () => {
        expect(screen.queryByAltText("Blue Ribon Logo")).toBeInTheDocument();
      });

      it("does not render the back-button arrow ", () => {
        expect(screen.queryByAltText("Back-Button")).not.toBeInTheDocument();
      });
    });

    describe("when breakpoint is mobile", () => {
      Object.defineProperty(window, "innerWidth", {
        writable: true,
        configurable: true,
        value: 300,
      });
      describe("when hasBackButton is true", () => {
        beforeEach(() => {
          renderWithRouter(<IntegrationNavbar hasBackButton />);
        });

        it("renders the back button arrow", () => {
          expect(screen.queryByAltText("Back-Button")).toBeInTheDocument();
        });

        it("does not render the Ribon Logo", () => {
          expect(
            screen.queryByAltText("Blue Ribon Logo"),
          ).not.toBeInTheDocument();
        });
      });
    });
  });
});
