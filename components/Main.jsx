import { HeadLine } from "./HeadLine";
import { Links } from "./Links";
import styles from "../styles/Home.module.css";

const Main = (props) => (
  <main className={styles.main}>
    <HeadLine page={props.page}>
      <code className={styles.code}>pages/{props.page}.jsx</code>
    </HeadLine>
    <Links />
  </main>
);

export { Main };
