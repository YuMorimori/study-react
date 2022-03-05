// /* eslint-disable @next/next/no-html-link-for-pages */
import { useCallback, useEffect, useState, useReducer } from "react";

// メソッドをコンポーネント内部に書くと再レンダリングされるときに
// 描画されてしまうのでパフォーマンスが落ちる

const initialState = {
  data: [],
  loading: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "end":
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case "error":
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      throw new Error("no such action type");
  }
};

export const Posts = () => {
  /* ファイルシステムルーティングを機能させるためにpages配下の
    ディレクトリにはdefaultをつけておく決まりがある*/

  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  const [state, dispatch] = useReducer(reducer, initialState);

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error("エラーによりデータの取得に失敗しました。");
      }
      const json = await res.json();
      dispatch({type: "end", data: json})
      
    } catch (error) {
      dispatch({type: "error", error})
      
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (state.loading) {
    return <div>ローディング中です。</div>;
  }
  if (state.error) {
    <div>{state.error.message}</div>;
  }
  if (state.data.length === 0) {
    <div>データは空です</div>;
  }

  return (
    <ol>
      {state.data.map((post) => {
        return <li key={post.id}>{post.title}</li>;
      })}
    </ol>
  );
};
