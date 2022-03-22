// /* eslint-disable @next/next/no-html-link-for-pages */
import Head from "next/head";
import { Header } from "src/components/Header";
import { Users as UsersComponent } from "src/components/Users";

// メソッドをコンポーネント内部に書くと再レンダリングされるときに
// 描画されてしまうのでパフォーマンスが落ちる

const Users = () => {
  /* ファイルシステムルーティングを機能させるためにpages配下の
    ディレクトリにはdefaultをつけておく決まりがある*/

  return (
    <div>
      <Head>
        <title>Posts Page</title>
      </Head>
      <Header />
      <UsersComponent />
    </div>
  );
};

export default Users;
