import React from "react";
import { screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";
import SocialShare from ".";
import { renderWithRouter } from "../../config/testUtils";

describe("SocialShare instagramProps={instagramProps} ", () => {
  const instagramProps = {
    description: "Ajudei",
    title: "Ajudei uma causa",
    image: "image",
  };
  describe("when all socials are passed", () => {
    beforeEach(() => {
      renderWithRouter(
        <SocialShare
          instagramProps={instagramProps}
          wppText="Compartilhar no WPP"
          tweetText="Compartilhar no Tweeter"
        />,
      );
    });

    it("should render without error", () => {
      expect(screen.getByAltText("whatsapp-logo")).toBeInTheDocument();
      expect(screen.getByAltText("twitter-logo")).toBeInTheDocument();
    });
  });

  describe("when a social param is not passed", () => {
    it("shows only the passed props", () => {
      renderWithRouter(
        <SocialShare
          instagramProps={instagramProps}
          tweetText="Compartilhar no Tweeter"
        />,
      );

      expect(screen.queryByAltText("whatsapp-logo")).not.toBeInTheDocument();
      expect(screen.getByAltText("twitter-logo")).toBeInTheDocument();
    });
  });

  describe("when callbacks are passed", () => {
    it("calls the callback", () => {
      const testFunction = jest.fn();
      window.open = jest.fn();
      renderWithRouter(
        <SocialShare
          instagramProps={instagramProps}
          tweetText="Compartilhar no Tweeter"
          onTweetClick={testFunction}
        />,
      );
      fireEvent.click(screen.getByAltText("twitter-logo"));

      expect(testFunction).toHaveBeenCalled();
    });
  });
});
