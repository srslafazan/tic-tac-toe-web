import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={orbitron.className}>
      <Component {...pageProps} />
    </main>
  );
}
