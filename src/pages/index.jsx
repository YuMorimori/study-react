// /* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCallback } from "react";



// メソッドをコンポーネント内部に書くと再レンダリングされるときに
// 描画されてしまうのでパフォーマンスが落ちる

export default function Home() {

  const foo = 1;

  // useCallbackを使うと再レンダリングされるときに再生成されなくなる
  const handleClick = useCallback((e) => {
    console.log(e.target.href);//targetを指定すると属性にアクセスできる
    e.preventDefault();
    alert(foo);
  }, []);

  <img src="" alt="" />

  
  /* ファイルシステムルーティングを機能させるためにpages配下の
    ディレクトリにはdefaultをつけておく決まりがある*/
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      
      <a href='/about' onClick={handleClick}> {/* //ここに直接処理を書くのはよろしくない */}
        ボタン
      </a>

      <Main page="index" />

      <Footer />

    </div>
  );
}
