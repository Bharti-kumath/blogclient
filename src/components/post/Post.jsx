import "./post.css";
import { Link } from "react-router-dom";
export default function Post({ post }) {
  const PF = "http://localhost:5000/images/"


  return (
    <div className="post">
      {post.photo && <img src={PF + post.photo} className="postimg" alt="" />}

      <div className="postinfo">
        <div className="postcats">
          {post.categories.map((c) => (
            <span className="postcat">{c}</span>
          ))}
        </div>
        <span className="posttitle">{post.title}</span>

        <hr />

        <p className="postpara">{post.desc}</p>
      </div>
      <Link to={`/post/${post._id}`} className="link">
        <span className="readmore">Read More</span>
      </Link>

      <span className="postdate">
        {new Date(post.createdAt).toDateString()}
      </span>
    </div>
  );
}
