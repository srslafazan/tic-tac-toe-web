import { render, screen } from "@testing-library/react";
import TicTacToe from "./TicTacToe";
import "@testing-library/jest-dom";

describe("TicTacToe", () => {
  it("renders board", () => {
    render(<TicTacToe />);
    const board = screen.getByTestId("board");
    expect(board).toBeInTheDocument();
  });
});
