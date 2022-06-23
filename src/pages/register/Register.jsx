import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./register.css";
// import { axiosInstance } from "../../config";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState(false)


  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(false)
    try{
      const res = await axios.post("/auth/register",{
        username,
        email,
        password,
      })
      res.data && window.location.replace("/login")
    }catch(err){
      setError(true)
    }
    
  }

  return (
    <div className="register">
      <form className="registerform"  onSubmit={handleSubmit}>
        <span className="registertitle">Register</span>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter Your Username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          placeholder="Enter Your Email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Your Password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="register-button" type = "submit">Register</button>
        <button className="login-button">
          <Link className="link" to="/login">
            Login
          </Link>
        </button>
        {error && <span className="errormsg">Enter Correct Information !</span>}
        
      </form>
    </div>
  );
}
