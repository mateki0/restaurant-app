import React, { useState, useEffect } from "react";

const SingleIngredient = ({ ...props }) => {
  return (
    <div className="single-ingredient">
      <div>
        <span hidden>{props.item}</span>
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
