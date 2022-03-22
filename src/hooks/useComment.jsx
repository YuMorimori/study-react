const { useRouter } = require("next/router");
const { fetcher } = require("src/utils/fetcher");
const { default: useSWR } = require("swr");

export const useComment = () => {
  const router = useRouter();
  const { data, error } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/comments/${router.query.id}`
      : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};