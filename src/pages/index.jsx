import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import styles from "src/styles/Home.module.css";

export default function Home(props) {
  const {
    count,
    isShown,
    handleClick,
    handleDisplay,
    text,
    textArr,
    handleInput,
    handleSubmit,
  } = props;

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
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
      <Main page="index" />
      <Footer />
    </div>
  );
}
