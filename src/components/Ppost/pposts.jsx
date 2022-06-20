import "./ppost.css";
import { Link } from "react-router-dom";

export default function PPost({ post }) {
  const PF = "http://localhost:5000/images/";

  return (
    <div className="ppost">
      {post.photo && <img src={PF + post.photo} className="ppostimg" alt="" />}

      <div className="ppostinfo">
        <span className="pposttitle">{post.title}</span>
        <p className="ppostpara">{post.desc}</p>
        <span className="ppostdate">
          {new Date(post.createdAt).toDateString()}
        </span>
        <br></br>
        <Link to={`/post/${post._id}`} className="link">
          <span className="preadmore">Read More</span>
        </Link>
      </div>
    </div>
  );
}
