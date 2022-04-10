import { usePosts } from "src/hooks/usePosts";

const Posts = () => {
  const { data, error, isLoading, isEmpty } = usePosts();
  if (isLoading) {
    return <div>ロード中です。</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  if (isEmpty) {
    return <div>データが空です。</div>;
  }
  return (
    <ol>
      {data.map((post, index) => (
        <li key={index}>{post.title}</li>
      ))}
    </ol>
  );
};

export { Posts };
