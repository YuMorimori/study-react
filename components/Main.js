import styles from '../styles/Home.module.css';
import { Links } from '../components/Links';
import { Headline } from '../components/Headline';

export function Main(props) {
  /* ファイルシステムルーティングを機能させるためにpages配下の
    ディレクトリにはdefaultをつけておく決まりがある*/
  return (
      <main className={styles.main}>
        <Headline page={props.page} >
          <code className={styles.code}>pages/{props.page}.js</code>
          {/* children */}

        </Headline>
        {/* propsはできるだけ少なく読みやすく */}

        <Links />
      </main>
  );
}
