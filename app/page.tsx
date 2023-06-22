import styles from "./page.module.css";

import TicTacToe from "../components/TicTacToe";

export default function Home() {
  return (
    <main className={styles.main}>
      <TicTacToe />
    </main>
  );
}
