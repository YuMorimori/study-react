// /* eslint-disable @next/next/no-html-link-for-pages */
import React, { useCallback, useEffect, useState } from "react";
import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";

// メソッドをコンポーネント内部に書くと再レンダリングされるときに
// 描画されてしまうのでパフォーマンスが落ちる

export default function Home() {
  const [count, setCount] = useState(1);

  // useCallbackを使うと再レンダリングされるときに再生成されなくなる

  const handleClick = useCallback(
    () => {
      if (count < 10) {
        setCount((count) => count + 1);
      }
      // 前の状態を用いて更新したい時はsetの引数に関数を書く
    },
    [count]
    // 第二引数を指定すると値が変更されるたびメソッド部分が再生成される
    // 再生成を限定することでアプリのパフォーマンスをアップさせる目的
  );

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    // アンマウント時の処理はreturnを使う
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  // <img src="" alt="" />

  /* ファイルシステムルーティングを機能させるためにpages配下の
    ディレクトリにはdefaultをつけておく決まりがある*/

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>{count}</h1>

      <button href="/about" onClick={handleClick}>
        {" "}
        {/* //ここに直接処理を書くのはよろしくない */}
        ボタン
      </button>

      <Main page="index" />

      <Footer />
    </div>
  );
}
