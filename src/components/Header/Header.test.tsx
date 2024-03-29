import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";

describe("Unit tests for Header: ", () => {
  test("renders the brand logo in header correctly:", () => {
    const { getByAltText } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const image = getByAltText("brand-logo");

    expect(image).toHaveAttribute("src", "/logo.svg");
    expect(image).toHaveAttribute("width", "100px");
    expect(image).toHaveAttribute("height", "26px");
    expect(image).toHaveAttribute("loading", "lazy");
  });
});
