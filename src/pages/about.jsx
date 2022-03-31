import Head from "next/head";
import { useEffect } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import styles from "../styles/Home.module.css";

export default function Home() {
  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    console.log("mounted");
    return () => {
      document.body.style.backgroundColor = "";
      console.log("unmounted");
    };
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <Main page="about" />
      <Footer />
    </div>
  );
}
