import React from "react";
import Slider from "react-animated-slider";
import burger from "./burger.jpg";
import pasta from "./pasta.jpg";
import drink from "./drink.jpg";
const MarketingSlider = () => {
  const slides = [
    {
      src: burger,
      h2: "Very delicious Burger",
      span:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam tempor est vitae sapien posuere maximus.",
    },
    {
      src: pasta,
      h2: "Very delicious Pasta",
      span:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam tempor est vitae sapien posuere maximus.",
    },
    {
      src: drink,
      h2: "Try Yourself",
      span:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam tempor est vitae sapien posuere maximus.",
    },
  ];

  return (
    <div className="marketing-container">
      <Slider>
        {slides.map((slide, index) => (
          <div key={index} className="marketing-slider">
            <img
              className="marketing-slider-img"
              src={slide.src}
              alt={slide.h2}
            />
            <div className="marketing-description">
              <div className="marketing-slide-name-div">
                <span className="marketing-slide-name">{slide.h2}</span>
              </div>
              <div className="marketing-slide-description-div">
                <span className="marketing-slide-description">
                  {slide.span}
                </span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default MarketingSlider;
