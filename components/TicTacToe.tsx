import styles from "./TicTacToe.module.css";

export const TicTacToe = () => {
  const grid = "123456789";
  if (!grid) return null;
  return (
    <div className={styles.board} role="layout">
      {grid.split("").map((cell, index) => (
        <button className={styles.cell} key={index}>
          {cell}
        </button>
      ))}
    </div>
  );
};

export default TicTacToe;
