import Head from "next/head";
import "../styles/globals.css";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import { useBgColor } from "src/hooks/useBgColor";

function MyApp({ Component, pageProps }) {
  const counterProps = useCounter();
  const inputArrProps = useInputArray();

  useBgColor();
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} {...counterProps} {...inputArrProps} />
    </div>
  );
}

export default MyApp;
