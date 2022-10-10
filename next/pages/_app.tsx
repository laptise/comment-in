import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "../lib/context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider privateKey="secret">
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
