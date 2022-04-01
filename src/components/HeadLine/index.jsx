import styles from "./HeadLine.module.css";
const HeadLine = (props) => (
  <div>
    <h1 className={styles.title}>
      Welcome to <a href="https://nextjs.org">{props.page} Page</a>
    </h1>
    <p className={styles.description}>
      Get started by editing {props.children}
    </p>
    <button onClick={props.reduceItem}>減らす</button>
  </div>
);

export { HeadLine };
