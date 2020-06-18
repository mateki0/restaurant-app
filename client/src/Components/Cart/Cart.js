import React, { useState, useEffect, useRef } from "react";
import "./cart.css";
import axios from "axios";
import { SingleItem } from "./SingleItem";
import Title from "../Title";

const ItemList = ({
  localCart,
  userCart,
  handleChange,
  price,
  isLogged,
  updateCart,
}) => {
  const isMounted = useRef(true);
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
              increment={updateCart}
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

export default function Cart({
  user,
  localCart,
  userCart,
  handleChange,
  price,
  isLogged,
  updateCart,
}) {
  return (
    <main>
      <Title value="Your Cart:" />
      <ItemList
        user={user}
        localCart={localCart}
        userCart={userCart}
        handleChange={handleChange}
        price={price}
        isLogged={isLogged}
        updateCart={updateCart}
      />
    </main>
  );
}
