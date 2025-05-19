import { useRef, useContext } from "react";
import { PostListContext } from "../store/post-list-store";
export default function CreatePost() {
  const useridElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionElement = useRef();
  const tagElement = useRef();

  const { addPost } = useContext(PostListContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const user_id = useridElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reaction = reactionElement.current.value;
    const tag = tagElement.current.value.split(" ");

    addPost(user_id, postTitle, postBody, reaction, tag);
    // Clear form inputs
    useridElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionElement.current.value = "";
    tagElement.current.value = "";
  };

  return (
    <form className="createPost" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Enter Title
        </label>
        <input
          ref={postTitleElement}
          type="text"
          className="form-control"
          id="title"
          placeholder="enter the title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Enter description
        </label>
        <textarea
          ref={postBodyElement}
          type="text"
          rows="5"
          className="form-control"
          id="body"
          placeholder="enter the description"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter userId
        </label>
        <input
          ref={useridElement}
          type="text"
          className="form-control"
          id="userId"
          placeholder="enter the userId"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          Enter reaction
        </label>
        <input
          ref={reactionElement}
          type="text"
          className="form-control"
          id="reaction"
          placeholder="enter the reaction"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tag" className="form-label">
          Enter tag
        </label>
        <input
          ref={tagElement}
          type="text"
          className="form-control"
          id="tag"
          placeholder="enter the tag"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
