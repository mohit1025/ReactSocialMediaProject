// src/components/PostList.jsx
import { useContext } from "react";
import { PostListContext } from "../store/post-list-store";
import Post from "./Post";

export default function PostList() {
  const { postList } = useContext(PostListContext);

  return (
    <div className="post-list">
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
