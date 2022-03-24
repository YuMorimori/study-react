import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

 const useFetchArray = (url) => {
  const { data, error } = useSWR(
    url,
    fetcher
  );
  return {
    data,
    error,
    isLoding: !error && !data,
    isEmpty: data && data.length === 0,
  };
};

const API_URL = "https://jsonplaceholder.typicode.com";

export const useComments = () => {
  return useFetchArray(
    `${API_URL}/comments`,
    fetcher
  );
};
export const usePosts = () => {
  return useFetchArray(
    `${API_URL}/posts`,
    fetcher
  );
};
export const useUsers = () => {
  return useFetchArray(
    `${API_URL}/users`,
    fetcher
  );
};