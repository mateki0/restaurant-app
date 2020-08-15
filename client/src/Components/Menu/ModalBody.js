import React, { useState, useEffect } from "react";
import SingleIngredient from "./SingleIngredient";

const ModalBody = ({ ...props }) => {
  const [price, setPrice] = useState(
    parseFloat(props.price.slice(0, props.price.indexOf("$")))
  );
  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    let counts = [...document.querySelectorAll(".item-count")];

    let countsNum = counts
      .slice(counts.length - Object.keys(props.ingredients).length)
      .map((a) => {
        return a.innerText;
      });
    let sum = countsNum.reduce((a, b) => {
      return parseInt(a) + parseInt(b);
    });

    if (sum === 0) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  }, [price]);
  const handleIncrement = (e) => {
    e.currentTarget.nextSibling.innerText++;
    let priceInc = parseFloat(
      e.currentTarget.previousSibling.innerText.slice(
        0,
        e.currentTarget.previousSibling.innerText.indexOf("$")
      )
    );

    let endPrice = (price + parseFloat(priceInc)).toFixed(1);

    setPrice(parseFloat(endPrice));
  };

  const handleDecrement = (e) => {
    if (e.currentTarget.previousSibling.innerText >= 1) {
      e.currentTarget.previousSibling.innerText--;
    }

    let priceDec = parseFloat(
      e.currentTarget.nextSibling.innerText.slice(
        0,
        e.currentTarget.previousSibling.innerText.indexOf("$")
      )
    );
    let endPrice = (price - parseFloat(priceDec)).toFixed(1);
    setPrice(parseFloat(endPrice));
  };
  return (
    <div className="modal-body">
      <span className="meal-modal-name">{props.name}</span>
      <span className="choose-ingredients">Choose ingredients:</span>

      {Object.keys(props.ingredients).map((a, b) => (
        <SingleIngredient
          key={b}
          item={a}
          price={props.ingredients[a].price}
          count={props.ingredients[a].count}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      ))}
      <div className="modal-price-div">
        <span className="modal-price">{price}$</span>
      </div>
      <div className="submit-div">
        <button
          className="add-button"
          type="button"
          disabled={disableButton ? true : false}
          onClick={() => {
            props.handleLocalAdding({
              itemName: props.name,
              description: props.description,
              price: props.price,
              count: 1,
            });
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ModalBody;
