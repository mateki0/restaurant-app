import React, { useState } from "react";
import { Animated } from "react-animated-css";
import SingleMealItem from "./SingleMealItem";
const Drinks = ({ data, handleLocalAdding }) => {
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);

  function hideMe() {
    if (visible) {
      setFading(true);
      setTimeout(() => setVisible(false), 650);
    } else {
      setFading(false);
      setTimeout(() => setVisible(true), 250);
    }
  }

  return (
    <div className="menu-container drinks">
      <div className="meals-expand" onClick={hideMe}>
        <h2>Drinks</h2>
      </div>
      <Animated
        animationIn="fadeIn"
        animationOut="fadeOut"
        isVisible={!fading}
        style={visible ? { display: "grid" } : { display: "none" }}
      >
        <SingleMealItem
          data={data}
          handleLocalAdding={handleLocalAdding}
        ></SingleMealItem>
      </Animated>
    </div>
  );
};
export default Drinks;
