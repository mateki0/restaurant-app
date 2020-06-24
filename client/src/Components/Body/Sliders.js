import React from "react";
import "react-animated-slider/build/horizontal.css";

import "./body.css";
import pasta from "./pasta.jpg";
import chicken from "./chicken.jpg";
import salad from "./salad.jpg";
import pancakes from "./pancakes.jpg";
import eggs from "./eggs.jpg";
import SingleSlider from "./SingleSlider";

const Sliders = () => {
  const carousel = [
    {
      src0: salad,
      name0: "Salads",
      src1: pancakes,
      name1: "Pancakes",
      src2: eggs,
      name2: "Eggs",
    },
    {
      src0: pasta,
      name0: "Pasta",
      src1: chicken,
      name1: "Chicken",
      src2: salad,
      name2: "Salads",
    },
    {
      src0: salad,
      name0: "Salads",
      src1: pancakes,
      name1: "Eggs",
      src2: eggs,
      name2: "Eggs",
    },
  ];
  return (
    <div data-testid="sliders-div" className="breakfast-container">
      <SingleSlider carousel={carousel} />
      <SingleSlider carousel={carousel} />
      <SingleSlider carousel={carousel} />
    </div>
  );
};
export default Sliders;
