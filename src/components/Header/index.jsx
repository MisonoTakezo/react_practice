import Link from "next/link";
import styles from "./Header.module.css";
const NAV_ITEMS = [
  { href: "/", label: "Index" },
  { href: "/about", label: "About" },
];
const Header = () => (
  <div className={styles.header}>
    {NAV_ITEMS.map((item, index) => (
      <Link href={item.href} key={index}>
        <a className={styles.anchor}>{item.label}</a>
      </Link>
    ))}
  </div>
);

export { Header };
