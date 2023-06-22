import styles from "./page.module.css";

import TicTacToe from "../components/TicTacToe";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <h1>Tic Tac Toe</h1> */}
      <TicTacToe />
    </main>
  );
}
