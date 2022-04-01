import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import styles from "../styles/Home.module.css";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import { useBgLigntBlue } from "src/hooks/useBgLightBlue";

export default function Home() {
  const { count, isShown, handleClick, handleDisplay } = useCounter();
  const { text, textArr, handleInput, handleSubmit } = useInputArray();

  useBgLigntBlue();

  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      {isShown ? (
        <div>
          <h1>{count}</h1>
          <button onClick={handleClick}>加算</button>
        </div>
      ) : null}
      <button onClick={handleDisplay}>{isShown ? "非表示" : "表示"}</button>

      <input type="text" value={text} onChange={handleInput} />
      <button onClick={handleSubmit}>送信</button>
      <ul>
        {textArr.map((text, index) => {
          return <li key={index}>{text}</li>;
        })}
      </ul>
      <Main page="about" />
      <Footer />
    </div>
  );
}
