import React from "react";
const SingleItem = (props) => {
  return (
    <div className="single-cart-item">
      <div className="item-with-desc">
        <span className="item-name">{props.item.item}</span>
        {Object.keys(props.item.description).map((a, b) => (
          <span className="item-desc" key={b}>
            {a}: {props.item.description[a]}
          </span>
        ))}
      </div>
      <div className="price-count-container">
        <div className="count-div">
          <button
            data-testid="single-item-button"
            value={props.item.id}
            onClick={(e) =>
              props.incrementItem({
                value: e.currentTarget.value,
                action: "increment",
              })
            }
          >
            +
          </button>
          <span data-testid="single-item-count">{props.item.count}</span>
          <button
            value={props.item.id}
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
        <div className="price-cart-div">
          <span className="price-span">
            {(props.item.price * props.item.count).toFixed(1)}$
          </span>
        </div>
        <div className="remove-div">
          <button
            value={props.item.id}
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
};
export default SingleItem;
