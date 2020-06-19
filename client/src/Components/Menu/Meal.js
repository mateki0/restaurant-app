import React, { useState } from "react";
import { Animated } from "react-animated-css";
import SingleMealItem from "./SingleMealItem";
const Meal = ({ data, handleLocalAdding }) => {
  const [fading, setFading] = useState(false);
  const [visible, setVisible] = useState(true);

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
    <div>
      <div className="menu-container menu-meals">
        <div className="meals-expand" onClick={hideMe}>
          <h2>Meals</h2>
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
    </div>
  );
};
export default Meal;
