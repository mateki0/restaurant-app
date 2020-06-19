import React, { useEffect, useRef } from "react";
import axios from "axios";
import SingleItem from "./SingleItem";

const ItemList = ({
  localCart,
  userCart,
  handleChange,
  price,
  isLogged,
  updateCart,
}) => {
  const didMount = useRef(true);
  const submitChanges = () => {
    axios
      .post("/update", {
        data: userCart,
      })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.error(err.message);
      });
  };
  const submitLocalChanges = () => {
    let items = localCart;
    window.localStorage.setItem("cart", JSON.stringify({ items }));
  };
  useEffect(() => {
    return () => {
      if (isLogged !== true && localCart.length) {
        submitLocalChanges();
      }
    };
  }, [localCart]);
  useEffect(() => {
    return () => {
      if (userCart.length) {
        submitChanges();
      }
    };
  }, [userCart]);

  return (
    <div className="items-container">
      {isLogged && userCart !== []
        ? userCart.map((item) => (
            <SingleItem
              key={item.item}
              incrementItem={updateCart}
              item={item}
            ></SingleItem>
          ))
        : localCart.map((item) => (
            <SingleItem
              key={item.item}
              incrementItem={handleChange}
              item={item}
            ></SingleItem>
          ))}
      <div className="price">
        <span>Total: {price}$</span>
      </div>
    </div>
  );
};
export default ItemList;
