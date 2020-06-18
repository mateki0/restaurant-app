import React from "react";
export const SingleItem = (props) => (
  <div className="single-cart-item">
    <div>
      <span>{props.item.item}</span>
    </div>
    <div className="price-count-container">
      <div className="count-div">
        <button
          value={props.item.item}
          onClick={(e) =>
            props.incrementItem({
              value: e.currentTarget.value,
              action: "increment",
            })
          }
        >
          +
        </button>
        <span>{props.item.count}</span>
        <button
          value={props.item.item}
          onClick={(e) =>
            props.incrementItem({
              value: e.currentTarget.value,
              action: "decrement",
            })
          }
        >
          -
        </button>
      </div>
      <div className="price-div">
        <span className="price-span">
          {props.item.price.slice(0, props.item.price.length - 1) *
            props.item.count}
          $
        </span>
      </div>
      <div>
        <button
          value={props.item.item}
          type="button"
          onClick={(e) =>
            props.incrementItem({
              value: e.currentTarget.value,
              action: "delete",
            })
          }
        >
          Remove
        </button>
      </div>
    </div>
  </div>
);
