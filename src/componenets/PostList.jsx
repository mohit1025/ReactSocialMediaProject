// src/components/PostList.jsx
import { useContext } from "react";
import { PostListContext } from "../store/post-list-store";
import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";

export default function PostList() {
  const { postList, addPostsFromServer } = useContext(PostListContext);
  const onGetPostClick = () => {
    // console.log("button clicked")
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => addPostsFromServer(data.posts));
  };
  return (
    <div className="post-list">
      {postList.length == 0 && (
        <WelcomeMessage onGetPostClick={onGetPostClick} />
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
