import "./settings.css";
import image from "../../Images/fly.gif";
import { useContext, useState } from "react";
import { Context } from "../../components/context/Context";
import axios from "axios";
import { axiosInstance } from "../../config";

export default function Settings() {
  const { user ,dispatch} = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const PF = "http://localhost:5000/images/";

  const handlesubmit = async (e) => {
    e.preventDefault();
    dispatch({type : "UPDATE_START"})
    const updateUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updateUser.profilePic = filename;
      try {
        await axiosInstance.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res =await axios.put("/user/" + user._id, updateUser);
      setSuccess(true);
      dispatch({type : "UPDATE_SUCCESS" , payload:res.data})
    } catch (err) {
      dispatch({type : "UPDATE_FAILURE"})
    }
  };
  const handledelete = async () => {
    try {
      await axios.delete(`/user/${user._id}`, {
        data: { username: user.username,userId : user._id },
      });
      dispatch({ type: "LOGOUT" });
      window.location.replace("/");
    } catch (err) {}
  };
  console.log(user._id)

  return (
    
      <div className="settingwrapper">
        <div className="settingtitle">
          <span className="updatetitle">Update Your Account</span>
          
        </div>
        <form className="settingform" onSubmit={handlesubmit}>
          <label>Profile Picture</label>
          <div className="settingpp">
            <label htmlFor="fileInput">
              <i className="settingicon fas fa-user"></i>
            </label>
            <img src={file ? URL.createObjectURL(file) : PF +user.profilePic} className="" alt="" />
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="btn">
          <button className="deletetitle" onClick={handledelete}>Delete </button>
          <button className="settingsubmit" type="submit">
            Update
          </button>
          </div>
          {success && (
            <span className="successmsg">Profile has been updated !!</span>
          )}
        </form>
        <img src={image} className="formimg" />
      </div>
      
    
  );
}
