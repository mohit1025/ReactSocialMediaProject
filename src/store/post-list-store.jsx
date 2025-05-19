import { createContext, useReducer } from "react";

// ✅ Context definition
const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

// ✅ Initial post list
const Default_Post_List = [
  {
    id: 1,
    title: "Going to Pune",
    body: "New job in Pune",
    reactions: 1,
    user_id: "_mystic_musing",
    tag: ["#job", "#work"],
  },
  {
    id: 2,
    title: "Going to US",
    body: "New job in US",
    reactions: 100,
    user_id: "_mystic_musing",
    tag: ["#job", "#work"],
  },
];

// ✅ Reducer function
const PostListReducer = (currentPostList, action) => {
  switch (action.type) {
    case "DELETE_POST":
      return currentPostList.filter(post => post.id !== action.payload.postId);
    case "ADD_POST":
      return [action.payload, ...currentPostList];
    default:
      return currentPostList;
  }
};

// ✅ Provider
function PostListProvider({ children }) {
  const [postList, dispatchPostList] = useReducer(PostListReducer, Default_Post_List);

  const addPost = (user_id, postTitle, postBody, reaction, tag) => {
    console.log(tag, userId, postBody, postTitle, reaction)
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reaction, // using reaction directly (as-is)
        user_id: user_id,
        tag: tag,
      },
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
    <PostListContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
}

export default PostListProvider;
export { PostListContext };
