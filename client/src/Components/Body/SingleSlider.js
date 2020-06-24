import React from "react";
import Slider from "react-animated-slider";
const SingleSlider = ({ carousel }) => (
  <div className="lunch-container">
    <div className="breakfast-title">
      <h2>MEALS</h2>
    </div>
    <Slider autoplay="2000">
      {carousel.map((slide, index) => (
        <div key={index} className="breakfast-slider">
          <div className="sliders">
            <img data-testid="slider-img" src={slide.src0} alt="salad" />
            <span>{slide.name0}</span>
            <a href="/menu" className="see-menu-a">
              See our menu
            </a>
          </div>

          <div className="sliders">
            <img src={slide.src1} alt="meal" />
            <span>{slide.name1}</span>
            <a href="/menu" className="see-menu-a">
              See our menu
            </a>
          </div>

          <div className="sliders">
            <img src={slide.src2} alt="drink" />
            <span>{slide.name2}</span>
            <a href="/menu" className="see-menu-a">
              See our menu
            </a>
          </div>
        </div>
      ))}
    </Slider>
  </div>
);
export default SingleSlider;
