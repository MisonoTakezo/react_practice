import Head from "next/head";
import { Header } from "src/components/Header";
import styles from "src/styles/Home.module.css";
import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      {`pages/posts/${router.query.id}`}
    </div>
  );
};

export default Post;
