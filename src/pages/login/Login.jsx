import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Context } from "../../components/context/Context";
import "./login.css";
import { axiosInstance } from "../../config";

export default function Login() {
  const userRef = useRef(0);
  const passwordRef = useRef(0);
  const {  dispatch, isfetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axiosInstance.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      console.log(err)
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  
  return (
    <div className="login">
      <form className="loginform" onSubmit={handleSubmit}>
        <span className="logintitle">Login</span>
        <label>Username</label>
        <input type="text" placeholder="Enter Your Username..." ref={userRef} />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password.."
          ref={passwordRef}
        />
        <button className="loginbutton" type="submit" disabled={isfetching}>
          Login
        </button>
        <button className="registerbutton">
          <Link className="link" to="/register">
            Register
          </Link>
        </button>
      </form>
    </div>
  );
}
