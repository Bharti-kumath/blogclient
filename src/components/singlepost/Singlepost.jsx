import "./singlepost.css";

import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import Comment from "../Comment/comment";
import { axiosInstance } from "../../config";

export default function SinglePost() {
  const Location = useLocation();
  const path = Location.pathname.split("/")[2];
  const [posts, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updatemode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axiosInstance.get("/posts/" + path);
      console.log(res.data);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handledelete = async () => {
    try {
      await axiosInstance.delete(`/posts/${posts._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  
  const handleupdate = async () => {
    try {
      await axiosInstance.put(`/posts/${posts._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false);
    } catch (err) {}
  };
 
  return (
    <div className="singlepost" >
      <div className="singlepostwrapper">
        {posts.photo && (
          <img src={PF + posts.photo} className="singlepostimg" alt="" />
        )}
        {updatemode ? (
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="singleposttitleinput"
          />
        ) : (
          <h1 className="singleposttitle">
            {title}
            {posts.username === user?.username && (
              <div className="singlepostedit">
                <i
                  className="singleposticon fas fa-pen"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singleposticon fas fa-trash-alt"
                  onClick={handledelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlepostinfo">
          <span className="singlepostauthor">
            Author:{" "}
            <Link to={`/?user=${posts.username}`} className="link">
              <b>{posts.username}</b>
            </Link>
          </span>
         
          <span className="singlepostdate">
            {new Date(posts.createdAt).toDateString()}
          </span>
        </div>
        {updatemode ? (
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="singlepostdescinput"
          />
        ) : (
          <p className="singlepostdesc">{desc}</p>
        )}
        {updatemode && (
          <button className="singlepostbutton" onClick={handleupdate}>
            Update
          </button>
        )}
      </div>
      <Comment />
    </div>
  );
}
