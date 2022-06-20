import { useState } from "react";
import "./comment.css";



export default function Comment() {
const  [val,Setval] = useState()
  return (
  <div className="comment" >
  <h3>Post a comment</h3>
  
  <textarea placeholder="Write your comment here..." className="commentbox" value={val}></textarea>
  <div>
      <input typeof="text"   value={val} placeholder="Your name"></input>
      <input typeof="email" value={val}  placeholder="Email"></input>
      
  </div>
  <button typeof="submit" className="submit"  onClick={()=>Setval("")}>Post Comment</button>
  
  </div>);
}
