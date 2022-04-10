import { usePosts } from "src/hooks/usePosts";
import Link from "next/link";

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
        <li key={index}>
          <Link href={`posts/${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ol>
  );
};

export { Posts };
