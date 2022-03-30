import styles from "./Links.module.css";

const Links = () => {
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
  return (
    <div className={styles.grid}>
      {ITEMS.map((item, index) => (
        <a key={index} href={item.href} className={styles.card}>
          <h2>{item.header}</h2>
          <p>{item.paragraph}</p>
        </a>
      ))}
    </div>
  );
};
export { Links };
