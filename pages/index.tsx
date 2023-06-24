import { useEffect, useState } from "react";
import styles from "./index.module.css";

import pkg from "../package.json";
import TicTacToe from "../components/TicTacToe";
import { getApiVersion } from "../lib";
import type { APIVersion } from "../lib";

export default function Home() {
  const [apiVersion, setApiVersion] = useState("1.0.0");

  useEffect(() => {
    getApiVersion().then((r: APIVersion) => setApiVersion(r?.version));
  }, []);

  return (
    <main className={styles.main}>
      <h1>Tic Tac Woah</h1>
      <TicTacToe />
      <span className={styles.version}>ui version {pkg.version}</span>
      <span className={styles.version}>api version {apiVersion}</span>
      <a
        className={styles.docsLink}
        href="https://tic-tac-toe-backend-nksq.onrender.com/docs"
        target="_blank"
      >
        API Docs
      </a>
      <span className={styles.copywright}>
        &gt;{" "}
        <a href="https://www.shainlafazan.com" target="_blank">
          Shain Lafazan
        </a>{" "}
        © 2023
      </span>
    </main>
  );
}
