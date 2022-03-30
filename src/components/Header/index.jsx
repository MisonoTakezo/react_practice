import Link from "next/link";
import styles from "./Header.module.css";
const Header = () => (
  <div className={styles.header}>
    <Link href="/" className={styles.anchor}>
      <a className={styles.anchor}>Index</a>
    </Link>
    <Link href="/about">
      <a className={styles.anchor}>About</a>
    </Link>
  </div>
);

export { Header };
