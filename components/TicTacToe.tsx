import React, { useState } from "react";
import styles from "./TicTacToe.module.css";
import { getInitialGameState, getGame } from "../lib";

import { Player } from "../types";
import type { Mark } from "../types";

export const TicTacToe = ({ cells = "         " }) => {
  const [game, setGame] = useState(getInitialGameState(cells));
  const [opponent, setOpponent] = useState(Player.Random);
  const [computerThinking, setComputerThinking] = useState(false);
  const updateGame = async (cell_index: number) => {
    if (
      game.after_state.grid.cells[cell_index] !== " " ||
      game.after_state.game_over ||
      computerThinking
    )
      return;
    const nextGame = await getGame({
      gamestate: {
        grid: {
          cells: game.after_state.grid.cells,
        },
        starting_mark: game.after_state.starting_mark as Mark,
      },
      move: {
        move_type:
          game.after_state.current_mark === "X" ? Player.Human : opponent,
        cell_index,
      },
    });
    setGame(nextGame);
    if (opponent !== Player.Human && !nextGame.after_state.game_over) {
      setComputerThinking(true);
      setTimeout(async () => {
        const nextNextGame = await getGame({
          gamestate: {
            grid: {
              cells: nextGame.after_state.grid.cells,
            },
            starting_mark: nextGame.after_state.starting_mark as Mark,
          },
          move: {
            move_type: opponent,
            cell_index,
          },
        });
        setGame(nextNextGame);
        setComputerThinking(false);
      }, 1000);
    }
  };

  if (!game) return <p>No game</p>;

  return (
    <div>
      <div data-testid="opponent" className={styles.verticalSpace}>
        <span>Playing against: </span>
        <span style={{ fontWeight: "bold" }}>
          {opponent[0].toUpperCase() + opponent.slice(1)}
        </span>
        <ol data-testid="opponent-select">
          {Object.entries(Player).map(([k, v]) => (
            <li key={k}>
              <button
                onClick={() => setOpponent(v as Player)}
                className={styles.opponentSelect}
              >
                {k}
              </button>
            </li>
          ))}
        </ol>
      </div>
      <div data-testid="game-status-indicator" className={styles.verticalSpace}>
        {game.after_state.game_over &&
          game.after_state.winner &&
          `${game.after_state.winner} wins!`}
        {game.after_state.game_over && game.after_state.tie && `Cat's Game!`}
        {!game.after_state.game_over &&
          `${game.after_state.current_mark}'s turn`}
      </div>
      <div className={styles.board} data-testid="board">
        {game.after_state.grid.cells
          .split("")
          .map((cell: string, index: number) => (
            <button
              data-testid="cell"
              className={styles.cell}
              key={index}
              onClick={() => updateGame(index)}
            >
              {cell}
            </button>
          ))}
      </div>
      <div>
        <button
          data-testid="reset"
          onClick={() => setGame(getInitialGameState())}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TicTacToe;
