import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import {PostListContext} from "../store/post-list-store";


function Post({ post }) {

  const {deletePost} = useContext(PostListContext)
  return (
    <div className="card post-card" style={{ width: "18rem" }}>
      <img
        src="ReactSocialMediaProject/src/assets/React_image.png"
        className="card-img-top"
        alt="React image"
      />
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span onClick={()=>{deletePost(post.id)}} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>

        {post.tag.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">{tag}</span>
        ))}
        <div className="alert alert-success" role="alert">
          This Post has been reacted by {post.reactions} people
        </div>
      </div>
    </div>
  );
}

export default Post;
