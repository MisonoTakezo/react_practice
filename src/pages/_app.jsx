import Head from "next/head";
import "../styles/globals.css";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import { useBgLightBlue } from "src/hooks/useBgLightBlue";

function MyApp({ Component, pageProps }) {
  const counterProps = useCounter();
  const inputArrProps = useInputArray();
  useBgLightBlue();

  console.log(useBgLightBlue);
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
