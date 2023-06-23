import styles from "./index.module.css";

import TicTacToe from "../components/TicTacToe";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Tic Tac Woah</h1>
      <TicTacToe />
    </main>
  );
}
