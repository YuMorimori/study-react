// /* eslint-disable @next/next/no-html-link-for-pages */
import Head from "next/head";
import { Header } from "src/components/Header";
import { Posts as PostsComponent } from "src/components/Posts";

// メソッドをコンポーネント内部に書くと再レンダリングされるときに
// 描画されてしまうのでパフォーマンスが落ちる

const Posts = () => {
  /* ファイルシステムルーティングを機能させるためにpages配下の
    ディレクトリにはdefaultをつけておく決まりがある*/

  return (
    <div>
      <Head>
        <title>Posts Page</title>
      </Head>
      <Header />
      <PostsComponent />
    </div>
  );
};

export default Posts;
