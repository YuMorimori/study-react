import classes from 'src/components/Links/Links.module.css';

const ITEMS = [
  {
    href: "https://nextjs.org/docs", 
    title: "Documentation →",
    description: "Find in-depth information about Next.js features and API.",
  },
  {
    href: "https://nextjs.org/learn", 
    title: "Learn →",
    description: "Learn about Next.js in an interactive course with quizzes!",
  },
  {
    href: "https://github.com/vercel/next.js/tree/canary/examples", 
    title: "Examples →",
    description: "Discover and deploy boilerplate example Next.js projects.",
  },
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app", 
    title: "Deploy →",
    description: "Instantly deploy your Next.js site to a public URL with Vercel.",
  },
];
// 変わらないものを定義するときには大文字を使う

// データと処理の部分を分けて書く
export function Links() {
  return (
        <div className={classes.grid}>
          {ITEMS.map((item) => {
            return (
          // eslint-disable-next-line react/jsx-key
          // key propsを追加してwarningを解決
          <a key={item.href} href={item.href} className={classes.card}>
            <h2 className={classes.title}>{item.title} </h2>
            <p className={classes.description}>{item.description} </p>
          </a>
            );
          })}
        
        </div>
      
  );
}
