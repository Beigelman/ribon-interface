import React from "react";
import { render, screen } from "@testing-library/react";
import Modal from ".";

describe("Modal", () => {
  it("should render children", () => {
    render(
      <Modal visible>
        <p>Title</p>
        <p>Body</p>
      </Modal>,
    );
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Body")).toBeInTheDocument();
  });

  describe("when is not visible", () => {
    it("should not render children", () => {
      render(
        <Modal visible={false}>
          <p>Title</p>
          <p>Body</p>
        </Modal>,
      );
      expect(screen.queryByText("Title")).not.toBeInTheDocument();
      expect(screen.queryByText("Body")).not.toBeInTheDocument();
    });
  });
});
