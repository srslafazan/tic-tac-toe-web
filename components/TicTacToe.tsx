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

  const gameStatusIndicator = (
    <div
      data-testid="game-status-indicator"
      className={styles.gameStatusIndicator}
    >
      {game.after_state.game_over &&
        game.after_state.winner &&
        `${game.after_state.winner} wins!`}
      {game.after_state.game_over && game.after_state.tie && `Cat's Game!`}
      {!game.after_state.game_over && `${game.after_state.current_mark}'s turn`}
    </div>
  );

  const isOpponentActive = (v: Player) => opponent === v;

  return (
    <div>
      <div data-testid="opponent" className={styles.opponent}>
        <ol data-testid="opponent-select" className={styles.opponentSelect}>
          {Object.entries(Player).map(([k, v]) => (
            <li key={k}>
              <button
                onClick={() => setOpponent(v as Player)}
                className={`${styles.opponentSelectButton} ${
                  isOpponentActive(v) ? styles.opponentSelectButtonActive : ""
                }`}
              >
                {k}
              </button>
            </li>
          ))}
        </ol>
        <span>Playing Against</span>
        <span
          style={{ fontWeight: "bold", marginTop: "10px", fontSize: "20px" }}
        >
          {opponent[0].toUpperCase() + opponent.slice(1)}
        </span>
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
      <div className={styles.lower}>
        {gameStatusIndicator}
        <button
          data-testid="reset"
          onClick={() => setGame(getInitialGameState())}
          className={styles.reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TicTacToe;
