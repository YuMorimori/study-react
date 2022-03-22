// /* eslint-disable @next/next/no-html-link-for-pages */
import { Header } from "src/components/Header";
import { UserComponent } from "src/components/User";

// メソッドをコンポーネント内部に書くと再レンダリングされるときに
// 描画されてしまうのでパフォーマンスが落ちる

const UsersId = () => {
  return (
    <div>
      <Header />
      <UserComponent />
    </div>
  );
};

export default UsersId;
