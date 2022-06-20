import "./single.css";
import Singlepost from "../../components/singlepost/Singlepost";
import Footer from "../../components/Footer/footer";
export default function Single() {
  return <div className="single" style={{ backgroundColor: "#95cde2" }}>
  
  <Singlepost/>
    <Footer/>
  </div>;
}
