import styles from "../styles/Home.module.css";
const HeadLine = (props) => (
  <div>
    <h1 className={styles.title}>
      Welcome to <a href="https://nextjs.org">{props.page} Page</a>
    </h1>
    <p className={styles.description}>
      Get started by editing {props.children}
    </p>
  </div>
);

export { HeadLine };
