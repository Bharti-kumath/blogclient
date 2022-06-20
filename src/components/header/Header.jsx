import "./Header.css";
import headerimg from "../../Images/headergif.gif"

export default function Header() {
  return (
    
  <div className="header">
      <div className="headerTitle">
          <span className="headertitle1"> Beyond the</span><br></br>
          <span className="headertitle2">Blog</span>
          <p className="headerpara">Our idea is to bring your blog,magic and uniqueness into the world.
</p>
<button className="button">Write Now!</button>
      </div>
      <div className="headerimg">
<img className="himg" src={headerimg} alt=""></img>
  </div>
  </div>

  );
}
