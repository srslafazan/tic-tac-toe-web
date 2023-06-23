import { render, screen } from "@testing-library/react";
import Home from ".";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders main", () => {
    render(<Home />);

    screen.getByRole("main");

    const main = screen.getByRole("main");

    expect(main).toBeInTheDocument();
  });
});
