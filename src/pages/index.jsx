import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import styles from "src/styles/Home.module.css";

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      {props.isShown ? (
        <div>
          <h1>{props.count}</h1>
          <button onClick={props.handleClick}>加算</button>
        </div>
      ) : null}
      <button onClick={props.handleDisplay}>
        {props.isShown ? "非表示" : "表示"}
      </button>

      <input type="text" value={props.text} onChange={props.handleInput} />
      <button onClick={props.handleSubmit}>送信</button>
      <ul>
        {props.textArr.map((text, index) => {
          return <li key={index}>{text}</li>;
        })}
      </ul>
      <Main page="index" />
      <Footer />
    </div>
  );
}
