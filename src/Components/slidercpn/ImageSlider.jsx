import React from 'react';
import Slider from 'react-slick';
import './slider.scss'
import slider1 from '../../Assets/Images/slider1.jpg'
import slider2 from '../../Assets/Images/slider2.jpg'
import slider3 from '../../Assets/Images/slider3.jpg'

export default function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };
  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <img src={slider1} alt="slider1"/>
        </div>
        <div>
          <img src={slider2} alt="slider2"/>
        </div>
        <div>
          <img src={slider3} alt="slider3"/>
        </div>
      </Slider>
    </div>
  );
}
