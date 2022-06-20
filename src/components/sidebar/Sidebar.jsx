import "./sidebar.css";
// import axios from "axios";
import { Slider } from '@lifarl/react-scroll-snap-slider';
import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
import food from "../../Images/icons8-salad.gif"
import dance from "../../Images/icons8-party.gif"
import travel from "../../Images/icons8-airplane-take-off.gif"
import music from "../../Images/icons8-music.gif"
import Education from "../../Images/icons8-potted-plant.gif"

export default function Sidebar() {
  // const [cat, setCats] = useState([]);

  // useEffect(() => {
  //   const getCats = async () => {
  //     const res = await axios.get("/categories");
  //     setCats(res.data);
  //   };
  //   getCats();
  // }, []);

  const slidesPerPageSettings = {
    mobileSmall: 1.5,
    mobileBig: 2,
    tablet: 3,
    desktop: 4,
  }
  return (
    <div className="sidebaritem">
      <span className="sidebartitle"> Scroll to see all categories  </span>
      <div className="bg"></div>

      <Slider slidesPerPageSettings={slidesPerPageSettings}>
      <div className="sliderdiv"><img className="sliderimg" src={dance} alt="dance" /><p><Link to={`/?cat=Dance`} className="link">Dance</Link></p></div>
      <div className="sliderdiv"><img className="sliderimg" src={music} alt="music"  /><p><Link to={`/?cat=Music`} className="link">Music</Link></p></div>
      <div className="sliderdiv"><img className="sliderimg" src={travel} alt="travel" /><p><Link to={`/?cat=Travel`} className="link">Travel</Link></p></div>
      <div className="sliderdiv"><img className="sliderimg" src={food} alt="food" /><p><Link to={`/?cat=Food`} className="link">Food</Link></p></div>
      <div className="sliderdiv"><img  className="sliderimg" src={dance} alt="yoga" /><p><Link to={`/?cat=Yoga`} className="link">Yoga</Link></p></div>
      <div className="sliderdiv"><img  className="sliderimg" src={Education} alt="Education" /><p><Link to={`/?cat=Education`} className="link">Education</Link></p></div>
      
    </Slider>
    
    </div>
  );
}
