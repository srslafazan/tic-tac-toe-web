import { render, screen } from "@testing-library/react";
import Home from "./page";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders main", () => {
    render(<Home />);

    // find node by type
    screen.getByRole("main");

    const main = screen.getByRole("main");

    expect(main).toBeInTheDocument();
  });
});
