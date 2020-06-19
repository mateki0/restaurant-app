import React from "react";

const SingleMealItem = (props) => (
  <div className="meals-list">
    {props.data.map((a) => (
      <div key={a.name} className="single-item">
        <div className="meal-description-div">
          <h4 className="meal-description">{a.name}</h4>
          <span>{a.description}</span>
        </div>
        <div>
          <h4 className="meal-price-h4">{a.price}</h4>
          <button
            className="add-button"
            type="button"
            onClick={(e) => {
              props.handleLocalAdding({
                item: e.currentTarget.value,
                price: e.currentTarget.previousSibling.innerText,
                count: 1,
              });
            }}
            value={a.name}
          >
            Add to cart
          </button>
        </div>
      </div>
    ))}
  </div>
);
export default SingleMealItem;
