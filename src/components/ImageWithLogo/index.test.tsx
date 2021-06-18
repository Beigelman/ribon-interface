import React from "react";
import { screen } from "@testing-library/react";
import ImageWithLogo from ".";
import { renderWithRouter } from "../../config/testUtils";

describe("ImageWithNgo", () => {
  const imgAlt = "imageAlt";
  const imgSrc = "imgsrc";
  const logoAlt = "logoAlt";
  const logoSrc = "logoSrc";

  beforeEach(() => {
    renderWithRouter(
      <ImageWithLogo
        imageAlt={imgAlt}
        logoAlt={logoAlt}
        image={imgSrc}
        logoImage={logoSrc}
      />,
    );
  });

  it("renders the image", () => {
    expect(screen.getByAltText(imgAlt)).toBeInTheDocument();
  });

  it("renders the logo", () => {
    expect(screen.getByAltText(logoAlt)).toBeInTheDocument();
  });
});
