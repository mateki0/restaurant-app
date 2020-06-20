import React, { useEffect, useCallback, useRef } from "react";
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
  const isMounted = useRef(true);
  const submitLocalChanges = useCallback(() => {
    let items = localCart;
    window.localStorage.setItem("cart", JSON.stringify({ items }));
  }, [localCart]);
  useEffect(() => {
    return () => {
      if (isLogged !== true && localCart.length) {
        console.log("localCart ", localCart);
        submitLocalChanges();
      }
    };
  }, [localCart, isLogged, submitLocalChanges]);
  const submitChanges = useCallback(() => {
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
  }, [userCart]);
  useEffect(() => {
    return () => {
      if (userCart.length) {
        submitChanges();
      }
    };
  }, [userCart, isLogged, submitChanges]);

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
