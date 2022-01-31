import classes from 'src/components/Main/Main.module.css';
import { Headline } from 'src/components/Headline';
import { Links } from 'src/components/Links';

export function Main(props) {
  /* ファイルシステムルーティングを機能させるためにpages配下の
    ディレクトリにはdefaultをつけておく決まりがある*/
  return (
      <main className={classes.main}>
        <Headline page={props.page} >
          <code className={classes.code}>pages/{props.page}.js</code>
          {/* children */}

        </Headline>
        {/* propsはできるだけ少なく読みやすく */}

        <Links />
      </main>
  );
}
