import React, { useState } from "react";
import Slider from "react-slick";
import "./popular.css"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


import PPost from "../Ppost/pposts";

export default function Carousel({posts}) {
  // const PF = "http://localhost:5000/images/";
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

    const settings = {
      infinite: true,
      lazyLoad: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      centerPadding: 0,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      beforeChange: (current, next) => setImageIndex(next),
      cssEase: "linear"

    };
    return (
      <div className="App">
        
        <Slider {...settings}>
        {posts.map ((p ,idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
          <PPost post={p}/>
          </div>

  ))}
         </Slider>
      </div>
    );
  }
