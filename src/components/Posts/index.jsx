// /* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
import { usePosts } from "src/hooks/useFetchArray";


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
        return (
          <li key={post.id}>
            <Link href={`posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
