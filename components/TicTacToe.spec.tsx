import React from "react";
import { render, screen } from "@testing-library/react";
import TicTacToe from "./TicTacToe";
import "@testing-library/jest-dom";

describe("TicTacToe", () => {
  it("renders empty board", () => {
    render(<TicTacToe />);
    const board = screen.getByTestId("board");
    expect(board).toBeInTheDocument();
    const cells = screen.getAllByTestId("cell");
    expect(cells).toHaveLength(9);
    expect(cells.map((cell) => cell.textContent).join("")).toEqual("         ");
    const opponent = screen.getByTestId("opponent");
    expect(opponent.textContent).toEqual(
      "HumanRandomMinimaxPlaying AgainstRandom"
    );
    const opponentSelect = screen.getByTestId("opponent-select");
    expect(opponentSelect.textContent).toEqual("HumanRandomMinimax");
  });

  it("renders populated board", () => {
    render(<TicTacToe cells="XO       " />);
    const board = screen.getByTestId("board");
    expect(board).toBeInTheDocument();
    const cells = screen.getAllByTestId("cell");
    expect(cells).toHaveLength(9);
    expect(cells.map((cell) => cell.textContent).join("")).toEqual("XO       ");
  });
});
