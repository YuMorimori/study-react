// /* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
import { usePostsByUserId } from "src/hooks/useFetchArray";

// const fetcher = (...args) => fetch(...args).then(res => res.json())

export const PostsByUserId = (props) => {
  const { data, error, isLoading, isEmpty } = usePostsByUserId(props.id);

  if (isLoading) {
    return <div>ローディング中です。</div>;
  }
  if (error) {
    <div>{error.message}</div>;
  }
  if (isEmpty) {
    <div>データは空です</div>;
  }

  return (
    <ul className="space-y-4">
      {data.map((post) => {
        return (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a className="group">
                <h1 className="text-xl font-bold group-hover:text-blue-500">{post.title}</h1>
                <p className="text-lg text-gray-500 group-hover:text-blue-400">{post.body}</p>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
