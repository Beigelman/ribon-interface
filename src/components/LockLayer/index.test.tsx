import React from "react";
import { screen, waitFor, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { renderWithRouter } from "../../config/testUtils";
import LockLayer from ".";
import * as Analytics from "../../services/analytics";

describe("LockLayer", () => {
  const history = createMemoryHistory();
  it("expects to log the subscriptionPage_redirect event", async () => {
    const logEventSpy = jest.spyOn(Analytics, "logEvent");
    renderWithRouter(
      <LockLayer isModalVisible handleModalClose={() => {}} />,
      history,
    );
    fireEvent.click(screen.getByText("Continuar"));

    await waitFor(() =>
      expect(logEventSpy).toHaveBeenCalledWith("subscriptionPage_redirect", {
        from: "exclusiveNGO_modal",
      }),
    );
  });
});
