import { useState, useEffect, useCallback } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const getPosts = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const json = await res.json();
      if (!res.ok) {
        throw new Error("エラー発生しています。");
      }
      setPosts(json);
    } catch (e) {
      setError(e);
      console.log(e);
    }
    setLoading(false);
  };
  useEffect(() => {
    getPosts();
  }, []);

  if (loading) {
    return <div>ロード中です。</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  if (posts.length <= 0) {
    return <div>データが空です。</div>;
  }
  return (
    <ol>
      {posts.map((post, index) => (
        <li key={index}>{post.title}</li>
      ))}
    </ol>
  );
};

export { Posts };
