import { useRouter } from "next/router";
import { fetcher } from "src/utils/fetcher";
import useSWRimmutable from "swr/immutable";

export const useUser = () => {
  const router = useRouter();
  const { data, error } = useSWRimmutable(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/users/${router.query.id}`
      : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};