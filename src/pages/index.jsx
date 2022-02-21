// /* eslint-disable @next/next/no-html-link-for-pages */
import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";

// メソッドをコンポーネント内部に書くと再レンダリングされるときに
// 描画されてしまうのでパフォーマンスが落ちる

  const Home = (props) => {
  /* ファイルシステムルーティングを機能させるためにpages配下の
    ディレクトリにはdefaultをつけておく決まりがある*/

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      {props.isShow ? <h1>{props.count}</h1> : null};
      {/* nullを返すと何も表示させないことが可能になる */}
      <button href="/about" onClick={props.handleClick}>
        {" "}
        {/* //ここに直接処理を書くのはよろしくない */}
        ボタン
      </button>
      <button onClick={props.handleDisplay}>{props.isShow ? "非表示" : "表示"}</button>
      <input type="text" value={props.text} onChange={props.handleChange} />
      <button onClick={props.handleAdd}>追加</button>
      <ul>
        {props.array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <Main page="index" />
      <Footer />
    </div>
  );
}

export default Home;
