import { useState, useEffect, useReducer, useCallback } from "react";

const Posts = () => {
  /*
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  */
  // const [state, setState] = useState({ data: [], loading: true, error: null });
  const initialState = { data: [], loading: true, error: null };
  const reducer = (state, action) => {
    switch (action.type) {
      case "end":
        return {
          ...state,
          loading: false,
          data: action.data,
        };
      case "error":
        return {
          ...state,
          loading: false,
          error: action.error,
        };
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const getPosts = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const json = await res.json();
      if (!res.ok) {
        throw new Error("エラー発生しています。");
      }
      dispatch({ type: "end", data: json });
    } catch (e) {
      dispatch({ type: "error", error: e });
    }
  };
  useEffect(() => {
    getPosts();
  }, []);
  console.log("foo");
  if (state.loading) {
    return <div>ロード中です。</div>;
  }
  if (state.error) {
    return <div>{state.error.message}</div>;
  }
  if (state.data.length <= 0) {
    return <div>データが空です。</div>;
  }
  return (
    <ol>
      {state.data.map((post, index) => (
        <li key={index}>{post.title}</li>
      ))}
    </ol>
  );
};

export { Posts };
