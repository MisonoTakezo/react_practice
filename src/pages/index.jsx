import { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import styles from "src/styles/Home.module.css";

export default function Home() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [isShown, setIsShown] = useState(false);
  const [textArr, setTextArr] = useState([]);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const handleInput = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字以内にしてください");
      return;
    }
    setText(e.target.value);
  }, []);

  const handleShow = useCallback(() => {
    setIsShown((prevIsShown) => !prevIsShown);
  }, []);

  const handleSubmit = useCallback(() => {
    if (text == "") {
      return;
    }
    setTextArr((prevArr) => [...prevArr, text]);
    setText("");
  }, [text]);

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    console.log(count);
    return () => {
      document.body.style.backgroundColor = "";
      console.log(count);
    };
  }, [count]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      {isShown ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleShow}>{isShown ? "非表示" : "表示"}</button>
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
