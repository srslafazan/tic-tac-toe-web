import { Mark, Player } from "../types";

export function getInitialGameState(cells: string = "         ") {
  return {
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
  };
}

export type GetGameParams = {
  gamestate: {
    grid: {
      cells: string;
    };
    starting_mark: Mark;
  };
  move: {
    move_type: Player;
    cell_index: number;
  };
};

export const getGame = async (body: GetGameParams): Promise<any> =>
  fetch(`${process.env.NEXT_PUBLIC_TIC_TAC_TOE_API_URL}/games`, {
    method: "PUT",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(body),
  })
    .then((result) => result.json())
    .catch((error) => console.log("error", error));
