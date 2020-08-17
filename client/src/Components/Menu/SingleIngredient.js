import React from "react";

const SingleIngredient = ({ ...props }) => {
  return (
    <div className="single-ingredient">
      <div>
        <button
          className="ingredient-button"
          onClick={(e) => props.handleIncrement(e)}
          value={props.item}
        >
          +
        </button>
        <span className="item-count">{props.count}</span>
        <button
          className="ingredient-button"
          onClick={(e) => props.handleDecrement(e)}
          value={props.item}
        >
          -
        </button>
      </div>
      <div>
        <span className="item-name">{props.item}</span>
      </div>
    </div>
  );
};

export default SingleIngredient;
