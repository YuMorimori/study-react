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
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);

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

  const handleDisplay = useCallback(() => {
    setIsShow((isShow) => !isShow);
    // return isShow ? false : true;
  }, []);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("５文字以内にしてください");
      return;
    }
    setText(e.target.value.trim());
  }, []);

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
      {isShow ? <h1>{count}</h1> : null};
      {/* nullを返すと何も表示させないことが可能になる */}
      <button href="/about" onClick={handleClick}>
        {" "}
        {/* //ここに直接処理を書くのはよろしくない */}
        ボタン
      </button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={handleChange} />
      <Main page="index" />
      <Footer />
    </div>
  );
}
