import React, { useState, useEffect } from "react";
import SingleIngredient from "./SingleIngredient";

const ModalBody = ({ ...props }) => {
  const [price, setPrice] = useState(
    parseFloat(props.price.slice(0, props.price.indexOf("$")))
  );
  const [count, setCount] = useState(1);
  const [disableButton, setDisableButton] = useState(false);
  const [items, setItems] = useState({});
  const [desc, setDesc] = useState({});

  useEffect(() => {
    let items = Object.keys(props.ingredients);
    items.forEach((a) => {
      desc[a] = props.ingredients[a].count;
    });
    console.log(desc);
  }, [price]);
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
  const getItems = (item) => {
    let items = Object.keys(props.ingredients);

    let filtered = items
      .map((a) => {
        if (a === item) {
          return props.ingredients[a];
        }
      })
      .filter((b) => {
        return b !== undefined;
      });
    return filtered;
  };
  const handleIncrement = (e) => {
    let filtered = getItems(e.currentTarget.value);

    if (parseInt(e.currentTarget.nextSibling.innerText) < 5) {
      e.currentTarget.nextSibling.innerText++;
      filtered[0].count = parseInt(filtered[0].count) + 1;
    }
    let priceInc = parseFloat(
      filtered[0].price.slice(0, filtered[0].price.indexOf("$"))
    );
    let endPrice = (price + priceInc).toFixed(1);
    setPrice(parseFloat(endPrice));
  };

  const handleDecrement = (e) => {
    let filtered = getItems(e.currentTarget.value);
    if (e.currentTarget.previousSibling.innerText >= 1) {
      e.currentTarget.previousSibling.innerText--;
    }
    let priceDec = parseFloat(
      filtered[0].price.slice(0, filtered[0].price.indexOf("$"))
    );
    let endPrice = (price - priceDec).toFixed(1);
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
          wholeItem={props.ingredients}
          price={props.ingredients[a].price}
          count={count}
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
              description: desc,
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
