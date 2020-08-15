import React from "react";

const SingleIngredient = ({ ...props }) => {
  return (
    <div className="single-ingredient">
      <div>
        <span hidden>{props.price}</span>
        <button
          className="ingredient-button"
          onClick={(e) => props.handleIncrement(e)}
        >
          +
        </button>
        <span className="item-count">{props.count}</span>
        <button
          className="ingredient-button"
          onClick={(e) => props.handleDecrement(e)}
        >
          -
        </button>
        <span hidden>{props.price}</span>
      </div>
      <div>
        <span className="item-name">{props.item}</span>
      </div>
    </div>
  );
};

export default SingleIngredient;
