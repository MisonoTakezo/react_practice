import Head from "next/head";
import { Header } from "src/components/Header";
import styles from "src/styles/Home.module.css";
import { Posts } from "src/components/Posts";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Posts />
    </div>
  );
};

export default Home;
