// /* eslint-disable @next/next/no-html-link-for-pages */
import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { Post } from "src/components/Post";

// メソッドをコンポーネント内部に書くと再レンダリングされるときに
// 描画されてしまうのでパフォーマンスが落ちる

const PostsId = () => {
  return (
    <div className={styles.container}>
      
      <Header />
      <Post />
    </div>
  );
};

export default PostsId;
