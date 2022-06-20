import "./footer.css";

export default function Footer() {
  return (
    <div style={{ backgroundColor: "#f2f5f7" ,width:"100%"}}>
      <div className="footer-container">
        <div className="footer-first">
          <h2 className="footer-head">A little more about us ..</h2>
          <p> Our idea is to bring your  blog,magic and uniqueness into the world.</p>
          <p style={{fontWeight:"700" , fontFamily:"satisfy"}}>Beyond The Blog ❤️ </p>
        </div>
        <div className="footer-second">
          <h2 className="footer-head">Inside Look</h2>
          <ul className="footer-list">
            <li>About</li>
            <li>Contact</li>
            <li>Write</li>
            
          </ul>
        </div>
        <div  className="footer-third">
          <h2 className="footer-head">
            Follow us on
          </h2>
          <p>
            
        <i className=" topicons fab fa-facebook"></i>
        <i className="topicons fab fa-instagram"></i>
        <i className="topicons fab fa-twitter"></i>
        <i className="topicons fab fa-pinterest"></i>
      
        </p>
        </div>
      </div>

      <div className="copyright">
        <p>Copyright © 2022 Beyond The Blog</p>
      </div>
    </div>
  );
}
