import { render, screen } from "@testing-library/react";
import TicTacToe from "./TicTacToe";
import "@testing-library/jest-dom";

describe("TicTacToe", () => {
  it("renders wrapper", () => {
    render(<TicTacToe />);
    const wrapper = screen.getByRole("layout");
    expect(wrapper).toBeInTheDocument();
  });
});
