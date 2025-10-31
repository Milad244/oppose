import { useState } from 'react';
import './App.css'
import { type PostProps } from "./components/Post";
import Sidebar from './components/Sidebar';
import FeedNav from './components/FeedNav';
import Feed from './components/Feed';

export default function App() {
  const initialPosts: PostProps[] = [
    {
      id: "1",
      user: "Milad",
      content: "Birds are arrogant",
      support: 83,
      oppose: 17,
      comments: ["This Milad fella seems super smart."],
      hasVoted: null,
      onVote: () => {},
    },
    {
      id: "2",
      user: "Sara",
      content: "Coffee > Tea",
      support: 54,
      oppose: 21,
      comments: [],
      hasVoted: null,
      onVote: () => {},
    },
  ];

  const [posts, setPosts] = useState(initialPosts);

  const handleVote = (postId: string, vote: "support" | "oppose") => {
    setPosts((prev) =>
      prev.map((post) => {
        if (post.id !== postId) return post;

        const newSupport = vote === "support" ? post.support + 1 : post.support;
        const newOppose = vote === "oppose" ? post.oppose + 1 : post.oppose;

        return {
          ...post,
          support: newSupport,
          oppose: newOppose,
          hasVoted: vote,
        };
      })
    );
  };

  return (
    <div className={"flex min-h-screen"}>
      <Sidebar />

      <div className={"flex-1 bg-[#121212] flex flex-col items-center py-8"}>
        <FeedNav></FeedNav>
        <Feed posts={posts} onVote={handleVote}></Feed>
      </div>
    </div>
  )
}
