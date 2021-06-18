import React from "react";
import { render, screen } from "@testing-library/react";
import ButtonLink from ".";

describe("<ButtonLink />", () => {
  it("should render the heading", () => {
    const props = {
      text: "apertar",
      href: "#",
    };

    render(<ButtonLink {...props} />);
    expect(screen.getByText(props.text)).toBeInTheDocument();
  });
});
