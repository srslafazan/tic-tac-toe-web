import styles from "./TicTacToe.module.css";

export const TicTacToe = () => {
  const grid = "123456789";
  if (!grid) return null;
  return (
    <div className={styles.board}>
      {grid.split("").map((cell, index) => (
        <div className={styles.cell} key={index}>
          {cell}
        </div>
      ))}
    </div>
  );
};

export default TicTacToe;
