import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import styles from "../styles/Home.module.css";

const Home = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      {props.isShown ? (
        <div>
          <h1>{props.doubleCount}</h1>
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
      <Main page="about" />
      <Footer />
    </div>
  );
};
export default Home;
