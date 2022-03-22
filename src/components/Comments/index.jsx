import Link from "next/link";
import { useComments } from "src/hooks/useComments";

export const CommentsComponent = () => {
  const { data, error, isLoding, isEmpty } = useComments();

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
      {data.map((comment) => {
        return (
          <li key={comment.id}>
            <Link href={`comments/${comment.id}`}>
              <a>{`${comment.body}`}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
