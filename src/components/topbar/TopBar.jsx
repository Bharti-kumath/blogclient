import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

import { useContext, useState } from "react";
import { Context } from "../context/Context";
import "./topbar.css";

export default function Topbar() {
  const [togglenav, setTogglenav] = useState(false);
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";
  const handlelogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="navtop">
    <div className="top">
      <div className="topLeft">
        <p className="logo">Beyond The Blog ❤️ </p>
      </div>
      <div className="topCenter">
        <ul className="toplist">
          <li className="listitem">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="listitem">
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li className="listitem">
            <Link to="/gallery" className="link">
              Gallery
            </Link>
          </li>
          <li className="listitem">
            <Link to="/write" className="link">
              Write
            </Link>
          </li>
          <li className="listitem" onClick={handlelogout}>
            {user && "Logout"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img
              className="topimage"
              src={PF + user.profilePic}
              alt="profile"
            />{" "}
          </Link>
        ) : (
          <>
            <ul className="toplist">
              <li className="listitem">
                <Link className="link" to="/login">
                  Login
                </Link>
              </li>
              <li className="listitem">
                <Link className="link" to="/register">
                  Register
                </Link>
              </li>
            </ul>
          </>
        )}
        <i className="humburger" onClick={() => setTogglenav(!togglenav)}>
          <HiMenu className="menu" />
        </i>
      </div></div>
      {togglenav  && <div className="mobile">
      <ul className="mobile_toplist" onClick={()=> setTogglenav(!togglenav)}>
        <li className="list">
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li className="list">
          <Link to="/about" className="link">
            About
          </Link>
        </li>
        <li className="list">
          <Link to="/gallery" className="link">
            Gallery
          </Link>
        </li>
        <li className="list">
          <Link to="/write" className="link">
            Write
          </Link>
        </li>
        <li className="list" onClick={handlelogout}>
          {user && "Logout"}
        </li>
        { !user &&  (
          <>
              <li className="list bold">
                <Link className="link" to="/login">
                  Login
                </Link>
              </li>
              <li className="list bold">
                <Link className="link" to="/register">
                  Register
                </Link>
              </li>
            
            </>)}
        </ul>
      </div>}
    </div>
  );
}
