import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { generateOptions } from "./generateOptions";

describe("Unit test to test the generateOptions util fn:", () => {
  test("generates options correctly:", () => {
    const options = ["all", "active", "inactive"];
    const result = generateOptions(options);

    const { getByText } = render(<select>{result}</select>);

    options.forEach((option) => {
      expect(getByText(option)).toBeInTheDocument();
    });
  });
});
