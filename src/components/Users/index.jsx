// /* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
import { useUsers } from "src/hooks/useFetchArray";

// const fetcher = (...args) => fetch(...args).then(res => res.json())

export const Users = () => {
  const { data, error, isLoading, isEmpty } = useUsers();

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
    <ol>
      {data.map((user) => {
        return (
          <li key={user.id}>
            <Link href={`users/${user.id}`}>
              <a>{`${user.name} (${user.email})`}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
