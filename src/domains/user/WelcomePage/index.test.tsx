import React from "react";
import { screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import WelcomePage from ".";
import {
  renderWithIntegration,
  renderWithRouter,
} from "../../../config/testUtils";
import userFactory from "../../../config/testUtils/factories/userFactory";
import companyFactory from "../../../config/testUtils/factories/companyFactory";

describe("IntegrationWelcomePage", () => {
  describe("when there is no user auth", () => {
    const notAuthTitle = "Bem vinda(o) à Ribon!";
    const notAuthText = "Que tal ajudar pessoas com uma doação gratuita?";
    beforeEach(() => {
      renderWithIntegration(<WelcomePage />);
    });

    it("should render the WelcomeTextContainer with base texts", () => {
      expect(screen.getByText(notAuthText)).toBeInTheDocument();
      expect(screen.getByText(notAuthTitle)).toBeInTheDocument();
    });
  });

  describe("when there is an user authentitcated", () => {
    const history = createMemoryHistory();
    const authTitle = "Bem vinda(o) de volta!";
    const authText = "Que tal ajudar pessoas com uma doação gratuita?";
    const user = userFactory();

    beforeEach(() => {
      renderWithRouter(<WelcomePage />, history, {
        initialState: {
          user,
        },
      });
    });

    it("should render the WelcomeTextContainer with auth texts", () => {
      expect(screen.getByText(authText)).toBeInTheDocument();
      expect(screen.getByText(authTitle)).toBeInTheDocument();
    });
  });

  describe("when there is a partner company", () => {
    const history = createMemoryHistory();
    const company = companyFactory();

    it("show the company logo", async () => {
      renderWithIntegration(<WelcomePage />, history, undefined, {
        company,
      });

      expect(screen.getAllByAltText("partner-logo")).toHaveLength(2);
    });
  });

  describe("when there is not a partner company", () => {
    const history = createMemoryHistory();
    it("does not show the company logo", () => {
      renderWithRouter(<WelcomePage />, history);

      expect(screen.queryByAltText("partner-logo")).not.toBeInTheDocument();
    });
  });
});
