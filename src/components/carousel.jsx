import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./carousel.css";

const Carousel = ({ dataset }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    
  };

  return (
    <>
      <Slider {...settings}>
        {dataset.map((item, index) => (
          <div className="card" key={index}>
            {/* <img src={item.pic} alt="img" /> */}
            <h2>{item.name}</h2>
            <p>{item.testi}</p>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Carousel;
