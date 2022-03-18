// /* eslint-disable @next/next/no-html-link-for-pages */
import Head from "next/head";
import { usePost } from "src/hooks/usePost";

// const fetcher = (...args) => fetch(...args).then(res => res.json())

export const Post = () => {
  const { post, user, error, isLoading } = usePost();

  if (isLoading) {
    return <div>ローディング中です。</div>;
  }
  if (error) {
    <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{post?.title}</title>
      </Head>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
      {user?.name ? <div> Created by {user.name} </div> : null}
    </div>
  );
};
