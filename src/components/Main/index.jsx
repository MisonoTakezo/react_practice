import { useState } from "react";
import { HeadLine } from "src/components/HeadLine";
import { Links } from "src/components/Links";
import styles from "./Main.module.css";

const Main = (props) => {
  const ITEMS = [
    {
      href: "https://nextjs.org/docs",
      header: "Documentation →",
      paragraph: "Find in-depth information about Next.js features and API.",
    },
    {
      href: "https://nextjs.org/learn",
      header: "Learn →",
      paragraph: "Learn about Next.js in an interactive course with quizzes!",
    },
    {
      href: "https://github.com/vercel/next.js/tree/canary/examples",
      header: "Examples →",
      paragraph: "Discover and deploy boilerplate example Next.js projects.",
    },
    {
      href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
      header: "Deploy →",
      paragraph:
        "Instantly deploy your Next.js site to a public URL with Vercel.",
    },
  ];

  const [items, setItems] = useState(ITEMS);
  const reduceItem = () => {
    setItems((prevItems) => prevItems.slice(0, prevItems.length - 1));
  };
  const itemProps = { items, reduceItem };
  return (
    <main className={styles.main}>
      <HeadLine page={props.page} {...itemProps}>
        <code className={styles.code}>pages/{props.page}.jsx</code>
      </HeadLine>
      <Links {...itemProps} />
    </main>
  );
};

export { Main };
