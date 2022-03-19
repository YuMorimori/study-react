// /* eslint-disable @next/next/no-html-link-for-pages */
import { Header } from "src/components/Header";
import { Post } from "src/components/Post";

// メソッドをコンポーネント内部に書くと再レンダリングされるときに
// 描画されてしまうのでパフォーマンスが落ちる

const PostsId = () => {
  return (
    <div>
      
      <Header />
      <Post />
    </div>
  );
};

export default PostsId;
