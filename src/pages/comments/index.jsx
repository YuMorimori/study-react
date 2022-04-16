// /* eslint-disable @next/next/no-html-link-for-pages */
import Head from "next/head";
import { CommentsComponent } from "src/components/Comments";
import { Header } from "src/components/Header";
import { SWRConfig } from "swr";

export const getStaticProps = async () => {
  const COMMENTS = `https://jsonplaceholder.typicode.com/comments`;
  const comments = await fetch(COMMENTS);
  const commentsData = await comments.json();

  return {
    props: {
      fallback: {
        [COMMENTS]: commentsData,
      },
    },
  };
};

const Comments = (props) => {
  const { fallback } = props;
  return (
    <div>
      <Head>
        <title>Posts Page</title>
      </Head>
      <SWRConfig value={{ fallback }}>
        <Header />
        <CommentsComponent />
      </SWRConfig>
    </div>
  );
};

export default Comments;
