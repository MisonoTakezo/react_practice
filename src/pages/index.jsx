import { useCallback } from "react";
import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import styles from "src/styles/Home.module.css";

export default function Home() {
  const foo = 1;
  const handleClick = useCallback((e) => {
    console.log(e.target);
    e.preventDefault();
    alert(foo);
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <a href="/about" onClick={handleClick}>
        ボタン
      </a>
      <Main page="index" />
      <Footer />
    </div>
  );
}
