import Post, { type PostProps } from "./Post"

type FeedProps = {
    posts: PostProps[];
    onVote: (postId: string, vote: "support" | "oppose") => void;
}

export default function Feed({posts, onVote}: FeedProps) {
    return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} {...post} onVote={onVote} />
      ))}
    </div>
  );
}