import React from "react";
import { act, screen } from "@testing-library/react";
import { renderWithRedux } from "../../config/testUtils";
import useBreakpoint from ".";

function TestPage() {
  const { isDesktop, isMobile, isPad } = useBreakpoint();

  if (isDesktop) return <p>desktop</p>;
  if (isPad) return <p>pad</p>;
  if (isMobile) return <p>mobile</p>;

  return <p>...</p>;
}

describe("useBreakpoint", () => {
  beforeEach(() => {
    renderWithRedux(<TestPage />);
  });

  describe("when the window is mobile", () => {
    it("renders the mobile screen", () => {
      act(() => {
        global.innerWidth = 300;
        global.dispatchEvent(new Event("resize"));
      });

      expect(screen.getByText("mobile")).toBeInTheDocument();
    });
  });

  describe("when the window is pad", () => {
    it("renders the pad screen", () => {
      act(() => {
        global.innerWidth = 700;
        global.dispatchEvent(new Event("resize"));
      });

      expect(screen.getByText("pad")).toBeInTheDocument();
    });
  });

  describe("when the window is desktop", () => {
    it("renders the desktop screen", () => {
      act(() => {
        global.innerWidth = 1200;
        global.dispatchEvent(new Event("resize"));
      });

      expect(screen.getByText("desktop")).toBeInTheDocument();
    });
  });
});
