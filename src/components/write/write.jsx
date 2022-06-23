import { useContext, useState } from "react";
import "./write.css";
import { Context } from "../context/Context";
// import axios from "axios";
import { axiosInstance } from "../../config";
import Audioplayer from "../Player"

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState("Category");
  const { user } = useContext(Context);

  const handlesubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
      categories: cat,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axiosInstance.post("/upload", data);
        console.log(data);
      } catch (err) {}
    }
    try {
      const res = await axiosInstance.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };

  return (
    <div className="write">
    <div className="player">
      <Audioplayer/>
    </div>
      {file && (
        <img src={URL.createObjectURL(file)} className="writeimg" alt="" />
      )}

      <form className="writeform" onSubmit={handlesubmit}>
        <div className="writeformgroup">
          <label htmlFor="fileinput">
            <i className="writeicon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileinput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            autoFocus={true}
            className="writeinput"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <label className="writeinput cat">
          Category :
          <select
          className="catselect"
            value={cat}
            defaultValue="Category"
            onChange={(e) => setCat(e.target.value)}
          >
            <option className="catoption" value="Travel">Travel</option>
            <option className="catoption" value="Food">Food</option>
            <option className="catoption" value="Life">Life</option>
            <option className="catoption" value="Dance">Dance</option>
            <option className="catoption" value="Technology">Technology</option>
            <option className="catoption" value="Sports">Sports</option>
            <option className="catoption" value="Education">Education</option>
            <option className="catoption" value="Love">Love</option>
            <option className="catoption" value="Kids">Kids</option>
            
          </select>
        </label>

        <div className="writeformgroup">
          <textarea
            placeholder="Tell your Story......"
            type="text"
            className="writeinput writetext"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="formbutton" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
