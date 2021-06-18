import React from "react";
import DonationImageSlider from ".";
import { renderWithTheme } from "../../config/testUtils";

describe("DonationImageSlider", () => {
  const props = {
    mainNgoImage: "image",
    sliderImages: [
      { filename: "pitagoras.jpg", imageUrl: "http://foobar.com.br" },
    ],
  };

  it("should render without error", () => {
    const expected = renderWithTheme(<DonationImageSlider {...props} />);
    expect(expected.container.querySelector("#slider")).toBeInTheDocument();
  });
});
