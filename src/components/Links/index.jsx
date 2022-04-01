import styles from "./Links.module.css";

const Links = (props) => {
  const { items, reduceItem } = props;

  return (
    <div className={styles.grid}>
      <button onClick={reduceItem}>減らす</button>
      {items.map((item, index) => (
        <a key={index} href={item.href} className={styles.card}>
          <h2>{item.header}</h2>
          <p>{item.paragraph}</p>
        </a>
      ))}
    </div>
  );
};
export { Links };
