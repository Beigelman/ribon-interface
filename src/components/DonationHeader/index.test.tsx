import React from "react";
import { screen } from "@testing-library/react";
import { renderWithRedux } from "../../config/testUtils";
import DonationHeader from ".";
import { initializeFirebase } from "../../services";
import { ReactComponent as Icon } from "../../assets/icons/arrow-left.svg";

initializeFirebase();

describe("DonationHeader", () => {
  it("should render the children", () => {
    renderWithRedux(<DonationHeader>Doações</DonationHeader>);
    expect(screen.getByText("Doações")).toBeInTheDocument();
  });

  it("should render RibonIcon", () => {
    renderWithRedux(<DonationHeader>Doações</DonationHeader>);
    expect(screen.getByLabelText(/Ribon Icon/i)).toBeInTheDocument();
  });

  it("should render the right amount of ribons", () => {
    const initialState = {
      user: {
        ribons: 200,
      },
    };
    renderWithRedux(<DonationHeader>Doações</DonationHeader>, { initialState });
    expect(screen.getByText(`${initialState.user.ribons}`)).toBeInTheDocument();
  });

  it("should render the icon", () => {
    const initialState = {
      user: {
        ribons: 200,
      },
    };
    renderWithRedux(<DonationHeader icon={<Icon aria-label="icon" />} />, {
      initialState,
    });
    expect(screen.getByLabelText("icon")).toBeInTheDocument();
  });
});
