import { createContext, useReducer } from "react";

// ✅ Context definition
const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addPostsFromServer: () => {}
});

// ✅ Initial post list
const Default_Post_List = [
  {
    id: 1,
    title: "Going to Pune",
    body: "New job in Pune",
    reactions: "like: 1",
    user_id: "_mystic_musing",
    tags: ["#job", "#work"],
  },
  {
    id: 2,
    title: "Going to US",
    body: "New job in US",
    reactions: "like: 100",
    user_id: "_mystic_musing",
    tags: ["#job", "#work"],
  },
];

// ✅ Reducer function
const PostListReducer = (currentPostList, action) => {
  switch (action.type) {
    case "DELETE_POST":
      return currentPostList.filter(post => post.id !== action.payload.postId);
    case "ADD_POST":
      return [action.payload, ...currentPostList];
    case "ADD_POST_FROM_SERVER":
      return [...action.payload.posts]; // ✅ fixed
    default:
      return currentPostList;
  }
};

// ✅ Provider
function PostListProvider({ children }) {
  const [postList, dispatchPostList] = useReducer(PostListReducer, Default_Post_List);

  const addPost = (user_id, postTitle, postBody, reaction, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: `like: ${reaction}`, // ensure it's a string
        user_id: user_id,
        tags: tags,
      },
    });
  };

  const addPostsFromServer = (posts) => {
    const normalizedPosts = posts.map(post => {
      const likeCount = post.reactions?.like ?? 0;
      return {
        ...post,
        reactions: `like: ${likeCount}`
      };
    });

    dispatchPostList({
      type: "ADD_POST_FROM_SERVER",
      payload: { posts: normalizedPosts },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostListContext.Provider value={{ postList, addPost, deletePost, addPostsFromServer }}>
      {children}
    </PostListContext.Provider>
  );
}

export default PostListProvider;
export { PostListContext };
