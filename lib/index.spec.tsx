import { getInitialGameState } from "./index";
import "@testing-library/jest-dom";

describe("lib.index", () => {
  it("gets initial game state", async () => {
    expect(JSON.stringify(getInitialGameState())).toEqual(
      JSON.stringify({
        after_state: {
          current_mark: "X",
          game_not_started: true,
          game_over: false,
          grid: {
            cells: "         ",
          },
          possible_moves: [],
          starting_mark: "X",
          tie: false,
          winner: null,
          winning_cells: [],
        },
        before_state: null,
        cell_index: 0,
        mark: "X",
      })
    );
  });
  it("sets a specific game state", async () => {
    const cells = " X O X O ";
    expect(JSON.stringify(getInitialGameState(cells))).toEqual(
      JSON.stringify({
        after_state: {
          current_mark: "X",
          game_not_started: true,
          game_over: false,
          grid: {
            cells,
          },
          possible_moves: [],
          starting_mark: "X",
          tie: false,
          winner: null,
          winning_cells: [],
        },
        before_state: null,
        cell_index: 0,
        mark: "X",
      })
    );
  });
  it.skip("getGame", async () => {});
});
