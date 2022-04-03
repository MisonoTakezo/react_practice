import { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import { Header } from "src/components/Header";
import styles from "src/styles/Home.module.css";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    console.log(json);
    setPosts(json);
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      {posts.length > 0 ? (
        <ol>
          {posts.map((post, index) => (
            <li key={index}>{post.title}</li>
          ))}
        </ol>
      ) : null}
    </div>
  );
}
