// /* eslint-disable @next/next/no-html-link-for-pages */
import { usePosts } from "src/hooks/usePosts";

// const fetcher = (...args) => fetch(...args).then(res => res.json())

export const Posts = () => {
  const { data, error, isLoding, isEmpty } = usePosts();

  if (isLoding) {
    return <div>ローディング中です。</div>;
  }
  if (error) {
    <div>{error.message}</div>;
  }
  if (isEmpty) {
    <div>データは空です</div>;
  }

  return (
    <ol>
      {data.map((post) => {
        return <li key={post.id}>{post.title}</li>;
      })}
    </ol>
  );
};
